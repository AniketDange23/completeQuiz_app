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