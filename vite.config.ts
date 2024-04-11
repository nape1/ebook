import { defineConfig, 
    // normalizePath 
} from "vite"
// import { viteStaticCopy } from "vite-plugin-static-copy"
import react from "@vitejs/plugin-react-swc"

//For path aliasing
import path from "path"

// const cMapsDir = normalizePath(
//   path.join(path.dirname(require.resolve("pdfjs-dist/package.json")), "cmaps")
// )
// const standardFontsDir = normalizePath(
//   path.join(
//     path.dirname(require.resolve("pdfjs-dist/package.json")),
//     "standard_fonts"
//   )
// )

// const standardFontsDirN = path.resolve(
//     __dirname,
//     'node_modules/pdfjs-dist/standard_fonts'
//   );

//   const cMapsDirN = path.resolve(
//     __dirname,
//     'node_modules/pdfjs-dist/standard_fonts'
//   );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteStaticCopy({
    //   targets: [
    //     { src: cMapsDirN, dest: "" },
    //     { src: standardFontsDirN, dest: "" },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
})
