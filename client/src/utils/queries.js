import { gql } from '@apollo/client';

export const QUERY1 = gql`
    query query1 {
        Model1 {
            someKey
        }
    }
`;

export const QUERY2 = gql`
    query query2 {
        Model2 {
            someOtherKey
        }
    }
`;