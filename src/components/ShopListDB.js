import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Result.module.css';

// create restaurant box with info from props
export default function restaurant(props) {
  
  return (
    <div className={ styles.locked }>
      <div className={ styles.title }>Restaurants</div>
      <div className={ styles.presentationModeGrid }>
      {/* maps the restaurants and creates all of the restaurants in the json */}
      { props.restaurants.map(restaurants =>
        <Link to={ restaurants.id } style={{ textDecoration: 'none' }}>
            <div className={ styles.restaurant }>
                <div className={ styles.box }>
                <div className={ styles.picture }><img id="img" src={restaurants.imgUrl} 
                  alt="Restaurant image not found!" width="175" height="200" /> </div>
          <div className={ styles.name }>{ restaurants.name }</div>
          <div>Open: { restaurants.operatingHours }</div>
          <div>{ restaurants.address }</div> 
          <div>{ restaurants.restaurantType }</div>
          <div>Price level: { restaurants.priceLevel }</div>
          </div>
          </div>
        </Link>
      )}
      </div>
    </div>
  )
}