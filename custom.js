const questions = [
  "What are some of your favorite hobbies or activities to do in your free time?",
  "If you could have one superpower, what would it be and how would you use it?",
  "What's the most adventurous thing you've ever done?",
  "If you could go back in time, which era or historical event would you like to visit?",
  "What's the best piece of advice you've ever received, and who gave it to you?",
  "If you were stranded on a desert island, what three things would you want to have with you?",
  "What's the most interesting book you've read recently, and why did you find it captivating?",
  "If you could switch lives with someone for a day, who would it be and why?",
  "What's your favorite travel destination, and what do you love most about it?",
  "If you could learn to do anything instantly, what skill would you choose to master?",
  "What's the most meaningful gift you've ever received from someone?",
  "If you could have a dinner party with any three people, dead or alive, who would you invite?",
  "What's your favorite childhood memory?",
  "If you could eliminate one common misconception about something, what would it be?",
  "What's the most important lesson you've learned from a difficult experience?",
  "If you could invent a new ice cream flavor, what would it be and what ingredients would you use?",
  "What's the best piece of advice you'd give to your younger self?",
  "If you could have a conversation with your future self, what would you ask or talk about?",
  "What's the most beautiful place you've ever been to, and what made it so special?",
  "If you could become an expert in any field, which one would you choose and why?",
  "What's the most surprising fact about yourself that not many people know?",
  "If you could meet any historical figure, who would it be and what would you talk about?",
  "What's your favorite way to de-stress and relax after a long day?",
  "If you could live in a fictional world from a book or movie, which one would it be?",
  "What's the most meaningful compliment you've ever received?",
  "If you could solve one global issue, which one would you choose and how would you approach it?",
  "What's your favorite quote or motto that you live by?",
  "If you could learn any language fluently, which one would you choose and why?",
  "What's your idea of a perfect day spent with friends?",
  "If you could witness any event in history, which one would you like to see firsthand?",
  "What's the most exciting thing you've ever done spontaneously?",
  "If you could be a character from a TV show or movie, who would you be and why?",
  "What's the most valuable life lesson you've learned from a family member?",
  "If you could have a conversation with an alien from another planet, what would you ask?",
  "What's the best concert or live performance you've ever attended?",
  "If you could switch places with your favorite celebrity for a week, who would it be?",
  "What's something on your bucket list that you're determined to achieve?",
  "If you could time travel to your future, what age or period would you like to see?",
  "What's the most memorable dream you've ever had?",
  "If you could invent a new product, what problem would it solve?",
  "What's your favorite way to spread kindness and make someone's day better?",
  "If you could have a talent or skill that you don't currently possess, what would it be?",
  "What's your favorite season of the year, and why do you love it?",
  "If you could have an endless supply of one type of food, what would you choose?",
  "What's the most unusual or unique thing you've ever eaten?",
  "If you could be part of any historical event, which one would you choose and in what role?",
  "What's the best piece of advice you'd give to someone starting a new chapter in their life?",
  "If you could witness any natural phenomenon, which one would you like to see?",
  "What's the most interesting conversation you've ever had with a stranger?",
  "If you could become an expert in any musical instrument, which one would you choose?",
  "What's the most beautiful act of kindness you've ever witnessed?",
  "If you could travel to space, would you do it, and why or why not?",
  "What's the most exciting adventure you'd like to go on with your friends?",
];

let btn = document.querySelector("#Qbtn");
let question = document.querySelector(".question");

btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * questions.length);
  question.innerHTML = questions[random];
});
