import { Command, flags } from '@oclif/command'

import * as prompts from './prompts'

class CreateEvaApp extends Command {
  static description = 'Set up an Eva-Ready web or mobile app by running one command 💖'

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' })
  }

  async run() {
    const {
      // eslint-disable-next-line
      flags: { help, version }
    } = this.parse(CreateEvaApp)

    this.log(`\nWelcome to CEA (create-eva-app) 💖\n\n`)

    try {
      const { name } = await prompts.name()
      await prompts.clone(name)
      this.log(`\nDone! 💖😄 Thx for using CEA, see ya later 👋\n\n`)
    } catch (err) {
      this.log(`\nError! 💣 ${err}\n\n`)
    }
  }
}

export = CreateEvaApp
