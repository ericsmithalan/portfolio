
import React, { Component } from 'react';
import styles from './styles.less';

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <p>
                    I want to highlight again that I never got paid for any of these. I say this because I don't moonlight to make money. I moonlight to learn new things. Things that I couldn't otherwise learn at work. Below are a few examples of some projects I took on in the past. All but one has shipped. Of them, only one remains active.
                    </p>

        </div>
      </div>
    );
  }
}
