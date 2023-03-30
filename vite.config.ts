import { resolve } from 'path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'

import { CHUNK_SIZE_WARNING_LIMIT, OUT_DIR } from './build/constant'
import { wrapperEnv } from './build/utils'
import { vitePlugins } from './build/vite/plugin'
import { createProxy } from './build/vite/proxy'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const env = loadEnv(mode, root)

  const { VITE_PORT, VITE_PROXY } = wrapperEnv(env)

  return {
    plugins: vitePlugins(),
    server: {
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
      hmr: {
        overlay: true
      }
    },
    build: {
      outDir: OUT_DIR,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      chunkSizeWarningLimit: CHUNK_SIZE_WARNING_LIMIT
    },
    resolve: {
      // set alias
      alias: {
        '/@/': resolve(__dirname, 'src') + '/'
      }
    },
    css: {
      // user javascriptEnabled
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  }
}
