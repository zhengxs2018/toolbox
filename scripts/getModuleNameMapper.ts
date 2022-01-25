import path from 'path'
import ts from 'typescript'
import { pathsToModuleNameMapper } from 'ts-jest'

export function getModuleNameMapper(root = path.dirname(__dirname)) {
  const configFileName = ts.findConfigFile(
    root,
    ts.sys.fileExists,
    'tsconfig.json'
  )

  const { config } = ts.readConfigFile(configFileName!, ts.sys.readFile)

  return pathsToModuleNameMapper(config.compilerOptions.paths!)
}
