import { GetStaticProps } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { client } from "../client";
import { GET_RECIPES } from "../queries/get-recipes";
import { GetRecipes_recipes } from "../types/generated/GetRecipes";

const PageLayout = styled.div({
  background: "#fff",
  font: "13px 'Open Sans', sans-serif",
  color: "#222",
  gap: 10,
  a: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
});

const RecipeList = styled.ul({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

type Props = {
  recipes: GetRecipes_recipes;
};

const Home = ({ recipes }) => {
  return (
    <PageLayout>
      <h1>Ross' Recipes</h1>
      <RecipeList>
        {recipes.map((recipe, i) => (
          <li key={i}>
            <Link key={recipe.slug} href={"/" + recipe.slug}>
              {recipe.title}
            </Link>
          </li>
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
