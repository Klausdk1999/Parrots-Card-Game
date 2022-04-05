let ncards=0;
let positions=[];//criar array para cartas que serao embaralhadas

nCards();
defineCards();
createCards();
//gera o prompt ate que se obtenha valor valido
function nCards(){
    while(ncards!=4 && ncards!=6 && ncards!=8 && ncards!=10 && ncards!=12 && ncards!=14){
        ncards=Number(prompt("Com quantas cartas deseja jogar? (4, 6, 8, 10, 12, 14)"));
    }
}
//define array com o numero escolhido de cards e mistura
function defineCards(){
    for(let i=0;i<(ncards/2);i++){
        positions.push(Number(i));
        positions.push(Number(i));
    }
    positions.sort(comparador);//randomiza
}
//usado para misturar as cartas
function comparador() { 
	return Math.random() - 0.5; 
}
//
function createCards(){
    for(let i=0;i<(ncards);i++){
        if(positions[i]==0) createCard("bobrossparrot");
        if(positions[i]==1) createCard("explodyparrot");
        if(positions[i]==2) createCard("fiestaparrot");
        if(positions[i]==3) createCard("metalparrot");
        if(positions[i]==4) createCard("revertitparrot");
        if(positions[i]==5) createCard("tripletsparrot");
        if(positions[i]==6) createCard("unicornparrot");
    }
}
function createCard(parrot){
    document.querySelector(".cards").innerHTML+=`
    <div class="card" onclick="flip(this)">
        <div class="front-face face">
            <img src="media/front.png" alt="Parrot">
        </div>
        <div class="back-face face">
            <img src="media/${parrot}.gif" alt="Parrot">
        </div>
    </div>`;
}
function flip(element){

}