
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
                    In 2000, I started out at bCentral as a Designer. I was to support the existing website by providing assets to the writers and marketing folks.
                </p><p>
                When hired, I didn't have much knowledge about creating HTML or CSS. I had zero knowledge of Javascript or ASP. I wasn't hired to do that, so I focused on Design.
                </p><p>
                After a few weeks of ramping up, I noticed that all of the developers on our team were hardcore backend devs. They hated doing HTML and CSS, so I jumped in to help out. I began designing my UI and then building it using HTML and CSS. That went over so well with the developers that they started tossing ASP and Javascript at me.
                I soon started building my components and adding them to the content management system.
                </p><p>
                I think the .NET framework came out around this time so I began learning that as well. I took a few courses on campus. I can almost guarantee that I was probably the only designer in those classes. Talk about feeling a bit out of place.  I just kept my mouth shut and listened.
                </p><p>
                Through my stay at bCentral, I transferred between design and development several times. Toward the end, I was responsible for designing the online business applications.
                </p><p>
                Looking back, learning to design and develop, within the boundaries of a content management system, was probably one of the best ways I could have learned. Everything I learned fundamentally impacts the designs and coding I do today.  It taught me the importance of componentization. Both from a design perspective as well as a development perspective.
                </p>
        </div>
      </div>
    );
  }
}
