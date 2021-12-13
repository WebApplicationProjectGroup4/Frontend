import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer() {
    return (
        <footer>
           <div className={styles.footer}>
                <div className={styles.containerFooter}>
                <div className={styles.row}>
                        <div className={styles.footer1}>
                            <p></p>
                        </div>
                        <div className={styles.footer2}>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                        <div className={styles.footer3}>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.titleFooter}>© Advanced Web Applications project group 4</div>
              </div>
        </div>
        </footer>
    )
  }
  
  export default Footer;