

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const btn = document.getElementById('btnSend');

document.getElementById('formSend')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // btn.value = 'Sending...';  // No necesitas esta línea si estás usando un botón de tipo "submit"

    const serviceID = 'default_service';
    const templateID = 'template_txmvftk';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        // btn.value = 'Send Email';  // No necesitas esta línea si estás usando un botón de tipo "submit"
        alert('Sent!');
      }, (err) => {
        // btn.value = 'Send Email';  // No necesitas esta línea si estás usando un botón de tipo "submit"
        alert(JSON.stringify(err));
      });
  });
