import react from '@vitejs/plugin-react'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'
import { resolve } from 'path'
import type { Plugin } from 'vite'
import vitePluginImp from 'vite-plugin-imp'

export function vitePlugins() {
  const plugins: (Plugin | Plugin[])[] = []

  plugins.push(react())

  plugins.push(
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
    })
  )

  plugins.push(vitePluginImp({}))

  return plugins
}
