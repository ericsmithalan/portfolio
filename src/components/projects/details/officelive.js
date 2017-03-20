import React from 'react';
import styles from './styles.less';

const ProjectDetails = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <p>
          I don't know who came up with the idea, but someone at bCentral thought it would
          be interesting to turn SharePoint into a web hosting platform. I believe it was
          our GPM who thought of it and assigned me and another dev to work on a proof of
          concept.
        </p>
        <p>
          At the time, I was a designer, so my role was to design the user experience.
          Very quickly it became evident that I needed to more than just design to get
          this to work. Since there was only two of us, I had to gather all the user
          requirements myself. As If that weren't enough, I had to learn SharePoint inside
          and out.
        </p>
        <p>
          Luck would have it that I had just started to grasp ASP, Javascript, HTML and
          CSS. Instead of reading a book about SharePoint, I opened up the source code. At
          that moment I had inadvertently added UI Developer to my list roles.
        </p>
        <p>
          Within a few months, we were able to develop a proof of concept. We showed this
          to some higher-ups and got the approval to continue working on it. We must have
          gotten some budget as well. The team of two just became an official team of six.
          To kick this off, the six of us moved out of the main campus in Redmond to an
          office in downtown Seattle.
        </p>
        <p>
          We brought on a program manager that helped relieve the load from me to gather
          requirements. By this time, we had already had it working, and we were working
          on the tool that would allow a user to customize their website.
        </p>
        <p>
          The website tool was fascinating to me. We had an opportunity to try some cool
          things out. First of all, we did not want the website to look anything like a
          SharePoint site. This was a challenge because how could I give users a bunch of
          theme options when I was the only designer. That was too much work, but I had an
          idea. Photoshop provided an API that allowed me to write C# scripts that could
          create templates for me. I took the template idea a step further and decided to
          try creating UI components that could be modified by the scripted API. Once it
          knew it could work, we hired a contractor to come up with about ten different UI
          templates in photoshop. Within each template were several UI components. Things
          like buttons, images, backgrounds, gradients and so on.
        </p>
        <p>
          Next, I needed to come up with some color palettes. I think I created around 50
          with each palette containing about four colors. The pallets were the key to what
          would guide the script through the template generating process. It created the
          loop needed to produce all the components in several different colors. Once the
          script was complete, it created many thousands of possible theme variations. I
          think it took the script about 30 hours to run and complete. It was a hog, but
          it worked!
        </p>
        <p>
          I chose to write about the PhotoShop script because it highlights my ability to
          think outside the box in order to solve a problem. I can't imagine how many
          designers it would have taken to prepare all the images by hand. Not too
          mention, how much it would have cost the company.
        </p>
        <p>
          In the end, we became OfficeLive when the GM responsible for starting
          OfficeLive, found out about us and added us to his team. At the time, it was
          just him and another program manager. With the addition of us, OfficeLive
          started out with only eight people. It then grew into a significantly large
          division.
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;