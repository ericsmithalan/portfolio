import React, {Component} from 'react';
import styles from './styles.less';
import {MdFileDownload} from 'react-icons/md';

export default class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>

          <h3>Download Tools (Windows Only)</h3>
          <p>
            If you have a Windows machine, you can play around with the tools by pressing on
            the links below to downlaod.
          </p>

          <div className={styles.spacer}/>

          <div className={styles.downloadContainer}>
            <a className={styles.downloadLink} href={require('downloads/Ghost.zip')}>
              <MdFileDownload className={styles.icon}/>
              <div className={styles.text}>Download Ghost (Windows Only)</div>
              <div className={styles.background}></div>
            </a>
            <a className={styles.downloadLink} href={require('downloads/HVCC.zip')}>
              <MdFileDownload className={styles.icon}/>
              <div className={styles.text}>Download HVCC (Windows Only)</div>
              <div className={styles.background}></div>
            </a>
          </div>
          <div className={styles.spacer}/>
          <p>
            NOTE: These were made a very long time ago. It may end up prompting to install
            an older version of the .NET framework. I recently ran them using Windows 8 so
            they are still working on newer versions of Windows.
          </p>
        </div>
      </div>
    );
  }
}
