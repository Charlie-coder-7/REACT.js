// let obj = {
//     name:"Achyuta",
//     age:21,
//     Goal:"Web Developer"
// }
// const newObj = JSON.stringify(obj)
// localStorage.setItem('obj',newObj)

const obj = localStorage.getItem('obj')

const realObj = JSON.parse(obj)

console.log(realObj);
