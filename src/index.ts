import { Command, flags } from '@oclif/command'

import * as prompts from './prompts'

class CreateEvaApp extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' }),
    force: flags.boolean({ char: 'f' })
  }

  async run() {
    this.log(`\nWelcome to CEA (create-eva-app) 😎\n\n`)

    try {
      const { name } = await prompts.name()
      await prompts.clone(name)
      this.log(`\nDone! 💖😄 Thx for using CEA, see ya later 👋\n\n`)
    } catch (err) {
      this.log(`\nError! 😬 ${err}`)
    }
  }
}

export = CreateEvaApp
