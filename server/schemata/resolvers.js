const { User, Book } = require('../models');

const resolvers = {
    Query: {
        me: () => {},
    },
    Mutation: {
        login: async (parent, { email, password }) => {

        },
        addUser: async (parent, { username, email, password }) => {

        },
        saveBook: async (parent, { authors, description, title, bookId, image, link }) => {

        },
        removeBook: async (parent, { bookId }) => {
            
        }
    }
};

module.exports = resolvers;