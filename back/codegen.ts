import {CodegenConfig} from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: './context#DataSourceContext',
        mappers: {
          Article: './src/models#Article',
          Comment: './src/models#Comment',
          Like: './src/models#Like',
        }
      }
    }
  }
}
 
export default config