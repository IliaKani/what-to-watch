/// <reference types="vite/client" />

declare module 'vite/dist/client/env' {
    interface ImportMeta {
      env: ViteEnv
    }
  }
  