/**
 * 入口配置
 */
import * as  pathTool from 'path'
import * as  color from 'cli-color'
import { ROOT_PATH, APP_PATH } from './constants'

import * as  globby from 'globby'
const appPath = './src/apps'
const basePath = `${appPath}/**`
const apps = globby.sync(
  [
    `${basePath}/*.ts`,
    `${basePath}/*.html`,
    `${basePath}/*.pug`,
    `!${appPath}/index.ts`,
    `!${basePath}/_*/**/*`,
    `!${basePath}/_*.*`,
    `!${basePath}/*.test.*`,
    `!${basePath}/components/**/*`,
    `!${basePath}/routes/**/*`,
    `!${basePath}/common/**/*`,
    `!${basePath}/assets/**/*`,
    `!${basePath}/data/**/*`
  ], { cwd: ROOT_PATH }
)

export const entryObject = {}
export const templateObject = {}

export const regExt = /\.\w*$/
//模板的后缀
export const templateSuffix = '-template'
//模板的正则
export const regTemplate = /-template$/

apps.forEach(n => {
  let key = pathTool.relative(`${APP_PATH}/apps`, n)
  key = '/' + key
  key = key.replace(/^(\.|\\|\/)*/, '').replace(regExt, '')
  if (/\.(html|pug)$/.test(n)) {
    //如果是html文件 则以-template结尾
    key += templateSuffix
    templateObject[key] = n
    return
  }
  entryObject[key] = n.replace(regExt, '')
})
console.log('entryObject', color.green(JSON.stringify(entryObject)))
export const entry = {
  templateSuffix,
  regTemplate,
  //只包含入口ts
  apps: {
    pages: './src/pages',
    ...entryObject
  },
  //包含入口ts  以及 template
  all: {
    pages: './src/pages',
    ...entryObject,
    ...templateObject
  }
}
