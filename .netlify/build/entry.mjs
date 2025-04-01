import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DIKMNudj.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/alert.astro.mjs');
const _page2 = () => import('./pages/api/auth/callback.astro.mjs');
const _page3 = () => import('./pages/api/auth/singin.astro.mjs');
const _page4 = () => import('./pages/api/auth/singout.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/mediospagos.astro.mjs');
const _page7 = () => import('./pages/politicaderivacidad.astro.mjs');
const _page8 = () => import('./pages/sendformcom.astro.mjs');
const _page9 = () => import('./pages/sendformpro.astro.mjs');
const _page10 = () => import('./pages/signin.astro.mjs');
const _page11 = () => import('./pages/terminosycondiciones.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/alert.astro", _page1],
    ["src/pages/api/auth/callback.ts", _page2],
    ["src/pages/api/auth/singin.ts", _page3],
    ["src/pages/api/auth/singout.ts", _page4],
    ["src/pages/dashboard.astro", _page5],
    ["src/pages/mediospagos.astro", _page6],
    ["src/pages/politicaderivacidad.astro", _page7],
    ["src/pages/sendFormCom.astro", _page8],
    ["src/pages/sendFormPro.astro", _page9],
    ["src/pages/signin.astro", _page10],
    ["src/pages/terminosycondiciones.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0d1086f8-2500-47fb-97bc-8bba3e57d41a"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
