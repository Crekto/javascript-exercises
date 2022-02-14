const removeFromArray = function() {
    let array = arguments[0];
    let aux = [];
    array.forEach(el => {
        let ok = 1;
        for(let i = 1; i < arguments.length; i++)
            if(el === arguments[i])
                ok = 0;
        if(ok == 1)
            aux.push(el);
    });
    return aux;
};

// Do not edit below this line
module.exports = removeFromArray;
