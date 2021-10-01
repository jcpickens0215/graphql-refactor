const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Model1 {
        someKey: STRING
    }

    type Model2 {
        someOtherKey: STRING
    }

    type Query {
        query1: [Model1]
        query2: Model2
    }

    type Mutation {
        mutation1(someKey: STRING!): Model1
        mutation2(someOtherKey: STRING!): Model2 
    }
`;