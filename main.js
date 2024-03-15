// 4 - Masala
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


// 5 - Masala

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

// 6 - masala

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

// 7 - Masala

// let str = "aziza";

// const x = (a) => {
//     return a == a.split().reverse().join();
    
// }
// console.log(x(str));

// 7 - Masala 2 - iwlaniw usuli

// let str = "aziza";

// const x = (a) => {
//     let newStr = "";
//     for(let i = a.length -1; i >= 0; i--){
//         newStr += a[i];
//     }

//     return newStr == a;
// }

// console.log(x(str));

// 8 - Masala

// let str = "hello";

// const x = (a) => {

// }

function harfleriKontrolEt(dizge) {
    // Bir Set oluşturarak yinelenen harfleri kontrol edebiliriz.
    let harfSet = new Set();
    
    // Dizgenin her bir harfini döngü ile kontrol ediyoruz.
    for (let harf of dizge) {
        // Eğer harf Set içerisinde zaten bulunuyorsa, bu harf daha önce geçmiş demektir.
        if (harfSet.has(harf)) {
            return true; // Eğer bir harf daha önce geçtiyse true döndür.
        }
        // Harf Set içerisinde bulunmuyorsa, bu harfi Set'e ekleyerek devam ediyoruz.
        harfSet.add(harf);
    }
    
    // Eğer döngü tamamlandıysa ve herhangi bir harf yinelenmediyse false döndür.
    return false;
}

// Kullanım örneği:
console.log(harfleriKontrolEt("merhaba")); // Örnek çıktı: true
console.log(harfleriKontrolEt("selam"));   // Örnek çıktı: false
