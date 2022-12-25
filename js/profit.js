let data = [
    {
       quetion : "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",	
        a : "15",
        b : "16",
        c : "18",
        d : "25",
        ans : "16"     
    },
    {
        quetion : 	"In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
        
         a : "30%",
         b : "70%",
         c : "100%",
         d : "250%",
         ans : "70%"     

    },
    {
        quetion : "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        a : "3",
        b : "4",
        c : "5",
        d : "6",
        ans : "5"
    },
    {
        quetion : "The percentage profit earned by selling an article for Rs. 1920 is equal to the percentage loss incurred by selling the same article for Rs. 1280. At what price should the article be sold to make 25% profit?",
        a : "Rs. 2000",
        b : "Rs. 2200",
        c : "Rs. 2400",
        d : "Data inadequate",
        ans : "Rs. 2000"

    },
    {
        quetion : "	A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
        a : "Rs. 18.20",
        b : "Rs. 70",
        c : "Rs. 72",
        d : "Rs. 88.25",
        ans : "Rs. 72"
    },
    {
        quetion : "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
        a : "Rs. 1090",
        b : "Rs. 1160",
        c : "Rs. 1190",
        d : "Rs. 1202",
        ans : "Rs. 1190"
    },
    {
        quetion : "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
        a : "3.5",
        b : "4.5",
        c : "5.6",
        d : "6.5",
        ans : "5.6"
    },
    {
        quetion : "Some articles were bought at 6 articles for Rs. 5 and sold at 5 articles for Rs. 6. Gain percent is:",
        a : "30%",
        b : "33(1/3)%",
        c : "35",
        d : "44",
        ans : "44"
    },
    {
        quetion : "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
        a : "Rs. 45",
        b : "Rs. 50",
        c : "Rs. 55",
        d : "Rs. 60",
        ans : "Rs. 60"
    },
    {
        quetion : "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
        a : "Rs. 21,000",
        b : "Rs. 22,500",
        c : "Rs. 25,300",
        d : "Rs. 25,800",
        ans : "Rs. 25,300"
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