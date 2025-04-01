import { e as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, f as createAstro, u as unescapeHTML, i as renderComponent } from '../chunks/astro/server_AT0Uju-k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByxgZXBy.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(cooked.slice()) }));
var _a$5;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", `<header class=" relative top-0 w-full"> <nav class="z-50 sticky border-gray-700 border h-20 place-content-center w-full bg-trasparent"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse"> <img src="../../public/IMGs/logo.png" class="shadow-md shadow-gray-950 hover:shadow-gray-400 hover:shadow-md h-12 w-12 border-3 rounded-full border-cyan-300" alt="Logo"> </a> <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <button data-modal-target="publicar-modal" data-modal-toggle="publicar-modal" id="actionButton" class="shadow-md shadow-gray-950 hover:shadow-gray-900/90 cursor-pointer rounded-md hover:border-cyan-300/90 hover:text-cyan-300/90 block dark:bg-transparent font-bold text-cyan-300 border-2 border-cyan-300 px-3 py-2" aria-current="page">Publica tu negocio</button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user"> <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"> <li> <button data-modal-target="servicios-modal" data-modal-toggle="servicios-modal" class="block cursor-pointer hover:text-gray-400/70 transition ease-in .3s text-gray-300 font-light p-2 ">Nuestros Servicios</button> </li> <li> <a data-modal-target="donar-modal" data-modal-toggle="donar-modal" href="#" class="block hover:text-gray-400/70 transition ease-in .3s text-gray-300 font-light p-2 ">\xBFQu\xE9 es MUSE?</a> </li> <li> <a href="#" data-modal-target="popup-contacto" data-modal-toggle="popup-contacto" class="block hover:text-gray-400/70 transition ease-in .3s text-gray-300 font-light p-2 ">Contactanos</a> </li> </ul> </div> </div> </nav> </header> <script>
	// C\xF3digo JavaScript que se ejecuta en el cliente
	document.addEventListener('DOMContentLoaded', () => {
	  // Selecciona todas las opciones del dropdown
	  const dropdownOptions = document.querySelectorAll('.dropdown-option');
  
	  // A\xF1ade un evento de clic a cada opci\xF3n
	  dropdownOptions.forEach(option => {
		option.addEventListener('click', () => {
		  // Oculta el dropdown
		  const dropdown = document.getElementById('mega-menu');
		  dropdown.classList.add('hidden');
		});
	  });
	})
  <\/script>`])), maybeRenderHead());
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/navbar.astro", void 0);

const $$NuestrosServicios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Main modal -->${maybeRenderHead()}<div id="servicios-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-4 w-full max-w-md max-h-full rounded-lg bg-gray-950/90 shadow-gray-900"> <!-- Modal content --> <div class="relative rounded-lg shadow-lg opacity-70 border border-gray-600"> <!-- Modal header --> <div class="flex justify-end p-2"> <button type="button" class="end-2.5 text-gray-400 bg-transparent object-left hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="servicios-modal"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> </div> <div class="flex justify-center items-center py-4"> <img src="../../public/IMGs/logo.png" class="object-cover w-18 h-18 border-3 border-cyan-900 rounded-full" alt="logo"> </div> <div class="flex items-center justify-between p-4 md:p-5 "> <h3 class="flex justify-center w-full text-xl font-semibold text-gray-300">
Nuestros Servicios
</h3> </div> <!-- Modal body --> <div class="space-y-4 mb-4 flex flex-col"> <a data-modal-hide="servicios-modal" data-modal-target="publicidad-modal" data-modal-toggle="publicidad-modal" class=" transition ease-in .3s text-gray-300 flex border rounded-lg hover:border-cyan-600 hover:text-cyan-800/80 p-4 m-3 justify-between cursor-pointer font-medium border-gray-500">Quiero publicitar mi marca
<svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg> </a> <a data-modal-hide="servicios-modal" data-modal-target="pubicar-modal" data-modal-toggle="publicar-modal" class=" transition ease-in .3s text-gray-300 flex border rounded-lg hover:border-cyan-600 hover:text-cyan-800/80 p-4 m-3 justify-between cursor-pointer font-medium border-gray-500">Publica tu negocio
<svg class="w-4 h-4 ms-3  rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg> </a> </div> </div> </div> </div>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/NuestrosServicios.astro", void 0);

const $$QueEs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="donar-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-5 w-full max-w-md max-h-full  bg-gray-950  rounded-md"> <div class="relative rounded-lg bg-gray-950/80 border border-gray-600"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 " data-modal-hide="donar-modal"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="w-full  h-auto pb-5"> <h5 class="text-cyan-600 p-4 text-lg font-bold">¿Qué es MUSE?</h5> <p class="text-gray-300 px-4">Mercados Unidos Santa Elena (MUSE) es una solución que intenta reunir toda la información disponible de los comercios
                        y servicios comerciales que se ofrecen en la ciudad, permitiendo a dichos actores exponerse para generar potenciales clientes de manera gratuita.
                        Somos una plataforma donde comerciantes, profesionales y todo aquel que quiera
                        comercializar con un producto o servicio pueda publicitarse libremente ante la sociedad.</p> <h5 class="text-lg font-bold text-cyan-600  p-4">¿Cómo funciona MUSE?</h5> <p class="text-gray-300 px-4">Simplemente entras en la web, vas a "Publica tu negocio", cargas los datos y esperas a que nosotros, en un transcurso
                        de 48 horas hábiles, te contactemos para confirmar la veracidad de dichos datos. Si el proceso es exitoso, en un máximo de 8 horas verás tu marca o servicio
                        publicitado en la página.</p> </div> </div> </div> </div>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/QueEs.astro", void 0);

const $$Publicar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Main modal -->${maybeRenderHead()}<div id="publicar-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-4 w-full max-w-md max-h-full rounded-lg bg-gray-950/80 shadow-gray-900"> <!-- Modal content --> <div class="relative rounded-lg shadow-lg opacity-70 border border-gray-600"> <!-- Modal header --> <div class="flex justify-end p-2"> <button type="button" class="end-2.5 text-gray-400 bg-transparent object-left hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="publicar-modal"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> </div> <div class="flex justify-center items-center py-4"> <img src="../../public/IMGs/logo.png" class="object-cover w-18 h-18 border-3 border-cyan-900 rounded-full" alt="logo"> </div> <div class="flex items-center justify-between p-4 md:p-5 "> <h3 class="flex justify-center w-full text-xl font-semibold text-gray-300">
Publica tu Negocio o Servicio
</h3> </div> <!-- Modal body --> <div class="space-y-4 mb-4 flex flex-col"> <a href="/sendFormPro" data-modal-hide="publicar-modal" class=" transition ease-in .3s text-gray-300 flex border rounded-lg hover:border-cyan-600 hover:text-cyan-800/80 p-4 m-3 justify-between cursor-pointer font-medium border-gray-500">Profesion/Oficio
<svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg> </a> <a href="/sendFormCom" data-modal-hide="publicar-modal" class=" transition ease-in .3s text-gray-300 flex border rounded-lg hover:border-cyan-600 hover:text-cyan-800/80 p-4 m-3 justify-between cursor-pointer font-medium border-gray-500">Comercio/Producto/Servicio
<svg class="w-4 h-4 ms-3  rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg> </a> </div> </div> </div> </div>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Publicar.astro", void 0);

const $$Publicidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="publicidad-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-4 w-full max-w-md max-h-full bg-gray-950 opacity-80 rounded-lg shadow-lg shadow-gray-900"> <div class="relative rounded-lg shadow-sm bg-gray-950 opacity-80"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="publicidad-modal"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <!-- body --> <div class=" h-auto w-full border border-gray-600 rounded-lg flex-col flex justify-center items-center"> <div class="mt-5"> <img src="../../public/IMGs/logo.png" class=" w-18 object-cover rounded-full border-3 border-cyan-800" alt="logo"> </div> <h4 class="text-gray-100 text-2xl px-5 mt-8 mb-3 ">Publicidad en Mercados Unidos</h4> <p class="text-gray-100 py-5 px-7 ">El espacio publicitario en Mercados Unidos esta valorado dependiendo de la visibilidad
                    de los banners de cara al usuario, <a class="font-bold text-cyan-600 text-lg" href="/public/IMGs/banners.png">aquí</a> se detallan dichos espacios y sus valores.
                        Para solicitar mas información, costos y nuestra publicidad mandanos a <span class="font-bold text-cyan-600">mercadosunidos_se@gmail.com.</span> <br>¡Gracias!
                          ¡Que tengas un buen día!
</p> <div class="flex justify-center"> <small class="text-gray-100 py-3">Para saber más sobre nuestra politica de publicidad <a class="text-cyan-600" href="/terminosycondiciones">aquí</a></small> </div> </div> </div> </div> </div>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Publicidad.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const siteKey = "0x4AAAAAABCNmOzraV7rhN1s";
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<div id="popup-contacto" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/90 rounded-md"> <div class="relative rounded-lg  border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-contacto"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="p-4 text-center flex flex-col gap-4"> <div class="flex w-ful justify-center mt-5"> <img src="../../public/IMGs/logo.png" class=" w-18 object-cover rounded-full border-3 border-cyan-800" alt="logo"> </div> <div class="flex gap-4 mt-3"> <svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"></path></svg> <p class="text-gray-300">mercadosunidos_se@gmail.com</p> </div> <small class="text-cyan-600 text-xs mt-2">Escribenos a nuestro email. Sino mandanos tu mensaje junto con tu email y te contactaremos a la brevedad. No ponemos otros medios de contactos por cuestiones de seguridad.</small> <form id="contact-Form"> <div class="flex text-gray-100 gap-2 items-center mt-3 mb-1"> <label class="text-xs" for="email">E-mail:</label> <input type="email" id="email" class="border-cyan-600 w-80 h-8 text-xs rounded-lg bg-transparent outline-none focus:border-none placeholder:text-xs" placeholder="mariagonalez_1@gmail.com"> </div> <div class="mt-3 mb-3 flex justify-start"> <p id="validacion-email" style="display: none"></p> </div> <div class="text-gray-100 flex flex-col gap-2 items-start w-full"> <label class="text-xs" for="mensaje">Mensaje:</label> <textarea class="w-full text-xs border-cyan-600 bg-transparent rounded-lg h-36" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje aqu\xED..."></textarea> </div> <div class="mt-3 mb-2 flex justify-start"> <p id="validacion-descripcion" style="display: none"></p> </div> <div class="flex mt-4 mb-2"> <div class="cf-turnstile"', `></div> </div> <button type="submit" id="submit-btn" class="cursor-pointer rounded-lg mt-2 text-gray-300 border border-gray-400 bg-cyan-900 w-full h-12">Enviar</button> </form> </div> </div> </div> </div> <script type="module">
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getFirestore, getDoc, setDoc, doc, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

enableIndexedDbPersistence(db)
    .then(() => {
        console.log("Persistencia offline habilitada");
    })
    .catch((error) => {
        console.error("Error al habilitar la persistencia offline:", error);
    });  

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-Form');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  const submitBtn = document.getElementById('submit-btn');

  if (form && emailInput && mensajeInput && submitBtn) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      let email = emailInput.value.trim().toLowerCase();

      
      email = email.replace(/\\./g, '_').replace(/[^a-zA-Z0-9_@-]/g, ''); 

      console.log("Email procesado:", email);

      if (!email) {
        alert("Coloca un e-mail de contacto.");
        submitBtn.disabled = false;
        return;
      }

      if(mensajeInput.value === ''){
      alert("\xA1Por favor! Escribe un mensaje.");
        submitBtn.disabled = false;
        return;
      }

      if(mensajeInput.value.length <= 49){
      alert("El mensaje debe tener min 50 caracteres.");
        submitBtn.disabled = false;
        return;
      }

      try {
        
        const docRef = doc(db, 'contacto', email);
        console.log("ID del documento que estamos intentando verificar:", docRef.id);

        const docSnap = await getDoc(docRef);
        console.log("Documento ya existe:", docSnap.exists()); 

        if (docSnap.exists()) {
          alert("Este e-mail ya ha enviado un mensaje. Te responderemos a la brevedad.");
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar';
          return;
        }

        await setDoc(docRef, {
          email: email,
          mensaje: mensajeInput.value.trim(),
          timestamp: new Date()
        });

        console.log("Documento guardado con ID:", docRef.id);
        alert("Tu mensaje fue enviado exitosamente. \xA1Gracias! \u{1F600}");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        form.reset();

      } catch (e) {
        console.error("Error al guardar el mensaje:", e);
        alert("Hubo un error al enviar el mensaje.");
      }

      submitBtn.disabled = false;
    });
  } else {
    console.error("Error al cargar el formulario");
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  }
});

// VALIDACION

document.getElementById("mensaje").addEventListener("keyup", function() {
  const descripcion = this.value;
  const mensajeDescripcion = document.getElementById("validacion-descripcion");

  if (descripcion === "") {
    mensajeDescripcion.textContent = "\u274C Debes poner un mensaje de 50 caracteres min.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-red-800', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-green-500');
    return
  }

  if (descripcion.length >= 50 && descripcion.length <= 500) {
    mensajeDescripcion.textContent = "\u2705 Descripci\xF3n v\xE1lida";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-green-500', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-red-800');
  } else {
    mensajeDescripcion.textContent = "\u274C El mensaje debe tener entre 50 y 500 caracteres.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-red-800', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-green-500');
  }
});

document.getElementById("email").addEventListener("keyup", function() {
    const email = this.value;
    const mensajeEmail = document.getElementById("validacion-email");

    if (email === "") {
      mensajeEmail.textContent = "\u274C Debes poner una e-mail";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'font-bold');
      mensajeEmail.classList.remove('text-green-500'); 
    return; 
  }

    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (regex.test(email)) {
      mensajeEmail.textContent = "\u2705 Correo v\xE1lido";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "green"
      mensajeEmail.classList.add('text-xs', 'font-bold')

    } else {
      mensajeEmail.textContent = "\u274C Correo inv\xE1lido, a\xFAn te falta. Ej: micorreo@email.com";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'font-bold')
    }
  });
  <\/script>`], ["", '<div id="popup-contacto" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/90 rounded-md"> <div class="relative rounded-lg  border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-contacto"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="p-4 text-center flex flex-col gap-4"> <div class="flex w-ful justify-center mt-5"> <img src="../../public/IMGs/logo.png" class=" w-18 object-cover rounded-full border-3 border-cyan-800" alt="logo"> </div> <div class="flex gap-4 mt-3"> <svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"></path></svg> <p class="text-gray-300">mercadosunidos_se@gmail.com</p> </div> <small class="text-cyan-600 text-xs mt-2">Escribenos a nuestro email. Sino mandanos tu mensaje junto con tu email y te contactaremos a la brevedad. No ponemos otros medios de contactos por cuestiones de seguridad.</small> <form id="contact-Form"> <div class="flex text-gray-100 gap-2 items-center mt-3 mb-1"> <label class="text-xs" for="email">E-mail:</label> <input type="email" id="email" class="border-cyan-600 w-80 h-8 text-xs rounded-lg bg-transparent outline-none focus:border-none placeholder:text-xs" placeholder="mariagonalez_1@gmail.com"> </div> <div class="mt-3 mb-3 flex justify-start"> <p id="validacion-email" style="display: none"></p> </div> <div class="text-gray-100 flex flex-col gap-2 items-start w-full"> <label class="text-xs" for="mensaje">Mensaje:</label> <textarea class="w-full text-xs border-cyan-600 bg-transparent rounded-lg h-36" name="mensaje" id="mensaje" placeholder="Escribe tu mensaje aqu\xED..."></textarea> </div> <div class="mt-3 mb-2 flex justify-start"> <p id="validacion-descripcion" style="display: none"></p> </div> <div class="flex mt-4 mb-2"> <div class="cf-turnstile"', `></div> </div> <button type="submit" id="submit-btn" class="cursor-pointer rounded-lg mt-2 text-gray-300 border border-gray-400 bg-cyan-900 w-full h-12">Enviar</button> </form> </div> </div> </div> </div> <script type="module">
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
import { getFirestore, getDoc, setDoc, doc, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

enableIndexedDbPersistence(db)
    .then(() => {
        console.log("Persistencia offline habilitada");
    })
    .catch((error) => {
        console.error("Error al habilitar la persistencia offline:", error);
    });  

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-Form');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  const submitBtn = document.getElementById('submit-btn');

  if (form && emailInput && mensajeInput && submitBtn) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      let email = emailInput.value.trim().toLowerCase();

      
      email = email.replace(/\\\\./g, '_').replace(/[^a-zA-Z0-9_@-]/g, ''); 

      console.log("Email procesado:", email);

      if (!email) {
        alert("Coloca un e-mail de contacto.");
        submitBtn.disabled = false;
        return;
      }

      if(mensajeInput.value === ''){
      alert("\xA1Por favor! Escribe un mensaje.");
        submitBtn.disabled = false;
        return;
      }

      if(mensajeInput.value.length <= 49){
      alert("El mensaje debe tener min 50 caracteres.");
        submitBtn.disabled = false;
        return;
      }

      try {
        
        const docRef = doc(db, 'contacto', email);
        console.log("ID del documento que estamos intentando verificar:", docRef.id);

        const docSnap = await getDoc(docRef);
        console.log("Documento ya existe:", docSnap.exists()); 

        if (docSnap.exists()) {
          alert("Este e-mail ya ha enviado un mensaje. Te responderemos a la brevedad.");
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar';
          return;
        }

        await setDoc(docRef, {
          email: email,
          mensaje: mensajeInput.value.trim(),
          timestamp: new Date()
        });

        console.log("Documento guardado con ID:", docRef.id);
        alert("Tu mensaje fue enviado exitosamente. \xA1Gracias! \u{1F600}");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        form.reset();

      } catch (e) {
        console.error("Error al guardar el mensaje:", e);
        alert("Hubo un error al enviar el mensaje.");
      }

      submitBtn.disabled = false;
    });
  } else {
    console.error("Error al cargar el formulario");
    submitBtn.disabled = false;
    submitBtn.textContent = 'Enviar';
  }
});

// VALIDACION

document.getElementById("mensaje").addEventListener("keyup", function() {
  const descripcion = this.value;
  const mensajeDescripcion = document.getElementById("validacion-descripcion");

  if (descripcion === "") {
    mensajeDescripcion.textContent = "\u274C Debes poner un mensaje de 50 caracteres min.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-red-800', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-green-500');
    return
  }

  if (descripcion.length >= 50 && descripcion.length <= 500) {
    mensajeDescripcion.textContent = "\u2705 Descripci\xF3n v\xE1lida";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-green-500', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-red-800');
  } else {
    mensajeDescripcion.textContent = "\u274C El mensaje debe tener entre 50 y 500 caracteres.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.classList.add('text-red-800', 'text-xs', 'font-bold');
    mensajeDescripcion.classList.remove('text-green-500');
  }
});

document.getElementById("email").addEventListener("keyup", function() {
    const email = this.value;
    const mensajeEmail = document.getElementById("validacion-email");

    if (email === "") {
      mensajeEmail.textContent = "\u274C Debes poner una e-mail";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'font-bold');
      mensajeEmail.classList.remove('text-green-500'); 
    return; 
  }

    const regex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;

    if (regex.test(email)) {
      mensajeEmail.textContent = "\u2705 Correo v\xE1lido";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "green"
      mensajeEmail.classList.add('text-xs', 'font-bold')

    } else {
      mensajeEmail.textContent = "\u274C Correo inv\xE1lido, a\xFAn te falta. Ej: micorreo@email.com";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'font-bold')
    }
  });
  <\/script>`])), maybeRenderHead(), addAttribute(siteKey, "data-sitekey"));
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Contacto.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Denunciar = createComponent(async ($$result, $$props, $$slots) => {
  const siteKey = "0x4AAAAAABCNmOzraV7rhN1s";
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div id="popup-denuncia" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/70 rounded-md"> <div class="relative rounded-lg  border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-denuncia"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="p-4 text-center flex flex-col gap-4"> <div class="flex w-ful justify-center mt-3 mb-5"> <img src="../../public/IMGs/logo.png" class=" w-18 object-cover rounded-full border-3 border-cyan-800" alt="logo"> </div> <form id="denuncia-Form"> <div class="flex gap-2 items-center justify-start mb-3"> <label for="denuncia" class="text-gray-300 text-xs"> Tipo de denuncia</label> <select name="denuncia" id="denuncia" class="w-1/2 bg-gray-950/70  text-gray-300 h-8 rounded-lg border border-cyan-600 text-xs"> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs"></option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="noexiste-inactivo">El negocio ya no existe/ inactivo</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="info-desactualizada">Infomaci\xF3n erronea o desactualizada</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="estafa">Es estafa</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="otro-motivo">Otro motivo</option> </select> </div> <small class="text-cyan-600 text-xs mt-2">Necesitamos que nos des los motivos de la denuncia y dejes un email de contacto.\n                        Ni bien recibamos tu denuncia la evaluaremos y te estaremos contactando para continuar con el proceso.\n</small> <div class="flex text-gray-100 gap-2 items-center mt-3 mb-4"> <label class="text-xs" for="email">E-mail:</label> <input type="email" id="email" class="border-cyan-600 w-80 h-8 text-xs rounded-lg bg-transparent outline-none focus:border-none placeholder:text-xs" placeholder="mariagonzalez_1@gmail.com"> </div> <div class="mt-3 mb-3 flex justify-start"> <p id="validacion-email" style="display: none"></p> </div> <div class="text-gray-100 flex flex-col gap-2 items-start w-full"> <label class="text-xs" for="mensaje">Mensaje:</label> <textarea maxlength="500" id="mensaje" class="w-full text-xs border-cyan-600 bg-transparent rounded-lg h-36" name="mensaje" id="mensaje" placeholder="Detallanos los motivos de la denuncia..."></textarea> </div> <div class="mt-3 mb-2 flex justify-start"> <p id="validacion-descripcion" style="display: none"></p> </div> <div class="flex mt-4"> <div class="cf-turnstile"', `></div> </div> <button type="submit" id="submit-btn" class="cursor-pointer rounded-lg text-gray-300 mt-2 border border-gray-400 bg-cyan-900 w-full h-12">Enviar</button> </form> <small class="text-cyan-600 text-xs mt-2">Para saber m\xE1s sobre nuestra politica de denuncia <a href="/terminosycondiciones" class="text-gray-300 cursor-pointer">ingresa aqu\xED</a>.</small> </div> </div> </div> </div> <script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
  import { getFirestore, doc, getDoc, setDoc, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  enableIndexedDbPersistence(db)
    .then(() => {
        console.log("Persistencia offline habilitada");
    })
    .catch((error) => {
        console.error("Error al habilitar la persistencia offline:", error);
    });  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('denuncia-Form');
    
    if (!form) {
      console.error('No se activ\xF3 el formulario');
      return;
    }

    form.addEventListener('submit', async (event) => {
      
      event.preventDefault();
      console.log('Flujo del formulario activado');

      const emailInput = form.querySelector('#email');
      const mensajeInput = form.querySelector('#mensaje');
      const tipoDenuncia = form.querySelector('#denuncia');
      const submitBtn = form.querySelector('#submit-btn');

      if (!emailInput || !mensajeInput || !tipoDenuncia|| !submitBtn) {
        console.error('Elementos del formulario no encontrados');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      if (emailInput.value === '') {
        alert("Coloca un e-mail de contacto.");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return;
      }


      if(mensajeInput.value === ''){
      alert("Describe la denuncia");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return;
      }

      if(!tipoDenuncia.value){
        alert("Selecciona un tipo de denuncia")
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return
      }

      let email = emailInput.value.trim().toLowerCase();

      email = email.replace(/\\./g, '_').replace(/[^a-zA-Z0-9_@-]/g, ''); 

      console.log("Email procesado:", email);
  
      try {
        const docRef = doc(db, 'Denuncias', email);
        console.log("ID del documento que estamos intentando verificar:", docRef.id);

        const docSnap = await getDoc(docRef);
        console.log("Documento ya existe:", docSnap.exists()); 

        if (docSnap.exists()) {
          alert("Este e-mail ya ha enviado un mensaje. Te responderemos a la brevedad.");
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar';
          form.reset()
          return;
        }

        await setDoc(docRef, {
          email: email,
          mensaje: mensajeInput.value.trim(),
          tipoDenuncia: tipoDenuncia.value,
          timestamp: new Date()
        });

        console.log("Documento guardado con ID:", docRef.id);
        alert("Tu mensaje fue enviado exitosamente. \xA1Gracias! \u{1F600}");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        form.reset()
        
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error de conexion al enviar tu denuncia, vuelve a intentarlo');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
      }
        
    });
  });

  <\/script>`], ["", '<div id="popup-denuncia" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/70 rounded-md"> <div class="relative rounded-lg  border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-denuncia"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="p-4 text-center flex flex-col gap-4"> <div class="flex w-ful justify-center mt-3 mb-5"> <img src="../../public/IMGs/logo.png" class=" w-18 object-cover rounded-full border-3 border-cyan-800" alt="logo"> </div> <form id="denuncia-Form"> <div class="flex gap-2 items-center justify-start mb-3"> <label for="denuncia" class="text-gray-300 text-xs"> Tipo de denuncia</label> <select name="denuncia" id="denuncia" class="w-1/2 bg-gray-950/70  text-gray-300 h-8 rounded-lg border border-cyan-600 text-xs"> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs"></option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="noexiste-inactivo">El negocio ya no existe/ inactivo</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="info-desactualizada">Infomaci\xF3n erronea o desactualizada</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="estafa">Es estafa</option> <option class="hover:bg-cyan-800 hover:text-gray-500 text-xs" value="otro-motivo">Otro motivo</option> </select> </div> <small class="text-cyan-600 text-xs mt-2">Necesitamos que nos des los motivos de la denuncia y dejes un email de contacto.\n                        Ni bien recibamos tu denuncia la evaluaremos y te estaremos contactando para continuar con el proceso.\n</small> <div class="flex text-gray-100 gap-2 items-center mt-3 mb-4"> <label class="text-xs" for="email">E-mail:</label> <input type="email" id="email" class="border-cyan-600 w-80 h-8 text-xs rounded-lg bg-transparent outline-none focus:border-none placeholder:text-xs" placeholder="mariagonzalez_1@gmail.com"> </div> <div class="mt-3 mb-3 flex justify-start"> <p id="validacion-email" style="display: none"></p> </div> <div class="text-gray-100 flex flex-col gap-2 items-start w-full"> <label class="text-xs" for="mensaje">Mensaje:</label> <textarea maxlength="500" id="mensaje" class="w-full text-xs border-cyan-600 bg-transparent rounded-lg h-36" name="mensaje" id="mensaje" placeholder="Detallanos los motivos de la denuncia..."></textarea> </div> <div class="mt-3 mb-2 flex justify-start"> <p id="validacion-descripcion" style="display: none"></p> </div> <div class="flex mt-4"> <div class="cf-turnstile"', `></div> </div> <button type="submit" id="submit-btn" class="cursor-pointer rounded-lg text-gray-300 mt-2 border border-gray-400 bg-cyan-900 w-full h-12">Enviar</button> </form> <small class="text-cyan-600 text-xs mt-2">Para saber m\xE1s sobre nuestra politica de denuncia <a href="/terminosycondiciones" class="text-gray-300 cursor-pointer">ingresa aqu\xED</a>.</small> </div> </div> </div> </div> <script type="module">
  import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
  import { getFirestore, doc, getDoc, setDoc, enableIndexedDbPersistence } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';
  
  const firebaseConfig = {
    apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  enableIndexedDbPersistence(db)
    .then(() => {
        console.log("Persistencia offline habilitada");
    })
    .catch((error) => {
        console.error("Error al habilitar la persistencia offline:", error);
    });  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('denuncia-Form');
    
    if (!form) {
      console.error('No se activ\xF3 el formulario');
      return;
    }

    form.addEventListener('submit', async (event) => {
      
      event.preventDefault();
      console.log('Flujo del formulario activado');

      const emailInput = form.querySelector('#email');
      const mensajeInput = form.querySelector('#mensaje');
      const tipoDenuncia = form.querySelector('#denuncia');
      const submitBtn = form.querySelector('#submit-btn');

      if (!emailInput || !mensajeInput || !tipoDenuncia|| !submitBtn) {
        console.error('Elementos del formulario no encontrados');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      if (emailInput.value === '') {
        alert("Coloca un e-mail de contacto.");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return;
      }


      if(mensajeInput.value === ''){
      alert("Describe la denuncia");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return;
      }

      if(!tipoDenuncia.value){
        alert("Selecciona un tipo de denuncia")
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        return
      }

      let email = emailInput.value.trim().toLowerCase();

      email = email.replace(/\\\\./g, '_').replace(/[^a-zA-Z0-9_@-]/g, ''); 

      console.log("Email procesado:", email);
  
      try {
        const docRef = doc(db, 'Denuncias', email);
        console.log("ID del documento que estamos intentando verificar:", docRef.id);

        const docSnap = await getDoc(docRef);
        console.log("Documento ya existe:", docSnap.exists()); 

        if (docSnap.exists()) {
          alert("Este e-mail ya ha enviado un mensaje. Te responderemos a la brevedad.");
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar';
          form.reset()
          return;
        }

        await setDoc(docRef, {
          email: email,
          mensaje: mensajeInput.value.trim(),
          tipoDenuncia: tipoDenuncia.value,
          timestamp: new Date()
        });

        console.log("Documento guardado con ID:", docRef.id);
        alert("Tu mensaje fue enviado exitosamente. \xA1Gracias! \u{1F600}");
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
        form.reset()
        
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error de conexion al enviar tu denuncia, vuelve a intentarlo');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar';
      }
        
    });
  });

  <\/script>`])), maybeRenderHead(), addAttribute(siteKey, "data-sitekey"));
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Denunciar.astro", void 0);

const $$Landing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div id="default-carousel" class="relative w-full" data-carousel="slide"> <!-- Carousel wrapper --> <div class="relative overflow-hidden h-dvh border-b border-gray-600"> <!-- Item 1 --> <div class="hidden duration-500 ease-linear" data-carousel-item> <img src="../../public/IMGs/publi1.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <!-- Item 2 --> <div class="hidden duration-500 ease-linear" data-carousel-item> <img src="../../public/IMGs/publi2.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <!-- Item 3 --> <div class="hidden duration-500 ease-linear" data-carousel-item> <img src="../../public/IMGs/publi1.avif" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> <!-- Item 4 --> <div class="hidden duration-500 ease-linear" data-carousel-item> <img src="../../public/IMGs/publi4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button> <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button> </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/30 group-hover:bg-gray-900/60 group-focus:ring-4  group-focus:ring-gray-800/70 group-focus:outline-none dark:border border-cyan-800/30 ring-2 ring-gray-700"> <svg class="w-4 h-4 text-white dark:text-gray-500 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/30 group-hover:bg-gray-900/60 group-focus:ring-4  group-focus:ring-gray-800/70 group-focus:outline-none dark:border border-cyan-800/30 ring-2 ring-gray-700"> <svg class="w-4 h-4 text-white dark:text-gray-500 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Landing.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<div class="h-44 flex justify-end items-end relative mr-10"> <div class="absolute top-50 left-130 z-50"> <p id="noResultsMessage" class=" hidden text-cyan-500 text-lg "><svg class="w-full mb-2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#1dabf1" d="M32 2C15.428 2 2 15.428 2 32s13.428 30 30 30s30-13.428 30-30S48.572 2 32 2m0 57.5C16.836 59.5 4.5 47.164 4.5 32S16.836 4.5 32 4.5S59.5 16.836 59.5 32c0 1.357-.103 2.69-.294 3.996c-.838-5.66-5.69-10.766-5.69-10.766s-5.828 6.113-5.828 12.375c0 6.353 6.393 7.996 9.708 4.937C53.251 52.488 43.431 59.5 32 59.5"></path><circle cx="38.498" cy="35" r="5" fill="#1dabf1"></circle><circle cx="15.498" cy="35" r="5" fill="#1dabf1"></circle><path fill="#1dabf1" d="M21.992 21.58c.541-.469-.971-2.061-1.414-1.674a14.23 14.23 0 0 1-11.693 3.133c-.578-.113-1.088 2.021-.385 2.156a16.42 16.42 0 0 0 13.492-3.615m23.121 1.307c-4.168.748-8.455-.4-11.691-3.133c-.443-.389-1.955 1.205-1.412 1.674a16.42 16.42 0 0 0 13.492 3.615c.703-.135.191-2.27-.389-2.156M38.074 47.33c-5.766-1.549-12.049-.428-16.93 3.014c-1.205.869 1.053 4.027 2.252 3.152c3.223-2.268 8.352-3.834 13.66-2.432c1.423.377 2.536-3.308 1.018-3.734"></path></svg>No se encontraron resultados.</p> </div> <form class="flex items-center" onsubmit="event.preventDefault(); filterCards();"> <label for="searchInput" class="sr-only">Buscar negocios</label> <div class="relative w-full"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="#aaa" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"></path> </svg> </div> <input type="text" id="searchInput" class="shadow-md shadow-gray-950 bg-gray-800/50 border-gray-600 text-sm rounded-lg block w-80 border ps-10 p-2.5 placeholder-gray-400 text-white" placeholder="Buscar negocios" aria-label="Buscar negocios" required> </div> <button type="submit" class="shadow-md shadow-gray-950 mr-3 p-3 ms-2 text-sm font-medium text-white bg-gray-900/60 rounded-full border border-gray-700 hover:bg-gray-800/70 cursor-pointer"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Buscar</span> </button> </form> <div class="contenedor-resultados"> <div id="show-resultados"></div> </div> </div> <script>
    const filterCards = () => {
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  let hasResults = false;

  cards.forEach((card) => {
    const title = card.querySelector('h5')?.textContent.toLowerCase() || '';
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';
    const small = card.querySelector('small')?.textContent.toLowerCase() || '';
    const p = card.querySelector('p')?.textContent.toLowerCase() || '';
    const a = card.querySelector('a')?.textContent.toLowerCase() || '';
    const label = card.querySelector('label')?.textContent.toLowerCase() || '';
    const div = card.querySelector('div')?.textContent.toLowerCase() || '';
    const ul = card.querySelector('ul')?.textContent.toLowerCase() || '';
    const li = card.querySelector('li')?.textContent.toLowerCase() || '';
    const h1 = card.querySelector('h1')?.textContent.toLowerCase() || '';
    const h2 = card.querySelector('h2')?.textContent.toLowerCase() || '';
    const h3 = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const h5 = card.querySelector('h5')?.textContent.toLowerCase() || '';
    const estado = card.querySelector('h6')?.textContent.toLowerCase() || '';
    const span = card.querySelector('span')?.textContent.toLowerCase() || '';
    const images = card.querySelector('img')?.textContent.toLowerCase() || '';
    const veinticuatro = card.querySelector('p')?.textContent.toLowerCase() || '';
    const soloredes = card.querySelector('p')?.textContent.toLowerCase() || '';
    const enviogratis = card.querySelector('small')?.textContent.toLowerCase() || '';
    const enviodomicilio = card.querySelector('small')?.textContent.toLowerCase() || '';
    


    if (title.includes(searchText) || description.includes(searchText)  || a.includes(searchText) || label.includes(searchText) || div.includes(searchText) || ul.includes(searchText)
    || li.includes(searchText) || h1.includes(searchText) || h2.includes(searchText) || h3.includes(searchText) || h5.includes(searchText) || estado.includes(searchText) || span.includes(searchText)
    || p.includes(searchText) || small.includes(searchText) || veinticuatro.includes(searchText) || soloredes.includes(searchText) || images.includes(searchText) || enviogratis.includes(searchText)
    || enviodomicilio.includes(searchText)) {
      card.classList.remove('hidden'); // Mostrar tarjeta
      hasResults = true;
    } else {
      card.classList.add('hidden'); // Ocultar tarjeta sin eliminarla
    }
  });

  // Mostrar u ocultar el mensaje de "No hay resultados"
  const noResultsMessage = document.getElementById('noResultsMessage');
  noResultsMessage?.classList.toggle('hidden', hasResults);
};

// Agregar event listener para b\xFAsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', filterCards);

// Evitar que el formulario se env\xEDe al presionar "Enter"
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  filterCards();
});

  <\/script>`])), maybeRenderHead());
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Search.astro", void 0);

const $$Filtro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- <div class="flex justify-start gap-6 mx-5 mt-20">
    <div class="w-40">
        <label for="metodos">Envio gratis</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected></option>
          <option value="gratis">Envios gratis</option>
        </select>
      </div>
      <div class="w-40">
        <label for="metodos">Metodos de pago</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected></option>
          <option value="dolar">dolar</option>
          <option value="mercado">mercadpago</option>
          <option value="visa">Tarjetas Visa</option>
          <option value="crypto">Cryptomonedas</option>
        </select>
      </div>
      <div class="w-40">
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
</div> -->`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Filtro.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro = createAstro();
const $$Cards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cards;
  const { card } = Astro2.props;
  const textos = [
    card.veinticuatro,
    card.soloredes,
    card.pagadolares,
    card.pagacripto,
    card.abiertodomingos,
    card.trabajodomingos,
    card.open365
  ].filter(Boolean);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' class="card mt-8 border-gray-600 border max-w-[38rem] rounded-lg bg-gray-800/15 shadow-up shadow-lg shadow-gray-950"', '> <div class="custom-scrollbar scrollCard overflow-auto h-[21rem]"> <div class="gap-4 flex flex-row items-center bg-transparent rounded-lg  max-w-full  py-4 pl-6 pr-2 h-auto"> <div id="controls-carousel" class="relative w-full rounded-lg overflow-hidden  transition-transform duration-300 ease-in-out shadow-lg shadow-gray-100/30" data-carousel="static"> <!-- Carousel --> <div class="imagen relative h-64 rounded-lg border-3 border-gray-700"> ', ' </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> ', ' </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 bg-gray-900/40 group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-2 h-2 text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 bg-gray-900/40 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-2 h-2 text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> <div class="flex flex-col justify-between pr-3 leading-normal w-3xl h-auto gap-2"> <h6 class="estado mb-2 w-16 flex py-1 justify-center text-xs font-bold">', ' </h6> <h5 class="text-2xl font-bold tracking-tight text-black">', '</h5> <p class="mb-3 text-gray-500 h-24">', '</p> <div class="mt-4"> <div class="relative h-[1.8rem] overflow-hidden"> ', ' </div> </div> </div> </div> <div> <div> <a class="flex scrollBtn justify-center transition-all ease-in duration-500 py-4 cursor-pointer hover:opacity-30"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="#556" d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"></path></svg> </a> </div> <!-- contacto --> <div class="px-5 "> <div class="flex gap-2 items-center mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#789" d="M2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm7-7q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m-6.9 5h13.8q-1.05-1.875-2.9-2.937T9 15t-4 1.063T2.1 19m15.4-7q0-.525.1-1.012t.25-.988H19q.25 0 .45-.1t.35-.3l.675-.9q.225-.3.2-.675t-.3-.65l-.7-.7Q19.4 6.4 19 6.387t-.7.263q-1.075 1-1.687 2.438T16 12t.613 2.913T18.3 17.35q.3.275.7.263t.675-.288l.7-.7q.275-.275.3-.65t-.2-.675l-.675-.9q-.15-.2-.35-.3T19 14h-1.15q-.15-.45-.25-.963T17.5 12"></path></svg> <h3 class="p-2font-normal text-gray-300 ">Contactanos aqu\xED</h3> </div> <div class="flex justify-between border border-gray-700 p-5 rounded-lg shadow-lg shadow-gray-950 h-auto"> <div> <div class="text-center flex flex-col gap-3"> <a', ' target="_blank"', '> <svg class="w-6 h-6 contenido-dinamico">', '</svg> <p class="text-gray-300 contenido-dinamico">', '</p> <small class="text-slate-600/90 text-xs font-bold ml-1">', "</small> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', '</p> </div> </a> </div> </div> <div> <div class="flex justify-center h-full border-3 border-gray-600 rounded-lg">', '</div> </div> </div> </div> </div> <!-- metodos de pago --> <div class="px-5 mt-10 mb-5"> <div> <div class="flex gap-2 items-center mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#789" d="M11.67 8.537a.3.3 0 0 0-.302.296v2.212a.3.3 0 0 0 .303.296h6.663a.3.3 0 0 0 .303-.296V8.833a.3.3 0 0 0-.303-.296zm4.086-7.036c.922.044 1.585.226 2.005.612c.415.382.628.935.67 1.667v2.097a.674.674 0 0 1-.681.666a.674.674 0 0 1-.682-.666l.001-2.059c-.022-.38-.113-.616-.243-.736c-.126-.116-.51-.22-1.103-.25H2.647c-.537.02-.886.122-1.055.267c-.13.111-.228.417-.229.946l-.003 11.77c.05.514.163.857.308 1.028c.11.13.451.26.953.324h13.116c.614.012.976-.08 1.098-.203c.135-.137.233-.497.233-1.086v-2.045c0-.367.305-.666.682-.666c.376 0 .681.299.681.666v2.045c0 .9-.184 1.573-.615 2.01c-.444.45-1.15.63-2.093.61L2.54 18.495c-.897-.104-1.54-.35-1.923-.803c-.347-.41-.54-.995-.617-1.813V4.044c.002-.876.212-1.535.694-1.947c.442-.38 1.08-.565 1.927-.597zm2.578 5.704c.92 0 1.666.729 1.666 1.628v2.212c0 .899-.746 1.628-1.666 1.628h-6.663c-.92 0-1.666-.73-1.666-1.628V8.833c0-.899.746-1.628 1.666-1.628zm-4.997 1.94c-.46 0-.833.36-.833.803s.373.803.833.803s.833-.36.833-.803s-.373-.804-.833-.804"></path></svg> <h3 class="p-2font-normal text-gray-300 ">Metodos de pago</h3> </div> <div class="border border-gray-700 rounded-lg shadow-lg shadow-gray-950 grid grid-cols-2 content-between p-5"> <div', ">", "</div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', '</p> </div> </div> </div> </div> <!-- Dias y Horarios --> <div class="px-5 mt-10"> <div class="flex items-center justify-between mb-2"> <div class="flex gap-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#789" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></path><rect width="2" height="7" x="11" y="6" fill="#fff" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect><rect width="2" height="9" x="11" y="11" fill="#456" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect></svg> <h3 class="p-2font-normal text-gray-300 ">Horarios y Dias laborales</h3> </div> <div class="col-span-2 w-76 grid grid-cols-2 gap-1"> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> </div> </div> <div class="p-3 border border-gray-700 rounded-lg shadow-lg shadow-gray-950"> <!-- Cabecera de la grilla --> <div class="grid grid-cols-3 gap-5 p-5"> <p class="text-black font-bold text-lg">D\xEDas</p> <p class="text-black font-bold text-lg">Horario AM</p> <p class="text-black font-bold text-lg">Horario PM</p> </div> <!-- Filas de la grilla --> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', " ", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small>a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white  p-2 rounded-md">', "", '</p> <p class="text-white w-40  p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40  p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <!-- <p class="text-white  p-2 border-gray-700 border rounded-md">{card.cerrado}</p>\n          <p class="text-white  p-2 border-gray-700 border rounded-md">{card.cerrado}</p> --> </div> </div> <!-- Caja de comentarios --> <div class="mt-10"> <div class="flex items-center px-2 gap-2 mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#789" d="M18 26h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"></path><path fill="#567" d="M20.549 11.217L16 2l-4.549 9.217L1.28 12.695l7.36 7.175L6.902 30L14 26.269v-2.26l-4.441 2.335l1.052-6.136l.178-1.037l-.753-.733l-4.458-4.347l6.161-.895l1.04-.151l.466-.943L16 6.519l2.755 5.583l.466.943l1.04.151l7.454 1.085L28 12.3z"></path></svg> <h3 class=" font-normal text-gray-300">Rese\xF1as</h3> </div> <div> <div class=" p-8 border border-gray-600 rounded-lg shadow-lg shadow-gray-950"> <div class="border border-gray-600 p-4 rounded-lg no-hay-comentarios mb-4 bg-gray-900/20 shadow-md shadow-gray-900"> <p class="text-gray-300 text-center">No hay comentarios a\xF9n \u{1F615}</p> </div> <div class="comentarios-container mt-4"></div> <!-- formulario comentarios --> <div class="hidden caja-comentarios mb-10" id="caja-comentarios"> <form', ' class=" comment-form border border-gray-600 rounded-lg shadow-lg shadow-gray-950"> <div class="w-full rounded-lg  p-4"> <div class="px-4 py-2 rounded-lg"> <div class="flex w-full justify-between px-2 gap-1 rounded-xs items-center mb-5"> <h5 class="text-gray-300">Deja tu rese\xF1a</h5> <div class="flex gap-2 items-center"> <small class="text-gray-600">Califica con estrellas</small> <div id="star-rating" class="star-rating cursor-pointer"> <span class="star text-2xl text-gray-600" data-value="1">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="2">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="3">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="4">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="5">&#9733;</span> </div> </div> </div> <input type="hidden" id="card-id"> <label for="comment-text" class="sr-only text-gray-300">T\xFA Rese\xF1a</label> <textarea id="comment-text" rows="4" class="w-full px-2 text-xs h-full rounded-lg bg-transparent text-smborder-0  focus:ring-0 text-white placeholder-gray-400" placeholder="Escribe tu rese\xF1a" required></textarea> </div> <div class="flex items-center justify-between px-3 py-2"> <button type="submit" class="cursor-pointer inline-flex items-center py-2.5 px-4 text-xs border border-gray-600 font-medium text-center text-white bg-cyan-800 rounded-lg  focus:ring-1\n                     hover:bg-cyan-800/60">\nComentar\n</button> </div> </div> </form> </div> <div class="mb-8 estadisticas-tarjeta p-4 bg-gray-900/20 border border-gray-600 rounded-lg shadow-lg shadow-gray-950 mt-4 text-gray-300 text-center"', '>Sin calificaciones \u2730</div> <div class="flex gap-3 items-center"> <button id="abrir-modal-boton" data-modal-target="popup-rese\xF1as" data-modal-toggle="popup-rese\xF1as" type="button" class="shadow-md shadow-black abrir-modal-boton dejar-rese\xF1a-btn cursor-pointer w-auto text-center flex  gap-2 text-black border border-black hover:opacity/50 hover:bg-gray-950/10 hover:shadow-md hover:shadow-gray-950 font-medium rounded-lg text-sm px-5 py-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10 9.5h.621l.44.44l1.51 1.51a.174.174 0 0 0 .295-.136l-.112-1.454l-.062-.809l.642-.495C14.037 8.016 14.5 7.211 14.5 6c0-1.214-.465-2.019-1.17-2.56c-.754-.578-1.902-.94-3.33-.94s-2.576.362-3.33.94C5.966 3.98 5.5 4.786 5.5 6s.465 2.019 1.17 2.56c.754.578 1.902.94 3.33.94m.52 2.02l.99.99a1.673 1.673 0 0 0 2.851-1.312l-.111-1.453C15.33 8.91 16 7.663 16 6c0-3.333-2.686-5-6-5c-2.127 0-3.995.687-5.06 2.06C2.131 3.384 0 5.03 0 8c0 1.663.669 2.911 1.75 3.745l-.111 1.453A1.673 1.673 0 0 0 4.49 14.51L6 13c1.803 0 3.42-.493 4.52-1.48M4.143 4.736Q4.001 5.32 4 6c0 2.905 2.04 4.544 4.759 4.918c-.717.366-1.654.582-2.759.582h-.621l-.44.44l-1.51 1.51a.174.174 0 0 1-.295-.136l.112-1.454l.062-.809l-.642-.495C1.963 10.016 1.5 9.211 1.5 8c0-1.214.465-2.019 1.17-2.56c.391-.3.887-.541 1.473-.704" clip-rule="evenodd"></path></svg>Dejar rese\xF1a</button> <button id="logout-btn" type="button" class="logout-btn cursor-pointer w-auto text-center hidden text-black border border-black hover:opacity/50 hover:bg-gray-950/10 hover:shadow-xs hover:shadow-gray-700/70 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button> </div> </div> </div> <button data-modal-target="popup-denuncia" data-modal-toggle="popup-denuncia" type="button" class=" my-8 shadow-md shadow-gray-900 cursor-pointer flex  gap-2 text-red-700 border border-red-700 hover:opacity/50 hover:bg-gray-950/10 hover-xs hover:shadow-gray-900/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#f70101" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)" stroke-width="1"><circle cx="8.5" cy="8.5" r="8"></circle><path d="M14 3L3 14"></path></g></svg> Denunciar</button> <!-- Seccion array para busqueda --> <small class="text-slate-500/60 font-bold ml-1 hidden">', '</small> <small class="text-slate-500/60 font-bold ml-1 hidden">', '</small> </div> </div> </div> <!-- footer --> <div class="border-t border-gray-700 flex justify-between"> <div> <p class="text-black text-lg pt-3 font-extrabold px-5 flex items-center h-11">', ' <small class="text-slate-600/80 text-lg font-extrabold ml-1">', '</small> <small class="text-slate-600/80 text-lg font-extrabold ml-1">', "</small> </p> <p", ">", ' <small class="text-slate-600/80 text-lg font-extrabold ml-1">', '</small> <small class="text-slate-600/80 text-lg font-extrabold ml-1">', "</small> </p> <p", ">", ' <small class="text-slate-500/60 font-extrabold ml-1">', '</small> <small class="text-slate-500/60 font-extrabold ml-1">', '</small> <small class="text-slate-500/60 font-extrabold ml-1">', '</small> </p> </div> <div class="flex justify-center max-h-full"> <div class="flex gap-2 items-end p-3"> <a', ' target="_blank"', '> <svg class="w-8 h-8 flex items-end p-0 m-0">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', `</svg> </a> </div> </div> </div> </div> <script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, query, where, onSnapshot, setDoc, doc, orderBy, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Cerrar sesi\xF3n
function logout() {
  // 1. Verificar si auth est\xE1 inicializado
  if (!auth) {
    console.error("Firebase Auth no est\xE1 inicializado");
    return;
  }

  // 2. Cerrar sesi\xF3n con Firebase
  signOut(auth)
    .then(() => {
      console.log("Sesi\xF3n cerrada exitosamente");
      
      // 3. Limpiar datos locales
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData'); // Limpiar datos adicionales si existen
      
      // 4. Redirecci\xF3n mejorada
      window.location.href = '/'; // Mejor que reload para SPA
    })
    .catch((error) => {
      console.error("Error al cerrar sesi\xF3n:", error);
      
      // 5. Manejo espec\xEDfico de errores
      if (error.code === "auth/network-request-failed") {
        alert("Fallo la conexi\xF3n");
      } else {
        alert("Error al cerrar sesi\xF3n");
      }
    });
}

// 6. Event listeners mejorados
function setupLogoutButtons() {
  document.querySelectorAll(".logout-btn").forEach(button => {
    // Evitar m\xFAltiples listeners
    button.removeEventListener("click", logout); 
    button.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  });
}

// 7. Ejecutar cuando el DOM est\xE9 listo
document.addEventListener('DOMContentLoaded', setupLogoutButtons);

let isSubmitting = false;

document.querySelectorAll('.comment-form').forEach(form => {
  let selectedRating = 0;
  const stars = form.querySelectorAll('.star-rating .star'); // Selecciona solo las estrellas dentro de este formulario

  stars.forEach(star => {
    star.addEventListener('click', (e) => {
      selectedRating = parseInt(e.target.getAttribute('data-value'));
      updateStars(selectedRating, stars);
    });

    star.addEventListener('mouseover', () => {
      updateStars(parseInt(star.getAttribute('data-value')), stars);
    });

    star.addEventListener('mouseout', () => {
      updateStars(selectedRating, stars);
    });
  });

  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    isSubmitting = true;
    
    submitButton.disabled = true;
    submitButton.textContent = "Comentando...";

    const card = form.closest('[data-card-id]');
    const cardId = card.dataset.cardId;

    const user = auth.currentUser;
    if (!user) {
      alert("Debes estar autenticado para comentar.");
      resetButton(submitButton);
      return;
    }

    const username = user.displayName ? user.displayName : user.email;
    const commentText = form.querySelector('#comment-text').value;
    
    if (!commentText || selectedRating == 0) {
      alert('Por favor, escribe un comentario y selecciona una calificaci\xF3n.');
      resetButton(submitButton);
      return;
    }

    const commentRef = doc(db, "cards", cardId, "comments", username);
    
    try {
      const commentSnap = await getDoc(commentRef);
      if (commentSnap.exists()) {
        alert("Solo puedes comentar una vez.");
        resetButton(submitButton);
        form.reset();
        updateStars(0, stars);
        return;
      }

      await setDoc(commentRef, {
        cardId: cardId,
        username: username,
        comment: commentText.trim(),
        rating: selectedRating,
        timestamp: new Date()
      });

      mostrarComentarios(cardId);

      console.log(\`\u2705 Comentario de \${username} guardado en la tarjeta \${cardId}\`);
      form.reset();
      updateStars(0, stars);
      submitButton.textContent = "\u2713 Enviado";

    } catch (error) {
      console.error(\`\u274C Error en la tarjeta \${cardId}:\`, error);
      
      if (error.code === "unavailable") {
        alert("No tienes conexi\xF3n a Internet.");
      } else {
        alert("Ocurri\xF3 un error inesperado");
      }

      resetButton(submitButton);

    } finally {
      setTimeout(() => resetButton(submitButton), 2000);
    }
  });

  function updateStars(rating, stars) {
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
});

function resetButton(button) {
  button.disabled = false;
  button.textContent = "Comentar";
  isSubmitting = false;
}


// Funci\xF3n de mostrar comentarios
function mostrarComentarios(cardId) {
  const comentariosContainer = document.querySelector(\`[data-card-id="\${cardId}"] .comentarios-container\`);
  const noComentariosDiv = document.querySelector(\`[data-card-id="\${cardId}"] .no-hay-comentarios\`);

  if (!comentariosContainer) {
    console.error(\`No se encontr\xF3 el contenedor para card \${cardId}\`);
    return;
  }

  const q = query(collection(db, "cards", cardId, "comments"), orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) => {
    comentariosContainer.innerHTML = '';

    const user = auth.currentUser;

    if (snapshot.empty) {
      noComentariosDiv.style.display = 'block';
    } else {
      noComentariosDiv.style.display = 'none';
    }

    snapshot.forEach((doc) => {
      const comentario = doc.data();
      const comentarioId = doc.id;

      comentariosContainer.innerHTML += \`
        <article data-comment-id="\${comentarioId}" class=" shadow-lg shadow-gray-950 comentario mb-8 border border-gray-600 p-4 rounded-lg bg-gray-900/20 text-white shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <div class="font-medium">
              <p class="flex flex-col text-lg">
                \${comentario.username} 
                <time class="text-sm text-gray-400">\${comentario.timestamp?.toDate().toLocaleString()}</time>
              </p>
            </div>
            <div class="flex gap-2">
              \${user && comentario.username === user.displayName ? \`
                <button class="borrar-btn text-red-500 hover:text-red-400 transition cursor-pointer" data-id="\${comentarioId}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zM9.388 25.34a3 3 0 0 0 2.98 2.66h7.263a3 3 0 0 0 2.98-2.66L24.48 9H7.521zM13 12.5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"/></svg>
                </button>
              \` : ''}
            </div>
          </div>
          <div class="flex items-center mb-5 space-x-1 rtl:space-x-reverse">
            \${Array(5).fill().map((_, i) => \`
              <svg class="w-4 h-4 \${i < comentario.rating ? 'text-yellow-300' : 'text-gray-500'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            \`).join('')}
            <h3 class="ms-2 text-sm font-semibold text-gray-300">\${comentario.rating || 3}/5</h3>
          </div>
          <p class="mb-2 text-gray-400">\${comentario.comment}</p>
        </article>
      \`;
    });
    asignarEventosComentarios();
  });
}

// Asignar evento a los botones de eliminar comentarios
function asignarEventosComentarios() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    const comentarioDiv = target.closest('.comentario');
    
    if (target.closest('.borrar-btn')) {
      const comentarioId = target.closest('.borrar-btn').dataset.id;
      const cardId = comentarioDiv.closest('[data-card-id]').dataset.cardId;
      const comentarioRef = doc(db, "cards", cardId, "comments", comentarioId);

      if (confirm('\xBFEliminar este comentario?')) {
        deleteDoc(comentarioRef)
          .then(() => {
            comentarioDiv.style.opacity = '0';
            setTimeout(() => comentarioDiv.remove(), 300);
          })
          .catch((error) => {
            console.error("Error al eliminar el comentario:", error);

            if (error.code === "unavailable") {
              console.error("Ocurrio un error de conexi\xF3n.");
            }
          });
      }
    }
  });
}

// Calculo de calificaciones de estrellas

function calcularEstadisticas(cardId) {
  const comentariosRef = collection(db, "cards", cardId, "comments");

  onSnapshot(comentariosRef, (snapshot) => {
    if (snapshot.empty) return;

    let totalComentarios = 0;
    let sumaCalificaciones = 0; // Nuevo: Para calcular el promedio
    let conteoEstrellas = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    snapshot.forEach(doc => {
      const data = doc.data();
      const rating = parseInt(data.rating);
      if (rating >= 1 && rating <= 5) {
        conteoEstrellas[rating]++;
        totalComentarios++;
        sumaCalificaciones += rating; // Sumamos para el promedio
      }
    });

    const estadisticasDiv = document.querySelector(\`[data-card-id="\${cardId}"] .estadisticas-tarjeta\`);
    if (!estadisticasDiv) return;

    // Calcular promedio (con 1 decimal)
    const promedio = totalComentarios > 0 
      ? (sumaCalificaciones / totalComentarios).toFixed(1) 
      : "0";

    let estadisticasHTML = \`
      <div class="mb-4">
        <h3 class='font-semibold text-lg flex items-center gap-2'>
          \${totalComentarios} Calificaciones 
          <span class="flex items-center text-yellow-500">
            \${promedio} \u2605
          </span>
        </h3>
      </div>\`;

    for (let estrella = 5; estrella >= 1; estrella--) {
      let porcentaje = totalComentarios > 0 
        ? (conteoEstrellas[estrella] / totalComentarios * 100).toFixed(1) 
        : 0;
      
      estadisticasHTML += \`
        <div class='flex items-center mt-2'>
          <span class='font-medium w-6'>\${estrella}\u2B50</span>
          <div class='w-full bg-gray-700/70 rounded-lg h-3 mx-2'>
            <div class='bg-yellow-600 h-3 rounded-lg' style='width: \${porcentaje}%;'></div>
          </div>
          <span class='text-sm text-gray-500 w-12 text-right'>
             (\${porcentaje}%)
          </span>
        </div>\`;
    }
    
    estadisticasDiv.innerHTML = estadisticasHTML;
  });
}

// Ejecutar la funci\xF3n para cada tarjeta al cargar la p\xE1gina
document.querySelectorAll("[data-card-id]").forEach(card => {
  calcularEstadisticas(card.dataset.cardId);
});


// verificar login

function verificarEstadoDeLoginYDeshabilitarBoton() {
  // Esperar a que el DOM est\xE9 listo
  document.addEventListener('DOMContentLoaded', () => {
    const estaLogueado = localStorage.getItem('isLoggedIn') === 'true';
    const logoutBtn = document.querySelector(".logout-btn");

    if (!logoutBtn) {
      console.error("No se encontr\xF3 el bot\xF3n de logout");
      return;
    }

    // Mostrar/ocultar elementos seg\xFAn el estado de login
    const botonesAbrirModal = document.querySelectorAll('.abrir-modal-boton');
    const cajasComentarios = document.querySelectorAll('.caja-comentarios');

    if (estaLogueado) {
      // Usuario logueado
      botonesAbrirModal.forEach(boton => {
        boton.textContent = 'Cambiar usuario';
        boton.classList.remove('hidden');
      });

      cajasComentarios.forEach(caja => {
        caja.classList.remove('hidden');
      });

      logoutBtn.classList.remove('hidden');
    } else {
      // Usuario no logueado
      botonesAbrirModal.forEach(boton => {
        boton.textContent = 'Dej\xE1 tu rese\xF1a';
      });

      cajasComentarios.forEach(caja => {
        caja.classList.add('hidden');
      });

      logoutBtn.classList.add('hidden');
    }
  });
}

// ampliar imagen

function abrirEnNuevaPestana(url) {
    const ventana = window.open('', '_blank');
    ventana.document.write(\`
      <html>
        <head><title>Imagen</title></head>
        <body style="margin: 0; background: #000;">
          <img src="\${url}" style="max-width: 100%; height: auto; display: block; margin: auto;">
        </body>
      </html>
    \`);
    ventana.document.close();
  }


// Llamar a la funci\xF3n al cargar la p\xE1gina
verificarEstadoDeLoginYDeshabilitarBoton();

// Llamar al cargar la p\xE1gina y cuando cambie el estado de login
document.addEventListener('DOMContentLoaded', verificarEstadoDeLoginYDeshabilitarBoton);

// verificar estado


  function verificarEstado() {
    // Obt\xE9n todas las cards
    const contenedores = document.querySelectorAll('.card');

    contenedores.forEach(contenedor => {
      // Obt\xE9n el objeto card desde el atributo data-card de cada card
      const card = JSON.parse(contenedor.dataset.card);

      // Aseg\xFArate de que card tenga los horarios correctos para cada d\xEDa
      const horariosPorDia = {
        0: card.horaDomingo,    // Domingo
        1: card.horaLunes,      // Lunes
        2: card.horaMartes,     // Martes
        3: card.horaMiercoles,  // Mi\xE9rcoles
        4: card.horaJueves,     // Jueves
        5: card.horaViernes,    // Viernes
        6: card.horaSabado      // S\xE1bado
      };

      // Obt\xE9n la hora actual
      const horaActual = new Date();
      const hora = horaActual.getHours();
      const minutos = horaActual.getMinutes();
      const diaSemana = horaActual.getDay();  // 0: Domingo, 1: Lunes, ..., 6: S\xE1bado

      // Obtiene los horarios para el d\xEDa actual
      const horariosHoy = horariosPorDia[diaSemana];

      // Si no hay horarios para hoy, salimos
      if (!horariosHoy) {
        console.error("Horarios no definidos para este d\xEDa");
        return;
      }

      // Funci\xF3n para convertir la hora a minutos desde medianoche
      function convertirAMinutos(horaStr) {
        const [hora, minutos] = horaStr.split(':').map(Number);
        return hora * 60 + minutos;
      }

      // Verifica el estado del d\xEDa
      let estaAbierto = false;

      // Convierte los horarios a minutos desde medianoche
      const h1 = convertirAMinutos(horariosHoy.h1);
      const h2 = convertirAMinutos(horariosHoy.h2);
      const h3 = convertirAMinutos(horariosHoy.h3);
      const h4 = convertirAMinutos(horariosHoy.h4);
      const minutosActuales = hora * 60 + minutos;

      // Si la hora actual est\xE1 entre h1-h2 o h3-h4, est\xE1 abierto
      if ((minutosActuales >= h1 && minutosActuales < h2) || (minutosActuales >= h3 && minutosActuales < h4)) {
        estaAbierto = true;
      }

      // Actualiza el contenido del elemento <h6> dentro de la card
      const estadoElement = contenedor.querySelector('.estado');
      if (estadoElement) {
        estadoElement.textContent = estaAbierto ? 'Abierto' : 'Cerrado';
        estadoElement.style.color = estaAbierto ? '#4caf50' : '#B82132';
        estadoElement.classList.add ('border', 'rounded-md')
      } else {
        console.error("Elemento con clase 'estado' no encontrado en una card.");
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado, verificando estado...");
    verificarEstado();
    setInterval(verificarEstado, 600000);

  // Funcion scroll
  const cards = document.querySelectorAll('.scrollCard'); 
  const buttonsScroll = document.querySelectorAll('.scrollBtn'); 
  
  buttonsScroll.forEach((button, index) => {
    button.addEventListener('click', function() {
      const card = cards[index]; 
      
      function slowScroll() {
        let currentScroll = card.scrollTop;
        let targetScroll = currentScroll + 320; 
        let step = 15;  
        
        function animateScroll() {
          if (currentScroll < targetScroll) {
            currentScroll += step;
            card.scrollTop = currentScroll;
            requestAnimationFrame(animateScroll);  
          }
        }
        animateScroll();  
      }
      slowScroll();
    });
  });

//  slider de textos

const cardio = Array.from(document.querySelectorAll("[data-card]")); // Aseg\xFArate de agregar data-card a cada card

cardio.forEach((card) => {
  // Selecciona solo los textos de esta card que no est\xE9n vac\xEDos
  const texts = Array.from(card.querySelectorAll("[data-index]")).filter(
    (e) => e.innerText.trim() !== ""
  );
  const total = texts.length;

  if (total > 0) {
    let index = 0;

    // Inicializa el primer texto de la card como visible
    texts[0]?.classList.add("opacity-100", "translate-y-0");

    // Funci\xF3n para cambiar textos en esta card espec\xEDfica
    function cambiarTexto() {
      texts[index].classList.remove("opacity-100", "translate-y-0");
      texts[index].classList.add("opacity-0", "translate-y-full");

      index = (index + 1) % total;

      texts[index].classList.remove("opacity-0", "translate-y-full");
      texts[index].classList.add("opacity-100", "translate-y-0");
    }

    // Inicia el intervalo para esta card
    setInterval(cambiarTexto, 10000);
  }
});

// MUESTRA COMENTARIOS EN L PAGINA AL INICIAR

document.querySelectorAll('[data-card-id]').forEach(card => {
    const cardId = card.dataset.cardId;
    mostrarComentarios(cardId);
    calcularEstadisticas(cardId); 
  });

  });
<\/script>`], ["", "<div", ' class="card mt-8 border-gray-600 border max-w-[38rem] rounded-lg bg-gray-800/15 shadow-up shadow-lg shadow-gray-950"', '> <div class="custom-scrollbar scrollCard overflow-auto h-[21rem]"> <div class="gap-4 flex flex-row items-center bg-transparent rounded-lg  max-w-full  py-4 pl-6 pr-2 h-auto"> <div id="controls-carousel" class="relative w-full rounded-lg overflow-hidden  transition-transform duration-300 ease-in-out shadow-lg shadow-gray-100/30" data-carousel="static"> <!-- Carousel --> <div class="imagen relative h-64 rounded-lg border-3 border-gray-700"> ', ' </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"> ', ' </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 bg-gray-900/40 group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-2 h-2 text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-500 bg-gray-900/40 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"> <svg class="w-2 h-2 text-gray-100 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> <div class="flex flex-col justify-between pr-3 leading-normal w-3xl h-auto gap-2"> <h6 class="estado mb-2 w-16 flex py-1 justify-center text-xs font-bold">', ' </h6> <h5 class="text-2xl font-bold tracking-tight text-black">', '</h5> <p class="mb-3 text-gray-500 h-24">', '</p> <div class="mt-4"> <div class="relative h-[1.8rem] overflow-hidden"> ', ' </div> </div> </div> </div> <div> <div> <a class="flex scrollBtn justify-center transition-all ease-in duration-500 py-4 cursor-pointer hover:opacity-30"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="#556" d="M8.2 275.4c0-8.6 3.4-17.401 10-24.001c13.2-13.2 34.8-13.2 48 0l451.8 451.8l445.2-445.2c13.2-13.2 34.8-13.2 48 0s13.2 34.8 0 48L542 775.399c-13.2 13.2-34.8 13.2-48 0l-475.8-475.8c-6.8-6.8-10-15.4-10-24.199"></path></svg> </a> </div> <!-- contacto --> <div class="px-5 "> <div class="flex gap-2 items-center mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#789" d="M2 21q-.825 0-1.412-.587T0 19V5q0-.825.588-1.412T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.587 1.413T22 21zm7-7q1.25 0 2.125-.875T12 11t-.875-2.125T9 8t-2.125.875T6 11t.875 2.125T9 14m-6.9 5h13.8q-1.05-1.875-2.9-2.937T9 15t-4 1.063T2.1 19m15.4-7q0-.525.1-1.012t.25-.988H19q.25 0 .45-.1t.35-.3l.675-.9q.225-.3.2-.675t-.3-.65l-.7-.7Q19.4 6.4 19 6.387t-.7.263q-1.075 1-1.687 2.438T16 12t.613 2.913T18.3 17.35q.3.275.7.263t.675-.288l.7-.7q.275-.275.3-.65t-.2-.675l-.675-.9q-.15-.2-.35-.3T19 14h-1.15q-.15-.45-.25-.963T17.5 12"></path></svg> <h3 class="p-2font-normal text-gray-300 ">Contactanos aqu\xED</h3> </div> <div class="flex justify-between border border-gray-700 p-5 rounded-lg shadow-lg shadow-gray-950 h-auto"> <div> <div class="text-center flex flex-col gap-3"> <a', ' target="_blank"', '> <svg class="w-6 h-6 contenido-dinamico">', '</svg> <p class="text-gray-300 contenido-dinamico">', '</p> <small class="text-slate-600/90 text-xs font-bold ml-1">', "</small> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', "</p> </div> </a> <a", ' target="_blank"', '> <div class="flex gap-4"> <svg class="w-6 h-6">', '</svg> <p class="text-gray-300">', '</p> </div> </a> </div> </div> <div> <div class="flex justify-center h-full border-3 border-gray-600 rounded-lg">', '</div> </div> </div> </div> </div> <!-- metodos de pago --> <div class="px-5 mt-10 mb-5"> <div> <div class="flex gap-2 items-center mb-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20"><path fill="#789" d="M11.67 8.537a.3.3 0 0 0-.302.296v2.212a.3.3 0 0 0 .303.296h6.663a.3.3 0 0 0 .303-.296V8.833a.3.3 0 0 0-.303-.296zm4.086-7.036c.922.044 1.585.226 2.005.612c.415.382.628.935.67 1.667v2.097a.674.674 0 0 1-.681.666a.674.674 0 0 1-.682-.666l.001-2.059c-.022-.38-.113-.616-.243-.736c-.126-.116-.51-.22-1.103-.25H2.647c-.537.02-.886.122-1.055.267c-.13.111-.228.417-.229.946l-.003 11.77c.05.514.163.857.308 1.028c.11.13.451.26.953.324h13.116c.614.012.976-.08 1.098-.203c.135-.137.233-.497.233-1.086v-2.045c0-.367.305-.666.682-.666c.376 0 .681.299.681.666v2.045c0 .9-.184 1.573-.615 2.01c-.444.45-1.15.63-2.093.61L2.54 18.495c-.897-.104-1.54-.35-1.923-.803c-.347-.41-.54-.995-.617-1.813V4.044c.002-.876.212-1.535.694-1.947c.442-.38 1.08-.565 1.927-.597zm2.578 5.704c.92 0 1.666.729 1.666 1.628v2.212c0 .899-.746 1.628-1.666 1.628h-6.663c-.92 0-1.666-.73-1.666-1.628V8.833c0-.899.746-1.628 1.666-1.628zm-4.997 1.94c-.46 0-.833.36-.833.803s.373.803.833.803s.833-.36.833-.803s-.373-.804-.833-.804"></path></svg> <h3 class="p-2font-normal text-gray-300 ">Metodos de pago</h3> </div> <div class="border border-gray-700 rounded-lg shadow-lg shadow-gray-950 grid grid-cols-2 content-between p-5"> <div', ">", "</div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', "</p> </div> <div", "> <div>", '</div> <p class="text-gray-300 font-bold">', '</p> </div> </div> </div> </div> <!-- Dias y Horarios --> <div class="px-5 mt-10"> <div class="flex items-center justify-between mb-2"> <div class="flex gap-2 items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#789" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"></path><rect width="2" height="7" x="11" y="6" fill="#fff" rx="1"><animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect><rect width="2" height="9" x="11" y="11" fill="#456" rx="1"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></rect></svg> <h3 class="p-2font-normal text-gray-300 ">Horarios y Dias laborales</h3> </div> <div class="col-span-2 w-76 grid grid-cols-2 gap-1"> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> <small class="text-black text-sm font-extrabold">', '</small> </div> </div> <div class="p-3 border border-gray-700 rounded-lg shadow-lg shadow-gray-950"> <!-- Cabecera de la grilla --> <div class="grid grid-cols-3 gap-5 p-5"> <p class="text-black font-bold text-lg">D\xEDas</p> <p class="text-black font-bold text-lg">Horario AM</p> <p class="text-black font-bold text-lg">Horario PM</p> </div> <!-- Filas de la grilla --> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', " ", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small>a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white  p-2 rounded-md">', "", '</p> <p class="text-white w-40  p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40  p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> </div> <div class="grid grid-cols-3 gap-4 p-2"> <p class="text-white p-2 rounded-md">', "", '</p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <p class="text-white w-40 p-2 border-gray-700 border rounded-md shadow-md shadow-gray-950 flex justify-between">', ' <small class="mr-1">a</small><small class="text-white text-base">', ' \u{1F550}</small></p> <!-- <p class="text-white  p-2 border-gray-700 border rounded-md">{card.cerrado}</p>\n          <p class="text-white  p-2 border-gray-700 border rounded-md">{card.cerrado}</p> --> </div> </div> <!-- Caja de comentarios --> <div class="mt-10"> <div class="flex items-center px-2 gap-2 mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#789" d="M18 26h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"></path><path fill="#567" d="M20.549 11.217L16 2l-4.549 9.217L1.28 12.695l7.36 7.175L6.902 30L14 26.269v-2.26l-4.441 2.335l1.052-6.136l.178-1.037l-.753-.733l-4.458-4.347l6.161-.895l1.04-.151l.466-.943L16 6.519l2.755 5.583l.466.943l1.04.151l7.454 1.085L28 12.3z"></path></svg> <h3 class=" font-normal text-gray-300">Rese\xF1as</h3> </div> <div> <div class=" p-8 border border-gray-600 rounded-lg shadow-lg shadow-gray-950"> <div class="border border-gray-600 p-4 rounded-lg no-hay-comentarios mb-4 bg-gray-900/20 shadow-md shadow-gray-900"> <p class="text-gray-300 text-center">No hay comentarios a\xF9n \u{1F615}</p> </div> <div class="comentarios-container mt-4"></div> <!-- formulario comentarios --> <div class="hidden caja-comentarios mb-10" id="caja-comentarios"> <form', ' class=" comment-form border border-gray-600 rounded-lg shadow-lg shadow-gray-950"> <div class="w-full rounded-lg  p-4"> <div class="px-4 py-2 rounded-lg"> <div class="flex w-full justify-between px-2 gap-1 rounded-xs items-center mb-5"> <h5 class="text-gray-300">Deja tu rese\xF1a</h5> <div class="flex gap-2 items-center"> <small class="text-gray-600">Califica con estrellas</small> <div id="star-rating" class="star-rating cursor-pointer"> <span class="star text-2xl text-gray-600" data-value="1">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="2">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="3">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="4">&#9733;</span> <span class="star text-2xl text-gray-600" data-value="5">&#9733;</span> </div> </div> </div> <input type="hidden" id="card-id"> <label for="comment-text" class="sr-only text-gray-300">T\xFA Rese\xF1a</label> <textarea id="comment-text" rows="4" class="w-full px-2 text-xs h-full rounded-lg bg-transparent text-smborder-0  focus:ring-0 text-white placeholder-gray-400" placeholder="Escribe tu rese\xF1a" required></textarea> </div> <div class="flex items-center justify-between px-3 py-2"> <button type="submit" class="cursor-pointer inline-flex items-center py-2.5 px-4 text-xs border border-gray-600 font-medium text-center text-white bg-cyan-800 rounded-lg  focus:ring-1\n                     hover:bg-cyan-800/60">\nComentar\n</button> </div> </div> </form> </div> <div class="mb-8 estadisticas-tarjeta p-4 bg-gray-900/20 border border-gray-600 rounded-lg shadow-lg shadow-gray-950 mt-4 text-gray-300 text-center"', '>Sin calificaciones \u2730</div> <div class="flex gap-3 items-center"> <button id="abrir-modal-boton" data-modal-target="popup-rese\xF1as" data-modal-toggle="popup-rese\xF1as" type="button" class="shadow-md shadow-black abrir-modal-boton dejar-rese\xF1a-btn cursor-pointer w-auto text-center flex  gap-2 text-black border border-black hover:opacity/50 hover:bg-gray-950/10 hover:shadow-md hover:shadow-gray-950 font-medium rounded-lg text-sm px-5 py-2.5"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M10 9.5h.621l.44.44l1.51 1.51a.174.174 0 0 0 .295-.136l-.112-1.454l-.062-.809l.642-.495C14.037 8.016 14.5 7.211 14.5 6c0-1.214-.465-2.019-1.17-2.56c-.754-.578-1.902-.94-3.33-.94s-2.576.362-3.33.94C5.966 3.98 5.5 4.786 5.5 6s.465 2.019 1.17 2.56c.754.578 1.902.94 3.33.94m.52 2.02l.99.99a1.673 1.673 0 0 0 2.851-1.312l-.111-1.453C15.33 8.91 16 7.663 16 6c0-3.333-2.686-5-6-5c-2.127 0-3.995.687-5.06 2.06C2.131 3.384 0 5.03 0 8c0 1.663.669 2.911 1.75 3.745l-.111 1.453A1.673 1.673 0 0 0 4.49 14.51L6 13c1.803 0 3.42-.493 4.52-1.48M4.143 4.736Q4.001 5.32 4 6c0 2.905 2.04 4.544 4.759 4.918c-.717.366-1.654.582-2.759.582h-.621l-.44.44l-1.51 1.51a.174.174 0 0 1-.295-.136l.112-1.454l.062-.809l-.642-.495C1.963 10.016 1.5 9.211 1.5 8c0-1.214.465-2.019 1.17-2.56c.391-.3.887-.541 1.473-.704" clip-rule="evenodd"></path></svg>Dejar rese\xF1a</button> <button id="logout-btn" type="button" class="logout-btn cursor-pointer w-auto text-center hidden text-black border border-black hover:opacity/50 hover:bg-gray-950/10 hover:shadow-xs hover:shadow-gray-700/70 font-medium rounded-lg text-sm px-5 py-2.5">Logout</button> </div> </div> </div> <button data-modal-target="popup-denuncia" data-modal-toggle="popup-denuncia" type="button" class=" my-8 shadow-md shadow-gray-900 cursor-pointer flex  gap-2 text-red-700 border border-red-700 hover:opacity/50 hover:bg-gray-950/10 hover-xs hover:shadow-gray-900/70 font-medium rounded-lg text-sm px-5 py-2.5 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#f70101" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)" stroke-width="1"><circle cx="8.5" cy="8.5" r="8"></circle><path d="M14 3L3 14"></path></g></svg> Denunciar</button> <!-- Seccion array para busqueda --> <small class="text-slate-500/60 font-bold ml-1 hidden">', '</small> <small class="text-slate-500/60 font-bold ml-1 hidden">', '</small> </div> </div> </div> <!-- footer --> <div class="border-t border-gray-700 flex justify-between"> <div> <p class="text-black text-lg pt-3 font-extrabold px-5 flex items-center h-11">', ' <small class="text-slate-600/80 text-lg font-extrabold ml-1">', '</small> <small class="text-slate-600/80 text-lg font-extrabold ml-1">', "</small> </p> <p", ">", ' <small class="text-slate-600/80 text-lg font-extrabold ml-1">', '</small> <small class="text-slate-600/80 text-lg font-extrabold ml-1">', "</small> </p> <p", ">", ' <small class="text-slate-500/60 font-extrabold ml-1">', '</small> <small class="text-slate-500/60 font-extrabold ml-1">', '</small> <small class="text-slate-500/60 font-extrabold ml-1">', '</small> </p> </div> <div class="flex justify-center max-h-full"> <div class="flex gap-2 items-end p-3"> <a', ' target="_blank"', '> <svg class="w-8 h-8 flex items-end p-0 m-0">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', "</svg> </a> <a", ' target="_blank"', '> <svg class="w-8 h-8">', `</svg> </a> </div> </div> </div> </div> <script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, query, where, onSnapshot, setDoc, doc, orderBy, deleteDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
  authDomain: "comercios-unidos-se.firebaseapp.com",
  projectId: "comercios-unidos-se",
  storageBucket: "comercios-unidos-se.firebasestorage.app",
  messagingSenderId: "561779340978",
  appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Cerrar sesi\xF3n
function logout() {
  // 1. Verificar si auth est\xE1 inicializado
  if (!auth) {
    console.error("Firebase Auth no est\xE1 inicializado");
    return;
  }

  // 2. Cerrar sesi\xF3n con Firebase
  signOut(auth)
    .then(() => {
      console.log("Sesi\xF3n cerrada exitosamente");
      
      // 3. Limpiar datos locales
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData'); // Limpiar datos adicionales si existen
      
      // 4. Redirecci\xF3n mejorada
      window.location.href = '/'; // Mejor que reload para SPA
    })
    .catch((error) => {
      console.error("Error al cerrar sesi\xF3n:", error);
      
      // 5. Manejo espec\xEDfico de errores
      if (error.code === "auth/network-request-failed") {
        alert("Fallo la conexi\xF3n");
      } else {
        alert("Error al cerrar sesi\xF3n");
      }
    });
}

// 6. Event listeners mejorados
function setupLogoutButtons() {
  document.querySelectorAll(".logout-btn").forEach(button => {
    // Evitar m\xFAltiples listeners
    button.removeEventListener("click", logout); 
    button.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  });
}

// 7. Ejecutar cuando el DOM est\xE9 listo
document.addEventListener('DOMContentLoaded', setupLogoutButtons);

let isSubmitting = false;

document.querySelectorAll('.comment-form').forEach(form => {
  let selectedRating = 0;
  const stars = form.querySelectorAll('.star-rating .star'); // Selecciona solo las estrellas dentro de este formulario

  stars.forEach(star => {
    star.addEventListener('click', (e) => {
      selectedRating = parseInt(e.target.getAttribute('data-value'));
      updateStars(selectedRating, stars);
    });

    star.addEventListener('mouseover', () => {
      updateStars(parseInt(star.getAttribute('data-value')), stars);
    });

    star.addEventListener('mouseout', () => {
      updateStars(selectedRating, stars);
    });
  });

  const submitButton = form.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    isSubmitting = true;
    
    submitButton.disabled = true;
    submitButton.textContent = "Comentando...";

    const card = form.closest('[data-card-id]');
    const cardId = card.dataset.cardId;

    const user = auth.currentUser;
    if (!user) {
      alert("Debes estar autenticado para comentar.");
      resetButton(submitButton);
      return;
    }

    const username = user.displayName ? user.displayName : user.email;
    const commentText = form.querySelector('#comment-text').value;
    
    if (!commentText || selectedRating == 0) {
      alert('Por favor, escribe un comentario y selecciona una calificaci\xF3n.');
      resetButton(submitButton);
      return;
    }

    const commentRef = doc(db, "cards", cardId, "comments", username);
    
    try {
      const commentSnap = await getDoc(commentRef);
      if (commentSnap.exists()) {
        alert("Solo puedes comentar una vez.");
        resetButton(submitButton);
        form.reset();
        updateStars(0, stars);
        return;
      }

      await setDoc(commentRef, {
        cardId: cardId,
        username: username,
        comment: commentText.trim(),
        rating: selectedRating,
        timestamp: new Date()
      });

      mostrarComentarios(cardId);

      console.log(\\\`\u2705 Comentario de \\\${username} guardado en la tarjeta \\\${cardId}\\\`);
      form.reset();
      updateStars(0, stars);
      submitButton.textContent = "\u2713 Enviado";

    } catch (error) {
      console.error(\\\`\u274C Error en la tarjeta \\\${cardId}:\\\`, error);
      
      if (error.code === "unavailable") {
        alert("No tienes conexi\xF3n a Internet.");
      } else {
        alert("Ocurri\xF3 un error inesperado");
      }

      resetButton(submitButton);

    } finally {
      setTimeout(() => resetButton(submitButton), 2000);
    }
  });

  function updateStars(rating, stars) {
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
});

function resetButton(button) {
  button.disabled = false;
  button.textContent = "Comentar";
  isSubmitting = false;
}


// Funci\xF3n de mostrar comentarios
function mostrarComentarios(cardId) {
  const comentariosContainer = document.querySelector(\\\`[data-card-id="\\\${cardId}"] .comentarios-container\\\`);
  const noComentariosDiv = document.querySelector(\\\`[data-card-id="\\\${cardId}"] .no-hay-comentarios\\\`);

  if (!comentariosContainer) {
    console.error(\\\`No se encontr\xF3 el contenedor para card \\\${cardId}\\\`);
    return;
  }

  const q = query(collection(db, "cards", cardId, "comments"), orderBy("timestamp", "desc"));

  onSnapshot(q, (snapshot) => {
    comentariosContainer.innerHTML = '';

    const user = auth.currentUser;

    if (snapshot.empty) {
      noComentariosDiv.style.display = 'block';
    } else {
      noComentariosDiv.style.display = 'none';
    }

    snapshot.forEach((doc) => {
      const comentario = doc.data();
      const comentarioId = doc.id;

      comentariosContainer.innerHTML += \\\`
        <article data-comment-id="\\\${comentarioId}" class=" shadow-lg shadow-gray-950 comentario mb-8 border border-gray-600 p-4 rounded-lg bg-gray-900/20 text-white shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <div class="font-medium">
              <p class="flex flex-col text-lg">
                \\\${comentario.username} 
                <time class="text-sm text-gray-400">\\\${comentario.timestamp?.toDate().toLocaleString()}</time>
              </p>
            </div>
            <div class="flex gap-2">
              \\\${user && comentario.username === user.displayName ? \\\`
                <button class="borrar-btn text-red-500 hover:text-red-400 transition cursor-pointer" data-id="\\\${comentarioId}">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zM9.388 25.34a3 3 0 0 0 2.98 2.66h7.263a3 3 0 0 0 2.98-2.66L24.48 9H7.521zM13 12.5a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0v-10a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"/></svg>
                </button>
              \\\` : ''}
            </div>
          </div>
          <div class="flex items-center mb-5 space-x-1 rtl:space-x-reverse">
            \\\${Array(5).fill().map((_, i) => \\\`
              <svg class="w-4 h-4 \\\${i < comentario.rating ? 'text-yellow-300' : 'text-gray-500'}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            \\\`).join('')}
            <h3 class="ms-2 text-sm font-semibold text-gray-300">\\\${comentario.rating || 3}/5</h3>
          </div>
          <p class="mb-2 text-gray-400">\\\${comentario.comment}</p>
        </article>
      \\\`;
    });
    asignarEventosComentarios();
  });
}

// Asignar evento a los botones de eliminar comentarios
function asignarEventosComentarios() {
  document.addEventListener('click', (e) => {
    const target = e.target;
    const comentarioDiv = target.closest('.comentario');
    
    if (target.closest('.borrar-btn')) {
      const comentarioId = target.closest('.borrar-btn').dataset.id;
      const cardId = comentarioDiv.closest('[data-card-id]').dataset.cardId;
      const comentarioRef = doc(db, "cards", cardId, "comments", comentarioId);

      if (confirm('\xBFEliminar este comentario?')) {
        deleteDoc(comentarioRef)
          .then(() => {
            comentarioDiv.style.opacity = '0';
            setTimeout(() => comentarioDiv.remove(), 300);
          })
          .catch((error) => {
            console.error("Error al eliminar el comentario:", error);

            if (error.code === "unavailable") {
              console.error("Ocurrio un error de conexi\xF3n.");
            }
          });
      }
    }
  });
}

// Calculo de calificaciones de estrellas

function calcularEstadisticas(cardId) {
  const comentariosRef = collection(db, "cards", cardId, "comments");

  onSnapshot(comentariosRef, (snapshot) => {
    if (snapshot.empty) return;

    let totalComentarios = 0;
    let sumaCalificaciones = 0; // Nuevo: Para calcular el promedio
    let conteoEstrellas = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    snapshot.forEach(doc => {
      const data = doc.data();
      const rating = parseInt(data.rating);
      if (rating >= 1 && rating <= 5) {
        conteoEstrellas[rating]++;
        totalComentarios++;
        sumaCalificaciones += rating; // Sumamos para el promedio
      }
    });

    const estadisticasDiv = document.querySelector(\\\`[data-card-id="\\\${cardId}"] .estadisticas-tarjeta\\\`);
    if (!estadisticasDiv) return;

    // Calcular promedio (con 1 decimal)
    const promedio = totalComentarios > 0 
      ? (sumaCalificaciones / totalComentarios).toFixed(1) 
      : "0";

    let estadisticasHTML = \\\`
      <div class="mb-4">
        <h3 class='font-semibold text-lg flex items-center gap-2'>
          \\\${totalComentarios} Calificaciones 
          <span class="flex items-center text-yellow-500">
            \\\${promedio} \u2605
          </span>
        </h3>
      </div>\\\`;

    for (let estrella = 5; estrella >= 1; estrella--) {
      let porcentaje = totalComentarios > 0 
        ? (conteoEstrellas[estrella] / totalComentarios * 100).toFixed(1) 
        : 0;
      
      estadisticasHTML += \\\`
        <div class='flex items-center mt-2'>
          <span class='font-medium w-6'>\\\${estrella}\u2B50</span>
          <div class='w-full bg-gray-700/70 rounded-lg h-3 mx-2'>
            <div class='bg-yellow-600 h-3 rounded-lg' style='width: \\\${porcentaje}%;'></div>
          </div>
          <span class='text-sm text-gray-500 w-12 text-right'>
             (\\\${porcentaje}%)
          </span>
        </div>\\\`;
    }
    
    estadisticasDiv.innerHTML = estadisticasHTML;
  });
}

// Ejecutar la funci\xF3n para cada tarjeta al cargar la p\xE1gina
document.querySelectorAll("[data-card-id]").forEach(card => {
  calcularEstadisticas(card.dataset.cardId);
});


// verificar login

function verificarEstadoDeLoginYDeshabilitarBoton() {
  // Esperar a que el DOM est\xE9 listo
  document.addEventListener('DOMContentLoaded', () => {
    const estaLogueado = localStorage.getItem('isLoggedIn') === 'true';
    const logoutBtn = document.querySelector(".logout-btn");

    if (!logoutBtn) {
      console.error("No se encontr\xF3 el bot\xF3n de logout");
      return;
    }

    // Mostrar/ocultar elementos seg\xFAn el estado de login
    const botonesAbrirModal = document.querySelectorAll('.abrir-modal-boton');
    const cajasComentarios = document.querySelectorAll('.caja-comentarios');

    if (estaLogueado) {
      // Usuario logueado
      botonesAbrirModal.forEach(boton => {
        boton.textContent = 'Cambiar usuario';
        boton.classList.remove('hidden');
      });

      cajasComentarios.forEach(caja => {
        caja.classList.remove('hidden');
      });

      logoutBtn.classList.remove('hidden');
    } else {
      // Usuario no logueado
      botonesAbrirModal.forEach(boton => {
        boton.textContent = 'Dej\xE1 tu rese\xF1a';
      });

      cajasComentarios.forEach(caja => {
        caja.classList.add('hidden');
      });

      logoutBtn.classList.add('hidden');
    }
  });
}

// ampliar imagen

function abrirEnNuevaPestana(url) {
    const ventana = window.open('', '_blank');
    ventana.document.write(\\\`
      <html>
        <head><title>Imagen</title></head>
        <body style="margin: 0; background: #000;">
          <img src="\\\${url}" style="max-width: 100%; height: auto; display: block; margin: auto;">
        </body>
      </html>
    \\\`);
    ventana.document.close();
  }


// Llamar a la funci\xF3n al cargar la p\xE1gina
verificarEstadoDeLoginYDeshabilitarBoton();

// Llamar al cargar la p\xE1gina y cuando cambie el estado de login
document.addEventListener('DOMContentLoaded', verificarEstadoDeLoginYDeshabilitarBoton);

// verificar estado


  function verificarEstado() {
    // Obt\xE9n todas las cards
    const contenedores = document.querySelectorAll('.card');

    contenedores.forEach(contenedor => {
      // Obt\xE9n el objeto card desde el atributo data-card de cada card
      const card = JSON.parse(contenedor.dataset.card);

      // Aseg\xFArate de que card tenga los horarios correctos para cada d\xEDa
      const horariosPorDia = {
        0: card.horaDomingo,    // Domingo
        1: card.horaLunes,      // Lunes
        2: card.horaMartes,     // Martes
        3: card.horaMiercoles,  // Mi\xE9rcoles
        4: card.horaJueves,     // Jueves
        5: card.horaViernes,    // Viernes
        6: card.horaSabado      // S\xE1bado
      };

      // Obt\xE9n la hora actual
      const horaActual = new Date();
      const hora = horaActual.getHours();
      const minutos = horaActual.getMinutes();
      const diaSemana = horaActual.getDay();  // 0: Domingo, 1: Lunes, ..., 6: S\xE1bado

      // Obtiene los horarios para el d\xEDa actual
      const horariosHoy = horariosPorDia[diaSemana];

      // Si no hay horarios para hoy, salimos
      if (!horariosHoy) {
        console.error("Horarios no definidos para este d\xEDa");
        return;
      }

      // Funci\xF3n para convertir la hora a minutos desde medianoche
      function convertirAMinutos(horaStr) {
        const [hora, minutos] = horaStr.split(':').map(Number);
        return hora * 60 + minutos;
      }

      // Verifica el estado del d\xEDa
      let estaAbierto = false;

      // Convierte los horarios a minutos desde medianoche
      const h1 = convertirAMinutos(horariosHoy.h1);
      const h2 = convertirAMinutos(horariosHoy.h2);
      const h3 = convertirAMinutos(horariosHoy.h3);
      const h4 = convertirAMinutos(horariosHoy.h4);
      const minutosActuales = hora * 60 + minutos;

      // Si la hora actual est\xE1 entre h1-h2 o h3-h4, est\xE1 abierto
      if ((minutosActuales >= h1 && minutosActuales < h2) || (minutosActuales >= h3 && minutosActuales < h4)) {
        estaAbierto = true;
      }

      // Actualiza el contenido del elemento <h6> dentro de la card
      const estadoElement = contenedor.querySelector('.estado');
      if (estadoElement) {
        estadoElement.textContent = estaAbierto ? 'Abierto' : 'Cerrado';
        estadoElement.style.color = estaAbierto ? '#4caf50' : '#B82132';
        estadoElement.classList.add ('border', 'rounded-md')
      } else {
        console.error("Elemento con clase 'estado' no encontrado en una card.");
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado, verificando estado...");
    verificarEstado();
    setInterval(verificarEstado, 600000);

  // Funcion scroll
  const cards = document.querySelectorAll('.scrollCard'); 
  const buttonsScroll = document.querySelectorAll('.scrollBtn'); 
  
  buttonsScroll.forEach((button, index) => {
    button.addEventListener('click', function() {
      const card = cards[index]; 
      
      function slowScroll() {
        let currentScroll = card.scrollTop;
        let targetScroll = currentScroll + 320; 
        let step = 15;  
        
        function animateScroll() {
          if (currentScroll < targetScroll) {
            currentScroll += step;
            card.scrollTop = currentScroll;
            requestAnimationFrame(animateScroll);  
          }
        }
        animateScroll();  
      }
      slowScroll();
    });
  });

//  slider de textos

const cardio = Array.from(document.querySelectorAll("[data-card]")); // Aseg\xFArate de agregar data-card a cada card

cardio.forEach((card) => {
  // Selecciona solo los textos de esta card que no est\xE9n vac\xEDos
  const texts = Array.from(card.querySelectorAll("[data-index]")).filter(
    (e) => e.innerText.trim() !== ""
  );
  const total = texts.length;

  if (total > 0) {
    let index = 0;

    // Inicializa el primer texto de la card como visible
    texts[0]?.classList.add("opacity-100", "translate-y-0");

    // Funci\xF3n para cambiar textos en esta card espec\xEDfica
    function cambiarTexto() {
      texts[index].classList.remove("opacity-100", "translate-y-0");
      texts[index].classList.add("opacity-0", "translate-y-full");

      index = (index + 1) % total;

      texts[index].classList.remove("opacity-0", "translate-y-full");
      texts[index].classList.add("opacity-100", "translate-y-0");
    }

    // Inicia el intervalo para esta card
    setInterval(cambiarTexto, 10000);
  }
});

// MUESTRA COMENTARIOS EN L PAGINA AL INICIAR

document.querySelectorAll('[data-card-id]').forEach(card => {
    const cardId = card.dataset.cardId;
    mostrarComentarios(cardId);
    calcularEstadisticas(cardId); 
  });

  });
<\/script>`])), maybeRenderHead(), addAttribute(card.id, "data-card-id"), addAttribute(JSON.stringify(card), "data-card"), card.images.map((image, index) => renderTemplate`<div${addAttribute(`hidden duration-600 ease-in-out rounded-lg ${index === 0 ? "block" : ""}`, "class")}${addAttribute(index === 0 ? "active" : "", "data-carousel-item")}> <a${addAttribute(image.src, "href")} data-lightbox="galeria"${addAttribute(`Imagen ${index + 1} de ${card.title}`, "data-title")}> <img${addAttribute(image.src, "src")} onclick="abrirEnNuevaPestana(this.src)" class="cursor-pointer rounded-lg object-cover absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"${addAttribute(`Imagen ${index + 1} de ${card.title}`, "alt")}> </a> </div>`), card.images.map((_, index) => renderTemplate`<button type="button" class="w-2 h-2 rounded-full"${addAttribute(index === 0 ? "true" : "false", "aria-current")}${addAttribute(`Slide ${index + 1}`, "aria-label")}${addAttribute(index, "data-carousel-slide-to")}></button>`), card.estado && card.estado.length > 1 ? card.estado : "Undefined", card.title, card.description, textos.map((texto, index) => renderTemplate`<p class="data-card font-extrabold absolute w-full text-lg opacity-0 translate-y-full transition-all duration-1200 ease-in-out"${addAttribute(index, "data-index")}>${unescapeHTML(texto)}</p>`), addAttribute(card.whatsapp, "href"), addAttribute(["flex items-center gap-4 cursor-pointer contenedor", { "oculto": !card.iconwasap || card.iconwasap.trim() === "" }], "class:list"), unescapeHTML(card.iconwasap), card.telefono, card.solollamar, addAttribute(card.instagramLink, "href"), addAttribute({ "oculto": !card.iconinsta || card.iconinsta.trim() === "" }, "class:list"), unescapeHTML(card.iconinsta), card.instagram, addAttribute(card.facebookLink, "href"), addAttribute({ "oculto": !card.iconfacebook || card.iconfacebook.trim() === "" }, "class:list"), unescapeHTML(card.iconfacebook), card.facebook, addAttribute(card.emailLink, "href"), addAttribute({ "oculto": !card.iconemail || card.iconemail.trim() === "" }, "class:list"), unescapeHTML(card.iconemail), card.email, addAttribute(card.direccionLink, "href"), addAttribute({ "oculto": !card.iconubicacion || card.iconubicacion.trim() === "" }, "class:list"), unescapeHTML(card.iconubicacion), card.direccion, addAttribute(card.web, "href"), addAttribute({ "oculto": !card.iconweb || card.iconweb.trim() === "" }, "class:list"), unescapeHTML(card.iconweb), card.web, addAttribute(card.tiktokLink, "href"), addAttribute({ "oculto": !card.icontiktok || card.icontiktok.trim() === "" }, "class:list"), unescapeHTML(card.icontiktok), card.tiktok, unescapeHTML(card.map), addAttribute(["my-2", { "oculto": !card.todoslospagos || card.todoslospagos.trim() === "" }], "class:list"), unescapeHTML(card.todoslospagos), addAttribute(["flex gap-2 items-center my-2", { "oculto": !card.visa || card.visa.trim() === "" }], "class:list"), unescapeHTML(card.visa), card.tarjetasvisa, addAttribute(["flex gap-2 items-center my-2 mr-5", { "oculto": !card.mastercard || card.mastercard.trim() === "" }], "class:list"), unescapeHTML(card.mastercard), card.tarjetasmaster, addAttribute(["flex gap-2 items-center my-2", { "oculto": !card.iconcash || card.iconcash.trim() === "" }], "class:list"), unescapeHTML(card.iconcash), card.efectivo, addAttribute(["flex gap-2 items-center my-2", { "oculto": !card.iconmercado || card.iconmercado.trim() === "" }], "class:list"), unescapeHTML(card.iconmercado), card.mercadopago, addAttribute(["flex gap-2 items-center my-2", { "oculto": !card.cryptos || card.cryptos.trim() === "" }], "class:list"), unescapeHTML(card.cryptos), card.crypto, addAttribute(["flex gap-2 items-center my-2", { "oculto": !card.icondolares || card.icondolares.trim() === "" }], "class:list"), unescapeHTML(card.icondolares), card.dolares, addAttribute(["flex gap-2 items-center my-2 ", { "oculto": !card.icondebito || card.icondebito.trim() === "" }], "class:list"), unescapeHTML(card.icondebito), card.debito, unescapeHTML(card.decorrido), unescapeHTML(card.trabajocorrido), unescapeHTML(card.medioSabados), unescapeHTML(card.medioDomingos), unescapeHTML(card.abiertoferiados), unescapeHTML(card.abiertofestivos), unescapeHTML(card.trabajoferiados), unescapeHTML(card.trabajofestivos), card.dias[0], card.si, card.horaLunes.h1, card.horaLunes.h2, card.horaLunes.h3, card.horaLunes.h4, card.dias[1], card.si, card.horaMartes.h1, card.horaMartes.h2, card.horaMartes.h3, card.horaMartes.h4, card.dias[2], card.si, card.horaMiercoles.h1, card.horaMiercoles.h2, card.horaMiercoles.h3, card.horaMiercoles.h4, card.dias[3], card.si, card.horaJueves.h1, card.horaJueves.h2, card.horaJueves.h3, card.horaJueves.h4, card.dias[4], card.si, card.horaViernes.h1, card.horaViernes.h2, card.horaViernes.h3, card.horaViernes.h4, card.dias[5], card.si, card.horaSabado.h1, card.horaSabado.h2, card.horaSabado.h3, card.horaSabado.h4, card.dias[6], card.nodias, card.horaDomingo.h1, card.horaDomingo.h2, card.horaDomingo.h3, card.horaDomingo.h4, addAttribute(`comment-form-${card.id}`, "id"), addAttribute(card.id, "data-card-id"), card.enviogratisSearch, card.enviodomicilioSearch, card.hacemosenvios, card.si, card.no, addAttribute(["text-black text-lg pt-3 font-extrabold px-5 py-3  flex items-center", { "oculto": !card.voy || card.voy.trim() === "" }], "class:list"), card.voy, card.sivoy, card.novoy, addAttribute(["text-black text-lg font-extrabold pt-2 px-5 flex items-center mb-3", { "oculto": !card.enviogratis || card.enviogratis.trim() === "" }], "class:list"), card.enviogratis, card.sienvios, card.noenvios, card.depende, addAttribute(card.tiktokLink, "href"), addAttribute(["hover:opacity-60 cursor-pointer", { "oculto": !card.icontiktok2 || card.icontiktok2.trim() === "" }], "class:list"), unescapeHTML(card.icontiktok2), addAttribute(card.facebookLink, "href"), addAttribute(["hover:opacity-60 cursor-pointer", { "oculto": !card.iconfacebook2 || card.iconfacebook2.trim() === "" }], "class:list"), unescapeHTML(card.iconfacebook2), addAttribute(card.web, "href"), addAttribute(["hover:opacity-60 cursor-pointer", { "oculto": !card.iconweb2 || card.iconweb2.trim() === "" }], "class:list"), unescapeHTML(card.iconweb2), addAttribute(card.instagramLink, "href"), addAttribute(["hover:opacity-60 cursor-pointer", { "oculto": !card.iconinsta2 || card.iconinsta2.trim() === "" }], "class:list"), unescapeHTML(card.iconinsta2), addAttribute(card.whatsapp, "href"), addAttribute(["hover:opacity-60 cursor-pointer", { "oculto": !card.iconwasap2 || card.iconwasap2.trim() === "" }], "class:list"), unescapeHTML(card.iconwasap2));
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Cards.astro", void 0);

const $$Metodospagos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Metodospagos.astro", void 0);

const $$DiasHorarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/DiasHorarios.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-transparent rounded-lg shadow-sm mt-32"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <img src="../../public/IMGs/logo.png" class="shadow-lg hover:shadow-gray-700 shadow-gray-950 h-12 w-12 border-3 rounded-full border-cyan-300" alt="Logo"> </a> <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li> <a href="/terminosycondiciones" class="hover:opacity-60 me-4 md:me-6">Terminos y condiciones</a> </li> <li> <a href="/politicadeprivacidad" class="hover:opacity-60 me-4 md:me-6">Politica de privacidad</a> </li> <li> <a data-modal-target="popup-contacto" data-modal-toggle="popup-contacto" class="cursor-pointer hover:opacity-60 me-4 md:me-6">Reclamos</a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center"><span class="text-cyan-300">© 2025 Mercado de Santa Elena.</span> Todos los derechos reservados.</span> </div> </footer>`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/Footer.astro", void 0);

const imagen1 = new Proxy({"src":"/_astro/i3.BXY4-Rz_.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/i3.png";
							}
							
							return target[name];
						}
					});

const imagen2 = new Proxy({"src":"/_astro/i4.BKkSkdNT.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/i4.png";
							}
							
							return target[name];
						}
					});

const imagen3 = new Proxy({"src":"/_astro/i5.CbsNeSLB.png","width":1080,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/i5.png";
							}
							
							return target[name];
						}
					});

const imagen4 = new Proxy({"src":"/_astro/nego2.kxtded0g.jpg","width":286,"height":176,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/nego2.jpg";
							}
							
							return target[name];
						}
					});

const imagen5 = new Proxy({"src":"/_astro/nego3.CBCU8PFS.jpg","width":270,"height":187,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/nego3.jpg";
							}
							
							return target[name];
						}
					});

const imagen6 = new Proxy({"src":"/_astro/nego4.D1HfsG_R.jpg","width":183,"height":275,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/nego4.jpg";
							}
							
							return target[name];
						}
					});

const imagen7 = new Proxy({"src":"/_astro/nego1.CzLACGbk.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/nego1.webp";
							}
							
							return target[name];
						}
					});

const imagen8 = new Proxy({"src":"/_astro/nego5.CBNVzqv7.jpg","width":270,"height":187,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/nego5.jpg";
							}
							
							return target[name];
						}
					});

const imagen9 = new Proxy({"src":"/_astro/tiendalogo.B5hiSoWP.png","width":204,"height":192,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/tiendalogo.png";
							}
							
							return target[name];
						}
					});

const imagen10 = new Proxy({"src":"/_astro/dietetica.CkqLRVjp.jpg","width":3019,"height":3729,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/dietetica.jpg";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/dietetica1.DnnC1aCy.jpg","width":3752,"height":2947,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/dietetica1.jpg";
							}
							
							return target[name];
						}
					});

const imagen12 = new Proxy({"src":"/_astro/doc.Diy4GmgM.jpg","width":7952,"height":4472,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/doc.jpg";
							}
							
							return target[name];
						}
					});

const imagen13 = new Proxy({"src":"/_astro/doc2.CWSgzSXt.jpg","width":2047,"height":1393,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/doc2.jpg";
							}
							
							return target[name];
						}
					});

const imagen14 = new Proxy({"src":"/_astro/pizzeria1.Bot-4EKb.jpg","width":3845,"height":4646,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/pizzeria1.jpg";
							}
							
							return target[name];
						}
					});

const imagen15 = new Proxy({"src":"/_astro/pizzeria2.CJGGHhKw.jpg","width":6016,"height":4016,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/pizzeria2.jpg";
							}
							
							return target[name];
						}
					});

const imagen16 = new Proxy({"src":"/_astro/resto.CvEEIVYK.jpg","width":3401,"height":5101,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/resto.jpg";
							}
							
							return target[name];
						}
					});

const imagen17 = new Proxy({"src":"/_astro/resto2.3Fr-rCiQ.jpg","width":3024,"height":3780,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ELANO/Desktop/mercadosUnidos/public/IMGs/resto2.jpg";
							}
							
							return target[name];
						}
					});

const cards = [
  {
    id: "abc123",
    title: 'Dietetica "Buena Salud"',
    description: "Somos tu aliado en salud y bienestar. Ofrecemos productos naturales, suplementos y asesoramiento personalizado para una alimentación equilibrada.🌱",
    images: [imagen10, imagen5],
    hacemosenvios: "Envios a domicilio",
    si: "✔️",
    no: "",
    depende: "",
    voy: "",
    sivoy: "",
    novoy: "",
    sienvios: "✔️",
    noenvios: "",
    nodias: "❌",
    sidias: "",
    enviogratis: "Envio gratis",
    enviodomicilioSearch: "envios a domicilio",
    enviogratisSearch: "envio gratis envios gratis",
    estado: ["", ""],
    telefono: "343 5353543",
    whatsapp: "https://wa.me/543435353543",
    solollamar: "(Solo mensajes)",
    instagram: "@dieteticabuendia_ok",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    facebook: "Dietetica Buena Salud",
    combofacebook: '<svg class="w-7 h-7" set:html={card.iconfacebook}></svg><p class="text-gray-300">{card.facebook}</p>',
    email: "dieteticabuendia@gmail.com",
    direccion: "Av.Perón 984",
    web: "http://www.google.com/",
    tiktok: "@buendiadietetica",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "23:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="200" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "",
    decorrido: "",
    trabajocorrido: "",
    abiertoferiados: "Abierto feriados",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "Abierto dias festivos",
    solonline: "",
    soloredes: "",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 30"><path fill="#345" d="M16 9.904a6.097 6.097 0 0 0 0 12.192a6.097 6.097 0 0 0 0-12.192m0 10.576a4.48 4.48 0 1 1 0-8.96a4.48 4.48 0 0 1 0 8.96m8.576-18.16H7.423a5.157 5.157 0 0 0-5.156 5.158V24.52c0 2.85 2.31 5.156 5.156 5.156h17.153c2.85 0 5.156-2.31 5.156-5.155V7.48c0-2.85-2.307-5.16-5.156-5.16m-2.34 3.074c0-.605.49-1.097 1.097-1.097h3.22c.604 0 1.096.49 1.096 1.097v3.22c0 .604-.49 1.096-1.098 1.096h-3.22c-.603 0-1.096-.49-1.096-1.097zm6.4 19.127c0 2.238-1.82 4.06-4.06 4.06H7.423a4.064 4.064 0 0 1-4.06-4.06V10.88h.827c.102-.5.544-.878 1.075-.878h3.438c.53 0 .974.377 1.074.877h1.498C12.517 9.732 14.175 9.03 16 9.03s3.48.7 4.723 1.847h7.912V24.52h.002z"/></svg>',
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48"><path fill="none" stroke="#345" stroke-linecap="round" stroke-linejoin="round" d="M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54m16.012-27.75H7.96m32.195 18.275H7.857M5.6 24h36.8M24.04 5.5v37" stroke-width="1"/><path fill="none" stroke="#345" stroke-linecap="round" stroke-linejoin="round" d="M24.02 42.5c5.108 0 9.23-8.285 9.23-18.54c0-10.215-4.122-18.46-9.23-18.46c-5.128 0-9.27 8.245-9.27 18.46c0 10.255 4.142 18.54 9.27 18.54" stroke-width="1"/></svg>',
    iconweb2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="#345" stroke-linecap="round" stroke-linejoin="round" d="M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54m16.012-27.75H7.96m32.195 18.275H7.857M5.6 24h36.8M24.04 5.5v37" stroke-width="1"/><path fill="none" stroke="#345" stroke-linecap="round" stroke-linejoin="round" d="M24.02 42.5c5.108 0 9.23-8.285 9.23-18.54c0-10.215-4.122-18.46-9.23-18.46c-5.128 0-9.27 8.245-9.27 18.46c0 10.255 4.142 18.54 9.27 18.54" stroke-width="1"/></svg>',
    icontiktok: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 290"><path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/></svg>',
    icontiktok2: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#345" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>',
    iconfacebook: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 35 35"><path fill="#3D3BF3" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>',
    iconfacebook2: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 35 35"><path fill="#345" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>',
    visa: '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="45" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"/><stop offset="100%" stop-color="#254aa5"/></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" transform="matrix(1 0 0 -1 0 82.668)"/></svg>',
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border shadow-md shadow-gray-950 border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-4 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    crypto: "Crypto monedas",
    tarjetasvisa: "Tarjetas Visa",
    tarjetasmaster: "Tarjetas Mastercard",
    mercadopago: "Mercadopago",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "Dolares",
    pagadolares: "Pagá con dolares 💸",
    pagacripto: "Pagá con criptomonedas ₿",
    abiertodomingos: "Abrimos los domingos",
    trabajodomingos: "",
    open365: "Open 365"
  },
  {
    id: "abc124",
    title: "Minimaket 24/7",
    description: "Tu lugar favorito para disfrutar de golosinas, snacks y bebidas. Con los mejores sabores y opciones para todos los gustos. ¡Dulces momentos te esperan! 🍬🍫🥤",
    images: [imagen7, imagen4],
    hacemosenvios: "Envios a domicilio",
    si: "✔️",
    no: "",
    depende: "DEPENDE EL MONTO 🤑",
    voy: "",
    sivoy: "",
    novoy: "",
    sienvios: "",
    noenvios: "",
    nodias: "❌",
    sidias: "",
    enviogratis: "Envio gratis",
    enviodomicilioSearch: "envios a domicilio",
    enviogratisSearch: "",
    estado: ["", ""],
    telefono: "343 5353543",
    whatsapp: "https://wa.me/521234567890",
    solollamar: "",
    instagram: "@24_7minimarket",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    facebook: "",
    combofacebook: "",
    email: "minimarket24_7@gmail.com",
    direccion: "Facundo Quiroga 1053",
    web: "",
    tiktok: "",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "01:00", h2: "12:00", h3: "12:00", h4: "24:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="200" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "Open 24/7",
    decorrido: "Abierto de corrido",
    trabajocorrido: "",
    abiertoferiados: "(Abierto feriados)",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "(Abierto dias festivos)",
    solonline: "",
    soloredes: "",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="35" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: "",
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: "",
    iconweb2: "",
    icontiktok: "",
    icontiktok2: '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#345" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg>',
    iconfacebook: "",
    iconfacebook2: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 35 35"><path fill="#345" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>',
    visa: '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="45" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"/><stop offset="100%" stop-color="#254aa5"/></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" transform="matrix(1 0 0 -1 0 82.668)"/></svg>',
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-3 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    crypto: "Crypto monedas",
    tarjetasvisa: "",
    tarjetasmaster: "Tarjetas mastecard",
    mercadopago: "Mercadopago",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "Dolares",
    pagadolares: "Pagá con dolares 💸",
    pagacripto: "Pagá con criptomonedas ₿",
    abiertodomingos: "",
    trabajodomingos: "",
    open365: ""
  },
  {
    id: "abc125",
    title: 'Restaurant "Al Dente"',
    description: "Disfruta de platos tradicionales preparados con ingredientes frescos y mucho amor. Un lugar donde cada bocado es una experiencia única. ¡Te esperamos! 🍽️✨",
    images: [imagen16, imagen17, imagen6, imagen8],
    si: "✔️",
    sienvios: "",
    hacemosenvios: "Envios a domicilio",
    no: "",
    novoy: "",
    sivoy: "",
    noenvios: "❌",
    nodias: "❌",
    sidias: "",
    enviogratis: "Envio gratis",
    enviodomicilioSearch: "",
    enviogratisSearch: "",
    estado: ["", ""],
    depende: "",
    telefono: "343 5353543",
    whatsapp: "https://wa.me/521234567890",
    solollamar: "",
    instagram: "@aldente_ok",
    instagramLink: "",
    facebook: "",
    facebookLink: "",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    combofacebook: "",
    email: "aldente@gmail.com",
    direccion: "Ayacucho 298",
    web: "",
    tiktok: "",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="200" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "",
    decorrido: "Abierto de corrido",
    trabajocorrido: "",
    abiertoferiados: "Abierto feriados",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "Abierto dias festivos",
    voy: "",
    solonline: "",
    soloredes: "",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="35" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: "",
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: "",
    iconweb2: "",
    icontiktok: "",
    icontiktok2: "",
    iconfacebook: "",
    iconfacebook2: "",
    visa: "",
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-3 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    crypto: "Crypto monedas",
    tarjetasvisa: "",
    tarjetasmaster: "Tarjetas mastecard",
    mercadopago: "Mercadopago",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "Dolares",
    pagadolares: "Pagá con dolares 💸",
    pagacripto: "Pagá con criptomonedas",
    abiertodomingos: "",
    trabajodomingos: "",
    open365: ""
  },
  {
    id: "abc163",
    title: "Pizza Hat",
    description: "Deléitate con nuestras pizzas artesanales, empanadas y platos caseros. Sabores auténticos que te harán sentir como en casa. ¡Te esperamos! 🍕🍴😊",
    images: [imagen14, imagen15, imagen1, imagen2, imagen3],
    si: "✔️",
    sienvios: "",
    hacemosenvios: "Envios a domicilio",
    no: "",
    sivoy: "",
    novoy: "",
    noenvios: "❌",
    nodias: "❌",
    sidias: "",
    enviogratis: "Envio gratis",
    enviodomicilioSearch: "envios a domicilio",
    enviogratisSearch: "",
    estado: ["", ""],
    depende: "",
    telefono: "343 5353543",
    whatsapp: "https://wa.me/521234567890",
    solollamar: "",
    instagram: "@pizzahat_se",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    facebook: "",
    combofacebook: "",
    email: "pizzahat@proton.me",
    direccion: "Ruta 48 S/N",
    web: "",
    tiktok: "",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="200" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "",
    decorrido: "",
    trabajocorrido: "",
    abiertoferiados: "Abierto feriados",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "Abierto dias festivos",
    voy: "",
    solonline: "",
    soloredes: "",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: "",
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="35" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: "",
    iconweb2: "",
    icontiktok: "",
    icontiktok2: "",
    iconfacebook: "",
    iconfacebook2: "",
    visa: "",
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-3 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    tarjetasvisa: "",
    tarjetasmaster: "Tarjetas mastecard",
    mercadopago: "Mercadopago",
    crypto: "Crypto monedas",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "Dolares",
    pagadolares: "Pagá con dolares 💸",
    pagacripto: "Pagá con criptomonedas",
    abiertodomingos: "",
    trabajodomingos: "",
    open365: ""
  },
  {
    id: "abc127",
    title: "Clothing Store",
    description: "Deléitate con nuestras pizzas artesanales, empanadas y platos caseros. Sabores auténticos que te harán sentir como en casa. ¡Te esperamos! 🍕🍴😊",
    images: [imagen9],
    si: "✔️",
    sienvios: "",
    hacemosenvios: "Envios a domicilio",
    no: "",
    sivoy: "",
    novoy: "",
    noenvios: "",
    nodias: "❌",
    sidias: "",
    enviogratis: "Envio gratis",
    enviodomicilioSearch: "",
    enviogratisSearch: "",
    estado: ["", ""],
    depende: "DEPENDE EL MONTO 🤑",
    telefono: "343 5353543",
    whatsapp: "https://wa.me/521234567890",
    solollamar: "",
    instagram: "@pizzahat_se",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    facebook: "",
    combofacebook: "",
    email: "pizzahat@proton.me",
    direccion: "Ruta 48 S/N",
    web: "",
    tiktok: "",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="210" height="210" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "",
    decorrido: "",
    trabajocorrido: "",
    abiertoferiados: "Abierto feriados",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "Abierto dias festivos",
    voy: "",
    solonline: "",
    soloredes: "Solo venta por redes",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="35" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: "",
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: "",
    iconweb2: "",
    icontiktok: "",
    icontiktok2: "",
    iconfacebook: "",
    iconfacebook2: "",
    visa: "",
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-3 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    crypto: "Crypto monedas",
    tarjetasvisa: "",
    tarjetasmaster: "Tarjetas mastecard",
    mercadopago: "Mercadopago",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "Dolares",
    pagadolares: "Pagá con dolares",
    pagacripto: "Pagá con criptomonedas",
    abiertodomingos: "",
    trabajodomingos: "",
    open365: ""
  },
  {
    id: "abc129",
    title: "Doctor Carlos Gónzalez",
    description: "Atención médica profesional y personalizada para tu bienestar. Diagnóstico preciso, tratamientos efectivos y cuidado integral. ¡Tu salud en buenas manos!✨",
    images: [imagen13, imagen12],
    si: "",
    sienvios: "",
    sivoy: "✔️",
    novoy: "",
    hacemosenvios: "",
    no: "",
    noenvios: "",
    sidias: "",
    nodias: "❌",
    enviogratis: "",
    enviodomicilioSearch: "",
    enviogratisSearch: "envio gratis envios gratis",
    estado: ["", ""],
    depende: "",
    telefono: "343 5353543",
    whatsapp: "https://wa.me/521234567890",
    solollamar: "",
    instagram: "@dieteticabuendia_ok",
    instagramLink: "https://www.instagram.com",
    facebookLink: "https://www.facebook.com",
    emailLink: "https://www.gmail.com",
    direccionLink: "https://www.google.com/maps?q=-30.96305297447398,-59.766618625273374",
    tiktokLink: "htts://www.tiktok.com",
    facebook: "Dietetica Buena Salud",
    combofacebook: "",
    email: "dieteticabuendia@gmail.com",
    direccion: "Av.Perón 984",
    web: "http://localhost:4321/",
    tiktok: "@buendiadietetica",
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    horaLunes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMartes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaMiercoles: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaJueves: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaViernes: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaSabado: { h1: "09:00", h2: "13:00", h3: "17:00", h4: "22:00" },
    horaDomingo: { h1: "--:--", h2: "--:--", h3: "--:--", h4: "--:--" },
    map: '<iframe class="rounded-lg border border-gray-600 shadow-md shadow-gray-800" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.266190779548!2d-59.766618625273374!3d-30.96305297447398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b35eb3cf245073%3A0xcdd83894685dccd2!2sLa%20Paz%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1740952491185!5m2!1ses-419!2sar" width="200" height="auto" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    veinticuatro: "",
    decorrido: "",
    trabajocorrido: "",
    abiertoferiados: "Abierto feriados",
    trabajoferiados: "",
    trabajofestivos: "",
    medioSabados: "",
    medioDomingos: "",
    abiertofestivos: "Abierto dias festivos",
    voy: "Voy a domicilio",
    solonline: "",
    soloredes: "",
    iconwasap: '<svg class="w-6 h-6" role="img" fill="#25D366" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    iconwasap2: '<svg xmlns="http://www.w3.org/2000/svg" width="35" eight="35" viewBox="0 0 24 24"><path fill="#345" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>',
    iconinsta: '<svg class="w-6 h-6" role="img" fill="#FF0069" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    iconinsta2: "",
    iconemail: '<svg class="w-6 h-6" fill="#fff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>mailbox.org</title><path d="M2.229 22.844H24V10.501l-8.628 5.882c-.613.419-1.226-.003-1.226-.003L0 6.646v13.969s0 2.229 2.229 2.229m12.558-9.273L24 7.261V1.156H2.229S0 1.156 0 3.384v.06l14.787 10.127Z"/></svg>',
    iconubicacion: '<svg class="w-6 h-6" role="img" fill="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg>',
    iconweb: "",
    iconweb2: "",
    icontiktok: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 290"><path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/></svg>',
    icontiktok2: "",
    iconfacebook: '<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 35 35"><path fill="#3D3BF3" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>',
    iconfacebook2: "",
    visa: '<svg xmlns="http://www.w3.org/2000/svg" width="75" height="45" viewBox="0 0 256 83"><defs><linearGradient id="logosVisa0" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"/><stop offset="100%" stop-color="#254aa5"/></linearGradient></defs><path fill="url(#logosVisa0)" d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" transform="matrix(1 0 0 -1 0 82.668)"/></svg>',
    mastercard: '<svg aria-hidden="true" width="80" heigth="110" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z" fill="#D9222A"/><path d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561" fill="#EE9F2D"/><path d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397" fill="black"/><path d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z" fill="white"/><path d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z" fill="black"/><path d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.01 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z" fill="white"/></svg>',
    iconcash: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><g fill="#255F38"><path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0a5 5 0 0 1 10 0"/><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207c0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158c0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522c0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569c0 .339-.257.571-.709.614v-1.195z"/><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/><path d="M9.998 5.083L10 5a2 2 0 1 0-3.132 1.65a6 6 0 0 1 3.13-1.567"/></g></svg>',
    soloefectivo: "Solo efectivo",
    todoslospagos: '<p class="text-gray-300 font-bold p-3 border border-gray-600 rounded-lg text-center w-52">Aceptamos todos los medios de pago</p>',
    iconmercado: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="#00B1EA" d="M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155c-.04 0-.074.023-.113.059c-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725c.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16a.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126q.008-.062-.03-.092l-.05-.04l-.047.043a.728.726 0 0 1-.505.203a.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722c.364 0 .675.27.721.63l.026.195l.11-.165c.01-.018.307-.46.852-.46c.102 0 .21.016.316.05c.434.13.508.52.519.68c.008.094.075.1.09.1c.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225q.193 0 .402.09c.69.293.379 1.158.374 1.167c-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035c.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93a.936.934 0 0 1-.94.928m7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77c-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07q-.274 0-.58.095c-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258q-.03-.037.04-.125l.008-.008l1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7 7 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66c-.962 0-1.925-.229-2.858-.68c-.05-.022-1.22-.567-2.44-.57q-.049 0-.096.002c-1.434.033-2.24.536-2.782.976c-.528.013-.982.138-1.388.25c-.361.1-.673.186-.979.185c-.125 0-.35-.01-.37-.012c-.35-.01-2.115-.437-3.518-.962q-.213.15-.415.31c1.466.593 3.25 1.053 3.812 1.089c.157.01.323.027.491.027c.372 0 .744-.103 1.104-.203c.213-.059.446-.123.692-.17l-.196.194l-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271q.23 0 .43-.044c.427-.095.874-.448 1.349-.82c.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05a.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472c.835.62 4.531 3.815 4.566 3.846c.002.002.238.203.22.537c-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15a.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543c-.074-.06-.146-.115-.22-.115a.12.12 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395q.017.367-.35.606a.957.955 0 0 1-.526.171a.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.13.13 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012q-.16-.027-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98c-.059-.05-.133-.11-.21-.11a.13.13 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.2.2 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576a1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125q-.22 0-.42.075a1.153 1.15 0 0 0-.671-.564a1.52 1.515 0 0 0-.494-.085q-.421 0-.767.242a1.168 1.165 0 0 0-.903-.43a1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189a4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442a1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08q.135 0 .266-.034c.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094q.183 0 .355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41c.221.121.688.341 1.163.341q.09.001.175-.01c.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058c.255 0 .501-.086.75-.265c.244-.174.418-.424.444-.637v-.01q.125.026.251.026c.265 0 .527-.082.773-.242c.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194a1.04 1.04 0 0 0 .502-.808a1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492a27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293S.465 15.572.465 11.545S5.63 4.252 12.004 4.252c6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203c7.347 0 12-3.67 12-8.204z"/></svg>',
    icondebito: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50"><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="#fff" stroke-width="3" d="M30.313 30.208h-.209m4.375 0h-.208z"/><path stroke="#fff" stroke-width="2" d="M43.75 18.75H6.25"/><path stroke="#fff" stroke-width="2" d="M41.667 10.417H8.333c-1.15 0-2.083.933-2.083 2.083v25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083v-25c0-1.15-.933-2.083-2.083-2.083"/></g></svg>',
    icondolares: '<svg  class="border-2 border-black rounded-full " xmlns="http://www.w3.org/2000/svg"  width="54"  height="54"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>',
    cryptos: '<svg role="img" fill="#F7931A" width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitcoin</title><path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/></svg>',
    tarjetasvisa: "Tarjetas visa",
    tarjetasmaster: "Tarjetas mastecard",
    mercadopago: "Mercadopago",
    crypto: "Crypto monedas",
    efectivo: "Efectivo",
    debito: "Debito",
    dolares: "",
    pagadolares: "Pagá con dolares 💸",
    pagacripto: "Pagá con criptomonedas",
    abiertodomingos: "",
    trabajodomingos: "",
    open365: ""
  }
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<!-- Contenido de la p\xE1gina (antes de abrir el modal) -->", `<div id="contenido-principal" aria-hidden="false"> <!-- Aqu\xED va todo tu contenido --> </div> <!-- Modal (contenido principal del modal) --> <div id="popup-rese\xF1as" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-auto max-h-full" aria-hidden="true"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/70 rounded-md"> <div class="relative rounded-lg border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-rese\xF1as"> <svg class="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="w-full max-w-sm rounded-lg p-3"> <div class="flex flex-col items-center gap-2 rounded-lg pb-10"> <img src="../../public/IMGs/logo.png" class="hover:shadow-gray-700 w-25 h-25 mb-5 mt-10 bg-transparent border border-gray-600 shadow-gray-950 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="logo"> <h4 class="mt-3 text-3xl font-medium text-white">Inicia Sesi\xF3n</h4> <div class="flex mt-5 w-56 justify-center items-center gap-2"> <button id="login-google" class="cursor-pointer bg-gray-300/70 rounded-md p-3 shadow-gray-950 shadow-md hover:shadow-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path></svg> </button> <button id="login-twitter" class="cursor-pointer mx-2 rounded-md border-3 border-black p-3 shadow-gray-950 shadow-md hover:shadow-gray-900 hover:border-black/70"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 14 14" class="hover:opacity-60"> <g fill="none"><path fill="#000" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g> </svg> </button> <button id="login-facebook" class="cursor-pointer rounded-md bg-gray-400/90 p-1 shadow-gray-950 shadow-md hover:shadow-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" class="p-0 hover:opacity-60"> <path fill="#3275B5" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path> </svg> </button> </div> </div> </div> </div> </div> </div> <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
        authDomain: "comercios-unidos-se.firebaseapp.com",
        projectId: "comercios-unidos-se",
        storageBucket: "comercios-unidos-se.firebasestorage.app",
        messagingSenderId: "561779340978",
        appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

   // Funci\xF3n para cerrar el modal
    function closeModal() {
    // Encuentra el bot\xF3n de cerrar modal (que tiene el atributo data-modal-hide)
    const closeButton = document.querySelector('[data-modal-hide="popup-rese\xF1as"]');
    if (closeButton) {
    closeButton.click(); // Simula el clic en el bot\xF3n para cerrar el modal
    }
    }  


    // Manejo del login de Google
    document.getElementById("login-google").addEventListener("click", () => {
    signInWithPopup(auth, googleProvider).then(result => {
        console.log("Google login exitoso:", result.user);
        localStorage.setItem('isLoggedIn', 'true'); // Guardamos el estado de login
        console.log('Estado de login guardado en localStorage:', localStorage.getItem('isLoggedIn'));
        
        const username = result.user.displayName;  
        
        window.history.pushState({}, '', \`?username=\${encodeURIComponent(username)}\`);

        closeModal()

        window.location.reload('/');

        alert('\xA1Login Exitoso! Bienvenido \${username}');
        }).catch(error => {
        console.error("Error en Google login:", error);

        if (error.code === "auth/network-request-failed") {
        alert("Error de conexi\xF3n. Intenta nuevamente.");
      } else {
        alert("Error al iniciar sesi\xF3n. Hubo un problema de conexi\xF3n.");
      }
        });
    });


    // Manejo del login de Twitter
    document.getElementById("login-twitter").addEventListener("click", () => {
        signInWithPopup(auth, twitterProvider).then(result => {
            console.log("Twitter login exitoso:", result.user);
            localStorage.setItem('isLoggedIn', 'true');
            closeModal();
            alert('\xA1Login Exitoso!')
        }).catch(error => {
            console.error("Error en Twitter login:", error);
        });
    });

    // Manejo del login de Facebook
    document.getElementById("login-facebook").addEventListener("click", () => {
        signInWithPopup(auth, facebookProvider).then(result => {
            console.log("Facebook login exitoso:", result.user);
            localStorage.setItem('isLoggedIn', 'true');
            closeModal();
            alert('\xA1Login Exitoso!')
        }).catch(error => {
            console.error("Error en Facebook login:", error);
        });


    });
<\/script>`], ["<!-- Contenido de la p\xE1gina (antes de abrir el modal) -->", `<div id="contenido-principal" aria-hidden="false"> <!-- Aqu\xED va todo tu contenido --> </div> <!-- Modal (contenido principal del modal) --> <div id="popup-rese\xF1as" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-auto max-h-full" aria-hidden="true"> <div class="relative p-5 w-full max-w-md h-auto bg-gray-950/70 rounded-md"> <div class="relative rounded-lg border border-gray-500"> <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-rese\xF1as"> <svg class="w-3 h-3" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> <div class="w-full max-w-sm rounded-lg p-3"> <div class="flex flex-col items-center gap-2 rounded-lg pb-10"> <img src="../../public/IMGs/logo.png" class="hover:shadow-gray-700 w-25 h-25 mb-5 mt-10 bg-transparent border border-gray-600 shadow-gray-950 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="logo"> <h4 class="mt-3 text-3xl font-medium text-white">Inicia Sesi\xF3n</h4> <div class="flex mt-5 w-56 justify-center items-center gap-2"> <button id="login-google" class="cursor-pointer bg-gray-300/70 rounded-md p-3 shadow-gray-950 shadow-md hover:shadow-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"></path><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"></path><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"></path><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"></path></svg> </button> <button id="login-twitter" class="cursor-pointer mx-2 rounded-md border-3 border-black p-3 shadow-gray-950 shadow-md hover:shadow-gray-900 hover:border-black/70"> <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 14 14" class="hover:opacity-60"> <g fill="none"><path fill="#000" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"></path></g> </svg> </button> <button id="login-facebook" class="cursor-pointer rounded-md bg-gray-400/90 p-1 shadow-gray-950 shadow-md hover:shadow-gray-800"> <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" class="p-0 hover:opacity-60"> <path fill="#3275B5" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path> </svg> </button> </div> </div> </div> </div> </div> </div> <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
    import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyDavU9YjgE1MM8buptQ1hOOoohrsMOriCs",
        authDomain: "comercios-unidos-se.firebaseapp.com",
        projectId: "comercios-unidos-se",
        storageBucket: "comercios-unidos-se.firebasestorage.app",
        messagingSenderId: "561779340978",
        appId: "1:561779340978:web:dfdf091ddec7db324dfbab"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

   // Funci\xF3n para cerrar el modal
    function closeModal() {
    // Encuentra el bot\xF3n de cerrar modal (que tiene el atributo data-modal-hide)
    const closeButton = document.querySelector('[data-modal-hide="popup-rese\xF1as"]');
    if (closeButton) {
    closeButton.click(); // Simula el clic en el bot\xF3n para cerrar el modal
    }
    }  


    // Manejo del login de Google
    document.getElementById("login-google").addEventListener("click", () => {
    signInWithPopup(auth, googleProvider).then(result => {
        console.log("Google login exitoso:", result.user);
        localStorage.setItem('isLoggedIn', 'true'); // Guardamos el estado de login
        console.log('Estado de login guardado en localStorage:', localStorage.getItem('isLoggedIn'));
        
        const username = result.user.displayName;  
        
        window.history.pushState({}, '', \\\`?username=\\\${encodeURIComponent(username)}\\\`);

        closeModal()

        window.location.reload('/');

        alert('\xA1Login Exitoso! Bienvenido \\\${username}');
        }).catch(error => {
        console.error("Error en Google login:", error);

        if (error.code === "auth/network-request-failed") {
        alert("Error de conexi\xF3n. Intenta nuevamente.");
      } else {
        alert("Error al iniciar sesi\xF3n. Hubo un problema de conexi\xF3n.");
      }
        });
    });


    // Manejo del login de Twitter
    document.getElementById("login-twitter").addEventListener("click", () => {
        signInWithPopup(auth, twitterProvider).then(result => {
            console.log("Twitter login exitoso:", result.user);
            localStorage.setItem('isLoggedIn', 'true');
            closeModal();
            alert('\xA1Login Exitoso!')
        }).catch(error => {
            console.error("Error en Twitter login:", error);
        });
    });

    // Manejo del login de Facebook
    document.getElementById("login-facebook").addEventListener("click", () => {
        signInWithPopup(auth, facebookProvider).then(result => {
            console.log("Facebook login exitoso:", result.user);
            localStorage.setItem('isLoggedIn', 'true');
            closeModal();
            alert('\xA1Login Exitoso!')
        }).catch(error => {
            console.error("Error en Facebook login:", error);
        });


    });
<\/script>`])), maybeRenderHead());
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/components/signin.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ${renderComponent($$result2, "Denuncia", $$Denunciar, {})} ${renderComponent($$result2, "Signin", $$Signin, {})} ${renderComponent($$result2, "NuestrosServicios", $$NuestrosServicios, {})} ${renderComponent($$result2, "QueEs", $$QueEs, {})} ${renderComponent($$result2, "Publicidad", $$Publicidad, {})} ${renderComponent($$result2, "Modalpublicar", $$Publicar, {})} ${renderComponent($$result2, "Landing", $$Landing, {})} ${renderComponent($$result2, "Filtro", $$Filtro, {})} ${renderComponent($$result2, "Search", $$Search, {})} ${maybeRenderHead()}<div id="cards-container" class="grid grid-cols-2 ml-10 mt-10"> ${cards.map((card) => renderTemplate`${renderComponent($$result2, "Card", $$Cards, { "card": card })}`)} </div> ${renderComponent($$result2, "Pago", $$Metodospagos, {})} ${renderComponent($$result2, "DiasyHorarios", $$DiasHorarios, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/index.astro", void 0);

const $$file = "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
