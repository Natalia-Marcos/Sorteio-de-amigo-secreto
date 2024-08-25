//criação da array 
let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');

    //validação , se tiver sem nome emitir um alert 
    if(amigo.value == ''){
     alert('informe o nome do amigo!');
     // interrempor a função para nao adicionar o nome vazio 
     return;
    }

    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!');
        // interrempor a função para nao adicionar o nome igual
        return;
       }

    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(lista.textContent == '' ){
        lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    //zerar o nome de amigo 
    amigo.value = ''
    }

function sortear() {
   if(amigos.length < 4){
    alert("Adicione pelo menos 4 amigos!")
    return;
   }

  //chamar a função embaralhar
  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigos.length; i++){
    if(i == amigos.length - 1){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
    }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
    }
  }
}

//criar a função para embaralhar o array 

function embaralha(lista) {

   for(let indice = lista.length; indice; indice--) {

    const indiceAleatorio =  Math.floor(Math.random() * indice);

    // atribuição via destructuring 
    [lista[indice - 1], lista[indiceAleatorio]] = 
    [lista[indiceAleatorio], lista[indice - 1]];
   }
}

function reiniciar(){
    //zerar a lista de amigos , de amigos incluidos , e a lisat de sorteio
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}