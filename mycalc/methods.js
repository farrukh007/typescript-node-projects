const add = (a, b) => { return a + b; };
const sub = (a, b) => { return a - b; };
const mul = (a, b) => { return a * b; };
const div = (a, b) => { return a / b; };
const expo = (a, b) => {
    let n = 1;
    for (let i = 0; i < b; i++) {
        n = n * a;
    }
    return n;
};
export { add, sub, mul, div, expo };
