import path from 'path'
import fs from 'fs'
import { gql } from 'apollo-server-express'

const typeDefs = []

fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith('.graphql'))
  .forEach((file) => {
    typeDefs.push(
      gql(fs.readFileSync(path.join(__dirname, file), 'utf-8'))
    )
  })

module.exports = typeDefs
