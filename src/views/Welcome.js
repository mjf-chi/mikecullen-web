import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../styles/assets/makemikecullenfamous.png';
import nextArrow from '../styles/assets/arrow_next.png';

import styles from './Welcome.module.scss';

const Component = () => {
  return (
    <div className={styles.fullContainer}>
      <div className={styles.itemContainer}>
        <img
          alt="logo"
          className={styles.logo}
          src={logo}
        />
        <div className={styles.text}>
          <div>
          </div>
          <div>
            Welcome to&nbsp;
            <span className={[styles.highlight, styles.green].join(' ')}>
              MakeMikeCullenFamous.com!
            </span>
            &nbsp;We purchased this domain about a year ago after having a few drinks
            with our good friend&nbsp;
            <span className={[styles.highlight, styles.red].join(' ')}>
              Mike Cullen
            </span>
            , who is a&nbsp;
            <span className={[styles.highlight, styles.pink].join(' ')}>
              seriously funny guy
            </span>
            . &nbsp;And now as his birthday approaches, we&apos;d really appreciate if
            you&apos; watch a few of his&nbsp;
            <span className={[styles.highlight, styles.yellow].join(' ')}>
              hilarious videos
            </span>
            &nbsp;and tell us what you think!
          </div>
          <Link to="/gallery" className={[styles.text, styles.link].join(' ')}>
            Let&apos;s make Mike famous
            <img
              alt="next"
              src={nextArrow}
              className={styles.next}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

Component.displayName = 'Welcome';

export default Component;
