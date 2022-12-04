
function grab(flag){
  let index =process.argv.indexOf(flag)
  console.log(`the parameter index is ${index}`)
  return process.argv[index+1]

}
let username= grab("--user");
let greetings=grab("--greetings");
console.log(username);
console.log(greetings);

// the command node global --user Node --greetings "hello"
/*
output is :
the parameter index is 2
the parameter index is 4
Node
hello
*/
