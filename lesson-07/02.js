function isNumeric(str) {  
    const regex = /^-?\d+(\.\d+)?$|^-?\d+e-?\d+$/; 
    return regex.test(str);
}  
