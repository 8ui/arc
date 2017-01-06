import path from 'path'
import glob from 'glob-fs'
import fs from 'fs'

export const templateListPath = path.join(__dirname, '../templates')
export const defaultBranch = 'redux'
export const branchList = fs.readdirSync(templateListPath)
export const repositoryUrl = 'https://github.com/diegohaz/arc'

export const templatePath = (branch, ...paths) =>
  path.join(templateListPath, branch, ...paths)

export const defaultTemplatePath = (...paths) =>
  templatePath(defaultBranch, ...paths)

export const branchUrl = (branch = defaultBranch) =>
  `${repositoryUrl}/tree/${branch}`

export const resourceUrl = (resourcePath, branch = defaultBranch) =>
  `${branchUrl(branch)}/${resourcePath.replace(/^\/|\/?$/g, '')}`

export const getFilePaths = (cwd) => {
  const fs = glob({ gitignore: true })
  const pattern = '**/*.{js,jsx,ts}'
  return fs.readdirSync(pattern, { cwd })
}
