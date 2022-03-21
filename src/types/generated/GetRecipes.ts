/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipes
// ====================================================

export interface GetRecipes_recipes_image {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface GetRecipes_recipes {
  __typename: "Recipe";
  /**
   * The title of the recipe
   */
  title: string;
  /**
   * The time it takes to make this recipe
   */
  time: number | null;
  /**
   * A single ingredient. ie: "1 cup flour"
   */
  ingredient: string[];
  /**
   * Number of servings this recipe makes
   */
  servings: number | null;
  description: string | null;
  image: GetRecipes_recipes_image[];
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
