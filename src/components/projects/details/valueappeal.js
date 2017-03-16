import React, {Component} from 'react';
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
            This was a web application that encouraged property owners to compare their
            property taxes against similar properties nearby. A proprietary algorithm would
            then determine if their property was overassessed and if they were paying too
            much on their property taxes. Users could then sign up for the service and get
            all the necessary paperwork to appeal their property taxes.
          </p>

          <h3>My Responsibilities</h3>

          <p>
            In 2011 I was hired at ValueAppeal to be a UI Developer and UX Designer. I
            started out by working on the existing website where I had to redesign a few
            pages. Other than the large amounts of text, the previous UX was not that bad.
          </p>

          <p>
            Everything ran on the .NET framework. That was an easy transition for me to
            make, given that I had just left Mircorost after 11 years. Much of my time spent
            at Microsoft was on the UI development side, so I was able to hit the ground
            running.
          </p>

          <p>
            Not long after being hired I was asked to think about an application that would
            allow tax professionals to find and manage property owners whose property was
            overassessed. If I remember correctly, I was given a spreadsheet with a few
            columns that outlined about five features. Within a few weeks, I had a working
            prototype of this new product up and running.
          </p>
          <div className={styles.wideImage}>
            <img src={require('images/valueappeal/application/details1.png')}/>
          </div>

          <p>
            I typically don't need a lot of information to get started on a project. I'm
            able to generate ideas and add value to a product without a lot of hand-holding.
            My mind is like an idea factory. The great thing about that is that I can take
            an idea, design it, and then build it all on my own. You can see several
            examples of this in the Tools, Moonlighting, and Fun Stuff sections of this
            website.
          </p>

          <p>
            After getting the live prototype working, we all collaborated further and ended
            up creating a pretty slick product. I think it's important to note that many of
            my initial ideas were expanded upon by other team members. They also added new
            ideas of their own and together we built and shipped the final product.
          </p>

          <p>
            Because I was able to prototype in a live environment, we were able to make
            changes and adjustments to the UI rapidly. The prototype code was cleaned up
            along the way, and by the end became shippable code. The final product launched
            in 2012.
          </p>

        </div>
      </div>
    );
  }
}
