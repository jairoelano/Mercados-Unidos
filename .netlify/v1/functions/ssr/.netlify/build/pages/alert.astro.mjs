import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_AT0Uju-k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByxgZXBy.mjs';
export { renderers } from '../renderers.mjs';

const $$Alert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=" flex justify-center items-center w-scree h-screen bg-gradient-to-b from-black/90 via-black/30 to-black/90"> <div class=" rounded-lg shadow border border-gray-600 p-4 bg-gray-950/20"> <a href="#"> <img class="shadow-md shadow-gray-900 hover:shadow-gray-700 mt-5 ml-3 rounded-full w-18 h-18 border-1 border-gray-600" src="../../public/IMGs/logo.png" alt="Imagen de la card"> </a> <div class="p-5"> <a href="#"> <h5 class="mb-3 text-2xl font-medium tracking-tight text-gray-200 flex justify-center items-end gap-3">
¡Felicidades! Tus datos fueron enviados con exito.<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#4291de" d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M9.79 16.5C9.4 15.62 8.53 15 7.5 15s-1.9.62-2.29 1.5c-.13-.31-.21-.64-.21-1a2.5 2.5 0 0 1 5 0c0 .36-.08.69-.21 1m9 0c-.39-.88-1.29-1.5-2.29-1.5s-1.9.62-2.29 1.5c-.13-.31-.21-.64-.21-1a2.5 2.5 0 0 1 5 0c0 .36-.08.69-.21 1"></path></svg> </h5> <small class="text-red-600 text-2xl font-medium">¡¡Atenciòn, LEER!!</small> <p></p> </a> <p class="mb-8 mt-1 text-gray-200 w-xl">
Ahora toca esperar que nos contactemos contigo dentro de 48 hs habiles para verificar las datos, si el proceso
                es exitoso dentro de las siguientes horas veras tu negocio en MUSE. Muchas gracias por confiar en nosotros. <br><br>
¡Que tengas buen dia!  🚀😊
</p> <a href="/" class="shadow-md shadow-gray-950 hover:shadow-gray-900 gap-3 font-medium border border-gray-600 inline-flex items-center px-4 py-3 text-sm text-center text-white hover:border-gray-600 hover:text-gray-600 bg-black/30 rounded-lg hover:bg-black/20 "> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M20.834 8.037L9.64 14.5c-1.43.824-1.43 2.175 0 3l11.194 6.463c1.43.826 2.598.15 2.598-1.5V9.537c0-1.65-1.17-2.326-2.598-1.5"></path></svg> Volver a la pàgina
</a> </div> </div> </div> ` })}`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/alert.astro", void 0);

const $$file = "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/alert.astro";
const $$url = "/alert";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Alert,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
