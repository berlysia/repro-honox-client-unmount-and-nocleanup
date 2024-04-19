import ssg from '@hono/vite-ssg'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [client()]
    }
  } else {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [honox(), ssg({entry: './app/server.ts'})]
    }
  }
})
