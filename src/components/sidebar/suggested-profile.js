import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SuggestedProfile({ userDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

  async function handleFolloweUser() {
    setFollowed(true);

    // firebase: create 2 services (functions)
    // update the followind array of the logged in user (in this case, my profile)
    // update the followers array of the user who has been followed
  }

  return !followed ? (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}.jpg`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>

      <button
        className="text-sm font-bold text-blue-medium"
        type="button"
        onClick={() => console.log('Follow the User')}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.proptypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
