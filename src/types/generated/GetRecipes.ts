/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipes
// ====================================================

export interface GetRecipes_recipes {
  __typename: "Recipe";
  /**
   * The title of the recipe
   */
  title: string;
  /**
   * url for this recipe
   */
  slug: string | null;
}

export interface GetRecipes {
  /**
   * Retrieve multiple recipes
   */
  recipes: GetRecipes_recipes[];
}
