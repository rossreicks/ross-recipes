import { gql } from "@apollo/client";

export const GET_RECIPE = gql`
  query GetRecipe($slug: String!) {
    recipe(where: { slug: $slug }) {
      title
      description
      time
      ingredient
      step
      servings
      image {
        url
      }
    }
  }
`;
