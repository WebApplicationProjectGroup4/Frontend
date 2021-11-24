Main.js - code that works with json but is not needed right now because we are implementing DB query restaurants to frontpage

import ShopList from './components/ShopList.js';
import data from './components/data.json';
import Menu from './components/RestaurantMenu.js';

Prototype () {

  //using uuidv4 to make id:s
  const localRestaurants = data.map(restaurant => {
    return { ...restaurant, id: uuidv4() }
  })

  <Route path="/:restaurantId" element={ <Menu restaurants=
  { localRestaurants } /> } /> 

  <Route path="/" element={ <ShopList restaurants =
  { localRestaurants }/> } />
}
