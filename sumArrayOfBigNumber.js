Array.prototype.sumStrings =function(data) {       //parametrs as array of strings
    let res = [];
  let qwe = [];

    const checkFirstZero = (arr) => {
        return arr[0] === '0' ? true : false;
    };
   this.reduce((a,b) => {
      a = a.toString().split('');
      b = b.toString().split('');
       
      if (a.length > b.length) {
        let difLength = a.length - b.length;

        for (let i = 0; i < difLength; i++) {
            b.unshift('0');
        }
    } else if (a.length < b.length) {
        let difLength = b.length - a.length;
      
        for (let i = 0; i < difLength; i++) {
            a.unshift('0');
        }
    }
     
     for (let i = a.length - 1; i >= 0; i--) {
        res[i] = (a[i] * 1 + b[i] * 1) + '';
    }

    for (let i = res.length - 1; i >= 0; i--) {
        if (res[i] * 1 >= 10 && i !== 0) {
            res[i - 1] = (res[i - 1] * 1 + 1) + '';
            res[i] = (res[i] * 1 - 10) + '';
        }
    }

    while (checkFirstZero(res)) {
        res.shift();
    }
     return res.join('');
    })
   
    return res.join('');
}