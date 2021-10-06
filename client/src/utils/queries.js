import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query me {
        me {
            _id
            savedBooks {
                bookId
                authors
                description
                title
                image
            }
        }
    }
`;
