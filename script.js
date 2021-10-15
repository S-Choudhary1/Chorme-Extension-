const quiz=document.getElementById("quiz");
const opt1=document.getElementById("option1");
const opt2=document.getElementById("option2");
const opt3=document.getElementById("option3");
const opt4=document.getElementById("option4");
const ans=document.getElementById("answer");


fetch('https://opentdb.com/api.php?amount=50&category=9&type=multiple')
.then(data=>data.json())
.then(quizData=>{
    const ques=quizData.results[0].question;
    const answe=quizData.results[0].correct_answer;
    const option=quizData.results[0].incorrect_answers;
    quiz.innerHTML=ques;
    opt1.innerHTML=answe;
    opt2.innerHTML=option[0];
    opt3.innerHTML=option[1];
    opt4.innerHTML=option[2];
});
opt1.addEventListener("click",()=>{
    opt1.style.backgroundColor="green";
    ans.innerHTML="Your answer is correct"
});
opt2.addEventListener("click",()=>{
    opt2.style.backgroundColor="red";
    ans.innerHTML=`Your answer is incorrect,
    correct answer is ${opt1.innerHTML}`
});
opt3.addEventListener("click",()=>{
    opt3.style.backgroundColor="red";
    ans.innerHTML=`Your answer is incorrect,
    correct answer is ${opt1.innerHTML}`
});
opt4.addEventListener("click",()=>{
    opt4.style.backgroundColor="red";
    ans.innerHTML=`Your answer is incorrect, 
    correct answer is ${opt1.innerHTML}`
});

