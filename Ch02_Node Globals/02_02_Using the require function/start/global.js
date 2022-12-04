const path=require("path");
console.log(`the path is ${__dirname}`);
//the path is C:\Users\fanda\git\Node Essentials\Ch02_Node Globals\02_02_Using the require function\start
console.log(`the file is ${path.basename(__filename)}`);

for (key in global){
    console.log(key);
}
