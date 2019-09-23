import clone from './../scripts/clone'

const path = require('path')
const fs = require('fs-extra')
const hostedGitInfo = require('hosted-git-info')

const select = async (template: string, name: string) => {
  const installPath: string = path.join(process.cwd(), `./${name}`)
  await fs.removeSync(installPath)

  const remoteRepoPath = `eva-tech/${template}`
  const hostedInfo = hostedGitInfo.fromUrl(remoteRepoPath)

  await clone(hostedInfo, installPath)
}

export default select
