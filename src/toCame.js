const str = 'what-your-name';

console.log(toCame(str));

function toCame(str) {
    const arr = str.split('-');
    if (arr.length === 1) {
        return arr[0];
    }
    let result = arr[0];
    for(let i = 1; i < arr.length; i++) {
        const inner = arr[i].split('');
        inner[0] = inner[0].toLocaleUpperCase();
        result  = result + inner.join('');
    }
    return result;
} 