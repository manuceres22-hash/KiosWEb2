import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Skills y material de herramientas: no es código de la app. Sin esto, instalar
    // Impeccable en el proyecto mete ~94 warnings de lint en `npm run verify`.
    ".opencode/**",
    ".impeccable/**",
  ]),
]);

export default eslintConfig;
