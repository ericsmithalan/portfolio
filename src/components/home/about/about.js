import React, {Component} from 'react';
import styles from './styles.less';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            Due to company layoffs, I am looking for a new job. My last day at
            AudienceSceience will be on March 31st, 2017. I'm looking to find work that will
            utilize both my UX Design and UI Development skills.
          </p>

          <div className={styles.spacer}/>
          <h3>Why am I showing you an incomplete portfolio?</h3>

          <p>
            I found out about the layoffs in the beginning of February, so I'm working hard
            to get this portfolio done as fast as possible. It's not in my best interest to
            wait until it is complete before showing it, so I have to show it as is. If something
            seems incomplete, it most likely is.
          </p>
          <p>
            I am constantly updating the site so please keep checking back.
          </p>
          <p>
            Thanks for your patience!
          </p>

          <br/><br/><br/><br/><br/>
        </div>

      </div>
    );
  }
}
