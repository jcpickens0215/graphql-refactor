const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (_p, _a, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })//.populate('books');

                console.log(user);
                if (user) return user;

                console.log("!!! USER DOES NOT EXIST");
                return {};
             }
            throw new AuthenticationError('Not logged in');
        },
    },
    Mutation: {
        login: async (_p, { email, password }) => {
            const user = await User.findOne({ $or: [{ username: email }, { email: email }] });
            if (!user) throw new AuthenticationError('Incorrect credentials');
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) throw new AuthenticationError('Incorrect credentials');
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (_p, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (_p, args, context) => {
            if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: args } },
                { new: true, runValidators: true }
              );
              console.log(updatedUser);
              return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeBook: async (_p, { bookId }, context) => {
            if (context.user) {
              return await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: { savedBooks: { bookId: bookId } } },
                  { new: true }
              );
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;