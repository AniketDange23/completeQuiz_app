let data = [
    {
       quetion :      "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",	
        a : "1/2",
        b : "2/5",
        c : "8/15",
        d : "9/20",
        ans : "9/20"     
    },
    {
        quetion : 	"A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
        
         a : "10/21",
         b : "11/21",
         c : "2/7",
         d : "5/7",
         ans : "10/21"     

    },
    {
        quetion : "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",
        a : "1/3",
        b : "3/4",
        c : "7/19",
        d : "8/18",
        ans : "1/3"
    },
    {
        quetion : "What is the probability of getting a sum 9 from two throws of a dice?",
        a : "1/6",
        b : "1/8",
        c : "1/9",
        d : "1/12",
        ans : "1/9"

    },
    {
        quetion : "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
        a : "3/4",
        b : "1/4",
        c : "3/8",
        d : "7/8",
        ans : "7/8"
    },
    {
        quetion : "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",
        a : "1/2",
        b : "3/4",
        c : "3/8",
        d : "5/16",
        ans : "3/4"
    },
    {
        quetion : "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",
        a : "21/46",
        b : "25/117",
        c : "1/50",
        d : "3/25",
        ans : "21/46"
    },
    {
        quetion : "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",
        a : "1/10",
        b : "2/5",
        c : "2/7",
        d : "5/7",
        ans : "2/7"
    },
    {
        quetion : "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",
        a : "1/15",
        b : "25/57",
        c : "35/256",
        d : "1/221",
        ans : "1/221"
    },
    {
        quetion : "Two dice are tossed. The probability that the total score is a prime number is:",
        a : "1/6",
        b : "5/12",
        c : "1/2",
        d : "7/9",
        ans : "5/12"
    }
]

let name = localStorage.getItem('name');
let score = 0;
let right = 0;
let wrong = 0;
let tim = 300;
let stop;
let index = 0;

function StartGame(){
    document.getElementById("start").style.display = "none" ;
    document.getElementById("ques").style.display = "block" ;
    timer(); 
    startqution();
}
let respose = document.querySelectorAll(".opt");
function startqution(){
    document.getElementById("questionNo").innerHTML = index+1;
    document.getElementById("questionbox").innerHTML = data[index].quetion;
    document.getElementById("opt1").innerHTML = data[index].a;
    document.getElementById("opt2").innerHTML = data[index].b;
    document.getElementById("opt3").innerHTML = data[index].c;
    document.getElementById("opt4").innerHTML = data[index].d;
}
function checkans(SelectedOption){
    if(SelectedOption.innerHTML == data[index].ans){
        SelectedOption.style.backgroundColor = "green";
        right++;
        score = score + 10;
        document.getElementById("sco").innerHTML = score;
    }
    else{    
        SelectedOption.style.backgroundColor = "red";
        wrong++;
        score = score - 5 ;   
        document.getElementById("sco").innerHTML = score;
    }
    for(i=0;i<respose.length;i++){
        respose[i].classList.add("disabled");
    }

}

function NextQution(){
    index++;
    for(i=0;i<respose.length;i++){
        respose[i].classList.remove("disabled");   
    }
    
    let reset = document.querySelectorAll(".opt");
    reset.forEach((el) => {
       
       el.style.backgroundColor = "white"; 
    });
    if(index < 9){
        startqution();
    }
    else if (index == 9){
        document.getElementById("btn").innerHTML = "Submit";
        startqution();
    }
    else{
        EndGame();  
    }
}

function timer(){
    stop = setInterval(function(){
        tim--;
        document.getElementById("time").innerHTML = tim ;
        if(tim == 0){
            EndGame();
        }
    },1000)
}
function EndGame(){
    
    clearInterval(stop);
    document.getElementById("ques").style.display = "none";
    document.getElementById("result").style.display = "block";
    
    document.getElementById("nam").innerHTML = name;
    document.getElementById("Corr").innerHTML = right;
    document.getElementById("Wrong").innerHTML = wrong;
    document.getElementById("skiped").innerHTML = 10 - right - wrong;
    document.getElementById("TimeTaken").innerHTML = 300 - tim;
    document.getElementById("scr").innerHTML = score ;
}