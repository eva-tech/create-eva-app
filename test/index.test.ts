import 'mocha'

import clone from './../src/scripts/clone'

const fs = require('fs-extra')
const path = require('path')
const expect = require('chai').expect
const hostedGitInfo = require('hosted-git-info')

describe('create-eva-app', () => {
  const installPath = path.join(process.cwd(), './test/app')

  beforeEach(async function() {
    this.timeout(20000)
    await fs.removeSync(installPath)

    const remoteRepoPath = 'eva-tech/eva-react-app'
    const hostedInfo = hostedGitInfo.fromUrl(remoteRepoPath)

    try {
      await clone(hostedInfo, installPath)
    } catch (e) {
      console.log(e)
    }
  })

  afterEach(async () => {
    await fs.removeSync(installPath)
  })

  it('should clone a remote repository', async () => {
    const file = fs.readFileSync(path.join(installPath, './index.js')).toString()
    expect(file).to.equal(`// eva-react-app\n`)
  })
})
