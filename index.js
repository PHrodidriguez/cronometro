var display = document.getElementById("display");

var minutos = document.getElementById("Minutos");

var segundos = document.getElementById("Segundos");

var começar = document.getElementById("começar");

var cronometroSeg;

var minutoAtual;

var segundoAtual;

var interval;


for(var i = 0; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>'
}
for(var i = 1; i<= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>'
}

começar.addEventListener('click', function(){
    minutoAtual = minutos.value
    segundoAtual = segundos.value

    display.childNodes[1].innerHTML = minutoAtual +":"+segundoAtual
    interval = setInterval(function(){
        segundoAtual--; 
        if(segundoAtual <= 0){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59
            } else{
                alert('Acabou!!')
                document.getElementById("som").play()
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minutoAtual +":"+segundoAtual    
    },1000)

})