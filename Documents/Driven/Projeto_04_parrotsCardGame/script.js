let ncards;
nCards();

function nCards(){
    while(ncards!=4 && ncards!=6 && ncards!=8 && ncards!=10 && ncards!=12 && ncards!=14){
        ncards=prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12, 14)");
    }
}

let positions;

minhaArray.sort(comparador);//randomiza

function comparador() { 
	return Math.random() - 0.5; 
}

function flip(element){

}