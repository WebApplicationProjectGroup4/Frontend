import React from 'react';
import styles from './Search.module.css';

import SearchResult from './Result';

export default function Search(props) {

  return (
    <div className={styles.locked}>
      <div className={ styles.presentationModeGrid }>
      {
        props.items.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
