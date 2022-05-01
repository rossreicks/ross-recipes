import { GetStaticPaths, GetStaticProps } from "next";
import styled from "@emotion/styled";
import { client } from "../client";
import { Recipe } from "../component/recipe";
import { GET_RECIPE } from "../queries/get-recipe";
import { GET_RECIPES } from "../queries/get-recipes";
import { GetRecipe, GetRecipe_recipe } from "../types/generated/GetRecipe";
import { GetRecipes } from "../types/generated/GetRecipes";

const PageLayout = styled.div({
  background: "#fff",
  font: "13px 'Open Sans', sans-serif",
  color: "#222",
});

const RecipePage = (recipe: GetRecipe_recipe) => {
  return (
    <PageLayout>
      <Recipe recipe={recipe} />
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<GetRecipe_recipe> = async ({
  params,
}) => {
  const { slug } = params;

  const { data } = await client.query<GetRecipe>({
    query: GET_RECIPE,
    variables: {
      slug,
    },
  });

  return { props: data.recipe, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<GetRecipes>({
    query: GET_RECIPES,
  });

  return {
    paths: data.recipes.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

export default RecipePage;
