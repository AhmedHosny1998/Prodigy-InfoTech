let change = 'x';
let n = document.querySelector('.name');

let squares = [];
function endGame(n1,n2,n3){
    n.innerHTML = `${squares[n1]} its winner`;
    document.getElementById('t'+n1).style.background = "black";
    document.getElementById('t'+n2).style.background = "black";
    document.getElementById('t'+n3).style.background = "black";
    setInterval(function(){n.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function win(){
    for (let i = 1 ; i<10; i++){
        squares[i] =document.getElementById('t'+i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2]==squares[3] && squares[2] !='')
    {
        endGame(1,2,3);
    }
    else if (squares[4] == squares[5] && squares[5]==squares[6] && squares[5] !='')
    {
        endGame(4,5,6);

    }

   else if (squares[7] == squares[8] && squares[8]==squares[9] && squares[7] !='')
    {
        endGame(7,8,9);

    }

    else if (squares[1] == squares[4] && squares[4]==squares[7] && squares[4] !='')
    {
        endGame(1,4,7);
    }
    else if (squares[2] == squares[5] && squares[5]==squares[8] && squares[2] !='')
    {
        endGame(2,5,8);
    }
    else if (squares[3] == squares[6] && squares[6]==squares[9] && squares[6] !='')
    {
        endGame(3,6,9);

    }



}
function playing(id){
    let ele = document.getElementById(id);

    if(change === 'x' && ele.innerHTML == ''){
        ele.innerHTML = 'x';
        change = 'O';
        n.innerHTML = 'role O';

    }
    else if(change === 'O' && ele.innerHTML == ''){
        ele.innerHTML = 'O';
        change = 'x';
        n.innerHTML = ' role x';
    }

    win();
}