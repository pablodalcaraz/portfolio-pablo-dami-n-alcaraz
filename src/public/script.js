document.addEventListener("DOMContentLoaded", () => {
  console.log("Script cargado correctamente");


  const miNombre = document.querySelector('.nombre_typing');
  const descripcion = document.querySelector('.descripcion_typing');
  const texto = 'PABLO ALCARAZ';
  const desc = 'full stack developer';
  
  function escribirTexto(elemento, texto, delay) {
      for (let i = 0; i < texto.length; i++) {
          setTimeout(() => {
              elemento.textContent += texto[i];
          }, delay * i);
      }
  }
  
  function escribirNombreYDescripcion() {
      const delay = 150;
      const nombreTiempoTotal = texto.length * delay;
  
      escribirTexto(miNombre, texto, delay);
  
      setTimeout(() => {
          escribirTexto(descripcion, desc, 50);
      }, nombreTiempoTotal);
  }
  
  escribirNombreYDescripcion();
  

  document.querySelectorAll('.proyecto').forEach(selector => {
    const proyecto = selector.querySelector('.btnProyect');
    const detalle = selector.querySelector('.detalle-proyecto');
    const cerrar = selector.querySelector('.cerrar');

    proyecto.addEventListener('click', function() {
        const imageProyect = proyecto.parentElement;
        imageProyect.classList.add('rotated');
        setTimeout(() => {
            detalle.classList.add('visible');
        }, 100);
    });

    cerrar.addEventListener('click', function() {
        detalle.classList.remove('visible');
        proyecto.parentElement.classList.remove('rotated');
    });
});

 
  const switchElement = document.getElementById("switch");
  const dark = document.getElementById('dark');
  const light = document.getElementById('light');
  
  switchElement.addEventListener("click", () => {
    document.body.classList.toggle("azul-theme");
    
    if (document.body.classList.contains("azul-theme")) {
      dark.style.display = 'none';
      light.style.display = 'block';
    } else {
      dark.style.display = 'block';
      light.style.display = 'none';
    }
  });
  const navBar = document.getElementById("navBar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navBar.classList.add("fixed");
      burgerMenu.style.paddingTop= '70px'
      navBar.style.top = "0";
      navBar.style.left = "0";
      navBar.style.width = "100%";
    } else {
      burgerMenu.style.paddingTop= '0'
      navBar.classList.remove("fixed");
    }
  });

  const burger = document.getElementById('burger');
  const burgerMenu= document.getElementById('burger-menu');
  const items = burgerMenu.querySelectorAll('a');

  burger.addEventListener('click', function() {
      burgerMenu.classList.toggle('active');
  })

 items.forEach(item => {
  item.addEventListener('click', function() {
    burgerMenu.classList.remove('active');
  })
 })

 
  
  
 document.querySelectorAll('.contenido').forEach(section => {
  const leer = section.querySelector('.leer');
  const leerMenos = section.querySelector('.leerMenos');
  const seguirLeyendo = section.querySelector('.seguirLeyendo');
  const card = section.closest('.card'); 

  leer.addEventListener('click', function() {
      seguirLeyendo.style.display = 'block';
      leerMenos.style.display = 'block';
      leer.style.display = 'none';
      card.style.transition= 'all 0.5s ease';
      card.style.minHeight = '550px'; 
  });

  leerMenos.addEventListener('click', function() {
      seguirLeyendo.style.display = 'none';
      leerMenos.style.display = 'none';
      leer.style.display = 'block';
      card.style.minHeight = '300px'; 
  });
});

  const selector = document.getElementById("switch");
  if (selector) {
    selector.addEventListener("click", (ev) => {
      selector.classList.toggle("active");
    });
  }

  const form = document.getElementById("form");
  let nombre = document.getElementById("nombre");
  let errorNombre = document.getElementById("errorNombre");
  let email = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");
  let comentario = document.getElementById("comentario");
  let errorComentario = document.getElementById("errorComentario");
  const mensaje = document.getElementById("exito");

  const spinner = document.getElementById("spinner");

  function limpiarCampos(ev) {
    let campo = ev.target;
    if (campo === nombre) {
      errorNombre.innerText = "";
    } else if (campo === email) {
      errorEmail.innerText = "";
    } else if (campo === comentario) {
      errorComentario.innerText = "";
    }
    campo.value = "";
    campo.style.backgroundColor = "";
  }

  nombre.addEventListener("focus", limpiarCampos);
  email.addEventListener("focus", limpiarCampos);
  comentario.addEventListener("focus", limpiarCampos);

  function validar() {
    errorNombre.innerHTML = "";
    errorEmail.innerHTML = "";
    errorComentario.innerHTML = "";

    const er_nombre = /^[a-zA-Z\s]{1,30}$/;
    const er_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errores = [];

    if (nombre.value.trim() === "") {
      errores.push("Campo obligatorio");
      errorNombre.innerText = "Campo obligatorio";
      nombre.style.backgroundColor = "#f7bfd8";
    } else if (!er_nombre.test(nombre.value)) {
      errores.push("Nombre inválido");
      errorNombre.innerText = "Nombre inválido";
      nombre.style.backgroundColor = "#f7bfd8";
    }

    if (email.value.trim() === "") {
      errores.push("Campo obligatorio");
      errorEmail.innerText = "Campo obligatorio";
      email.style.backgroundColor = "#f7bfd8";
    } else if (!er_email.test(email.value)) {
      errores.push("Email inválido");
      errorEmail.innerText = "Email inválido";
      email.style.backgroundColor = "#f7bfd8";
    }

    if (comentario.value.trim() === "") {
      errores.push("Campo obligatorio");
      errorComentario.innerText = "Campo obligatorio";
      comentario.style.backgroundColor = "#f7bfd8";
    } else if (comentario.value.trim().length > 300) {
      errores.push("Máximo 300 caracteres");
      errorComentario.innerText = "Máximo 300 caracteres";
      comentario.style.backgroundColor = "#f7bfd8";
    }

    if (errores.length === 0) {
      spinner.style.display = "block";
      setTimeout(function () {
        spinner.style.display = "none";
        form.style.display = "none";
      }, 3000);
      const data = {
        nombre: nombre.value,
        email: email.value,
        comentario: comentario.value
      };

      fetch("/.netlify/functions/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
          mensaje.innerHTML = "";
          let contenido = document.createElement("div");
          contenido.innerHTML = `
                          <h2 class='mensaje'>Formulario enviado exitosamente!</h2>
                          <p>Me contactaré contigo a <strong>${email.value}</strong></p>
                          <button class='volver' id='volver'>Volver</button>
                      `;
          mensaje.appendChild(contenido);
          mensaje.style.display = "none";
          setTimeout(function () {
            mensaje.style.display = "block";
          }, 3000);

          document
            .getElementById("volver")
            .addEventListener("click", function () {
              mensaje.style.display = "none";
              form.style.display = "flex";
              nombre.value = "";
              email.value = "";
              comentario.value = "";
            });
        });
      return true;
    }

    return false;
  }

  document.getElementById("form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    validar();
  });
});
