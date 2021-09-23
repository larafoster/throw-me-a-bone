import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
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
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
        }
    }
  }
  }
`;

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      name
      description
      breed
      image
      age
      spaynuet
    }
  }
`;
export const QUERY_DOGS =gql`
{
  dogs {
  id
  name
  description
  breed
  image
  gender
  age
  spaynuet
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
    }
  }
`;
