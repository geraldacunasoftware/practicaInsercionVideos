function Video(){        
    
    var video,play,barra,progreso;
    
    this.reproductor = () => {
    
     video = document.getElementById('video');
     play = document.getElementById('play');
     barra = document.getElementById('barra');
     progreso = document.getElementById('progreso');
    
     play.addEventListener('click',this.reproducir);
   /* 
    progreso.addEventListener('click',adelantos,false);
    */
    }
    this.reproducir = () =>{
        console.log(video)
        if ((video.paused == false) && (video.ended== false)) {
            video.pause();
            play.innerHTML="Play"
        }else{
            video.play();
            play.innerHTML="Pause"
        }
    }    

}
document.addEventListener('DOMContentLoaded',()=>{
    const pagina = new Video();
    pagina.reproductor();
});