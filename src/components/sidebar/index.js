import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const {
    user: { fullname, username, userId, following },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} following={following} />
    </div>
  );
}