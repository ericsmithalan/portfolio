import React, { Component } from 'react';
import styles from './styles.less';

export default class Legend extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.keys}>
          <div className={styles.key}>
            <div className={styles.boxExpert} />
            <div className={styles.text}>
                            above avg
                        </div>
          </div>
          <div className={styles.key}>
            <div className={styles.boxAverage} />
            <div className={styles.text}>
                           average
                        </div>
          </div>
          <div className={styles.key}>
            <div className={styles.boxBeginner} />
            <div className={styles.text}>
                            beginner
                        </div>
          </div>
        </div>
        <div className={styles.notes}>
                    NOTE: Some skills were used many years ago. My assesments reflext what I think my abilities would be to jump into them now
                </div>
      </div>
    );
  }
}
