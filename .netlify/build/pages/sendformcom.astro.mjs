import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_AT0Uju-k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByxgZXBy.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$SendFormCom = createComponent(async ($$result, $$props, $$slots) => {
  const siteKey = "0x4AAAAAABCNmOzraV7rhN1s";
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
    import { getFirestore, setDoc, doc, getDoc, enableIndexedDbPersistence }  from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

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

    let imageUrls = [];

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('contactForm');
  const errorMessageMetodos = document.getElementById('error-message-metodos');
  const errorMessageDias = document.getElementById('error-message-dias');
  const MessageDias = document.getElementById('message-dias');
  const errorMessageHoraTar = document.getElementById('error-message-hora-tarde');
  const errorMessageHoraMan = document.getElementById('error-message-hora-ma\xF1ana');
  const errorMessageHora = document.getElementById('error-message-hora');
  const imageMessage = document.getElementById('uploadStatus');
  const imageLimit = document.getElementById('image-limit');
  const imageInput = document.getElementById('imageInput');
  const eliminarBtn = document.getElementById('eliminar-todas-btn');

  // Funci\xF3n para actualizar la UI
  function actualizarUI() {
    const imageCount = imageUrls.length;
    
    // Actualizar mensaje de estado
    imageMessage.textContent = \`\${imageCount} imagen\${imageCount !== 1 ? 'es' : ''} cargada\${imageCount !== 1 ? 's' : ''}\`;
    imageMessage.style.display = imageCount > 0 ? "block" : "none";
    
    // Mostrar/ocultar bot\xF3n de eliminar
    eliminarBtn.style.display = imageCount > 0 ? "block" : "none";
    
    // Controlar l\xEDmite de 6 im\xE1genes
    if(imageCount >= 6) {
      imageInput.disabled = true;
      imageInput.classList.add('opacity-60', 'cursor-not-allowed');
      imageInput.classList.remove('cursor-pointer');
      imageLimit.textContent = '6 im\xE1genes cargadas. Llegaste al l\xEDmite \u{1F6AB}';
      imageMessage.style.display = 'none' 
      imageLimit.style.display = "block";
    } else {
      imageInput.disabled = false;
      imageInput.classList.remove('opacity-60', 'cursor-not-allowed');
      imageInput.classList.add('cursor-pointer');
      imageLimit.style.display = "none";
    }
  }

  // Funci\xF3n para eliminar todas las im\xE1genes
  function eliminarTodas() {
    if (imageUrls.length === 0) {
    submitMessage.disabled = false;
    submitMessage.textContent = 'Publicar';  
    return;
  }
  if (!confirm('\xBFEliminaras todas las im\xE1genes? Igual puedas volver a cargarlas.')) {
    submitMessage.disabled = false;
    submitMessage.textContent = 'Publicar'; 
    return; 
  }
  imageUrls = [];
  actualizarUI();
}

  // Asignar evento al bot\xF3n de eliminar
  eliminarBtn.addEventListener('click', eliminarTodas);

  // Funci\xF3n para cargar Cloudinary
  function cargarCloudinary() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Error al cargar Cloudinary'));
      document.head.appendChild(script);
    });
  }

  try {
    await cargarCloudinary();

    const myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dliafafrq',
        uploadPreset: 'mercadosunidos',
        multiple: true,
        maxFiles: 6,
        cropping: false,
        showAdvancedOptions: false,
        buttonClass: 'upload-button',
        active: true,
        theme: 'minimal',
        sources: ['local','camera', 'google_drive', "instagram", "facebook", 'image_search'],
        googleApiKey: 'AIzaSyCSb64uR4CJY1Zm3qmA3lKUAsRDx2zGybY',
        maxFileSize: 5 * 1024 * 1024,
        allowedFileTypes: ['jpeg', 'png', 'jpg', 'webp', 'avif'],
        frame: {
          background: "#000000"
        },
        language: "es",
        text: {
          "en": {
            "or": "o",
            "back": "Atras",
            "advanced": "Avanzar",
            "close": "Cerrar",
            "no_results": "Sin resultados",
            "search_placeholder": "Buscar Imagenes",
            "about_uw": "About the Upload Widget",
            "search": {
              "placeholder": "Buscar...",
              "reset": "Resetear busqueda"
            },
            "queue": {
              "done": "Listo",
              "title": "Procesado",
              "upload_more": "Subir m\xE1s",
              "title_uploading_with_counter": "Subiendo {{num}} archivos",
              "title_processing_with_counter": "Procesando {{num}} archivos",
              "abort_all": "Parar",
              "retry_failed": "Reintentar",
            },
            "local": {
              "browse": "Buscar",
              "dd_title_multi": "Arrastra y soltar imagenes aqu\xED",
              "drop_title_multiple": "Suelta archivos para subir"
            },
            "menu": {
              "files": "Mis archivos",
              "camera": "Camara",
            },
          }, 
        },  
        theme: "minimal",
        styles: {
          palette: {
            window: "#2f2f2f",
            sourceBg: "#1F1F1F",
            windowBorder: "#333333",
            tabIcon: "#3D8D7A",
            inactiveTabIcon: "#999999",
            menuIcons: "#3D8D7A",
            textDark: "#ddd",
            textLight: "#ddd",
            link: "#3D8D7A",
            action: "#3D8D7A",
            inactive: "#d4d4d4",
            error: "#4caf50",
            success: "#4caf50",
          },
        },    
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const imageUrl = result.info.secure_url;
          imageUrls.push(imageUrl);
          actualizarUI();
        }
        
        if (result && result.event === 'close') {
          actualizarUI();
        }
      }
    );

    // Asignar evento al bot\xF3n de subida
    imageInput.addEventListener('click', (e) => {
      e.preventDefault();
      myWidget.open();
    });
  } catch (error) {
    console.error("Cloudinary no est\xE1 disponible:", error);
    
    document.getElementById('imageInput').addEventListener('click', function (event) {
      event.preventDefault();
      alert('Gestor de im\xE1genes no disponible. Selecciona "Luego env\xEDo las im\xE1genes".');
      return;
    });
  }

  // Imagenes cargar luego

const cargarLuegoMensaje = document.getElementById('cargarLuego'); 
const messageOk = document.getElementById('ok');
const errorMessageImage = document.getElementById('image-limit');

cargarLuegoMensaje.addEventListener('change', function () {
  if (this.checked) {
    imageInput.disabled= true;
    imageInput.classList.add ('opacity-60');
    imageInput.classList.remove ('cursor-pointer');
    messageOk.style.display = 'block';
    imageMessage.style.display = 'none'
    imageLimit.style.display = "none";
    imageMessage.style.display = "none";
  } else {
    imageInput.disabled= false;
    imageInput.classList.remove ('opacity-60');
    imageInput.classList.add ('cursor-pointer');
    messageOk.style.display = 'none';
    errorMessageImage.textContent = '\u274C Sube una imagen o selecciona "Luego subo las imagenes"'
    errorMessageImage.style.display = 'block'
    errorMessageImage.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2')  
  }
});

// envios a domicilio? escucha los cambios

const enviosdomicilio = document.getElementById("enviosdomicilio");
const errorMessageDomicilio = document.getElementById("error-message-domicilio");
const MessageDomicilio = document.getElementById("message-domicilio");

enviosdomicilio.addEventListener("change", function () {
    if (enviosdomicilio.value === "") {
        errorMessageDomicilio.textContent = '\u274C Debes seleccionar una opci\xF3n';
        errorMessageDomicilio.style.display = "block";
        MessageDomicilio.style.display = "none";
    } else {
        MessageDomicilio.textContent = '\u2705';
        MessageDomicilio.style.display = "block";
        errorMessageDomicilio.style.display = "none";
    }
});

// Envios gratis - escucha los cambios

const errorMessageDomicilioGratis = document.getElementById("error-message-domicilio-gratis");
const MessageDomicilioGratis = document.getElementById("message-domicilio-gratis");
const enviosgratis = document.getElementById("enviosgratis");

enviosgratis.addEventListener("change", function () {
    if (enviosgratis.value === "") {
        errorMessageDomicilioGratis.textContent = '\u274C Debes seleccionar una opci\xF3n';
        errorMessageDomicilioGratis.style.display = "block";
        MessageDomicilioGratis.style.display = "none";
    } else {
        MessageDomicilioGratis.textContent = '\u2705';
        MessageDomicilioGratis.style.display = "block";
        errorMessageDomicilioGratis.style.display = "none";
    }
});
    
        // venta online- escucha el cambio en el input direcciones

        const ventaonlineCheckbox = document.getElementById('ventaonline');
        const MessageVentaOnline = document.getElementById('MessageVenta');
        const direccionInput = document.getElementById('direccion');
        const validacionDireccion= document.getElementById('validacion-direccion');
  
        ventaonlineCheckbox.addEventListener('change', function () {
            
            if (this.checked) {
                direccionInput.disabled = true;
                direccionInput.value = '';
                validacionDireccion.style.display = 'none'
                MessageVentaOnline.textContent = '\u2705';
                MessageVentaOnline.style.display = 'block';
                
            } else {
                direccionInput.disabled = false;
                MessageVentaOnline.style.display = 'none';
                validacionDireccion.textContent = '\u274C Debes ingrear una direcci\xF3n'
                validacionDireccion.style.display = 'block';
                validacionDireccion.style.color = 'red';
                
                
            }
        });

        // escucha el change de todos los metodos de pago

        const todoslosmediosCheckbox = document.getElementById('todoslosmedios');
        const MessageMetodos = document.getElementById('messageMetodos');
        const metodosPagoCheckboxes = document.querySelectorAll('input[name="metodos"]:not(#todoslosmedios)');
        const todoslosdiasCheckbox = document.querySelectorAll('input[name="dias"]');
       

        // Agrega el evento change al checkbox "todoslosmedios"
          todoslosmediosCheckbox.addEventListener('change', function () {
        // Si el checkbox est\xE1 marcado, deshabilita los dem\xE1s m\xE9todos de pago
        if (this.checked) {
        metodosPagoCheckboxes.forEach(checkbox => {
            checkbox.disabled = true;
            checkbox.checked = false; // Desmarcar los otros checkboxes
            MessageMetodos.textContent = '\u2705';
            MessageMetodos.style.display = 'block';
            errorMessageMetodos.style.display = 'none';
        });
    } else {
        // Si no est\xE1 marcado, habilita los dem\xE1s m\xE9todos de pago
        metodosPagoCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
            MessageMetodos.style.display = 'none';
            errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
            errorMessageMetodos.style.display = 'block';
        });
    }
});


// Agrega el evento change a cada uno de los checkboxes de los m\xE9todos de pago
metodosPagoCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Si este checkbox est\xE1 marcado, muestra el mensaje verde
        if (this.checked) {
            MessageMetodos.textContent = '\u2705';
            MessageMetodos.style.display = 'block';
            errorMessageMetodos.style.display = 'none';
        } else {
            // Si no est\xE1 marcado, muestra el mensaje de error
            let algunaSeleccionada = false;
            metodosPagoCheckboxes.forEach(cb => {
                if (cb.checked) {
                    algunaSeleccionada = true;
                }
            });
            if (!algunaSeleccionada) {
                MessageMetodos.style.display = 'none';
                errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
                errorMessageMetodos.style.display = 'block';
            }
        }
    });
});

todoslosdiasCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Si este checkbox est\xE1 marcado, muestra el mensaje verde
        if (this.checked) {
            MessageDias.textContent = '\u2705';
            MessageDias.style.display = 'block';
            errorMessageDias.style.display = 'none';
        } else {
            // Si no est\xE1 marcado, muestra el mensaje de error
            let algunaSeleccionada = false;
            todoslosdiasCheckbox.forEach(cb => {
                if (cb.checked) {
                    algunaSeleccionada = true;
                }
            });
            if (!algunaSeleccionada) {
                MessageDias.style.display = 'none';
                errorMessageDias.textContent = '\u274C Debes seleccionar al menos un d\xEDa laboral';
                errorMessageDias.style.display = 'block';
            }
        }
    });
});
                
const horaFinTarTest = document.getElementById('hora-fin-tar');
const horaFinManTest = document.getElementById('hora-fin-man');
const horaIniTarTest = document.getElementById('hora-inicio-tar');
const horaIniManTest = document.getElementById('hora-inicio-man');
const MessageHora = document.getElementById('mensaje-hora');

let isHoraManValid = true; // Para controlar la validez de la hora de la mano
let isHoraTarValid = true; // Para controlar la validez de la hora de la tarea


// Funci\xF3n para validar las horas
function validarHoraMan(horaInicio, horaFin, mensajeError) {
    if (horaInicio >= horaFin) {
        isHoraManValid = false;
        errorMessageHoraMan.textContent = mensajeError;
        errorMessageHoraMan.style.display = 'block';
    } else {
        isHoraManValid = true;
        errorMessageHoraMan.style.display = 'none';
    }
}

function validarHoraTar(horaInicio, horaFin, mensajeError) {
    if (horaInicio >= horaFin) {
        isHoraTarValid = false;
        
        errorMessageHoraTar.textContent = mensajeError;
        errorMessageHoraTar.style.display = 'block';
    } else {
        isHoraTarValid = true;
        errorMessageHoraTar.style.display = 'none';
    }
}

// Eventos para validar cuando cambian las horas
horaFinManTest.addEventListener('change', function () {
    validarHoraMan(horaIniManTest.value, horaFinManTest.value, '\u274C La hora de cierre debe ser mayor a la hora de inicio');
    actualizarMensajeHora();

    if(horaFinManTest.value === '' || horaFinManTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes seleccionar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaFinTarTest.addEventListener('change', function () {
    validarHoraTar(horaIniTarTest.value, horaFinTarTest.value, 'La hora de cierre debe ser mayor a la hora de inicio x2 \u274C');
    actualizarMensajeHora();

    if(horaFinTarTest.value === '' || horaFinTarTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaIniManTest.addEventListener('change', function () {
    validarHoraMan(horaIniManTest.value, horaFinManTest.value, 'La hora de cierre debe ser mayor a la hora de inicio \u274C');
    actualizarMensajeHora();

    if(horaIniManTest.value === '' || horaIniManTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaIniTarTest.addEventListener('change', function () {
    validarHoraTar(horaIniTarTest.value, horaFinTarTest.value, 'La hora de cierre debe ser mayor a la hora de inicio x2 \u274C');
    actualizarMensajeHora();

    if(horaIniTarTest.value === '' || horaIniTarTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});


        // Obt\xE9n los elementos del checkbox "24-7" y los campos de horarios
        const trabaja24horasCheckbox = document.getElementById('24-7');
        const horaInicioMan = document.getElementById('hora-inicio-man');
        const horaFinMan = document.getElementById('hora-fin-man');
        const horaInicioTar = document.getElementById('hora-inicio-tar');
        const horaFinTar = document.getElementById('hora-fin-tar');

        // Agrega el evento change al checkbox "24-7"
        trabaja24horasCheckbox.addEventListener('change', function () {
            // Si el checkbox est\xE1 marcado, deshabilita los campos de horarios
            if (this.checked) {
                horaInicioMan.disabled = true;
                horaInicioMan.value= ''
                horaFinMan.disabled = true;
                horaFinMan.value = '';
                horaInicioTar.disabled = true;
                horaInicioTar.value = '';
                horaFinTar.disabled = true;
                horaFinTar.value = '';
                MessageHora.textContent = '\u2705'; // Si ambas son v\xE1lidas, mostramos el mensaje
                MessageHora.style.display = 'block';
                errorMessageHoraTar.style.display = 'none';
                errorMessageHoraMan.style.display = 'none';
                errorMessageHora.style.display = 'none';
            } else {
                // Si no est\xE1 marcado, habilita los campos de horarios
                horaInicioMan.disabled = false;
                horaFinMan.disabled = false;
                horaInicioTar.disabled = false;
                horaFinTar.disabled = false;
                MessageHora.style.display = 'none';
                errorMessageHora.textContent ='\u274C Debes ingresar un horario'
                errorMessageHora.style.display = 'block';
            }
        });


// Funci\xF3n para actualizar el mensaje dependiendo de la validez de las horas
function actualizarMensajeHora() {
    if (isHoraManValid && isHoraTarValid) {
        MessageHora.textContent = '\u2705'; 
        MessageHora.style.display = 'block';
        
        ;
    } else {
        MessageHora.style.display = 'none';
    }
}

        
        async function verificarNombre(nombre) {
            try {
                const docRef = doc(db, 'datos-comerciales', nombre);
                const docSnap = await getDoc(docRef);
                return docSnap.exists(); 
            } catch (error) {
                console.error("Error al verificar el nombre:", error);
                alert("Hubo un error de conexi\xF3n. Vuelve a intentarlo");
                throw error; 
            }
        }
              

        // Evento submit del formulario
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            try {
              const cargarLuego = document.getElementById('cargarLuego').checked;
              const errorMessageImage = document.getElementById('image-limit')
              
            if (!cargarLuego && imageUrls.length === 0) {
              alert('\u274C Debes subir al menos una imagen o selecciona "Luego subo las imagenes" \xA1Gracias!');
              errorMessageImage.textContent = '\u274C Sube una imagen o selecciona "Luego subo las imagenes"'
              errorMessageImage.style.display = 'block'
              errorMessageImage.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2') 
              submitMessage.disabled = false;
              submitMessage.textContent = 'Publicar'; 
              return;
            }  
                // Recoger los dem\xE1s datos del formulario
                const nombre = document.getElementById('nombre').value.trim();
                const profesion = document.getElementById('profesion').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const direccion = document.getElementById('direccion').value;
                const web = document.getElementById('web').value;
                const redes = document.getElementById('redes').value;
                const descripcion = document.getElementById('descripcion').value;
                const ventaonline = document.getElementById('ventaonline').checked;
                const enviosdomicilio = document.getElementById('enviosdomicilio').value;
                const enviosgratis = document.getElementById('enviosgratis').value;
                const horaInicioMan = document.getElementById('hora-inicio-man').value;
                const horaFinMan = document.getElementById('hora-fin-man').value;
                const horaInicioTar = document.getElementById('hora-inicio-tar').value;
                const horaFinTar = document.getElementById('hora-fin-tar').value;
                const decorrido = document.getElementById('decorrido').checked;
                const trabaja24horas = document.getElementById('24-7').checked;
                const trabajaFeriados = document.getElementById('feriados').checked;
                const trabajaFestivos = document.getElementById('festivos').checked;
                const SabadoMedioDia = document.getElementById('sabado-medio-dia').checked;
                const DomingoMedioDia = document.getElementById('domingo-medio-dia').checked;
                
                const metodosPago = {
                    todoslosmediosdepago: document.getElementById('todoslosmedios').checked,
                    visa: document.getElementById('visa').checked,
                    mastercard: document.getElementById('mastercard').checked,
                    mercadopago: document.getElementById('mercadopago').checked,
                    efectivo: document.getElementById('efectivo').checked,
                    dolar: document.getElementById('dolar').checked,
                    cripto: document.getElementById('cripto').checked,
                    otros: document.getElementById('otrosmedios').checked
                };

                const errorMessageMetodos = document.getElementById('error-message-metodos');
                const errorMessageDias = document.getElementById('error-message-dias');
                const errorMensajeNombre = document.getElementById('validacion-nombre');
                const errorMensajeComercio = document.getElementById('validacion-comercio');
                const errorMensajeEmail = document.getElementById('validacion-email');
                const errorMensajeTelefono = document.getElementById('validacion-telefono');
                const errorMensajeDireccion = document.getElementById('validacion-direccion');
                const errorMensajeDescripcion = document.getElementById('validacion-descripcion');

                const submitMessage = document.getElementById('submit-btn');
                submitMessage.disabled = true;
                submitMessage.textContent = 'Publicando...';
                
                if (profesion === "") {
                alert('\u274C\xA1Porfavor! Ingresa el tipo de comercio')
                errorMensajeComercio.textContent = '\u274C Coloca el tipo de comercio';
                errorMensajeComercio.style.display = 'block';
                errorMensajeComercio.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeComercio.style.display = 'none';
                  errorMensajeComercio.classList.remove('text-red-600')
                } 

                if(nombre === ''){
                  alert('\u274C \xA1Porfavor! Ingresa el nombre del comercio')
                  errorMensajeNombre.textContent = '\u274C Ingresa el nombre del comercio'
                  errorMensajeNombre.style.display = 'block';
                  errorMensajeNombre.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                }else {
                  errorMensajeNombre.style.display = 'none';
                  errorMensajeComercio.classList.remove('text-red-600')
                }
                
                if (email === "") {
                alert('\u274C \xA1Porfavor! Ingresa el email del comercio')
                errorMensajeEmail.textContent = '\u274C Ingresa un email para el comercio';
                errorMensajeEmail.style.display = 'block';
                errorMensajeEmail.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeEmail.style.display = 'none';
                  errorMensajeEmail.classList.remove('text-red-600')
                }

                if (telefono === "") {
                alert('\u274C \xA1Porfavor! Ingresa un telefono del comercio')
                errorMensajeTelefono.textContent = '\u274C Ingresa al menos un telefono del comercio';
                errorMensajeTelefono.style.display = 'block';
                errorMensajeTelefono.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeTelefono.style.display = 'none';
                  errorMensajeTelefono.classList.remove('text-red-600')
                }

                if (direccion === "" && !ventaonline) {
                alert('\u274C \xA1Porfavor! Ingresa una direccion o si vendes online')
                errorMensajeDireccion.textContent = '\u274C Coloca una direccion o si vendes online';
                errorMensajeDireccion.style.display = 'block';
                errorMensajeDireccion.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeDireccion.style.display = 'none';
                  errorMensajeDireccion.classList.remove('text-red-600')
                }

                if (descripcion === "") {
                alert('\u274C \xA1Porfavor! Ingresa una descripcion')
                errorMensajeDescripcion.textContent = '\u274C Coloca una descripcion de 120 caracteres min.';
                errorMensajeDescripcion.style.display = 'block';
                errorMensajeDescripcion.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeDescripcion.style.display = 'none';
                  errorMensajeDescripcion.classList.remove('text-red-600')
                }


                // Verificar si se seleccionaron m\xE9todos de pago
                if (!metodosPago.todoslosmediosdepago && !metodosPago.visa && !metodosPago.mastercard && !metodosPago.mercadopago && !metodosPago.efectivo && !metodosPago.dolar && !metodosPago.cripto && !metodosPago.otros) {
                alert('\u274C Debes seleccionar al menos un metodo de pago')
                errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
                errorMessageMetodos.style.display = 'block';
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();
                } 

                const errorMessageDomicilio = document.getElementById('error-message-domicilio');
                if (!enviosdomicilio) {
                  alert('\u274C \xBFHacen env\xEDos a domicilio?')
                  errorMessageDomicilio.textContent = '\u274C Debes seleccionar una opci\xF3n';
                  errorMessageDomicilio.style.display = 'block';
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                } else {
                   
                   errorMessageDomicilio.style.display = 'none';
                } 

                const errorMessageEnvio = document.getElementById('error-message-domicilio-gratis');
                if (!enviosgratis) {
                  alert('\u274C \xBFLos env\xEDos son gratis?')
                  errorMessageEnvio.textContent = '\u274C Debes seleccionar una opci\xF3n';
                  errorMessageEnvio.style.display = 'block';
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                } else {
                   
                   errorMessageEnvio.style.display = 'none';
                } 

                const dias = [];
                const checkboxesDias = document.querySelectorAll('input[name="dias"]:checked');
                checkboxesDias.forEach(checkbox => {
                    dias.push(checkbox.value);
                });

                if (dias.length === 0) {
                alert('\u274C Debes seleccionar al menos un d\xEDa laboral');
                errorMessageDias.textContent = '\u274C Debes seleccionar al menos un d\xEDa laboral';
                errorMessageDias.style.display = 'block';
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();
                } else {
                errorMessageDias.style.display = 'none'; 
                }

                const errorMessageHora = document.getElementById('error-message-hora');

                if (horaInicioMan && horaFinMan && horaInicioTar && horaFinTar) {
                    if (horaInicioMan >= horaFinMan || horaInicioTar >= horaFinTar) {
                       alert('\u274C La hora de cierre debe ser mayor a la hora de inicio');
                        errorMessageHora.textContent = '\u274C La hora de cierre debe ser mayor a la de inicio';
                        errorMessageHora.style.display = 'block';
                        submitMessage.disabled = false;
                        submitMessage.textContent = 'Publicar';
                        event.preventDefault();
                      }else {
                          errorMessageHora.style.display = 'none'; 
                      }
                  }

                // verifica si el nombre existe ne firestore

                const nombreExiste = await verificarNombre(nombre);
                if (nombreExiste) {
                alert("El comercio ya existe o el nombre ya est\xE1 en uso \u{1F937}\u200D\u2642\uFE0F");
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                return;
                }  

                const formData = {
                    profesion,
                    nombre,
                    email,
                    telefono,
                    direccion,
                    web,
                    redes,
                    descripcion,
                    ventaonline,
                    enviosdomicilio,
                    enviosgratis,
                    horarios: {
                        ma\xF1ana: { inicio: horaInicioMan, fin: horaFinMan },
                        tarde: { inicio: horaInicioTar, fin: horaFinTar },
                    },
                    metodosPago,
                    dias,
                    decorrido,
                    trabaja24horas,
                    trabajaFeriados,
                    trabajaFestivos,
                    imagenes: imageUrls,
                    cargarLuego,
                    SabadoMedioDia,
                    DomingoMedioDia
                };

                // Guardar datos en Firestore
                const docRef = doc(db, 'datos-comerciales', nombre);
                await setDoc(docRef, formData);
                console.log('Documento guardado con ID:', nombre);
                form.reset();
                setTimeout(() => {
                    window.location.href = '/alert';
                }, 500);
                } catch (error) {
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar'; 
                console.error('Error al enviar el formulario:', error);
                alert("Hubo un error al enviar el formulario. Por favor, int\xE9ntalo de nuevo.");
            }
        });
    });




    // validaciones


    document.getElementById("email").addEventListener("keyup", function() {
    const email = this.value;
    const mensajeEmail = document.getElementById("validacion-email");

    if (email === "") {
      mensajeEmail.textContent = "\u274C Debes ingresar un e-mail";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold');
      mensajeEmail.classList.remove('text-green-500'); 
    return; 
  }

    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

    if (regex.test(email)) {
      mensajeEmail.textContent = "\u2705 E-mail v\xE1lido";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "green"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold')

    } else {
      mensajeEmail.textContent = "\u274C E-mail inv\xE1lido, a\xFAn te falta. Ej: micorreo@email.com";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold')
    }
  });

  document.getElementById("profesion").addEventListener("keyup", function() {
  const comercio = this.value;
  const mensajeComercio = document.getElementById("validacion-comercio");

  if (comercio === "") {
    mensajeComercio.textContent = "\u274C Debes ingresar el tipo de comercio.";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "red"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold') 
    return; 
  }
  const regex = /^[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\s]+$/;

  if (regex.test(comercio)) {
    mensajeComercio.textContent = "\u2705 Tipo de comercio v\xE1lido";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "green"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold')
  } else {
    mensajeComercio.textContent = "\u274C No v\xE1lido. Ej: Supermercados";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "red"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold')
  }
});

document.getElementById("nombre").addEventListener("keyup", function() {
  const nombre = this.value;
  const mensajeNombre = document.getElementById("validacion-nombre");

  // Si el campo est\xE1 vac\xEDo, ocultar el mensaje
  if (nombre === "") {
    mensajeNombre.textContent = "\u274C Debes ingresar el nombre del comercio";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "red"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold')
    return; 
  }

  // Expresi\xF3n regular para permitir letras, n\xFAmeros y espacios
  const regex = /^[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF10-9\\s]+$/;

  if (regex.test(nombre)) {
    mensajeNombre.textContent = "\u2705 Nombre de comercio v\xE1lido";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "green"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold')  
  } else {
    mensajeNombre.textContent = "\u274C No v\xE1lido. Ej: Carfoure";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "red"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold') 
  }
});

// Obtener el elemento del tel\xE9fono y el mensaje de validaci\xF3n
const telefonoInput = document.getElementById("telefono");
const mensajeTelefono = document.getElementById("validacion-telefono");

// Expresi\xF3n regular para validar tel\xE9fonos con o sin guiones y permitir varios tel\xE9fonos separados por "/"
const regexTelefono = /^(?:\\d{3}-\\d{7}|\\d{4}-\\d{6}|\\d{10}|\\d{11})$/;

// Evento para bloquear caracteres no permitidos en tiempo real (solamente n\xFAmeros, guiones y espacios)
telefonoInput.addEventListener("keypress", function(evento) {
  const tecla = String.fromCharCode(evento.charCode);

  // Si la tecla presionada no es un n\xFAmero, guion, espacio o slash, prevenimos su ingreso
  if (!/[\\d\\s\\-\\/]/.test(tecla)) {
    evento.preventDefault();  // Evita que el car\xE1cter no permitido sea ingresado
  }
});

// Evento para manejar la entrada de tel\xE9fono y realizar la validaci\xF3n
telefonoInput.addEventListener("input", function() {
  let telefonos = this.value.trim();
  
  // Si el campo est\xE1 vac\xEDo, ocultamos el mensaje de validaci\xF3n
  if (telefonos === "") {
    mensajeTelefono.textContent = "\u274C Debes ingresar un telefono";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "red"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
    return; 
  }

  // Dividir los tel\xE9fonos por el delimitador "/"
  let telefonosArray = telefonos.split("/");

  // Limpiar espacios extra en cada n\xFAmero
  telefonosArray = telefonosArray.map(telefono => telefono.replace(/\\s+/g, ''));

  // Validar cada n\xFAmero de tel\xE9fono
  let validos = telefonosArray.every(telefono => regexTelefono.test(telefono.trim()));

  // Retroalimentaci\xF3n de la validaci\xF3n
  if (validos) {
    mensajeTelefono.textContent = "\u2705 Tel\xE9fonos v\xE1lidos";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "green"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
  } else {
    mensajeTelefono.textContent = "\u274C Algunos tel\xE9fonos no son v\xE1lidos. Ej: 343-4668455 o 3437-487765/343 4668455";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "red"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
  }
});


document.getElementById("direccion").addEventListener("input", function() {
  let direccion = this.value;
  const mensajeDireccion = document.getElementById("validacion-direccion");

  if (direccion === "") {
    mensajeDireccion.textContent = "\u274C Debes ingresar una direccion";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = "red"
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold') 
    return; 
  }

  // Expresi\xF3n regular ajustada para manejar correctamente los espacios antes y despu\xE9s de "/"
  const regexDireccion = /^([A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\s]+(?:\\d+))(\\s*\\/\\s*[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\s]+\\d+)*$/;

  if (regexDireccion.test(direccion)) {
    mensajeDireccion.textContent = "\u2705 Direcciones v\xE1lidas";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = 'green';
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold');
  } else {
    mensajeDireccion.textContent = "\u274C Te falta. Ej: Avellaneda 234  O   Paran\xE0 1234 / Las flores 45";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = "red"
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

document.getElementById("web").addEventListener("keyup", function() {
  const web = this.value;
  const mensajeWeb = document.getElementById("validacion-web");

  if (web === "") {
    mensajeWeb.style.display = "none"; 
    return; 
  }

  // Expresi\xF3n regular para validar una URL
  const regex = /^(https?:\\/\\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}(\\.[a-zA-Z]{2})?$/;

  if (regex.test(web)) {
    mensajeWeb.textContent = "\u2705 URL v\xE1lida";
    mensajeWeb.style.display = "block";
    mensajeWeb.style.color = "green"
    mensajeWeb.classList.add('text-xs', 'p-2', 'font-bold')

  } else {
    mensajeWeb.textContent = "\u274C No v\xE1lida. Ej: https://www.google.com";
    mensajeWeb.style.display = "block";
    mensajeWeb.style.color = "red"
    mensajeWeb.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

// redes sociales

document.getElementById("redes").addEventListener("keyup", function() {
  const redSocial = this.value;
  const mensajeRedSocial = document.getElementById("validacion-red-social");

  if (redSocial === "") {
    mensajeRedSocial.style.display = "none"; 
    return; 
  }

  // SEPARACI\xD3N MEJORADA (conserva tu formato pero m\xE1s robusta)
  const redes = redSocial.split(/[\\s\\n\\/,;]+/).map(red => red.trim()).filter(red => red !== "")

  // EXPRESI\xD3N REGULAR MEJORADA (mismo formato pero m\xE1s precisa)
  const regex = /^(https?:\\/\\/(?:www\\.|web\\.|m\\.)?(?:facebook|instagram|twitter|tiktok|youtube)\\.com(?:\\/[a-zA-Z0-9_\\-.]+)?(?:\\/?[?]?[a-zA-Z0-9_=&%;#-]*)?$)|(^@[a-zA-Z0-9_\\-.]+$)/i;

  // Comprobar cada red social para ver si es v\xE1lida (misma l\xF3gica)
  const todasValidas = redes.every(red => regex.test(red));

  if (todasValidas) {
    mensajeRedSocial.textContent = "\u2705 Todas las redes sociales son v\xE1lidas";
    mensajeRedSocial.style.display = "block";
    mensajeRedSocial.style.color = "green"
    mensajeRedSocial.classList.add('text-xs', 'p-2', 'font-bold')

  } else {
    mensajeRedSocial.textContent = "\u274C Algunas redes sociales no son v\xE1lidas. Ej: @nombreusuario  O  https://www.instagram.com/nombreusuario";
    mensajeRedSocial.style.display = "block";
    mensajeRedSocial.style.color = "red"
    mensajeRedSocial.classList.add('text-xs', 'p-2', 'font-bold')

  }
});


// descripcion

document.getElementById("descripcion").addEventListener("keyup", function() {
  const descripcion = this.value;
  const mensajeDescripcion = document.getElementById("validacion-descripcion");

  if (descripcion === "") {
    mensajeDescripcion.textContent = "\u274C Debes ingresar una descripcion de 120 caracteres min.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "red"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')

    return
  }

  if (descripcion.length >= 120 && descripcion.length <= 150) {
    mensajeDescripcion.textContent = "\u2705 Descripci\xF3n v\xE1lida";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "green"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')
    mensajeDescripcion.classList.remove('text-red-800');
  } else {
    mensajeDescripcion.textContent = "\u274C La descripci\xF3n debe tener entre 120 y 150 caracteres.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "red"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

<\/script>`], ["", ` <script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js';
    import { getFirestore, setDoc, doc, getDoc, enableIndexedDbPersistence }  from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js';

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

    let imageUrls = [];

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.getElementById('contactForm');
  const errorMessageMetodos = document.getElementById('error-message-metodos');
  const errorMessageDias = document.getElementById('error-message-dias');
  const MessageDias = document.getElementById('message-dias');
  const errorMessageHoraTar = document.getElementById('error-message-hora-tarde');
  const errorMessageHoraMan = document.getElementById('error-message-hora-ma\xF1ana');
  const errorMessageHora = document.getElementById('error-message-hora');
  const imageMessage = document.getElementById('uploadStatus');
  const imageLimit = document.getElementById('image-limit');
  const imageInput = document.getElementById('imageInput');
  const eliminarBtn = document.getElementById('eliminar-todas-btn');

  // Funci\xF3n para actualizar la UI
  function actualizarUI() {
    const imageCount = imageUrls.length;
    
    // Actualizar mensaje de estado
    imageMessage.textContent = \\\`\\\${imageCount} imagen\\\${imageCount !== 1 ? 'es' : ''} cargada\\\${imageCount !== 1 ? 's' : ''}\\\`;
    imageMessage.style.display = imageCount > 0 ? "block" : "none";
    
    // Mostrar/ocultar bot\xF3n de eliminar
    eliminarBtn.style.display = imageCount > 0 ? "block" : "none";
    
    // Controlar l\xEDmite de 6 im\xE1genes
    if(imageCount >= 6) {
      imageInput.disabled = true;
      imageInput.classList.add('opacity-60', 'cursor-not-allowed');
      imageInput.classList.remove('cursor-pointer');
      imageLimit.textContent = '6 im\xE1genes cargadas. Llegaste al l\xEDmite \u{1F6AB}';
      imageMessage.style.display = 'none' 
      imageLimit.style.display = "block";
    } else {
      imageInput.disabled = false;
      imageInput.classList.remove('opacity-60', 'cursor-not-allowed');
      imageInput.classList.add('cursor-pointer');
      imageLimit.style.display = "none";
    }
  }

  // Funci\xF3n para eliminar todas las im\xE1genes
  function eliminarTodas() {
    if (imageUrls.length === 0) {
    submitMessage.disabled = false;
    submitMessage.textContent = 'Publicar';  
    return;
  }
  if (!confirm('\xBFEliminaras todas las im\xE1genes? Igual puedas volver a cargarlas.')) {
    submitMessage.disabled = false;
    submitMessage.textContent = 'Publicar'; 
    return; 
  }
  imageUrls = [];
  actualizarUI();
}

  // Asignar evento al bot\xF3n de eliminar
  eliminarBtn.addEventListener('click', eliminarTodas);

  // Funci\xF3n para cargar Cloudinary
  function cargarCloudinary() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://upload-widget.cloudinary.com/global/all.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Error al cargar Cloudinary'));
      document.head.appendChild(script);
    });
  }

  try {
    await cargarCloudinary();

    const myWidget = cloudinary.createUploadWidget(
      {
        cloudName: 'dliafafrq',
        uploadPreset: 'mercadosunidos',
        multiple: true,
        maxFiles: 6,
        cropping: false,
        showAdvancedOptions: false,
        buttonClass: 'upload-button',
        active: true,
        theme: 'minimal',
        sources: ['local','camera', 'google_drive', "instagram", "facebook", 'image_search'],
        googleApiKey: 'AIzaSyCSb64uR4CJY1Zm3qmA3lKUAsRDx2zGybY',
        maxFileSize: 5 * 1024 * 1024,
        allowedFileTypes: ['jpeg', 'png', 'jpg', 'webp', 'avif'],
        frame: {
          background: "#000000"
        },
        language: "es",
        text: {
          "en": {
            "or": "o",
            "back": "Atras",
            "advanced": "Avanzar",
            "close": "Cerrar",
            "no_results": "Sin resultados",
            "search_placeholder": "Buscar Imagenes",
            "about_uw": "About the Upload Widget",
            "search": {
              "placeholder": "Buscar...",
              "reset": "Resetear busqueda"
            },
            "queue": {
              "done": "Listo",
              "title": "Procesado",
              "upload_more": "Subir m\xE1s",
              "title_uploading_with_counter": "Subiendo {{num}} archivos",
              "title_processing_with_counter": "Procesando {{num}} archivos",
              "abort_all": "Parar",
              "retry_failed": "Reintentar",
            },
            "local": {
              "browse": "Buscar",
              "dd_title_multi": "Arrastra y soltar imagenes aqu\xED",
              "drop_title_multiple": "Suelta archivos para subir"
            },
            "menu": {
              "files": "Mis archivos",
              "camera": "Camara",
            },
          }, 
        },  
        theme: "minimal",
        styles: {
          palette: {
            window: "#2f2f2f",
            sourceBg: "#1F1F1F",
            windowBorder: "#333333",
            tabIcon: "#3D8D7A",
            inactiveTabIcon: "#999999",
            menuIcons: "#3D8D7A",
            textDark: "#ddd",
            textLight: "#ddd",
            link: "#3D8D7A",
            action: "#3D8D7A",
            inactive: "#d4d4d4",
            error: "#4caf50",
            success: "#4caf50",
          },
        },    
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          const imageUrl = result.info.secure_url;
          imageUrls.push(imageUrl);
          actualizarUI();
        }
        
        if (result && result.event === 'close') {
          actualizarUI();
        }
      }
    );

    // Asignar evento al bot\xF3n de subida
    imageInput.addEventListener('click', (e) => {
      e.preventDefault();
      myWidget.open();
    });
  } catch (error) {
    console.error("Cloudinary no est\xE1 disponible:", error);
    
    document.getElementById('imageInput').addEventListener('click', function (event) {
      event.preventDefault();
      alert('Gestor de im\xE1genes no disponible. Selecciona "Luego env\xEDo las im\xE1genes".');
      return;
    });
  }

  // Imagenes cargar luego

const cargarLuegoMensaje = document.getElementById('cargarLuego'); 
const messageOk = document.getElementById('ok');
const errorMessageImage = document.getElementById('image-limit');

cargarLuegoMensaje.addEventListener('change', function () {
  if (this.checked) {
    imageInput.disabled= true;
    imageInput.classList.add ('opacity-60');
    imageInput.classList.remove ('cursor-pointer');
    messageOk.style.display = 'block';
    imageMessage.style.display = 'none'
    imageLimit.style.display = "none";
    imageMessage.style.display = "none";
  } else {
    imageInput.disabled= false;
    imageInput.classList.remove ('opacity-60');
    imageInput.classList.add ('cursor-pointer');
    messageOk.style.display = 'none';
    errorMessageImage.textContent = '\u274C Sube una imagen o selecciona "Luego subo las imagenes"'
    errorMessageImage.style.display = 'block'
    errorMessageImage.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2')  
  }
});

// envios a domicilio? escucha los cambios

const enviosdomicilio = document.getElementById("enviosdomicilio");
const errorMessageDomicilio = document.getElementById("error-message-domicilio");
const MessageDomicilio = document.getElementById("message-domicilio");

enviosdomicilio.addEventListener("change", function () {
    if (enviosdomicilio.value === "") {
        errorMessageDomicilio.textContent = '\u274C Debes seleccionar una opci\xF3n';
        errorMessageDomicilio.style.display = "block";
        MessageDomicilio.style.display = "none";
    } else {
        MessageDomicilio.textContent = '\u2705';
        MessageDomicilio.style.display = "block";
        errorMessageDomicilio.style.display = "none";
    }
});

// Envios gratis - escucha los cambios

const errorMessageDomicilioGratis = document.getElementById("error-message-domicilio-gratis");
const MessageDomicilioGratis = document.getElementById("message-domicilio-gratis");
const enviosgratis = document.getElementById("enviosgratis");

enviosgratis.addEventListener("change", function () {
    if (enviosgratis.value === "") {
        errorMessageDomicilioGratis.textContent = '\u274C Debes seleccionar una opci\xF3n';
        errorMessageDomicilioGratis.style.display = "block";
        MessageDomicilioGratis.style.display = "none";
    } else {
        MessageDomicilioGratis.textContent = '\u2705';
        MessageDomicilioGratis.style.display = "block";
        errorMessageDomicilioGratis.style.display = "none";
    }
});
    
        // venta online- escucha el cambio en el input direcciones

        const ventaonlineCheckbox = document.getElementById('ventaonline');
        const MessageVentaOnline = document.getElementById('MessageVenta');
        const direccionInput = document.getElementById('direccion');
        const validacionDireccion= document.getElementById('validacion-direccion');
  
        ventaonlineCheckbox.addEventListener('change', function () {
            
            if (this.checked) {
                direccionInput.disabled = true;
                direccionInput.value = '';
                validacionDireccion.style.display = 'none'
                MessageVentaOnline.textContent = '\u2705';
                MessageVentaOnline.style.display = 'block';
                
            } else {
                direccionInput.disabled = false;
                MessageVentaOnline.style.display = 'none';
                validacionDireccion.textContent = '\u274C Debes ingrear una direcci\xF3n'
                validacionDireccion.style.display = 'block';
                validacionDireccion.style.color = 'red';
                
                
            }
        });

        // escucha el change de todos los metodos de pago

        const todoslosmediosCheckbox = document.getElementById('todoslosmedios');
        const MessageMetodos = document.getElementById('messageMetodos');
        const metodosPagoCheckboxes = document.querySelectorAll('input[name="metodos"]:not(#todoslosmedios)');
        const todoslosdiasCheckbox = document.querySelectorAll('input[name="dias"]');
       

        // Agrega el evento change al checkbox "todoslosmedios"
          todoslosmediosCheckbox.addEventListener('change', function () {
        // Si el checkbox est\xE1 marcado, deshabilita los dem\xE1s m\xE9todos de pago
        if (this.checked) {
        metodosPagoCheckboxes.forEach(checkbox => {
            checkbox.disabled = true;
            checkbox.checked = false; // Desmarcar los otros checkboxes
            MessageMetodos.textContent = '\u2705';
            MessageMetodos.style.display = 'block';
            errorMessageMetodos.style.display = 'none';
        });
    } else {
        // Si no est\xE1 marcado, habilita los dem\xE1s m\xE9todos de pago
        metodosPagoCheckboxes.forEach(checkbox => {
            checkbox.disabled = false;
            MessageMetodos.style.display = 'none';
            errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
            errorMessageMetodos.style.display = 'block';
        });
    }
});


// Agrega el evento change a cada uno de los checkboxes de los m\xE9todos de pago
metodosPagoCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Si este checkbox est\xE1 marcado, muestra el mensaje verde
        if (this.checked) {
            MessageMetodos.textContent = '\u2705';
            MessageMetodos.style.display = 'block';
            errorMessageMetodos.style.display = 'none';
        } else {
            // Si no est\xE1 marcado, muestra el mensaje de error
            let algunaSeleccionada = false;
            metodosPagoCheckboxes.forEach(cb => {
                if (cb.checked) {
                    algunaSeleccionada = true;
                }
            });
            if (!algunaSeleccionada) {
                MessageMetodos.style.display = 'none';
                errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
                errorMessageMetodos.style.display = 'block';
            }
        }
    });
});

todoslosdiasCheckbox.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        // Si este checkbox est\xE1 marcado, muestra el mensaje verde
        if (this.checked) {
            MessageDias.textContent = '\u2705';
            MessageDias.style.display = 'block';
            errorMessageDias.style.display = 'none';
        } else {
            // Si no est\xE1 marcado, muestra el mensaje de error
            let algunaSeleccionada = false;
            todoslosdiasCheckbox.forEach(cb => {
                if (cb.checked) {
                    algunaSeleccionada = true;
                }
            });
            if (!algunaSeleccionada) {
                MessageDias.style.display = 'none';
                errorMessageDias.textContent = '\u274C Debes seleccionar al menos un d\xEDa laboral';
                errorMessageDias.style.display = 'block';
            }
        }
    });
});
                
const horaFinTarTest = document.getElementById('hora-fin-tar');
const horaFinManTest = document.getElementById('hora-fin-man');
const horaIniTarTest = document.getElementById('hora-inicio-tar');
const horaIniManTest = document.getElementById('hora-inicio-man');
const MessageHora = document.getElementById('mensaje-hora');

let isHoraManValid = true; // Para controlar la validez de la hora de la mano
let isHoraTarValid = true; // Para controlar la validez de la hora de la tarea


// Funci\xF3n para validar las horas
function validarHoraMan(horaInicio, horaFin, mensajeError) {
    if (horaInicio >= horaFin) {
        isHoraManValid = false;
        errorMessageHoraMan.textContent = mensajeError;
        errorMessageHoraMan.style.display = 'block';
    } else {
        isHoraManValid = true;
        errorMessageHoraMan.style.display = 'none';
    }
}

function validarHoraTar(horaInicio, horaFin, mensajeError) {
    if (horaInicio >= horaFin) {
        isHoraTarValid = false;
        
        errorMessageHoraTar.textContent = mensajeError;
        errorMessageHoraTar.style.display = 'block';
    } else {
        isHoraTarValid = true;
        errorMessageHoraTar.style.display = 'none';
    }
}

// Eventos para validar cuando cambian las horas
horaFinManTest.addEventListener('change', function () {
    validarHoraMan(horaIniManTest.value, horaFinManTest.value, '\u274C La hora de cierre debe ser mayor a la hora de inicio');
    actualizarMensajeHora();

    if(horaFinManTest.value === '' || horaFinManTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes seleccionar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaFinTarTest.addEventListener('change', function () {
    validarHoraTar(horaIniTarTest.value, horaFinTarTest.value, 'La hora de cierre debe ser mayor a la hora de inicio x2 \u274C');
    actualizarMensajeHora();

    if(horaFinTarTest.value === '' || horaFinTarTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaIniManTest.addEventListener('change', function () {
    validarHoraMan(horaIniManTest.value, horaFinManTest.value, 'La hora de cierre debe ser mayor a la hora de inicio \u274C');
    actualizarMensajeHora();

    if(horaIniManTest.value === '' || horaIniManTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});

horaIniTarTest.addEventListener('change', function () {
    validarHoraTar(horaIniTarTest.value, horaFinTarTest.value, 'La hora de cierre debe ser mayor a la hora de inicio x2 \u274C');
    actualizarMensajeHora();

    if(horaIniTarTest.value === '' || horaIniTarTest.value === '00:00'){
      errorMessageHora.textContent ='\u274C Debes ingresar un horario'
      errorMessageHora.style.display = 'block';
      errorMessageHoraTar.style.display = 'none';
      errorMessageHoraMan.style.display = 'none';
      MessageHora.style.display = 'none';
    }else{
      errorMessageHora.style.display = 'none';
    }
});


        // Obt\xE9n los elementos del checkbox "24-7" y los campos de horarios
        const trabaja24horasCheckbox = document.getElementById('24-7');
        const horaInicioMan = document.getElementById('hora-inicio-man');
        const horaFinMan = document.getElementById('hora-fin-man');
        const horaInicioTar = document.getElementById('hora-inicio-tar');
        const horaFinTar = document.getElementById('hora-fin-tar');

        // Agrega el evento change al checkbox "24-7"
        trabaja24horasCheckbox.addEventListener('change', function () {
            // Si el checkbox est\xE1 marcado, deshabilita los campos de horarios
            if (this.checked) {
                horaInicioMan.disabled = true;
                horaInicioMan.value= ''
                horaFinMan.disabled = true;
                horaFinMan.value = '';
                horaInicioTar.disabled = true;
                horaInicioTar.value = '';
                horaFinTar.disabled = true;
                horaFinTar.value = '';
                MessageHora.textContent = '\u2705'; // Si ambas son v\xE1lidas, mostramos el mensaje
                MessageHora.style.display = 'block';
                errorMessageHoraTar.style.display = 'none';
                errorMessageHoraMan.style.display = 'none';
                errorMessageHora.style.display = 'none';
            } else {
                // Si no est\xE1 marcado, habilita los campos de horarios
                horaInicioMan.disabled = false;
                horaFinMan.disabled = false;
                horaInicioTar.disabled = false;
                horaFinTar.disabled = false;
                MessageHora.style.display = 'none';
                errorMessageHora.textContent ='\u274C Debes ingresar un horario'
                errorMessageHora.style.display = 'block';
            }
        });


// Funci\xF3n para actualizar el mensaje dependiendo de la validez de las horas
function actualizarMensajeHora() {
    if (isHoraManValid && isHoraTarValid) {
        MessageHora.textContent = '\u2705'; 
        MessageHora.style.display = 'block';
        
        ;
    } else {
        MessageHora.style.display = 'none';
    }
}

        
        async function verificarNombre(nombre) {
            try {
                const docRef = doc(db, 'datos-comerciales', nombre);
                const docSnap = await getDoc(docRef);
                return docSnap.exists(); 
            } catch (error) {
                console.error("Error al verificar el nombre:", error);
                alert("Hubo un error de conexi\xF3n. Vuelve a intentarlo");
                throw error; 
            }
        }
              

        // Evento submit del formulario
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            try {
              const cargarLuego = document.getElementById('cargarLuego').checked;
              const errorMessageImage = document.getElementById('image-limit')
              
            if (!cargarLuego && imageUrls.length === 0) {
              alert('\u274C Debes subir al menos una imagen o selecciona "Luego subo las imagenes" \xA1Gracias!');
              errorMessageImage.textContent = '\u274C Sube una imagen o selecciona "Luego subo las imagenes"'
              errorMessageImage.style.display = 'block'
              errorMessageImage.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2') 
              submitMessage.disabled = false;
              submitMessage.textContent = 'Publicar'; 
              return;
            }  
                // Recoger los dem\xE1s datos del formulario
                const nombre = document.getElementById('nombre').value.trim();
                const profesion = document.getElementById('profesion').value;
                const email = document.getElementById('email').value;
                const telefono = document.getElementById('telefono').value;
                const direccion = document.getElementById('direccion').value;
                const web = document.getElementById('web').value;
                const redes = document.getElementById('redes').value;
                const descripcion = document.getElementById('descripcion').value;
                const ventaonline = document.getElementById('ventaonline').checked;
                const enviosdomicilio = document.getElementById('enviosdomicilio').value;
                const enviosgratis = document.getElementById('enviosgratis').value;
                const horaInicioMan = document.getElementById('hora-inicio-man').value;
                const horaFinMan = document.getElementById('hora-fin-man').value;
                const horaInicioTar = document.getElementById('hora-inicio-tar').value;
                const horaFinTar = document.getElementById('hora-fin-tar').value;
                const decorrido = document.getElementById('decorrido').checked;
                const trabaja24horas = document.getElementById('24-7').checked;
                const trabajaFeriados = document.getElementById('feriados').checked;
                const trabajaFestivos = document.getElementById('festivos').checked;
                const SabadoMedioDia = document.getElementById('sabado-medio-dia').checked;
                const DomingoMedioDia = document.getElementById('domingo-medio-dia').checked;
                
                const metodosPago = {
                    todoslosmediosdepago: document.getElementById('todoslosmedios').checked,
                    visa: document.getElementById('visa').checked,
                    mastercard: document.getElementById('mastercard').checked,
                    mercadopago: document.getElementById('mercadopago').checked,
                    efectivo: document.getElementById('efectivo').checked,
                    dolar: document.getElementById('dolar').checked,
                    cripto: document.getElementById('cripto').checked,
                    otros: document.getElementById('otrosmedios').checked
                };

                const errorMessageMetodos = document.getElementById('error-message-metodos');
                const errorMessageDias = document.getElementById('error-message-dias');
                const errorMensajeNombre = document.getElementById('validacion-nombre');
                const errorMensajeComercio = document.getElementById('validacion-comercio');
                const errorMensajeEmail = document.getElementById('validacion-email');
                const errorMensajeTelefono = document.getElementById('validacion-telefono');
                const errorMensajeDireccion = document.getElementById('validacion-direccion');
                const errorMensajeDescripcion = document.getElementById('validacion-descripcion');

                const submitMessage = document.getElementById('submit-btn');
                submitMessage.disabled = true;
                submitMessage.textContent = 'Publicando...';
                
                if (profesion === "") {
                alert('\u274C\xA1Porfavor! Ingresa el tipo de comercio')
                errorMensajeComercio.textContent = '\u274C Coloca el tipo de comercio';
                errorMensajeComercio.style.display = 'block';
                errorMensajeComercio.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeComercio.style.display = 'none';
                  errorMensajeComercio.classList.remove('text-red-600')
                } 

                if(nombre === ''){
                  alert('\u274C \xA1Porfavor! Ingresa el nombre del comercio')
                  errorMensajeNombre.textContent = '\u274C Ingresa el nombre del comercio'
                  errorMensajeNombre.style.display = 'block';
                  errorMensajeNombre.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                }else {
                  errorMensajeNombre.style.display = 'none';
                  errorMensajeComercio.classList.remove('text-red-600')
                }
                
                if (email === "") {
                alert('\u274C \xA1Porfavor! Ingresa el email del comercio')
                errorMensajeEmail.textContent = '\u274C Ingresa un email para el comercio';
                errorMensajeEmail.style.display = 'block';
                errorMensajeEmail.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeEmail.style.display = 'none';
                  errorMensajeEmail.classList.remove('text-red-600')
                }

                if (telefono === "") {
                alert('\u274C \xA1Porfavor! Ingresa un telefono del comercio')
                errorMensajeTelefono.textContent = '\u274C Ingresa al menos un telefono del comercio';
                errorMensajeTelefono.style.display = 'block';
                errorMensajeTelefono.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeTelefono.style.display = 'none';
                  errorMensajeTelefono.classList.remove('text-red-600')
                }

                if (direccion === "" && !ventaonline) {
                alert('\u274C \xA1Porfavor! Ingresa una direccion o si vendes online')
                errorMensajeDireccion.textContent = '\u274C Coloca una direccion o si vendes online';
                errorMensajeDireccion.style.display = 'block';
                errorMensajeDireccion.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeDireccion.style.display = 'none';
                  errorMensajeDireccion.classList.remove('text-red-600')
                }

                if (descripcion === "") {
                alert('\u274C \xA1Porfavor! Ingresa una descripcion')
                errorMensajeDescripcion.textContent = '\u274C Coloca una descripcion de 120 caracteres min.';
                errorMensajeDescripcion.style.display = 'block';
                errorMensajeDescripcion.classList.add ('text-xs', 'text-red-600', 'font-bold', 'mt-2');
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();

                } else {
                  errorMensajeDescripcion.style.display = 'none';
                  errorMensajeDescripcion.classList.remove('text-red-600')
                }


                // Verificar si se seleccionaron m\xE9todos de pago
                if (!metodosPago.todoslosmediosdepago && !metodosPago.visa && !metodosPago.mastercard && !metodosPago.mercadopago && !metodosPago.efectivo && !metodosPago.dolar && !metodosPago.cripto && !metodosPago.otros) {
                alert('\u274C Debes seleccionar al menos un metodo de pago')
                errorMessageMetodos.textContent = '\u274C Debes seleccionar al menos un m\xE9todo de pago';
                errorMessageMetodos.style.display = 'block';
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();
                } 

                const errorMessageDomicilio = document.getElementById('error-message-domicilio');
                if (!enviosdomicilio) {
                  alert('\u274C \xBFHacen env\xEDos a domicilio?')
                  errorMessageDomicilio.textContent = '\u274C Debes seleccionar una opci\xF3n';
                  errorMessageDomicilio.style.display = 'block';
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                } else {
                   
                   errorMessageDomicilio.style.display = 'none';
                } 

                const errorMessageEnvio = document.getElementById('error-message-domicilio-gratis');
                if (!enviosgratis) {
                  alert('\u274C \xBFLos env\xEDos son gratis?')
                  errorMessageEnvio.textContent = '\u274C Debes seleccionar una opci\xF3n';
                  errorMessageEnvio.style.display = 'block';
                  submitMessage.disabled = false;
                  submitMessage.textContent = 'Publicar';
                  event.preventDefault();
                } else {
                   
                   errorMessageEnvio.style.display = 'none';
                } 

                const dias = [];
                const checkboxesDias = document.querySelectorAll('input[name="dias"]:checked');
                checkboxesDias.forEach(checkbox => {
                    dias.push(checkbox.value);
                });

                if (dias.length === 0) {
                alert('\u274C Debes seleccionar al menos un d\xEDa laboral');
                errorMessageDias.textContent = '\u274C Debes seleccionar al menos un d\xEDa laboral';
                errorMessageDias.style.display = 'block';
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                event.preventDefault();
                } else {
                errorMessageDias.style.display = 'none'; 
                }

                const errorMessageHora = document.getElementById('error-message-hora');

                if (horaInicioMan && horaFinMan && horaInicioTar && horaFinTar) {
                    if (horaInicioMan >= horaFinMan || horaInicioTar >= horaFinTar) {
                       alert('\u274C La hora de cierre debe ser mayor a la hora de inicio');
                        errorMessageHora.textContent = '\u274C La hora de cierre debe ser mayor a la de inicio';
                        errorMessageHora.style.display = 'block';
                        submitMessage.disabled = false;
                        submitMessage.textContent = 'Publicar';
                        event.preventDefault();
                      }else {
                          errorMessageHora.style.display = 'none'; 
                      }
                  }

                // verifica si el nombre existe ne firestore

                const nombreExiste = await verificarNombre(nombre);
                if (nombreExiste) {
                alert("El comercio ya existe o el nombre ya est\xE1 en uso \u{1F937}\u200D\u2642\uFE0F");
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar';
                return;
                }  

                const formData = {
                    profesion,
                    nombre,
                    email,
                    telefono,
                    direccion,
                    web,
                    redes,
                    descripcion,
                    ventaonline,
                    enviosdomicilio,
                    enviosgratis,
                    horarios: {
                        ma\xF1ana: { inicio: horaInicioMan, fin: horaFinMan },
                        tarde: { inicio: horaInicioTar, fin: horaFinTar },
                    },
                    metodosPago,
                    dias,
                    decorrido,
                    trabaja24horas,
                    trabajaFeriados,
                    trabajaFestivos,
                    imagenes: imageUrls,
                    cargarLuego,
                    SabadoMedioDia,
                    DomingoMedioDia
                };

                // Guardar datos en Firestore
                const docRef = doc(db, 'datos-comerciales', nombre);
                await setDoc(docRef, formData);
                console.log('Documento guardado con ID:', nombre);
                form.reset();
                setTimeout(() => {
                    window.location.href = '/alert';
                }, 500);
                } catch (error) {
                submitMessage.disabled = false;
                submitMessage.textContent = 'Publicar'; 
                console.error('Error al enviar el formulario:', error);
                alert("Hubo un error al enviar el formulario. Por favor, int\xE9ntalo de nuevo.");
            }
        });
    });




    // validaciones


    document.getElementById("email").addEventListener("keyup", function() {
    const email = this.value;
    const mensajeEmail = document.getElementById("validacion-email");

    if (email === "") {
      mensajeEmail.textContent = "\u274C Debes ingresar un e-mail";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold');
      mensajeEmail.classList.remove('text-green-500'); 
    return; 
  }

    const regex = /^[^\\\\s@]+@[^\\\\s@]+\\\\.[^\\\\s@]+$/;

    if (regex.test(email)) {
      mensajeEmail.textContent = "\u2705 E-mail v\xE1lido";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "green"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold')

    } else {
      mensajeEmail.textContent = "\u274C E-mail inv\xE1lido, a\xFAn te falta. Ej: micorreo@email.com";
      mensajeEmail.style.display = "block";
      mensajeEmail.style.color = "red"
      mensajeEmail.classList.add('text-xs', 'p-2', 'font-bold')
    }
  });

  document.getElementById("profesion").addEventListener("keyup", function() {
  const comercio = this.value;
  const mensajeComercio = document.getElementById("validacion-comercio");

  if (comercio === "") {
    mensajeComercio.textContent = "\u274C Debes ingresar el tipo de comercio.";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "red"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold') 
    return; 
  }
  const regex = /^[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\\\s]+$/;

  if (regex.test(comercio)) {
    mensajeComercio.textContent = "\u2705 Tipo de comercio v\xE1lido";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "green"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold')
  } else {
    mensajeComercio.textContent = "\u274C No v\xE1lido. Ej: Supermercados";
    mensajeComercio.style.display = "block";
    mensajeComercio.style.color = "red"
    mensajeComercio.classList.add('text-xs', 'p-2', 'font-bold')
  }
});

document.getElementById("nombre").addEventListener("keyup", function() {
  const nombre = this.value;
  const mensajeNombre = document.getElementById("validacion-nombre");

  // Si el campo est\xE1 vac\xEDo, ocultar el mensaje
  if (nombre === "") {
    mensajeNombre.textContent = "\u274C Debes ingresar el nombre del comercio";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "red"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold')
    return; 
  }

  // Expresi\xF3n regular para permitir letras, n\xFAmeros y espacios
  const regex = /^[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF10-9\\\\s]+$/;

  if (regex.test(nombre)) {
    mensajeNombre.textContent = "\u2705 Nombre de comercio v\xE1lido";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "green"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold')  
  } else {
    mensajeNombre.textContent = "\u274C No v\xE1lido. Ej: Carfoure";
    mensajeNombre.style.display = "block";
    mensajeNombre.style.color = "red"
    mensajeNombre.classList.add('text-xs', 'p-2', 'font-bold') 
  }
});

// Obtener el elemento del tel\xE9fono y el mensaje de validaci\xF3n
const telefonoInput = document.getElementById("telefono");
const mensajeTelefono = document.getElementById("validacion-telefono");

// Expresi\xF3n regular para validar tel\xE9fonos con o sin guiones y permitir varios tel\xE9fonos separados por "/"
const regexTelefono = /^(?:\\\\d{3}-\\\\d{7}|\\\\d{4}-\\\\d{6}|\\\\d{10}|\\\\d{11})$/;

// Evento para bloquear caracteres no permitidos en tiempo real (solamente n\xFAmeros, guiones y espacios)
telefonoInput.addEventListener("keypress", function(evento) {
  const tecla = String.fromCharCode(evento.charCode);

  // Si la tecla presionada no es un n\xFAmero, guion, espacio o slash, prevenimos su ingreso
  if (!/[\\\\d\\\\s\\\\-\\\\/]/.test(tecla)) {
    evento.preventDefault();  // Evita que el car\xE1cter no permitido sea ingresado
  }
});

// Evento para manejar la entrada de tel\xE9fono y realizar la validaci\xF3n
telefonoInput.addEventListener("input", function() {
  let telefonos = this.value.trim();
  
  // Si el campo est\xE1 vac\xEDo, ocultamos el mensaje de validaci\xF3n
  if (telefonos === "") {
    mensajeTelefono.textContent = "\u274C Debes ingresar un telefono";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "red"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
    return; 
  }

  // Dividir los tel\xE9fonos por el delimitador "/"
  let telefonosArray = telefonos.split("/");

  // Limpiar espacios extra en cada n\xFAmero
  telefonosArray = telefonosArray.map(telefono => telefono.replace(/\\\\s+/g, ''));

  // Validar cada n\xFAmero de tel\xE9fono
  let validos = telefonosArray.every(telefono => regexTelefono.test(telefono.trim()));

  // Retroalimentaci\xF3n de la validaci\xF3n
  if (validos) {
    mensajeTelefono.textContent = "\u2705 Tel\xE9fonos v\xE1lidos";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "green"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
  } else {
    mensajeTelefono.textContent = "\u274C Algunos tel\xE9fonos no son v\xE1lidos. Ej: 343-4668455 o 3437-487765/343 4668455";
    mensajeTelefono.style.display = "block";
    mensajeTelefono.style.color = "red"
    mensajeTelefono.classList.add('text-xs', 'p-2', 'font-bold')
  }
});


document.getElementById("direccion").addEventListener("input", function() {
  let direccion = this.value;
  const mensajeDireccion = document.getElementById("validacion-direccion");

  if (direccion === "") {
    mensajeDireccion.textContent = "\u274C Debes ingresar una direccion";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = "red"
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold') 
    return; 
  }

  // Expresi\xF3n regular ajustada para manejar correctamente los espacios antes y despu\xE9s de "/"
  const regexDireccion = /^([A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\\\s]+(?:\\\\d+))(\\\\s*\\\\/\\\\s*[A-Za-z\xC1\xE1\xC9\xE9\xCD\xED\xD3\xF3\xDA\xFA\xD1\xF1\\\\s]+\\\\d+)*$/;

  if (regexDireccion.test(direccion)) {
    mensajeDireccion.textContent = "\u2705 Direcciones v\xE1lidas";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = 'green';
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold');
  } else {
    mensajeDireccion.textContent = "\u274C Te falta. Ej: Avellaneda 234  O   Paran\xE0 1234 / Las flores 45";
    mensajeDireccion.style.display = "block";
    mensajeDireccion.style.color = "red"
    mensajeDireccion.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

document.getElementById("web").addEventListener("keyup", function() {
  const web = this.value;
  const mensajeWeb = document.getElementById("validacion-web");

  if (web === "") {
    mensajeWeb.style.display = "none"; 
    return; 
  }

  // Expresi\xF3n regular para validar una URL
  const regex = /^(https?:\\\\/\\\\/)?([a-zA-Z0-9-]+\\\\.)+[a-zA-Z]{2,6}(\\\\.[a-zA-Z]{2})?$/;

  if (regex.test(web)) {
    mensajeWeb.textContent = "\u2705 URL v\xE1lida";
    mensajeWeb.style.display = "block";
    mensajeWeb.style.color = "green"
    mensajeWeb.classList.add('text-xs', 'p-2', 'font-bold')

  } else {
    mensajeWeb.textContent = "\u274C No v\xE1lida. Ej: https://www.google.com";
    mensajeWeb.style.display = "block";
    mensajeWeb.style.color = "red"
    mensajeWeb.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

// redes sociales

document.getElementById("redes").addEventListener("keyup", function() {
  const redSocial = this.value;
  const mensajeRedSocial = document.getElementById("validacion-red-social");

  if (redSocial === "") {
    mensajeRedSocial.style.display = "none"; 
    return; 
  }

  // SEPARACI\xD3N MEJORADA (conserva tu formato pero m\xE1s robusta)
  const redes = redSocial.split(/[\\\\s\\\\n\\\\/,;]+/).map(red => red.trim()).filter(red => red !== "")

  // EXPRESI\xD3N REGULAR MEJORADA (mismo formato pero m\xE1s precisa)
  const regex = /^(https?:\\\\/\\\\/(?:www\\\\.|web\\\\.|m\\\\.)?(?:facebook|instagram|twitter|tiktok|youtube)\\\\.com(?:\\\\/[a-zA-Z0-9_\\\\-.]+)?(?:\\\\/?[?]?[a-zA-Z0-9_=&%;#-]*)?$)|(^@[a-zA-Z0-9_\\\\-.]+$)/i;

  // Comprobar cada red social para ver si es v\xE1lida (misma l\xF3gica)
  const todasValidas = redes.every(red => regex.test(red));

  if (todasValidas) {
    mensajeRedSocial.textContent = "\u2705 Todas las redes sociales son v\xE1lidas";
    mensajeRedSocial.style.display = "block";
    mensajeRedSocial.style.color = "green"
    mensajeRedSocial.classList.add('text-xs', 'p-2', 'font-bold')

  } else {
    mensajeRedSocial.textContent = "\u274C Algunas redes sociales no son v\xE1lidas. Ej: @nombreusuario  O  https://www.instagram.com/nombreusuario";
    mensajeRedSocial.style.display = "block";
    mensajeRedSocial.style.color = "red"
    mensajeRedSocial.classList.add('text-xs', 'p-2', 'font-bold')

  }
});


// descripcion

document.getElementById("descripcion").addEventListener("keyup", function() {
  const descripcion = this.value;
  const mensajeDescripcion = document.getElementById("validacion-descripcion");

  if (descripcion === "") {
    mensajeDescripcion.textContent = "\u274C Debes ingresar una descripcion de 120 caracteres min.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "red"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')

    return
  }

  if (descripcion.length >= 120 && descripcion.length <= 150) {
    mensajeDescripcion.textContent = "\u2705 Descripci\xF3n v\xE1lida";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "green"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')
    mensajeDescripcion.classList.remove('text-red-800');
  } else {
    mensajeDescripcion.textContent = "\u274C La descripci\xF3n debe tener entre 120 y 150 caracteres.";
    mensajeDescripcion.style.display = "block";
    mensajeDescripcion.style.color = "red"
    mensajeDescripcion.classList.add('text-xs', 'p-2', 'font-bold')

  }
});

<\/script>`])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[url('public/IMGs/fondologo.png')] bg-cover bg-center flex justify-center items-center py-5 relative"> <div class="w-full h-full bg-black/90 absolute"></div> <div class="relative p-4 w-full max-w-lg max-h-full"> <div class="relative rounded-lg bg-gray-800/70 border border-gray-600 shadow-lg shadow-gray-950"> <div class="flex items-center justify-between p-4 md:p-5 border-b border-gray-600 rounded-t-lg"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white flex gap-5 items-center"> <a href="/" class="cursor-pointer hover:opacity-50"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"> <path fill="#345" d="M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243z"></path> </svg> </a>
Publica tu Negocio o Servicio
</h3> </div> <div class="p-4 md:p-5 border-gray-600 rounded-b-lg"> <form class="p-4 md:p-5" id="contactForm" method="POST" action="http://localhost:3000/procesar-formulario"> <!-- Campos del formulario --> <div class="grid gap-4 mb-4 grid-cols-2"> <!-- Comercio --> <div class="col-span-2 mb-2"> <label for="profesion" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Comercio o Servicio <small class="text-gray-700 px-2">(requerido)</small></label> <input type="text" name="profesion" id="profesion" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: Supermercado o Compañia telefónica"> <p id="validacion-comercio" style="display: none"></p> </div> <!-- Nombre --> <div class="col-span-2 mb-2"> <label for="nombre" class="block mb-2 text-sm font-medium text-white">Nombre del comercio o servicio <small class="text-gray-700 px-2">(requerido)</small></label> <input type="text" name="nombre" id="nombre" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: Carfour o Claro"> <p id="validacion-nombre" class="hidden"></p> </div> <!-- Email --> <div class="col-span-2 mb-2"> <label for="email" class="block mb-2 text-sm font-medium text-white">Email <small class="text-gray-700 px-2">(requerido)</small></label> <input type="email" name="email" id="email" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: miempresa@email.com"> <p id="validacion-email" class="hidden"></p> </div> <!-- Teléfono --> <div class="col-span-2 mb-2"> <label for="telefono" class="block text-sm font-medium text-white">Teléfonos <small class="text-gray-700 px-2">(requerido)</small></label> <small class="text-teal-800 text-xs">Podés agregar más de uno separados por una "/"</small> <input type="text" minlength="10" maxlength="30" name="telefono" id="telefono" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: 343-xxx xxxx/3437 xxxxxx"> <p id="validacion-telefono" class="hidden"></p> </div> <!-- Dirección --> <div class="col-span-2"> <div class="flex"> <label for="direccion" class="block text-sm font-medium text-white">Dirección <small class="text-gray-700 px-2">(requerido)</small> </label> <small id="MessageVenta" style="display: none;"></small> </div> <small class="text-teal-800 text-xs">Podés agregar más de una dirección separadas por una "/"</small> <input type="text" name="direccion" id="direccion" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30  border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: Supremo Entrerriano 1234 / Av. América 456"> <p id="validacion-direccion" class="hidden text-xs font-bold mt-2"></p> <div class="flex gap-2 mt-3 mb-3"> <label for="ventaonline" class="text-gray-300 text-xs font-semibold">Solo venta online o por redes</label> <input type="checkbox" id="ventaonline" class="border-none bg-gray-500 rounded-xs"> </div> </div> <!-- Web --> <div class="col-span-2 mb-3"> <label for="web" class="block mb-2 text-sm font-medium text-white">Web <small class="text-gray-700 px-2">(opcional)</small></label> <input type="url" name="web" id="web" class="border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: www.mipaginaweb.com"> <p id="validacion-web" class="hidden"></p> </div> <!-- Redes --> <div class="col-span-2 mb-3"> <label for="redes" class="block text-sm font-medium text-white">Redes <small class="text-gray-700 px-2">(opcional)</small> <small class="text-gray-700 px-2">(Instagram, facebook, tiktok...)</small></label> <small class="text-teal-800 text-xs">Agrega nicknames de cualquier red social separados por una "/".</small> <textarea name="redes" id="redes" class="h-24 border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Ej: @mitienda.se / @minegocio_ok"></textarea> <p id="validacion-red-social" class="hidden"></p> </div> <!-- Descripción --> <div class="col-span-2"> <label for="descripcion" class="block text-sm font-medium text-white mb-2">Descripción <small class="text-gray-700 px-2">(requerido)</small><small class="text-gray-700">(150 caracteres max.)</small></label> <textarea id="descripcion" rows="4" maxlength="150" class="h-24 border text-xs rounded-lg block w-full p-2.5 bg-black/30 border-gray-500 placeholder-slate-700 text-white" placeholder="Haz una breve descripción de los productos y servicios que brindas"></textarea> <p id="validacion-descripcion" class="hidden"></p> </div> <!-- Métodos de Pago --> <div class="border border-gray-600 p-4 rounded-lg col-span-2 mt-3 mb-3"> <h5 class="font-medium text-white mt-2 mb-3 flex items-center">Medios de pago <small class="text-gray-700 px-2">(requerido)</small><small id="messageMetodos" style=" display: none" class="ml-3"></small></h5> <div class="col-span-2"> <fieldset id="metodos" class="col-span-2 grid grid-cols-2"> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" name="metodos" id="todoslosmedios" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Todos los medios
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="visa" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Tarjetas Visa
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="mastercard" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Tarjetas Mastercard
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="mercadopago" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">MercadoPago
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="efectivo" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Efectivo
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="dolar" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Dólar
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="cripto" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Cryptomonedas
</label> </div> <div class="flex gap-3 items-center"> <label class="block text-white mt-3 mb-2 text-xs"> <input type="checkbox" id="otrosmedios" name="metodos" class="w-3 h-3 border-none bg-gray-500 rounded-xs mr-2">Otros medios de pago
</label> </div> </fieldset> </div> <!-- Mensaje de error para métodos de pago --> <div class="mt-2 "> <p id="error-message-metodos" style=" display: none" class="text-red-500 font-bold text-xs"></p> </div> </div> <!-- Envios domicilio --> <div class="col-span-2 border border-gray-600 p-4 w-full rounded-lg mb-3"> <div class="col-span-2 mt-2"> <div class="flex"> <label for="enviosdomicilio" class="block text-white mb-3">Envios a domicilio <small class="text-gray-700 px-2">(requerido)</small></label> <small id="message-domicilio" style=" display: none"></small> </div> <select id="enviosdomicilio" name="enviosdomicilio" class="w-full text-xs border-none rounded-lg bg-gray-900 text-gray-200"> <option value=""></option> <option value="si">Si</option> <option value="no">No</option> <option value="consultar">Consultar</option> </select> </div> <div class="mt-3"> <p id="error-message-domicilio" style=" display: none" class="text-red-500 font-bold text-xs"></p> </div> </div> <div class="col-span-2 border border-gray-600 p-4 w-full rounded-lg mb-3"> <div class="col-span-2 mt-2"> <div class="flex"> <label for="enviosdomicilio" class="block text-white mb-3">Envio gratis <small class="text-gray-700 px-2">(requerido)</small></label> <small id="message-domicilio-gratis" style=" display: none"></small> </div> <select id="enviosgratis" name="enviosgratis" class="w-full text-xs border-none rounded-lg bg-gray-900 text-gray-200"> <option value=""></option> <option value="si">Si</option> <option value="no">No</option> <option value="noEnvios">No hacemos envios</option> <option value="consultar">Depende el monto</option> </select> </div> <div class="mt-3"> <p id="error-message-domicilio-gratis" style=" display: none" class="text-red-500 font-bold text-xs"></p> </div> </div> <!-- Horarios --> <div class="col-span-2 mb-4 border border-gray-600 p-4 rounded-lg"> <div class="flex"> <h5 class="text-white mb-3">Horario laboral <small class="text-gray-700 px-2">(requerido)</small></h5> <small id="mensaje-hora" style="display: none;"></small> </div> <p class="text-xs text-gray-500 underline mb-2">De mañana</p> <div class="flex gap-3 items-center justify-center mb-3"> <div class="flex gap-3 items-center relative"> <label class="block text-white mt-3 mb-2 text-xs" for="hora-inicio-man">Hora de inicio:</label> <div class="relative"> <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path> </svg> </div> <input type="time" id="hora-inicio-man" name="hora-inicio-man" class=" border leading-none  h-8 text-sm rounded-lg focus:ring-blue-500/70 focus:border-blue-500/70 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" value="00:00"> </div> </div> <div class="flex gap-3 items-center relative"> <label class="block text-white mt-3 mb-2 text-xs" for="hora-fin-man">Hora de cierre:</label> <div class="relative"> <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path> </svg> </div> <input type="time" id="hora-fin-man" name="hora-fin-man" class=" border leading-none  h-8 text-sm rounded-lg focus:ring-blue-500/70 focus:border-blue-500/70 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" value="00:00"> </div> </div> </div> <div class="col-span-2 mb-2"> <p class="text-xs text-gray-500 underline">De tarde</p> <div class="flex gap-3 items-center justify-center"> <div class="flex gap-3 items-center relative"> <label class="block text-white mt-3 mb-2 text-xs" for="hora-inicio-tar">Hora de inicio:</label> <div class="relative"> <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path> </svg> </div> <input type="time" id="hora-inicio-tar" name="hora-inicio-tar" class=" border leading-none  h-8 text-sm rounded-lg focus:ring-blue-500/70 focus:border-blue-500/70 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" value="00:00"> </div> </div> <div class="flex gap-3 items-center relative"> <label class="block text-white mt-3 mb-2 text-xs" for="hora-fin-tar">Hora de cierre:</label> <div class="relative"> <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"></path> </svg> </div> <input type="time" id="hora-fin-tar" name="hora-fin-tar" class=" border leading-none  h-8 text-sm rounded-lg focus:ring-blue-500/70 focus:border-blue-500/70 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" value="00:00"> </div> </div> </div> </div> <div class="flex gap-8 mt-4"> <div class="flex gap-3"> <label class="text-gray-300 text-xs" for="decorrido">Abierto de corrido</label> <input type="checkbox" id="decorrido" name="decorrido" class="border-none rounded-xs bg-gray-500"> </div> <div class="flex gap-3"> <label class="text-gray-300 text-xs" for="24-7">Abierto 24 horas</label> <input type="checkbox" id="24-7" name="24-7" class="border-none rounded-xs bg-gray-500"> <small class="text-gray-700">(opcional)</small> </div> </div> <div class="mt-3"> <p style="display: none" id="error-message-hora-mañana" class="text-red-500 font-bold text-xs"></p><p style="display: none" id="error-message-hora-tarde" class="text-red-500 font-bold text-xs"></p><p style="display: none" id="error-message-hora" class="text-red-500 font-bold text-xs"></p> </div> </div> <!-- Días Laborales --> <div class="col-span-2 mb-5 border border-gray-600 rounded-lg p-4"> <fieldset class="w-full" id="Dias"> <div class="flex"> <legend class="text-white mb-4">Días laborales <small class="text-gray-700 px-2">(requerido)</small></legend> <small id="message-dias" style="display: none"></small> </div> <div class="grid grid-cols-3 gap-2 w-full mb-3"> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="lunes" class="border-none bg-gray-500 rounded-xs mr-2"> Lunes
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="martes" class="border-none bg-gray-500 rounded-xs mr-2"> Martes
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="miércoles" class="border-none bg-gray-500 rounded-xs mr-2"> Miércoles
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="jueves" class="border-none bg-gray-500 rounded-xs mr-2"> Jueves
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="viernes" class="border-none bg-gray-500 rounded-xs mr-2"> Viernes
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="sábado" class="border-none bg-gray-500 rounded-xs mr-2"> Sábado
</label> <label class="text-white text-xs"> <input type="checkbox" name="dias" value="domingo" class="border-none bg-gray-500 rounded-xs mr-2"> Domingo
</label> </div> </fieldset> <div class="flex gap-8 mt-4"> <div class="flex gap-3"> <label class="text-gray-300 text-xs" for="sabado-medio-dia">Sabados 1/2 día</label> <input type="checkbox" id="sabado-medio-dia" name="sabado-medio-dia" class="border-none rounded-xs bg-gray-500"> </div> <div class="flex gap-3"> <label class="text-gray-300 text-xs" for="domingo-medio-dia">Domingos 1/2 día</label> <input type="checkbox" id="domingo-medio-dia" name="domingo-medio-dia" class="border-none rounded-xs bg-gray-500"> <small class="text-gray-700">(opcional)</small> </div> </div> <div class="flex gap-8 mt-2"> <div class="flex gap-3"> <label class="text-gray-300 text-xs" for="feriados">Abierto feriados</label> <input type="checkbox" id="feriados" name="feriados" class="border-none rounded-xs bg-gray-500"> </div> <div class="flex gap-3 items-center"> <label class="text-gray-300 text-xs" for="festivos">Abierto días festivos</label> <input type="checkbox" id="festivos" name="festivos" class="border-none rounded-xs bg-gray-500"> <small class="text-gray-700">(opcional)</small> </div> </div> <div class="mt-3"> <p id="error-message-dias" style="display: none" id="error-message-dias" class="text-red-500 font-bold text-xs">Debes seleccionar al menos un día laboral.</p> </div> </div> </div> <div class="mb-5 border border-gray-600 p-4 rounded-lg flex flex-col col-span-2 items-center"> <h5 class="font-medium text-white mt-1 mb-3">Imagenes <small class="text-gray-700 px-2">(requerido)</small></h5> <button id="imageInput" class="flex items-center text-gray-300 border border-gray-600 rounded-lg p-2 text-xs cursor-pointer mb-3 hover:opacity-60"> Selecciona imagenes</button> <small class="text-gray-400">Solo puedes enviar 6 imagenes</small> <div class="mt-4 flex items-center"> <label class="text-xs text-gray-100 font-bold "> <input type="checkbox" id="cargarLuego" class="mr-2 border-none bg-gray-500 rounded-xs"> Luego envío las imágenes
</label> </div> <div class="mt-4 text-white font-bold"> <p id="ok" class="hidden" class="text-xs font-bold">Ok! 😊</p> </div> <p id="uploadStatus" style="display: none" class="text-sm text-gray-500 pt-2 font-bold "></p> <p id="image-limit" style="display: none" class="text-sm text-gray-500 pt-2 font-bold "></p> <button id="eliminar-todas-btn" class="hidden cursor-pointer items-center gap-2 bg-transparent text-gray-600 hover:text-gray-800 px-3 py-1  transition-colors text-sm font-medium mt-2"><!-- SVG inline (icono de basura horizontal) --><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="inline-block"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg><span></span></button> </div> <!-- Recaptcha --> <div class="flex"> <div class="cf-turnstile mb-5"${addAttribute(siteKey, "data-sitekey")}></div> </div> <!-- Botón de envío --> <button type="submit" id="submit-btn" class="border border-gray-400 text-lg cursor-pointer w-full shadow-md hover:shadow-gray-900 shadow-gray-800 flex justify-center text-white items-center focus:ring-1 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center bg-cyan-700/50 hover:bg-cyan-800 hover:border-gray-500 hover:text-gray-400">
Publicar
</button> </form> </div> </div> </div> </div> ` }));
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/sendFormCom.astro", void 0);

const $$file = "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/sendFormCom.astro";
const $$url = "/sendFormCom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SendFormCom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
