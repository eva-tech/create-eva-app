import install from './install'

const fs = require('fs-extra')
const sysPath = require('path')
const existsSync = require('fs-exists-cached').sync

const ignored = (path: string) => !/^\.(git|hg)$/.test(sysPath.basename(path))

// copies a local repository
const copy = async (templatePath: string, rootPath: string, installModules?: boolean) => {
  await fs.mkdirp(rootPath, { mode: 493 })
  if (!existsSync(templatePath)) {
    throw new Error(`Template ${templatePath} doesn't exist`)
  }

  if (templatePath === '.') {
    throw new Error(`Sorry! You can't create from existing directory.`)
  }

  console.log('Creating template...')
  console.log(`Copying template to ${rootPath}...`)

  try {
    await fs.copy(templatePath, rootPath, { filter: ignored, dereference: true })
  } catch (err) {
    console.log(`Oops! ${err}`)
  }

  if (installModules) {
    await install(rootPath)
  }

  return true
}

export default copy
