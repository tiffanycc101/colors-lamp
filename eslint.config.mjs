import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["js/**/*.js"],
    languageOptions: {
        sourceType: "script",
        globals: {
            ...globals.browser,
            module: "readonly"
        }
    },
    rules: {
      ...js.configs.recommended.rules
    }
  }
];