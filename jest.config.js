module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    setupFiles: ['<rootDir>/jest.setup.js'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    }
}