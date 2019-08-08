//deep copy of object
//for example Object.deepCopy(ourObj);
Object.prototype.deepCopy = function (obj) {
    if (typeof obj != "object") {
        return obj;
    }
    
    let copy = obj.constructor();
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            copy[key] = deepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
};
