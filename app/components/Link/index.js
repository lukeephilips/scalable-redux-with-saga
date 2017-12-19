/**
*
* Link
*
*/

import React from 'react';
import IconButton from './../IconButton';


import styles from './styles.css';

function Link({ link, upVote, email }) {
  const handleVote = (up) => {
    let inc = 1;
    if (!up) {
      inc = -1;
    }
    upVote(link.id, email, inc);
  }
  return (
    <div className={styles.link}>
      <div
        className={styles.votingContainer}
      >
        <div
          className={styles.votingCount}
        >
          {link.voteCount}
        </div>
        <div
          className={styles.voteArrows}
        >
          <IconButton
            handleClick={() => handleVote(true)}
            icon="arrow-up"
            buttonClass={''}
            iconClass={styles.upVote}
          />
          <IconButton
            handleClick={() => handleVote(false)}
            icon="arrow-down"
            buttonClass={''}
            iconClass={styles.downVote}
          />
        </div>
      </div>
      <div
        className={styles.detailsContainer}
      >
        <div>
          <p>{email}</p>
          <a
            href={link.url}
            className={styles.linkAnchor}
          >
            {link.url}
          </a>
        </div>
        <div
          className={styles.description}
        >
          {link.description}
        </div>
      </div>
    </div>
  );
}

Link.propTypes = {
  email: React.PropTypes.string,
  upVote: React.PropTypes.func.isRequired,
  link: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    voteCount: React.PropTypes.number.isRequired,
  }),
};
export default Link;
