let ncards=0;
let positions=[];//criar array para cartas que serao embaralhadas

nCards();
defineCards();
//gera o prompt ate que se obtenha valor valido
function nCards(){
    while(ncards!=4 && ncards!=6 && ncards!=8 && ncards!=10 && ncards!=12 && ncards!=14){
        ncards=Number(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12, 14)"));
    }
}

function defineCards(){
    for(let i=0;i<(ncards/2);i++){
        positions.push(Number(i));
        positions.push(Number(i));
    }
    positions.sort(comparador);//randomiza
}

function comparador() { 
	return Math.random() - 0.5; 
}

function flip(element){

}