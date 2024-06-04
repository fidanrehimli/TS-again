//! number, string,undefined,null,boolean,bigInt,symbol,object

//!  any,never,unknown,enum,tuple

const firstName:string="Fidan";
const num: number=21;


const isMarried:boolean=false

// let level;
// level = "first"
// level = 21

let numArr:number [] = [3,4,6]
// numArr.push("Fidan")
// numArr[0]=90
// numArr.map(item=>item.toFixed(2))

// const fruits:string[] = ["apple","banana","fig"]
// fruits.forEach(elem=>elem.toUpperCase())

let arr:[number,string ]=[2,"Fidan"]
// arr[0]=0
// arr.push("salam")
// console.log(arr);


//! ENUM -->PASCALCASE
//  enum SizeEnum {
//     Small = "s",
//     Medium = "m",
//     Large = "l"
//  }
//  const mySize:SizeEnum = SizeEnum.Medium
//  console.log(mySize);


//! OBJECT
// const obj:{readonly id:number,name?:string,sayHi:()=>void}={
//     id:1,
//     sayHi:()=>{console.log("Hello");
//     }
// }
// obj.name = "Fidan"
// // obj.id = 5
// console.log(obj);

//!VOID HECNE RETURN ETMIR  


//!Daha seliqeli yazmag!
// type Employee= {
//     id:number;
//     name:string,
//     hire:(date:Date)=>void
// }
// const employee:Employee ={
//     id:5,
//     name:"Fidan",
//     hire:(date)=>console.log("Welcome to our company",date),
    
// }

function sum(a:number,b:number){
    return a + b
}
console.log(sum(2,3));



 



 