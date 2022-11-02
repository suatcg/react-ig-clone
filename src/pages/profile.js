import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/routes';

export default function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userExist, setUserExist] = useState(false);
  const history = useHistory();

  useEffect(() => {
    async function checkUserExist() {
      const user = await getUserByUsername(username);

      if (user.length > 0) {
        setUser(user[0]);
        setUserExist(true);
      } else {
        history.push(ROUTES.NOT_FOUND);
      }
    }

    checkUserExist();
  }, [username, history]);
  return userExist ? (
    <div className="bg-gray-backgroud">
      <div className="mx-auto max-w-screen-lg">{user.fullName}</div>
    </div>
  ) : null;
}
