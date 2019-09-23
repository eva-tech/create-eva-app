import spawn from './spawn'

// executes `npm install` in project root
const install = async (rootPath: string) => {
  const prevDir = process.cwd()

  console.log('Installing packages...')
  process.chdir(rootPath)

  try {
    await spawn('npm install')
  } finally {
    process.chdir(prevDir)
  }
}

export default install
