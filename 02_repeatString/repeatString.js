const repeatString = function(string, numberOfRepeats) {
    if(numberOfRepeats == 0)
        return "";
    if(numberOfRepeats < 0)
        return "ERROR";
    aux = string;
    for(let i = 1; i < numberOfRepeats; i++)
        string = string + aux;
    return string;
};

// Do not edit below this line
module.exports = repeatString;
