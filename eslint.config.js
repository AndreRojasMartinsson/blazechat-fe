import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";
import prettierConfig from "eslint-config-prettier/flat";
import githubPlugin from "eslint-plugin-github";
import sonarPlugin from "eslint-plugin-sonarjs";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  jsxA11y.flatConfigs.recommended,
  reactHooksPlugin.configs["recommended-latest"],
  githubPlugin.getFlatConfigs().browser,
  ...githubPlugin.getFlatConfigs().typescript,
  sonarPlugin.configs.recommended,
  {
    ignores: ["node_modules", ".react-router", "eslint.config.js"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      reactPlugin,
    },
    settings: {
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
    },
    languageOptions: {
      parserOptions: {
        projectService: { allowDefaultProject: ["*.js", "*.mjs"] },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off",
      "react/prop-types": "off",
      "sonarjs/prefer-read-only-props": "off",
    },
  },
  prettierConfig
);
