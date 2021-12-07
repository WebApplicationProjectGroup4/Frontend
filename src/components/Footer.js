import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer>
           <div className={styles.footer}>
                <div className={styles.containerFooter}>
                <div className={styles.row}>
                        <div className={styles.footer1}>
                            <p>Company logo?</p>
                            <p>Download app store</p>
                        </div>
                        <div className={styles.footer2}>
                            <ul>
                                <li>Get Help</li>
                                <li>Sign up to deliver</li>
                            </ul>
                        </div>
                        <div className={styles.footer3}>
                            <ul>
                                <li>View all cities</li>
                                <li>View all countries</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.titleFooter}>©</div>
              </div>
        </div>
        </footer>
    )
  }
  
  export default Footer;