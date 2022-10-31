import PropTypes from 'prop-types';

export default function Post({ content }) {
  // components
  // -> header, image, actions (like & comments icons), footer, comments
  return <p>I am a post</p>;
}

Post.prototype = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
