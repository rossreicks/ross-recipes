import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query GetRecipes {
    recipes {
      title
      time
      ingredient
      servings
      description
      image {
        url
      }
      slug
    }
  }
`;
