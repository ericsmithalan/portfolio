
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
                    Aviation Boatswain's Mates play a major part in launching and recovering naval aircraft quickly and safely from land or ships. This includes aircraft fueling and fuel systems.

                    Most of the work in this rating is performed outdoors on the deck of aircraft carriers, in all climatic conditions, in fast-paced and often potentially hazardous environments. ABs work closely with others in aviation ratings.
                    </p>
          <p>
                        The duties performed by ABFs include:
                    </p>
          <ul className={styles.list}>
            <li>
                            Operating, maintaining and performing organizational maintenance on aviation fueling and lubricating oil systems on CVs, CVNs, LPHS and LPDS;
                        </li>
            <li>
                            Observing and enforcing handling safety precautions and maintaining fuel quality surveillance and control in aviation fuel systems;
                        </li>
            <li>
                            Supervising the operation and servicing of fuel farms and equipment associated with the fueling and defueling of aircraft ashore and afloat;
                        </li>
            <li>
                            Training, directing and supervising fire fighting crews, fire rescue teams, and damage control parties in assigned fuel and lubricating oil spaces.
                        </li>
          </ul>
        </div>
      </div>
    );
  }
}
