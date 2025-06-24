// Supabase client is created dynamically AFTER login

let supabase = null;

function createSupabaseClient(email) {
  const SUPABASE_URL = 'https://ruhnevpkbsyxfnanjlpo.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY5Njg4MzkyNSwiZXhwIjoxOjk2ODgzOTI1fQ.8t0OevmY-k7iUi1e_q6POaI0MEuSStWry5ZM7M';

  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: {
      headers: {
        'x-user-email': email || ''
      }
    }
  });
}

async function getUserByCredentials(email, password) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .eq("password", password);

  if (error) {
    console.error("Login error:", error.message);
    return null;
  }

  return data.length > 0 ? data[0] : null;
}

async function getAllEmployees() {
  const { data, error } = await supabase.from("employees").select("*");
  if (error) console.error("Error fetching employees:", error.message);
  return data;
}

async function getAllDepartments() {
  const { data, error } = await supabase.from("departments").select("*");
  if (error) console.error("Error fetching departments:", error.message);
  return data;
}
