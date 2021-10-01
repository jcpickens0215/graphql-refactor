const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: STRING!
        email: STRING!
        password: STRING!
        bookcount: INTEGER
        savedBooks: [Book]
    }

    type Book {
        BookId: STRING!
        authors: [STRING]
        description: STRING!
        title: STRING!
        image: STRING
        link: STRING
    }

    type Auth {
        token: STRING
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: STRING!, password: STRING!): Auth
        addUser(username: STRING!, email: STRING!, password: STRING!): Auth
        saveBook(authors: [STRING], description: STRING!, title: STRING!, bookId: STRING!, image: STRING, link: STRING): User
        removeBook(bookId: STRING!): User
    }
`;