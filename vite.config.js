import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
console.log(fileURLToPath);

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    base: loadEnv(mode, process.cwd()).PROD ? "/dungeons-game-project/" : "/",
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
