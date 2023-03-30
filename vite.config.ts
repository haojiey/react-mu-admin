import { resolve } from 'path'
import type { UserConfig, ConfigEnv } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { loadEnv } from 'vite'

import { createProxy } from './build/vite/porxy'
import { wrapperEnv } from './build/utils'
import react from '@vitejs/plugin-react'

import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const env = loadEnv(mode, root)

  const { VITE_PORT, VITE_PROXY } = wrapperEnv(env)

  return {
    plugins: [
      react(),
      themePreprocessorPlugin({
        less: {
          // Enable Dynamic theme mode.
          arbitraryMode: false,
          // Default theme color，It is usually the same as a theme color (@primary-color) in src/theme/theme-vars.less .
          // Only one item of multipleScopeVars
          multipleScopeVars: [
            {
              scopeName: 'theme-default',
              path: resolve('src/design/theme/default.less')
            },
            {
              scopeName: 'theme-dark',
              path: resolve('src/design/theme/dark.less')
            }
          ]
        }
      }),
      vitePluginImp()
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: "antd",
      //       style(name) {
      //         // use less
      //         return `antd/es/${name}/style/index.js`;
      //       },
      //     },
      //   ],
      // }),
    ],
    server: {
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY),
      hmr: {
        overlay: true
      }
    },
    resolve: {
      alias: {
        '/@/': resolve(__dirname, 'src') + '/'
      }
    },
    css: {
      // user javascriptEnabled
      preprocessorOptions: {
        less: {
          // modifyVars: {
          //   "primary-color": "#9890ff",
          // },
          javascriptEnabled: true
        }
      }
    }
  }
}
