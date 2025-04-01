import { s as supabase } from '../../../chunks/supabase_DyhcF0jm.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const validProviders = ["google", "facebook", "twitter"];
  if (provider && validProviders.includes(provider)) {
    const { data: data2, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: "http://localhost:4321/#"
      }
    });
    if (error2) {
      return new Response(error2.message, { status: 500 });
    }
    return redirect(data2.url);
  }
  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/"
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/"
  });
  return redirect("/index");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
