import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000/',
    documents: ['src/**/*.tsx'],
    ignoreNoDocuments: true,
    generates: {
        './src/gql/': {
            preset: 'client',
            config: {
                avoidOptionals: true
            },
        }
    }
}

export default config