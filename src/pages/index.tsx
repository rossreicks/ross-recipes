import { GetServerSideProps } from "next";
import styled from "@emotion/styled";
import { client } from "../client";
import { GET_RECIPES } from "../queries/get-recipes";
import { GetRecipes_recipes } from "../types/generated/GetRecipes";
import RecipeThumbnail from "../component/recipe-thumbnail";

const PageLayout = styled.div({
  textAlign: 'center',
  background: "#f4d8ae",
  font: "13px 'Open Sans', sans-serif",
  color: "#301008",
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await client.query({
    query: GET_RECIPES,
  });

  return { props: { recipes: data.recipes } };
};

export default Home;
