import { GetStaticProps } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { client } from "../client";
import { GET_RECIPES } from "../queries/get-recipes";
import { GetRecipes_recipes } from "../types/generated/GetRecipes";
import RecipeThumbnail from "../component/recipe-thumbnail";

const PageLayout = styled.div({
  background: "lightGrey",
  font: "13px 'Open Sans', sans-serif",
  color: "#222",
});

const RecipeList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 20,
});

type Props = {
  recipes: GetRecipes_recipes;
};

const Home = ({ recipes }) => {
  return (
    <PageLayout>
      <h1>Ross&rsquo; Recipes</h1>
      <RecipeList>
        {recipes.map((recipe, i) => (
          <RecipeThumbnail key={i} recipe={recipe} />
        ))}
      </RecipeList>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client.query({
    query: GET_RECIPES,
  });

  return { props: { recipes: data.recipes } };
};

export default Home;
