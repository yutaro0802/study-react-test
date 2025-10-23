// @ts-nocheck
import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import next from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // ✅ ビルド生成物・設定ファイル・Nextの型定義を無視
  globalIgnores([
    "**/.next/**",
    "**/node_modules/**",
    "**/dist/**",
    "eslint.config.mts",
    "postcss.config.mjs",
    "next-env.d.ts",
  ]),

  // JS/TS 推奨（非タイプチェック）
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Next.js 推奨
  next,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        // ⚠ ここで project は設定しない（非タイプチェックLintにする）
        // project を設定したい場合は、後述の「タイプチェックを有効化(任意)」を参照
      },
    },
    rules: {
      // 新JSX変換：React の import は不要
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      // TS で型付けするなら PropTypes は不要
      "react/prop-types": "off",
      // 未使用変数（先頭が _ は許容）
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      // Next が生成する triple-slash を怒られないようにするなら off でもOK
      // "@typescript-eslint/triple-slash-reference": "off",
    },
    settings: { react: { version: "detect" } },
  },
]);
