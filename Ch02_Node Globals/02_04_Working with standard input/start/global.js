process.stdout.write("hello \n");

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language"
];
const answers = [];

function ask(index){
  process.stdout.write(questions[index]);
  process.stdout.write(">");

}

process.stdin.on("data" , function(data){
  process.stdout.write(data.toString().trim());
});

ask(answers.length)
