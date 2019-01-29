# A custom Node + GraphQL (Apollo Server) boilerplate

This is my boilerplate for Node and GraphQL (supports Subscriptions).

## Quick start

- Clone the repo:
```
git clone git@github.com:abelosorio/graphql-boilerplate.git <your-project>
```
- Remove the remote `origin` (replace it by yours):
```
git remote remove origin
git remote add origin <your-repository-url>
```
- Run `npm install`.
- That's it! You can now run the project with `npm run dev` for development environments or `npm run build && npm run start` for production.

## Skeleton

- `dist`: Distribution folder. It contains transpiled files.
- `src`: Source code folder.
  - `schema`: GraphQL schema files.
    - `resolvers`: Resolver files (Javascript code). Here you can write your
      resolver methods by creating JS files exporting an object with the
      resolvers. Example:

      ```javascript
      const resolvers = {
        Query: {
          people: (_, args) => ([{ firstname: 'Abel', lastname: 'Osorio' }])
        }
      };

      export default resolvers;
      ```
      All the files will be merged into a single file.
    - `types`: Type files (GraphQL code). Here you will write your types in
      GraphQL code. Also, this is the place to define Queries, Mutations,
      Subscriptions, Inputs, or any other kind of type for your schema. Example:
      ```graphql
      type Person {
        firstname: String
        lastname: String
      }

      extend type Query {
        people: [Person]
      }
      ```
      Again, all these files will be merged into a single file, so make
      sure of extending from the root types.

## Dependencies

It has a very few dependencies (as you can see in the package.json file):

- apollo-server-express
- dotenv
- express
- graphql
- http
- lodash

And other dev dependencies to run the project and transpile it:

- @babel/cli
- @babel/core
- @babel/node
- @babel/preset-env
- babel-plugin-root-import
- nodemon
