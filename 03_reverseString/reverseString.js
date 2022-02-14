const reverseString = function(string) {
    let aux = "";
    for(let i = 0; i < string.length; i++)
        aux += string[string.length - i - 1];
        
    return aux;
};

// Do not edit below this line
module.exports = reverseString;
