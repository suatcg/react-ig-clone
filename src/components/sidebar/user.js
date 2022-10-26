import { memo } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

const User = ({ username, fullname }) =>
  !username || !fullname ? (
    <Skeleton count={1} height={50} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        ></img>
        <div className="col-span-3">
          <p className="font-bold text-sm">{username}</p>
          <p className="text-sm w-40">{fullname}</p>
        </div>
      </div>
    </Link>
  );

export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullname: PropTypes.string,
};