/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecipe
// ====================================================

export interface GetRecipe_recipe_image {
  __typename: "Asset";
  /**
   * Get the url for the asset with provided transformations applied.
   */
  url: string;
}

export interface GetRecipe_recipe {
  __typename: "Recipe";
  /**
   * The title of the recipe
   */
  title: string;
  description: string | null;
  /**
   * The time it takes to make this recipe
   */
  time: number | null;
  /**
   * A single ingredient. ie: "1 cup flour"
   */
  ingredient: string[];
  /**
   * A single step in the process. ie: "Mix Flour and Butter"
   */
  step: string[];
  /**
   * Number of servings this recipe makes
   */
  servings: number | null;
  image: GetRecipe_recipe_image[];
}

export interface GetRecipe {
  /**
   * Retrieve a single recipe
   */
  recipe: GetRecipe_recipe | null;
}

export interface GetRecipeVariables {
  slug: string;
}
