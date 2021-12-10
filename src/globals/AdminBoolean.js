var savedAdmin = false;
// we use this to call this function without a parameter
// and get the last admin/user that was passed through this function

const adminCheck = response => {

    if (response) {
        const admin = (response.data.includes("ADM")); // we check if res contains admin
      
        if (admin === true) { // if it does
            savedAdmin = true; // we save it to the var as true to be used later
            return true; // and return true
        }
        
        // this type of implementation allows us to call this without parameters
        // from Main.js and still get the right answer.
            
        else {
            savedAdmin = false;
            return false;
        }
    }
    
    return savedAdmin;
    // when this gets called without params this is the only executed row
}

export default adminCheck;