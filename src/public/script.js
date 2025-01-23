document.addEventListener("DOMContentLoaded", () => {
const body= document.body
history.scrollRestoration = 'manual';
window.scrollTo(0,0);



//modo dark/ligth
const switchElement = document.getElementById("switch");
const switchElement2 = document.getElementById("theme-icon");
const darkCollapse = document.getElementById('dark-collapse');
const dark = document.getElementById('dark');
const lightCollapse = document.getElementById('light-collapse');
const light = document.getElementById('light');
const fotoLight = document.getElementById('foto-light');
const fotoDark = document.getElementById('foto-dark');
const modoGuardado = localStorage.getItem('theme') || 'light';

const applyTheme = (theme) => {
  document.body.classList.toggle('dark-theme', theme === 'dark-theme');
  dark.style.display = theme === 'dark-theme' ? 'none' : 'block';
  light.style.display = theme === 'dark-theme' ? 'block' : 'none';
  fotoDark.style.display = theme === 'dark-theme' ? 'block' : 'none';
  fotoLight.style.display = theme === 'dark-theme' ? 'none' : 'block';
  darkCollapse.style.display = theme === 'dark-theme' ? 'none' : 'block';
  lightCollapse.style.display = theme === 'dark-theme' ? 'block' : 'none';
};

applyTheme(modoGuardado);

const toggleTheme = () => {
  const theme = document.body.classList.contains('dark-theme') ? 'light-theme' : 'dark-theme';
  applyTheme(theme);
  localStorage.setItem('theme', theme);
};

switchElement.addEventListener("click", toggleTheme);
switchElement2.addEventListener("click", toggleTheme);



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

 
const foto = document.querySelector('.foto-home');
const datos = document.querySelector('.datos-home');
const sobreMi = document.querySelector('.sobreMi');

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    foto.style.visibility = 'hidden';
    datos.style.marginRight = '400px';
    datos.style.opacity = '50%';
    datos.style.transition = 'margin-right 0.3s ease';
  } else {
    foto.style.visibility = 'visible';
    datos.style.marginRight = '0';
    datos.style.opacity = '1'
    datos.style.transition = 'margin-right 0.3s ease';
  }
});

// Agrandar contenedor sobreMi
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    sobreMi.style.left = '0';
    sobreMi.style.width = '100%';
    datos.style.visibility = 'hidden';
  } else {
    sobreMi.style.left = '40%';
    sobreMi.style.width = '60%';
    datos.style.visibility = 'visible';
  }
});


  
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
      errorNombre.innerText = "\u00A0";
      errorNombre.style.visibility = 'hidden';
    } else if (campo === email) {
      errorEmail.innerText = "\u00A0";
      errorEmail.style.visibility = 'hidden';
    } else if (campo === comentario) {
      errorComentario.innerText = "\u00A0";
      errorComentario.style.visibility = 'hidden';
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
      errorNombre.innerText = "*Campo obligatorio";
      errorNombre.style.visibility = 'visible';
      nombre.style.backgroundColor = "#8c8c8c";
    } else if (!er_nombre.test(nombre.value)) {
      errores.push("Nombre inválido");
      errorNombre.innerText = "*Nombre no válido";
      errorNombre.style.visibility = 'visible';
      nombre.style.backgroundColor = "#8c8c8c";
    }

    if (email.value.trim() === "") {
      errores.push("Campo obligatorio");
      errorEmail.innerText = "*Campo obligatorio";
      errorEmail.style.visibility = 'visible';
      email.style.backgroundColor = "#8c8c8c";
    } else if (!er_email.test(email.value)) {
      errores.push("Email inválido");
      errorEmail.innerText = "*Email no válido";
      errorEmail.style.visibility = 'visible';
      email.style.backgroundColor = "#8c8c8c";
    }

    if (comentario.value.trim() === "") {
      errores.push("Campo obligatorio");
      errorComentario.innerText = "*Campo obligatorio";
      errorComentario.style.visibility = 'visible';
      comentario.style.backgroundColor = "#8c8c8c";
    } else if (comentario.value.trim().length > 300) {
      errores.push("Máximo 300 caracteres");
      errorComentario.innerText = "*Máximo 300 caracteres";
      errorComentario.style.visibility = 'visible';
      comentario.style.backgroundColor = "#8c8c8c";
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
  if (body) {
    body.style.visibility = 'visible'
  }
});
