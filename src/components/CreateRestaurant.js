import axios from 'axios';
import React, { useState } from 'react';
import styles from '../styles/CreateRestaurant.module.css';

function CreateRestaurant() {

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

  const UserInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    // Sets the value of what was written
    const handleChange = e => {
      setValue(e.target.value);
    }

    return {
      //returns the value
      value,
      onChange: handleChange,
    }
  }

  const RestaurantName = UserInput('');
  const OperatingHours = UserInput('');
  const Address = UserInput('');
  const PriceLevel = UserInput('');
  const RestaurantType = UserInput('');
  const Foods = UserInput('');
  const FoodsPrices = UserInput('');

  
  function post(){
    
    // Post to backend restaurant that gets values from fields
    if (RestaurantName.value, PriceLevel.value, RestaurantType.value, Address.value, OperatingHours.value, Foods.value, FoodsPrices.value !== ''){
    axios.post('https://awagroup4project.herokuapp.com/restaurants', {
      name: RestaurantName.value,
      priceLevel: PriceLevel.value,
      restaurantType: RestaurantType.value,
      address: Address.value,
      operatingHours: OperatingHours.value,
      foods: Foods.value,
      foodsPrices: FoodsPrices.value,
    })
    .then(function (response) {
      console.log(response.data);
      alert("Created a new restaurant, refresh page to view it");
    })
    .catch(function (error) {
      console.log("An error has occurred while trying to post a restaurant.", error.response.data);
    });
    

    const formData = new FormData();
    formData.append('img', selectedFile);
    formData.append('text', RestaurantName.value);

    axios.post('https://awagroup4project.herokuapp.com/upload', formData)

    .then(function (response) {
      console.log(response.data);
    })
    
    .catch(function (error) {
      console.log("An error has occurred while trying to post a restaurant image.", error);
    });
  } else {
    alert("You have to fill every field");
  }
}

  return(
        <div>
            <div className={styles.title}>Creating Restaurant</div>
            
                <div className={styles.container}>
                    <div className="RestaurantTable">
                    <div>Restaurant Name<br /> <input type="text" {...RestaurantName} /> </div>
                    <div>Operating Hours<br /> <input type="text" {...OperatingHours} /></div>
                    <div>Address<br /> <input type="text" {...Address}/></div>
                    <div>Price Level<br /> <input type="number" min="1" max="5" {...PriceLevel}/></div>
                    <div>Restaurant Type<br /> <input type="text" {...RestaurantType}/></div>
                    <div>Add your food, separate with - (Example: Hamburger-Chicken wings) <br /> <input type="text"  {...Foods}/></div>
                    <div>Price matching the food, separate with - (Example: 10-8)<br /> <input type="text"  {...FoodsPrices}/></div>
                    <div>Restaurant Image<br /> <input type="file" onChange={changeHandler}/></div>
                    <input type="button" value={'Add your restaurant'} onClick={post} />
                </div> 
            </div>
        </div>
  )
}
export default CreateRestaurant;