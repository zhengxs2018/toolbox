// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
import path from 'path'

import type { Config } from '@jest/types'

import { findPackages } from './scripts/findPackages'
import { getModuleNameMapper } from './scripts/getModuleNameMapper'

export default async (): Promise<Config.InitialOptions> => {
  const packages = await findPackages()
  const moduleNameMapper = getModuleNameMapper()

  return {
    coverageDirectory: 'coverage',
    coverageReporters: ['html', 'lcov', 'text'],

    projects: packages.map(pkg => {
      return {
        displayName: pkg['name'],
        preset: 'ts-jest',
        testMatch: [path.resolve(pkg['location'], 'src/**/*.(spec|test).ts')],
        collectCoverageFrom: ['src']
      }
    }),

    moduleNameMapper
  }
}
