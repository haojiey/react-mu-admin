import react from '@vitejs/plugin-react'
import { themePreprocessorPlugin } from '@zougt/vite-plugin-theme-preprocessor'
import { resolve } from 'path'
import type { Plugin } from 'vite'
import vitePluginImp from 'vite-plugin-imp'
import { viteMockServe } from 'vite-plugin-mock'

export function vitePlugins(VITE_USE_MOCK: boolean, isBuild: boolean) {
    const plugins: (Plugin | Plugin[])[] = []

    plugins.push(
        themePreprocessorPlugin({
            less: {
                // Enable Dynamic theme mode.
                arbitraryMode: false,
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
                ],
                // css中不是由主题色变量生成的颜色，也让它抽取到主题css内，可以提高权重
                includeStyleWithColors: [
                    {
                        color: '#ffffff'
                        // 此类颜色的是否跟随主题色梯度变化，默认false
                        // inGradient: true,
                    }
                ],
                // 在生产模式是否抽取独立的主题css文件，extract为true以下属性有效
                extract: true,
                // 独立主题css文件的输出路径，默认取 viteConfig.build.assetsDir 相对于 (viteConfig.build.outDir)
                outputDir: '',
                // 会选取defaultScopeName对应的主题css文件在html添加link
                themeLinkTagId: 'theme-link-tag',
                // "head"||"head-prepend" || "body" ||"body-prepend"
                themeLinkTagInjectTo: 'head',
                // 是否对抽取的css文件内对应scopeName的权重类名移除
                removeCssScopeName: false,
                // 可以自定义css文件名称的函数
                customThemeCssFileName: (scopeName) => scopeName
            }
        })
    )

    plugins.push(vitePluginImp({}))

    plugins.push(react())

    VITE_USE_MOCK &&
        plugins.push(
            viteMockServe({
                ignore: /^_/,
                mockPath: 'src/mock',
                localEnabled: !isBuild,
                prodEnabled: isBuild,
                injectFile: 'src/main.tsx',
                injectCode: `
                    import { setupProdMockServer } from './mock/index';
                    setupProdMockServer();
                `
            })
        )

    return plugins
}
