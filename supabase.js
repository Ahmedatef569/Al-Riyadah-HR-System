// Classic supabase.js (no ES modules, GitHub Pages compatible)

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";         // Replace with your anon/public key

let supabaseClient = null;

async function initializeSupabase() {
    if (!supabaseClient) {
        const storedEmail = localStorage.getItem("loggedInEmail") || "admin_1@company.com";
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            global: {
                headers: {
                    ...(storedEmail && { "x-user-email": storedEmail })
                }
            }
        });
    }
    return supabaseClient;
}

// ✅ Expose to global browser scope
window.initializeSupabase = initializeSupabase;
