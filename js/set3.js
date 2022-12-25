let data = [
    {
       quetion : "The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?",	
        a : "4 years",
        b : "8 years",
        c : "10 years",
        d : "None of these",
        ans : "4 years"     
    },
    {
        quetion : 	"A father said to his son, I was as old as you are at the present at the time of your birth. If the father's age is 38 years now, the son's age five years back was:",
        
         a : "14 years",
         b : "19 years",
         c : "33 years",
         d : "38 years",
         ans : "14 years"     

    },
    {
        quetion : "A is two years older than B who is twice as old as C. If the total of the ages of A, B and C be 27, then how old is B?",
        a : "7",
        b : "8",
        c : "9",
        d : "10",
        ans : "10"
    },
    {
        quetion : "Present ages of Sameer and Anand are in the ratio of 5 : 4 respectively. Three years hence, the ratio of their ages will become 11 : 9 respectively. What is Anand's present age in years?",
        a : "24",
        b : "27",
        c : "40",
        d : "Cannot be determined",
        ans : "24"

    },
    {
        quetion : "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
        a : "14 years",
        b : "18 years",
        c : "20 years",
        d : "22 years",
        ans : "22 years"
    },
    {
        quetion : "Six years ago, the ratio of the ages of Kunal and Sagar was 6 : 5. Four years hence, the ratio of their ages will be 11 : 10. What is Sagar's age at present?",
        a : "16 years",
        b : "18 years",
        c : "20 years",
        d : "Cannot be determined",
        ans : "16 years"
    },
    {
        quetion : "The sum of the present ages of a father and his son is 60 years. Six years ago, father's age was five times the age of the son. After 6 years, son's age will be:",
        a : "12 years",
        b : "14 years",
        c : "18 years",
        d : "20 years",
        ans : "20 hours"
    },
    {
        quetion : "At present, the ratio between the ages of Arun and Deepak is 4 : 3. After 6 years, Arun's age will be 26 years. What is the age of Deepak at present ?",
        a : "12 years",
        b : "15 years",
        c : "19 years",
        d : "21 years",
        ans : "15 years"
    },
    {
        quetion : "Sachin is younger than Rahul by 7 years. If their ages are in the respective ratio of 7 : 9, how old is Sachin?",
        a : "16 years",
        b : "18 years",
        c : "28 years",
        d : "24.5 years",
        ans : "24.5 years"
    },
    {
        quetion : "The present ages of three persons in proportions 4 : 7 : 9. Eight years ago, the sum of their ages was 56. Find their present ages (in years).",
        a : "8, 20, 28",
        b : "16, 28, 36",
        c : "20, 35, 45",
        d : "None of these",
        ans : "16, 28, 36"
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