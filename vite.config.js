import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function apiMiddlewarePlugin() {
  return {
    name: "api-middleware",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || "";
        if (url.startsWith("/api/feedback")) {
          // Load local environment variables (.env, .env.local)
          const env = loadEnv(server.config.mode, process.cwd(), "");
          Object.assign(process.env, env);

          // Polyfill express-like helpers for serverless function
          res.status = function (code) {
            res.statusCode = code;
            return res;
          };
          res.json = function (data) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          };

          const chunks = [];
          req.on("data", (chunk) => chunks.push(chunk));
          req.on("end", async () => {
            try {
              const rawBody = Buffer.concat(chunks).toString("utf-8");
              req.body = rawBody ? JSON.parse(rawBody) : {};
              const handlerModule = await server.ssrLoadModule("/api/feedback.js");
              const handler = handlerModule.default;
              await handler(req, res);
            } catch (err) {
              console.error("Local API Dev Error:", err);
              if (!res.writableEnded) {
                res.status(500).json({ success: false, error: err.message });
              }
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiMiddlewarePlugin()],
});