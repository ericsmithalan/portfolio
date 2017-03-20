import React from 'react';
import styles from './styles.less';
import {Link} from 'react-router';

const ProjectDetails = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <p>
          I started at HealthVault as a UI Developer in 2008. I was the first UI Developer
          hired and was also one of the first 20 members to join the HealthVault
          organization. My primary responsibility was to build all the UI for the new
          HealthVault application.
        </p>
        <p>
          HealthVault is the place where I started using my development and design skills
          to build prototypes. Within the first year, I was building elaborate prototypes
          that were used in focus groups and usability studies. During this time, I was
          also developing the first version of the application. We had hired on a couple
          more web developers, so that freed me up to do more prototyping work since this
          was proving to be valuable at the time. Eventually, my role changed to become
          more of a design role.
        </p>
        <p>
          In 2009, I became the primary designer for HealthVault Connection Center. A
          desktop app used to connect devices with their HealthVault Account. It was at
          this time I got sick of giving developers redlines and specs that showed them
          how the application should look and work. While I was designing, I began
          building an application called Ghost. A WPF application that had the sole
          purpose of eliminating red-lines from my workflow. I called it Ghost because the
          main feature was to superimpose an image on top of the developed UI. You can
          learn more about
          <Link to='/projects/tools'>Ghost</Link>
          in the tools section of my website.
        </p>
        <p>
          I began to take prototyping to a whole new level. I found WPF to be a very
          efficient way to prototype desktop apps, so I began building a version of the
          <Link to='/projects/tools'>Connection Center</Link>
          application in WPF. It looked so real that it fooled developers who were working
          on the product. They thought I had built the real product. These realistic
          prototypes began finding their way into usability studies. Potential users were
          now able to get a "real" feel for how the application worked.
        </p>
        <p>
          Of all the things I could talk about with HealthVault, I bring up the
          prototyping because, in hindsight, I can see the value in having realistic
          prototypes. They were unheard of at this time. Designers were taught to use
          images or wireframe flows that showed a UI flow. I was showing a new way of
          doing this, but it didn't come without criticism or skepticism.
        </p>
        <p>
          At the end of my time at HealthVault, I switched back to development. That was a
          challenge because, by this period, there were hundreds of people in the
          organization. Most of them only knew me as a designer. Even though I had built
          some pretty amazing prototypes, I was still not seen as someone who could also
          develop. My opportunity came when the primary UI developer decided to leave. The
          other developers, I started with, moved up to do backend work. It was at this
          time I asked the Development Manager to give me a quick shot at updating the
          website. He allowed it, and I was not only able to prove myself, but I was also
          a lot faster than the other developer because of my design skills. I didn't
          require a ton of specs on how something should work or behave. Designers could
          give me an image and just tell me what they wanted rather than writing it down.
          They also loved it because they didn't need to give me redlines. I was using
          Ghost!
        </p>
        <p>
          Although I wouldn't realize it for years to come, it was at this time that I
          bridged the gap between design and development. I was faster than hardcore
          Javascript, HTML, &amp; CSS developers because I didn't have any of the issues
          present in a structure where developers and designers are on different teams.
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;