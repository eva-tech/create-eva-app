import { Command, flags } from '@oclif/command'

import copy from './scripts/copy'

const path = require('path')
const fs = require('fs-extra')

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

    const localRepoPath: string = path.join(process.cwd(), './node_modules/@eva-tech/eva-react-app')
    await copy(localRepoPath, installPath, true)

    this.log(`\nDone!\n\n`)
  }
}

export = CreateEvaApp
