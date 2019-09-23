import { Command, flags } from '@oclif/command'

class CreateEvaApp extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' }),
    force: flags.boolean({ char: 'f' })
  }

  async run() {
    this.log(`\nHi! 👋\n\n`)
  }
}

export = CreateEvaApp
