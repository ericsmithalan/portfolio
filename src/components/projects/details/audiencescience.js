import React, {Component} from 'react';
import styles from './styles.less';
import {Skills} from '../../';

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <p>
            You can think of AudienceScience as a single online application split into two
            primary services: segment management and campaign management. These services
            together can enable a marketer to create a campaign that targets a particular
            group of people.
          </p>
          <h3>UI Development</h3>
          <p>
            In 2012, I was assigned to be a UI Developer on the segment management
            application. Although developing was my first responsibility, I had been given
            the additional task of redesigning the user experience for the application.
          </p>
          <p>
            I worked with one other UI developer on this project. We decided that we would
            build a single page application using backbonejs. My primary responsibility was
            to create all the UI controls. That meant creating all the models and views
            needed that met the requirements for the UI. That also included me building all
            the HTML, CSS, and Javascript functionality for the UI controls.
          </p>
          <div className={styles.wideImage}>
            <img src={require('images/audiencescience/data/details1.png')}/>
          </div>
          <p>
            Since I was the designer, I didn't need any specs or requirements to begin
            working on the UI. About 70% of the UI had been designed while I was developing
            it. I think I had a total of three PhotoShop files related to the design of this
            app.
          </p>
          <p>
            I faced many challenges while building the segment manager application. I would
            say the most challenging one was having to learn new scripting libraries as we
            went along. I made a lot of mistakes, but I was able to learn from them and keep
            moving forward.
          </p>
          <p>
            In the end, the UI turned out to be pretty good. The application shipped in 2013
            and is still being used till this day.
          </p>
          <div className={styles.spacer}/>
          <h3>Prototyping</h3>
          <p>
            By the time Segment Manager finished, we had lost our other designer who was
            working on the Campaign Management application. I took on his work and began to
            think of ways to bring both applications together under a single user
            experience. Since this concept was challenging for many to grasp, I decided to
            use prototyping as a means of testing its validity.
          </p>
          <p>
            I have built a lot of prototypes using a variety of scripting languages and
            tools. Tools are useful for small scale prototypes, but for this one, I needed
            something that would support a large-scale prototype. I decided to use the MEAN
            stack.
          </p>
          <div className={styles.wideImage}>
            <img src={require('images/audiencescience/prototype/details1.png')}/>
          </div>
          <p>
            Before I could begin, I had some design work to do before. Once the design was
            far enough along, I began my MEAN stack app by using a boilerplate. From there I
            was off and running.
          </p>
          <p>
            The biggest challenge I had to overcome was getting data. Initially, I set up
            some scripts that would mimic the type of data needed. I also had to ensure the
            data was somewhat realistic so I created thresholds when randomizing individual
            data. Everything had to be random from the name all the way down to the number
            of clicks, so this took some time.
          </p>
          <p>
            Later on, I used some node modules that converted our CSV reports and JSON. That
            generated millions of rows of data--where I learned the importance of indexing
            pretty quickly.
          </p>
          <p>
            Once the data problem was solved, I was able to build UI rapidly. The prototype
            was very useful in helping the company decided to move forward with building a
            single application that managed both segments and campaigns.
          </p>
          <div className={styles.spacer}/>
          <h3>Design</h3>
          <p>
            I learned a lot during the prototyping phase. I got some good user feedback and
            was ready to fine tune the UI. I ended up scrapping most of the design that had
            been used in the prototype. The direction I got was to simplify the application
            more.
          </p>
          <div className={styles.wideImage}>
            <img src={require('images/audiencescience/helios/details1.png')}/>
          </div>
          <p>
            By this time, I already created the information architecture and had mapped out
            all the pages and actions required. A lot of time went into understanding and
            accounting for all the use cases and coming up with a taxonomy that would work.
          </p>
          <p>
            There are well over 100 inputs required for a campaign to be valid and
            completed. A campaign comprises of entities like budget groups, line items, and
            creatives. Users, who create campaigns, typically add several budget groups and
            line items. In doing so, the input count can go up into the hundreds. An average
            campaign contains about 3 budget groups, 12 line items, and 4 creatives.
          </p>
          <p>
            The challenge in simplifying the application all fell on reducing the number of
            inputs a user had to fill out. One thing that was very common was that many
            inputs in the budget groups and line items were the same. Usually, there would
            be only a few inputs that would make one entity different from the other.
            Obviously, one simple way of reducing the number of inputs is to allow
            duplications. Even so, that wasn't enough. We felt that that is a necessary
            feature but that we could figure out a better way and we did.
          </p>
          <p>
            A campaign belongs to a brand. A brand belongs to an advertiser, and an
            advertiser belongs to a client. Instead of making the user duplicating items, we
            discovered we could place many of the required inputs to the brand level.
            Essentially the brand became a template for the campaign. This reduced the
            number of inputs needed considerably. Now, information can be inherited by the
            brand all the way down to the creative. Users only need to change inputs that
            differentiate that entity from others.
          </p>
          <p>
            I chose to highlight this small part of the app because it was the most
            important change that benefited the user. Also, it has nothing to do with actual
            photoshop/illustrator design work. It is a good example of how design is much
            more than a beautiful picture.
          </p>
          <p>
            This application was one of the largest I had ever worked on. The next closest
            in size was OfficeLive. At one point, I had to bring in a couple of designers to
            help me get caught up. They were short term, but the help was much appreciated.
            As it sits today, I am the only designer working with 12 web developers. That
            ratio is a bit off balance, but I'm still managing to get by.
          </p>
        </div>
      </div>
    );
  }
}
