import { Command, flags } from '@oclif/command'

class CreateEvaApp extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' })
  }

  static args = [{ name: 'file' }]

  async run() {
    const {
      args: { file },
      flags: { force }
    } = this.parse(CreateEvaApp)

    this.log(`\nCreating project... Done!\n\n`)

    if (file && force) {
      this.log(`you input --force and --file: ${file}`)
    }
  }
}

export = CreateEvaApp
