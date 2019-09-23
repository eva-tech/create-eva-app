import install from './install'
import { spawnWithArgs } from './spawn'

const fs = require('fs-extra')
const sysPath = require('path')

// clones a remote repository
const clone = async (hostInfo: any, rootPath: string) => {
  let url

  if (hostInfo.getDefaultRepresentation() === 'sshurl') {
    url = hostInfo.ssh({ noCommittish: true })
  } else {
    url = hostInfo.https({ noCommittish: true, noGitPlus: true })
  }

  const branch = hostInfo.committish ? ['-b', hostInfo.committish] : []

  console.log(`Creating new site from git: ${url}`)

  const args = ['clone', ...branch, url, rootPath, '--single-branch'].filter(arg => Boolean(arg))

  await spawnWithArgs('git', args)

  console.log('Created starter directory layout')

  await fs.remove(sysPath.join(rootPath, '.git'))

  await install(rootPath)
}

export default clone
