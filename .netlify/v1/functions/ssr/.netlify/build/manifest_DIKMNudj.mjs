import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { l as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_AT0Uju-k.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/","cacheDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/node_modules/.astro/","outDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/dist/","srcDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/src/","publicDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/public/","buildClientDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/dist/","buildServerDir":"file:///C:/Users/ELANO/Desktop/mercadosUnidos/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/alert","isIndex":false,"type":"page","pattern":"^\\/alert\\/?$","segments":[[{"content":"alert","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/alert.astro","pathname":"/alert","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/callback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/callback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/callback.ts","pathname":"/api/auth/callback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/singin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/singin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"singin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/singin.ts","pathname":"/api/auth/singin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/singout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/singout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"singout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/singout.ts","pathname":"/api/auth/singout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/mediospagos","isIndex":false,"type":"page","pattern":"^\\/mediospagos\\/?$","segments":[[{"content":"mediospagos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/mediospagos.astro","pathname":"/mediospagos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/politicaderivacidad","isIndex":false,"type":"page","pattern":"^\\/politicaderivacidad\\/?$","segments":[[{"content":"politicaderivacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politicaderivacidad.astro","pathname":"/politicaderivacidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/sendformcom","isIndex":false,"type":"page","pattern":"^\\/sendFormCom\\/?$","segments":[[{"content":"sendFormCom","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sendFormCom.astro","pathname":"/sendFormCom","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/sendformpro","isIndex":false,"type":"page","pattern":"^\\/sendFormPro\\/?$","segments":[[{"content":"sendFormPro","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sendFormPro.astro","pathname":"/sendFormPro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/terminosycondiciones","isIndex":false,"type":"page","pattern":"^\\/terminosycondiciones\\/?$","segments":[[{"content":"terminosycondiciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terminosycondiciones.astro","pathname":"/terminosycondiciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{font-family:Raleway,sans-serif;margin:0;width:100%;height:100%;background-color:#222223;background-image:linear-gradient(0deg,#222223,#2a2a2d 22%,#2c2d31 49%,#2a2a2d 75%,#222223)}\n"},{"type":"external","src":"/_astro/alert.dN0rGi-3.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/alert.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/mediospagos.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/politicaderivacidad.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/sendFormCom.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/sendFormPro.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/terminosycondiciones.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/alert@_@astro":"pages/alert.astro.mjs","\u0000@astro-page:src/pages/api/auth/callback@_@ts":"pages/api/auth/callback.astro.mjs","\u0000@astro-page:src/pages/api/auth/singin@_@ts":"pages/api/auth/singin.astro.mjs","\u0000@astro-page:src/pages/api/auth/singout@_@ts":"pages/api/auth/singout.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/mediospagos@_@astro":"pages/mediospagos.astro.mjs","\u0000@astro-page:src/pages/politicaderivacidad@_@astro":"pages/politicaderivacidad.astro.mjs","\u0000@astro-page:src/pages/sendFormCom@_@astro":"pages/sendformcom.astro.mjs","\u0000@astro-page:src/pages/sendFormPro@_@astro":"pages/sendformpro.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/terminosycondiciones@_@astro":"pages/terminosycondiciones.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DIKMNudj.mjs","C:/Users/ELANO/Desktop/mercadosUnidos/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dlr3MofY.mjs","@astrojs/react/client.js":"_astro/client.CeYSYu5a.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/i3.BXY4-Rz_.png","/_astro/i4.BKkSkdNT.png","/_astro/nego2.kxtded0g.jpg","/_astro/nego3.CBCU8PFS.jpg","/_astro/nego4.D1HfsG_R.jpg","/_astro/i5.CbsNeSLB.png","/_astro/nego5.CBNVzqv7.jpg","/_astro/nego1.CzLACGbk.webp","/_astro/tiendalogo.B5hiSoWP.png","/_astro/dietetica.CkqLRVjp.jpg","/_astro/dietetica1.DnnC1aCy.jpg","/_astro/doc2.CWSgzSXt.jpg","/_astro/doc.Diy4GmgM.jpg","/_astro/pizzeria2.CJGGHhKw.jpg","/_astro/resto.CvEEIVYK.jpg","/_astro/resto2.3Fr-rCiQ.jpg","/_astro/pizzeria1.Bot-4EKb.jpg","/_astro/alert.dN0rGi-3.css","/favicon.svg","/index.html","/IMGs/Banners.png","/IMGs/dietetica.jpg","/IMGs/dietetica1.jpg","/IMGs/doc.jpg","/IMGs/doc2.jpg","/IMGs/fondologo.png","/IMGs/i3.png","/IMGs/i4.png","/IMGs/i5.png","/IMGs/logo.ico","/IMGs/logo.png","/IMGs/mix pizzas.jpeg","/IMGs/nego1.webp","/IMGs/nego2.jpg","/IMGs/nego3.jpg","/IMGs/nego4.jpg","/IMGs/nego5.jpg","/IMGs/pizzeria1.jpg","/IMGs/pizzeria2.jpg","/IMGs/publi1.avif","/IMGs/publi2.avif","/IMGs/publi4.jpg","/IMGs/resto.jpg","/IMGs/resto2.jpg","/IMGs/tiendalogo.png","/_astro/client.CeYSYu5a.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"VdZWH/eOgs4uPcx4uCyKPhLRKb/f7sTNcbRhITJjD1c="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
