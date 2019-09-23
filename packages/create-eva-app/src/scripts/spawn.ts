const execa = require('execa')

// spawns processes
export const spawnWithArgs = (file: string, args: string[], options?: any) =>
  execa(file, args, { stdio: 'inherit', preferLocal: false, ...options })

const spawn = (cmd: string, options?: any) => {
  const [file, ...args] = cmd.split(/\s+/)
  return spawnWithArgs(file, args, options)
}

export default spawn
