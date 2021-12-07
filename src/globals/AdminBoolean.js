var savedAdmin = false;

const adminCheck = response => {

    if (response) {
        const admin = (response.data.includes("admin"));
      
        if (admin === true) {
            savedAdmin = true;
            return true;
        }
            
        else {
            savedAdmin = false;
            return false;
        }
    }
    
    return savedAdmin;
}

export default adminCheck;