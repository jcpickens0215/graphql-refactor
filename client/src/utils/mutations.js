import { gql } from '@apollo/client';

export const MUTATION1 = gql`
    mutation mutation1($someKey: STRING!) {
        mutation1(someKey: $someKey) {
            someKey
        }
    }
`;

export const MUTATION2 = gql`
    mutation mutation2($someOtherKey: STRING) {
        mutation1(someOtherKey: $someOtherKey) {
            someOtherKey
        }
    }
`;