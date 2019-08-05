const sumStrings = (firstValue, secondValue) => {
    const res = [];

    const checkFirstZero = (arr) => {
        return arr[0] === '0' ? true : false;
    };

    firstValue = firstValue.split('');
    secondValue = secondValue.split('');

    if (firstValue.length > secondValue.length) {
        let difLength = firstValue.length - secondValue.length;

        for (let i = 0; i < difLength; i++) {
            secondValue.unshift('0');
        }
    } else if (firstValue.length < secondValue.length) {
        let difLength = secondValue.length - firstValue.length;

        for (let i = 0; i < difLength; i++) {
            firstValue.unshift('0');
        }
    }


    for (let i = firstValue.length - 1; i >= 0; i--) {
        res[i] = (firstValue[i] * 1 + secondValue[i] * 1) + '';
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
}