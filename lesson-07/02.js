function isNumeric(str) {  
  
    const regex = /^-?\d+(\.\d+)?([eE]-?\d+)?$/;  
    return regex.test(str); 
}  
