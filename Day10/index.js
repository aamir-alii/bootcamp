// const divide = (x, y) => {
//     let roundY = y;
//     if(isNaN(y) || y === 0)
//     roundY = 1;
//     return function () {
//         return x / roundY;
//     }
// }




// // Object Oriented Programming

// let a = null
// let b = undefined

// console.log( a == b) // true 
// console.log(a === b) // false


// class Square {
//     #length
//     #width
//     constructor (x ,y) {
//         this.#validate(x,y);
//         this.#length = x
//         this.#width = y;
//     }
//     #validate = () => {
//         if (isNaN(this.#length) || isNaN(this.#width)) {
//           throw "Please provide valid args"
//         }
//       }
//      getWidth = _ => this.#width;
//      getLength = _ => this.#length;
//      getArea = _ => this.#length * this.#width;
// }

// const sq1 = new Square('',5);
// console.log(sq1.getArea())

class Series {
    #start
    #end
    #valid = (s, e) => {
        if(!isNaN(s) || !isNaN(e)) throw "Please Provide Valid Arguments"
    }
    constructor (s,e) {
        this.#valid(s,e)
        this.#start = s;
        this.#end = e;
    }
    listOdd = _ => {
        for(let i=this.#start; i <= this.#end; i++) {
            i % 2 ? console.log(i) : 0;
        }
    }
    listOdd = _ => {
        for(let i=this.#start; i <= this.#end; i++) {
            i % 2 ? console.log(i) : 0;
        }
    }
    listEven = _ => {
        for(let i=this.#start; i <= this.#end; i++) {
            i % 2 ? 0 : console.log(i);
        }
    }
}
try{
    const series = new Series("",10);
    series.listEven();
    series.listOdd();
} catch(error) {
    console.log(error)
}