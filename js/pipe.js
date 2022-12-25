let data = [
    {
       quetion :      "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",	
        a : "5/11",
        b : "6/11",
        c : "7/11",
        d : "8/11",
        ans : "6/11"     
    },
    {
        quetion : 	"Pipes A and B can fill a tank in 5 and 6 hours respectively. Pipe C can empty it in 12 hours. If all the three pipes are opened together, then the tank will be filled in:",
        
         a : "1(13/17) hours",
         b : "2(8/11) hours",
         c : "3(19/17) hours",
         d : "4(1/2) hours",
         ans : "3(19/17) hours"     

    },
    {
        quetion : "Two pipes A and B can fill a cistern in 37(1/2) minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after:",
        a : "5 min",
        b : "10 min",
        c : "9 min",
        d : "15 min",
        ans : "9 min"
    },
    {
        quetion : "	A pump can fill a tank with water in 2 hours. Because of a leak, it took 2(1/3) hours to fill the tank. The leak can drain all the water of the tank in:",
        a : "4(1/3) hours",
        b : "7 hours",
        c : "8 hours",
        d : "14 hours",
        ans : "14 hours"

    },
    {
        quetion : "	A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is:",
        a : "6 hours",
        b : "10 hours",
        c : "15 hours",
        d : "30 hours",
        ans : "15 hours"
    },
    {
        quetion : "	Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank is:",
        a : "60 gallons",
        b : "100 gallons",
        c : "120 gallons",
        d : "180 gallons",
        ans : "120 gallons"
    },
    {
        quetion : "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",
        a : "20 hours",
        b : "25 hours",
        c : "35 hours",
        d : "Can not Determined",
        ans : "35 hours"
    },
    {
        quetion : "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",
        a : "1 hours",
        b : "2 hours",
        c : "6 hours",
        d : "8 hours",
        ans : "6 hours"
    },
    {
        quetion : "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",
        a : "12 min",
        b : "15 min",
        c : "25 min",
        d : "50 min",
        ans : "12 min"
    },
    {
        quetion : "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank?",
        a : "10 min. 20 sec.",
        b : "11 min. 45 sec.",
        c : "12 min. 30 sec.",
        d : "14 min. 40 sec.",
        ans : "14 min. 40 sec."
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