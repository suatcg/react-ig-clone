import { useEffect, useState } from 'react';

import { getSuggestedProfiles } from '../services/firebase';

export default function useSuggestedProfiles(userId, following) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setUsers(response);
    }
    if (userId) {
      getProfiles();
    }
  }, [userId, following]);

  return users;
}
