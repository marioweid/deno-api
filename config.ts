export const APP_HOST = Deno.env.get("APP_HOST") || "0.0.0.0";
export const APP_PORT = Deno.env.get("APP_PORT") || 4000;
export const DB_PATH = Deno.env.get("DB_PATH") || "./db/users.json";
