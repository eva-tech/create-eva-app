import 'mocha'

import copy from './../src/scripts/copy'

const fs = require('fs')
const path = require('path')
const mock = require('mock-fs')
const expect = require('chai').expect

describe('create-eva-app', () => {
  beforeEach(() => {
    mock({
      'projects/node_modules/@eva-tech/eva-react-app': {
        'readme.md': '# eva-react-app',
        'index.js': '// eva-react-app'
      }
    })
  })

  afterEach(() => mock.restore())

  it('should copy a local repository', async () => {
    const installPath = path.join(process.cwd(), './projects')
    const localRepoPath = path.join(process.cwd(), './projects/node_modules/@eva-tech/eva-react-app')

    await copy(localRepoPath, installPath)

    const readme = fs.readFileSync(path.join(installPath, './readme.md')).toString()
    const file = fs.readFileSync(path.join(installPath, './index.js')).toString()

    expect(readme).to.equal(`# eva-react-app`)
    expect(file).to.equal(`// eva-react-app`)
  })
})
