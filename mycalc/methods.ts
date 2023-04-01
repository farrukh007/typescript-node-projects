
const add = (a:number, b: number)=>{ return a + b}
const sub = (a:number, b: number)=>{ return a - b}
const mul = (a:number, b: number)=>{ return a * b}
const div = (a:number, b: number)=>{ return a / b}
const expo = (a:number, b: number)=>{
     let n:number=1;
     for(let i = 0; i < b; i++){
        n = n * a;
     }
     return n;
    }


export {add,sub,mul,div,expo};