let hor = 0
let min = 0
let sec = 0
let Stoper
var limit = false

function limiter(){
    if (limit === true){TimerGear}
}

function StartTimer(){
    if(limit === false){
    Stoper = setInterval(TimerGear, 1000)}
    
    limit = true
}

function something(abacate){
    if(abacate < 10){
        return '0' + abacate}
    else {return abacate}
}

function TimerGear(){
    sec++
    if(sec == 60){
        sec = 0
        min++
    }
    if(min == 60){
        min = 0
        hor++
    }
    window.document.getElementById('ShowNum').innerHTML = something(hor)+':'+something(min)+':'+something(sec)
}

function PauseTimer(){
    clearInterval(Stoper)
    limit = false
}

function StopTimer(){
    clearInterval(Stoper)
    window.alert('o timer parou em '+ something(hor)+':'+something(min)+':'+something(sec))
    sec = 0
    min = 0
    hor = 0
    window.document.getElementById('ShowNum').innerHTML = '00:00:00'
    limit = false
}