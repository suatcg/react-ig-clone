import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';
import { getPhotos, getUserByUserId } from '../services/firebase';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      // example: [2,1,5] <- 2 being raphael

      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];

      // does the user actually follow the people?
      if (following) {
        followedUserPhotos = await getPhotos(userId, following);
      }

      // re-arrange array to be neweset photos first by dateCreated
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }

    if (userId) {
      getTimelinePhotos();
    }
  }, [userId]);

  return { photos };
}
