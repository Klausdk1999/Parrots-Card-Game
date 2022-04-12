function join_leave(){
    document.querySelector(".feed").innerHTML+=`
    <div class="messageBox grey">
        <h1><strong>fulano</strong> entrou no chat</h1>
    </div>`
}
function private(){
    document.querySelector(".feed").innerHTML+=`
    <div class="messageBox pink">
        <h1><strong>klaus</strong> reservadamente para <strong>ciclano</strong>: mensagem </h1>
    </div>`
}
function messageAll(){
    document.querySelector(".feed").innerHTML+=`
    <div class="messageBox white">
        <h1><strong>fulano</strong> para <strong>todos</strong>: mensagem </h1>
    </div>`
}
join_leave();
private();
messageAll();
join_leave();
