// functionavatar() {

//     const campoNombre = document.getElementById("nombres").value;
//     const mostrarNombre = document.getElementById("mostrar-nombre");


//     mostrarNombre.innerText = campoNombre.value;

// }


// function suma(){

//     const campoValor1 = document.getElementById("valor1").value;
//     const campoValor2 = document.getElementById("valor2").value;
//     const mostrarNombre = document.getElementById("mostrar-nombre");

//     let suma = 0;

//     suma = parseInt(campoValor1) + parseInt(campoValor2);

//     mostrarNombre.innerText = suma;

// }


function avatarFull(){
    // Capturamos los diferentes valores de input y select

    // const campoFoto = document.getElementById("foto").value;
    const campoAvatar = document.getElementById("Avatar").value;
    const campoNombres = document.getElementById("nombres").value;
    const campoEmail = document.getElementById("email").value;
    const campoUsername = document.getElementById("userName").value;
    const campoRol = document.getElementById("rol").value;
    const campoSkills = document.getElementById("rol").value;
    const campoColor = document.getElementById("color").value;
    const campoUserImg = document.getElementById("show-user-Img").value;


// CAPTURAMOS LAS ETIQUETAS DONDE MOSTRAREMOS LA INFOOO

    const mostrarRol  = document.getElementById("mostrar-rol");
    const mostrarSkills = document.getElementById("mostrar-Skills");
    const mostrarNombres = document.getElementById("mostrar-nombres");
    const mostrarUsername = document.getElementById("mostrar-username");
    const mostrarAvatar = document.getElementById("mostrar-avatar");
    // const mostrarUsername = document.getElementById("mostrar-username");





// definimos skills segun rol
    let skilsImpostor = "Sigilo - Rapidez - Sabotaje"; 
// mostramos los datos directos
       mostrarAvatar.innerFile = campoAvatar;
       mostrarRol.innerText = campoRol;
       mostrarNombres.innerText = campoNombres;
       mostrarUsername.innerText = campoUsername;
    //    mostrarUsername.innerText = campoUsername;
    //    mostrarUsername.innerText = campoUsername;

// cambiamos el background segun color seleccionado


// cambiamos la foto y skills del avatar segun su rol seleccionado
   

}