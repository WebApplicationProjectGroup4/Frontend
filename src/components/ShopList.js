import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Result.module.css';

export default function ContactList(props) {
  return (
    <div className={styles.locked}>
      <div className={ styles.presentationModeGrid }>
      { props.restaurants.map(restaurants =>
        <Link to={ restaurants.id }>
            <div className={ styles.restaurant }>
                <div className={ styles.box}>
                <div className={styles.picture}><img src={`/pictures/${restaurants.image}`} /></div>
          <div className={styles.name}>{restaurants.name}</div>
          <div>{ restaurants.rating }*</div>
          </div>
          </div>
        </Link>
      )}
      </div>
      <div className="contactDetail">
      </div>
    </div>
  )
}