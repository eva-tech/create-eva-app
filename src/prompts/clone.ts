import select from './../utils/select'

const { AutoComplete } = require('enquirer')

const clone = async (name: string) => {
  const prompt = new AutoComplete({
    name: 'app',
    message: 'Which app would you like to install?',
    limit: 7,
    choices: ['eva-react-app', 'eva-react-native-app']
  })

  await prompt.run().then(async (template: string) => {
    await select(template, name)
  })
}

export default clone
