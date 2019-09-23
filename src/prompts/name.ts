import { prompt } from 'enquirer'

const name = async () => {
  const response: { name: string } = await prompt({
    type: 'input',
    name: 'name',
    message: `What's the name of your next project?`
  })

  return response
}

export default name
