// Classic supabase.js (no ES modules, GitHub Pages compatible)

const SUPABASE_URL = "https://ruhnevpkbsyxfnanjlpo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1aG5ldnBrYnN5eGZuYW5qbHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMjYxMzksImV4cCI6MjA2NDYwMjEzOX0.oi9E1Rp2e5zll2wy-FMQFGjYcuTIJ-mCwMAWry5ZM7M";

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
