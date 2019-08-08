//deep copy of object
//for example Object.deepCopy(ourObj);
Object.prototype.deepCopy=function(t){if("object"!=typeof t)return t;var e=t.constructor();for(let n in t)"object"==typeof t[n]?e[n]=deepCopy(t[n]):e[n]=t[n];return e};
