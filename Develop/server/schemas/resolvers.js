// const {User, Book} = require('../models');  
// const {signToken, AuthenticationError} = require('apollo-server-express');

// const resolvers = {
//     Query: {
//       users: async () => {
//         return User.find().populate('books');
//       },
//       user: async (parent, { username }) => {
//         return User.findOne({ username }).populate('books');
//       },
//       thoughts: async (parent, { username }) => {
//         const params = username ? { username } : {};
//         return Thought.find(params).sort({ createdAt: -1 });
//       },
//       thought: async (parent, { thoughtId }) => {
//         return Thought.findOne({ _id: thoughtId });
//       },
//       me: async (parent, args, context) => {
//         if (context.user) {
//           return User.findOne({ _id: context.user._id }).populate('books');
//         }
//         throw AuthenticationError;
//       },
//     },
//     Mutation: {
//         addUser: async (parent, { username, email, password }) => {
//           const user = await User.create({ username, email, password });
//           const token = signToken(user);
//           return { token, user };
//         },
//         login: async (parent, { email, password }) => {
//           const user = await User.findOne({ email });
    
//           if (!user) {
//             throw AuthenticationError;
//           }
    
//           const correctPw = await user.isCorrectPassword(password);
    
//           if (!correctPw) {
//             throw AuthenticationError;
//           }
    
//           const token = signToken(user);
    
//           return { token, user };
//         },
//         addBook: async (parent, { bookData }, context) => {
//             if (context.user) {
//                 const book = await Book.create({ bookData, username: context.user.username,
//                  });

//             await User.findByIdAndUpdate(
//                 { _id: context.user._id },
//                 { $push: { books: book._id } },
//             }
//             );
//             return book;
//         }
//     }
// };

// module.exports = resolvers;

