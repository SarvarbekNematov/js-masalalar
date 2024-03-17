// 5 - Masala
// let arr = ["salom", 2, 3, 4, true, 123];

// const x = (a) => {
//     let newArr = [];
//     for(let i = 0;i < a.length;i++){
//         if(typeof a[i] === 'number'){
//             newArr.push(a[i]);
//         }
//     }
//     return newArr;
// }

// console.log(x(arr));


// 6 - Masala

// let str = `
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ullam tempora autem. Ab esse doloremque officia voluptas quos voluptate vel accusantium excepturi veritatis voluptates reiciendis suscipit molestiae, saepe provident animi.`

// const x = (a) => {
//     let newStr = "";
//     for(let i = 0;i < a.length;i++){
//         if(" " === a[i - 1]){
//             newStr += a[i].toUpperCase();
//         }
//         else{
//             newStr += a[i];
//         }
//     }
//     return newStr;
// }

// console.log(x(str));

// 7 - masala

// let str = "abcd";

// const x = (a) => {
//     let newStr = "";
//     for(let i = 0; i < a.length; i++){
//         newStr += a[i].repeat(i + 1) + "-";
//     }
//     let result = newStr.slice(0,newStr.length - 1);
//     return result;
// }

// console.log(x(str));

// 8 - Masala

// let str = "aziza";

// const x = (a) => {
//     return a == a.split().reverse().join();
    
// }
// console.log(x(str));

// 8 - Masala 2 - iwlaniw usuli

// let str = "aziza";

// const x = (a) => {
//     let newStr = "";
//     for(let i = a.length -1; i >= 0; i--){
//         newStr += a[i];
//     }

//     return newStr == a;
// }

// console.log(x(str));

// 9 - Masala

// function x(str) {
//     var harflarRegex = /[^a-zA-Zа-яА-ЯёЁғҒқҚўЎҳҲіІўЎ]/;
//     return harflarRegex.test(str);
//   }
//   console.log(x("Salom, dunyo!"));
//   console.log(x("12345"));
  
// 10 - masala

// let arr = [2,3,4,1,2];

// const x = (a) => {
//     let b = 0;
//     for(let i = 0; i < a.length; i++){
//         b += a[i];
//     }
//     if(b % 2 == 0){
//         return "juft son"
//     }
//     else{
//         return "toq son"
//     }
// }
// console.log(x(arr));

// 11 - masala

// let a = 212;

// let arr = [];
// const x = (b) => {
//     for(let i = 1;i < a; i++){
//         if (a % i == 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log( x(a));

// 16.03.2024
// 1 - masala
// let arr = [
//     {
//         name:"ali",
//         age: 19
//     },
//     {
//         name:"aziz",
//         age: 17
//     },
//     {
//         name:"shokoml",
//         age: 18
//     },
//     {
//         name:"laylo",
//         age: 20
//     },
// ]
// let newArr = [];
// const x = (a) => {
//     for(let i = 0;i < a.length;i++){
//         if(a[i].age > 18){
//             newArr.push(a[i])
//         }
//     }
//     return newArr
// }
// console.log(x(arr));

// 2 - masala

// let arr = [1,2,3,4,5,6,7];

// const x = (a) => {
//     let newArr = [];
//     for(let i = 0;i < a.length;i++){
//         if(a[i] % 2 == 0){
//             newArr.push(a[i])
//         }
//     }
//     return newArr
// }

// console.log(x(arr));

// 3 - masala

// let arr = [
//     1,"sa",32,"adwa", 12,43,51
// ]
// let newArr = [];
// let newStr = [];
//     const x = (a) => {
//         for(let i = 0;i < a.length;i++){
//             if(typeof a[i] == "number"){
//                 newArr.push(a[i]);
//             }
//             else{
//                 newStr.push(a[i]);
//             }
//         }
//         return {
//             number:newArr,
//             string:newStr,
//         } ;
//     }
// console.log(x(arr));

    // 4 - masala

    // let a = prompt("son kiriting");

    // const x = (b) => {
    //     let yigindi = 0;
    //     for(let i = 0;i < b.length;i++){
    //         yigindi += Number(b[i]);
    //     }
    //     return yigindi;
    // }
    // console.log(x(a));

    // 5 - masala

    // let arr = [1,4,5,2,4];

    // let yigindi = 0;
    // const x = (a) => {
    //     for(let i = 0;i < a.length;i++){
    //         yigindi += Number(a[i]);
    //     }
        
    //     return yigindi
    // }
    // let newArr = [];
    // let b = String(x(arr));
    // const y = (c) => {
    //     for(let f = 0;f < c.length;f++){
    //         newArr.push(c[f]);
    //     }; 
    //     return newArr
    // }
   
    //     ;
    // console.log(y(b));

    // 6 - masala

    // let a = prompt("ixtiyoriy son kiriting");
    // const x = (b) => {
    //     let str = b.split('').reverse().join("");
    //     return str == a
    // }
    // if(x(a)){
    //     console.log("palindrome");
    // }
    // else{
    //     console.log("palindrome emas");
    // }
   
    // 7 - masala

    // let obj = {
    //     a: 12,
    //     b: 312,
    //     c: 13,
    // }
    // let yigindi = 0
    // for(let i in obj){
    //     yigindi += obj[i];
    // }
    // let str = yigindi.toString();
    // let raqamlariYigindisi = 0
    // for(let x = 0;x < str.length;x++){
    //     raqamlariYigindisi += Number(str[x]);
    // }

    // console.log(raqamlariYigindisi);
    
    
