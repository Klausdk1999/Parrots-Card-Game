let ncards=0;
let positions=[];//criar array para cartas que serao embaralhadas
let lastParrot;
let lastParrotElement;
let nClicks=0;
let nPairs=0;

let sec=0;
setInterval(function(){
    document.getElementById('timerDisplay').innerHTML="Timer: "+sec+" segundos";
    sec++;
}, 1000);

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
//cria cartas
function createCards(){
    for(let i=0;i<(ncards);i++){
        if(positions[i]==0) createCard("bobrossparrot",0);
        if(positions[i]==1) createCard("explodyparrot",1);
        if(positions[i]==2) createCard("fiestaparrot",2);
        if(positions[i]==3) createCard("metalparrot",3);
        if(positions[i]==4) createCard("revertitparrot",4);
        if(positions[i]==5) createCard("tripletsparrot",5);
        if(positions[i]==6) createCard("unicornparrot",6);
    }
}
//cria a carta com o tipo de papagaio definido
function createCard(parrot,id){
    document.querySelector(".cards").innerHTML+=`
    <div id="${id}" class="card" onclick="flip(this)">
        <div class="back-face face">
            <img src="media/${parrot}.gif" alt="${parrot}">
        </div>
        <div class="front-face face">
            <img src="media/front.png" alt="Parrot">
        </div>
    </div>`;
}
function flip(element){
    nClicks++;
    if(element.querySelector(".front-face")==null){
        //delay 1 segunda cartas diferentes
        unflip(element);
        return;
    }
    
    element.querySelector(".front-face").classList.toggle("front-face-flip");
    element.querySelector(".front-face").classList.toggle("front-face");

    element.querySelector(".back-face").classList.toggle("back-face-flip");
    element.querySelector(".back-face").classList.toggle("back-face");
    memory(element);
}
function unflip(element){
    element.querySelector(".front-face-flip").classList.toggle("front-face");
    element.querySelector(".front-face-flip").classList.toggle("front-face-flip");

    element.querySelector(".back-face-flip").classList.toggle("back-face");
    element.querySelector(".back-face-flip").classList.toggle("back-face-flip");
}
function memory(element){
    let actualParrot=element.getAttribute('id');
    if(lastParrot!=null){
        if(actualParrot==lastParrot){
            lastParrotElement.classList.add("pointerEventsNone");
            element.classList.add("pointerEventsNone");
            lastParrot=null;
            nPairs++;
            if(nPairs==(ncards/2)){
                setTimeout(function(){
                    alert(`Você ganhou em ${nClicks} jogadas e ${sec-1} segundos!`);
                    let restart=prompt("Deseja jogar novamente?(sim/não)");
                    if (restart=="sim"){
                        document. location. reload();
                    }else if(restart=="não"){

                    }else{
                        while(restart!="sim" && restart!="não"){
                            restart=prompt("Deseja jogar novamente?(sim/não)");
                        }
                    }
                }, 1000); 
            }
            return;
        }else{
            setTimeout(function(){
                unflip(element);
                unflip(lastParrotElement);
                lastParrot=null;
                lastParrotElement=null;
                return;
            }, 1000); 
        }
    }else{
        lastParrot=actualParrot;
        lastParrotElement=element;
        return;
    }    
}
