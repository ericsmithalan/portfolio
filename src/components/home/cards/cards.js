import React, {Component} from 'react';
import styles from './styles.less';
import {ProjectsData} from '../../../data';
import Card from './card/card';

export default class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.cards}>
            {
              ProjectsData.sort((a, b) => b.start - a.start)
              .filter(card => card.type === 'work')
              .map((card, index) => <Card key={index} data={card}/>)
            }

            {
              ProjectsData.filter(card => card.type === 'other')
              .map((card, index) => <Card key={index} data={card}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}
