import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended", "prettier"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    env: {
      node: true,
      commonjs: true,
      es2021: true,
    },
  },
]);
