import { Command, flags } from '@oclif/command'

import clone from './scripts/clone'

const path = require('path')
const fs = require('fs-extra')
const hostedGitInfo = require('hosted-git-info')

class CreateEvaApp extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' }),
    force: flags.boolean({ char: 'f' })
  }

  async run() {
    this.log(`\nCreating project...\n\n`)

    const installPath: string = path.join(process.cwd(), './root')
    await fs.removeSync(installPath)

    const remoteRepoPath = 'eva-tech/eva-react-app'
    const hostedInfo = hostedGitInfo.fromUrl(remoteRepoPath)

    await clone(hostedInfo, installPath)

    this.log(`\nDone!\n\n`)
  }
}

export = CreateEvaApp
