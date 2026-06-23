import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";

export default tseslint.config(
  { ignores: [".astro/**", "dist/**"] },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
  },
);
