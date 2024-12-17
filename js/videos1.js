function Video(){        
    
    var video,play,barra,progreso,maximo;
    maximo = 600;
    this.reproductor = () => {
    
     video = document.getElementById('video');
     play = document.getElementById('play');
     barra = document.getElementById('barra');
     progreso = document.getElementById('progreso');
    
     play.addEventListener('click',this.reproducir);
    
     barra.addEventListener('click',this.adelantos,false);
    
    }
    this.reproducir = () =>{
        console.log(video)
        if ((video.paused == false) && (video.ended)== false) {
            video.pause();
            play.innerHTML="Play"
        }else{
            video.play();
            play.innerHTML="Pause"
            bucle=setInterval(this.estado,25);
        }
    }    
    this.estado = () =>{
        if (video.ended==false) {
            var total = parseInt(video.currentTime*maximo/video.duration);
            progreso.style.width=total+"px"
        }
    }
    this.adelantos = (posicion)=>{
        if((video.paused == false) && (video.ended)==false){
            var posicionX = posicion.pageX-barra.offsetLeft;
            var nuevoTiempo = posicionX*video.duration/maximo;
            video.currentTime=nuevoTiempo;
            progreso.style.width=posicionX+"px";
        }
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    const pagina = new Video();
    pagina.reproductor();
});