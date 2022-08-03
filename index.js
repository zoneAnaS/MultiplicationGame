const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionE = document.getElementById("question");
const formE = document.getElementById("form");
const answerE = document.getElementById("input");
const scoreE = document.getElementById("score");
const endE = document.getElementById("end");
const opaE = document.getElementById("opa");


questionE.innerText = `Multiply ${num1} by ${num2}`;

let score = JSON.parse(localStorage.getItem("score"));

const Manswer = num1*num2;

if(!score || score<0){
    score = 0;
}


scoreE.innerText = `${score}`

formE.addEventListener("submit",()=>{
        const uAnswer = +answerE.value;
        if(uAnswer === Manswer){
            score++;
            scoreStoring();
        }
        else{
            endE.style.opacity= 1;
opaE.style.opacity= 0;
endE.innerText = `Your score is ${score}`;
score=0;
scoreStoring();
            }
            

        
        

});

function scoreStoring(){
    localStorage.setItem("score",JSON.stringify(score))
}