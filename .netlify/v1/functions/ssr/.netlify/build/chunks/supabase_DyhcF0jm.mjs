import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://yikdjmwtiyfndvezmdtq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpa2RqbXd0aXlmbmR2ZXptZHRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0Nzg1NjMsImV4cCI6MjA1NzA1NDU2M30.gJJWQyPT_xLI_nVsfj2LWXQ4tfdePQpJ2abHFfKHltc",
  {
    auth: {
      flowType: "pkce",
      persistSession: false
    }
  }
);

export { supabase as s };
