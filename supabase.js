// Updated supabase.js for admin_1 email header support

const SUPABASE_URL = "https://YOUR_PROJECT.supabase.co";  // Replace with your real Supabase URL
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";         // Replace with your actual anon/public key

let supabaseClient = null;

async function waitForSupabase() {
    while (!window.supabase) {
        await new Promise(resolve => setTimeout(resolve, 50));
    }
    return window.supabase;
}

async function initializeSupabase() {
    if (!supabaseClient) {
        const supabaseLib = await waitForSupabase();
        const { createClient } = supabaseLib;

        // ✅ Set test email or retrieve from localStorage
        const storedEmail = localStorage.getItem("loggedInEmail") || "admin_1@company.com";

        supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            global: {
                headers: {
                    ...(storedEmail && { "x-user-email": storedEmail })
                }
            }
        });
    }
    return supabaseClient;
}
