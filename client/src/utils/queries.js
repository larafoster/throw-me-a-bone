import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      savedDogs {
        dogId
        breed
        image
        description
        age
        spaynuet
      }
    }
  }
`;
