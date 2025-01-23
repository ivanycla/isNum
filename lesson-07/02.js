function isNumeric(str) {  
    const regex = /^\d+(\.\d+)?$/;
    return regex.test(str); 
}  
