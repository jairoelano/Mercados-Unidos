import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_AT0Uju-k.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByxgZXBy.mjs';
import { s as supabase } from '../chunks/supabase_DyhcF0jm.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const accessToken = Astro2.cookies.get("sb-access-token");
  const refreshToken = Astro2.cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return Astro2.redirect("/signin");
  }
  let session;
  try {
    session = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (session.error) {
      Astro2.cookies.delete("sb-access-token", {
        path: "/"
      });
      Astro2.cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return Astro2.redirect("/signin");
    }
  } catch (error) {
    Astro2.cookies.delete("sb-access-token", {
      path: "/"
    });
    Astro2.cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return Astro2.redirect("/signin");
  }
  const email = session.data.user?.email;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Welcome ${email}</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form> ` })}`;
}, "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/ELANO/Desktop/mercadosUnidos/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
