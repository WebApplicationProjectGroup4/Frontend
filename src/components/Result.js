import React from 'react';
import styles from './Result.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.restaurant }>
        <div className={ styles.box }>
          <div className={styles.picture}><img src={`/pictures/${props.image}`} /></div>
          <div className={styles.name}>{ props.name }</div>
          <div>{ props.rating }*</div>
        </div>
    </div>
  )
}
