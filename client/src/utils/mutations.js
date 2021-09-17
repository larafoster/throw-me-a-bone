import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_FORM = gql`
  mutation addData($firstName: String!, $lastName: String!, $street: String!, $city: String!, $userState: String!, $zip: Int!,
    $email: String, $dogName: String!, $messsage: String!) {
    addData(firstName: $firstName, lastName: $lastName, street: $street, city: $city, userState: $userState
      zip: $zip, email: $email, dogName: $dogName, message: $message) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const SAVE_DOG = gql`
  mutation saveDog($DogData: DogInput!) {
    saveDog(DogData: $DogData) {
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

export const REMOVE_DOG = gql`
  mutation removeDog($dogId: ID!) {
    removeDog(dogId: $dogId) {
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
