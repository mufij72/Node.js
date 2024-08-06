// var x=20;
// for (let i=0; i<=x ;i++) {
//     console.log(i)
// }
// const app =require("./app")

// const  arr =[2,4,5,3,3,6,7,8]
// console.log(arr);
// console.log(app)
// // console.log(app.z())
// let result = arr.filter((item)=>{
// return item ===3;
// })
// console.warn(result)
// const gs=require('fs').writeFileSync;
// gs("xyz.txt","abc")

const http = require('http');

const dataControl = (req, resp) => {
    resp.write("<h1>Hello, this is Mufij</h1>");
    resp.end();
}

http.createServer(dataControl).listen(4555, () => {
    console.log("Server is listening on port 4555");
});

