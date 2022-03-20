import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";
import { GetRecipe_recipe } from "../types/generated/GetRecipe";
import NavigationTabs from "./recipe-tab-panel";

const RecipeCard = styled("div")({
  boxShadow: "0px 0px 20px 1px rgba(240,241,243,1)",
  border: "1px solid #f0f1f3",
  width: "300px",
  margin: "50px auto",

  "@media(min-width: 599px)": {
    width: 600,
  },
});

const RecipeImage = styled.div((props: { src: string }) => ({
  background: `url(${props.src}) no-repeat 50% 50%`,
  backgroundSize: "cover",
  height: 150,
}));

const RecipeBody = styled.div({
  padding: 20,
  h1: {
    padding: 0,
    margin: "0 0 0",
    color: "#444",
  },
  h2: {
    color: "#555",
    fontSize: 13,
    marginBottom: 30,
  },
});

export const Recipe = ({ recipe }: { recipe: GetRecipe_recipe }) => {
  console.log(recipe.image);

  const imageUrl = recipe.image && recipe.image[0] ? recipe.image[0].url : "";

  return (
    <div>
      <Button href="/">Back</Button>
      <RecipeCard>
        {Boolean(imageUrl) && (
          <Image
            objectFit="cover"
            objectPosition="top"
            height="100px"
            width="600px"
            src={imageUrl}
          />
        )}
        <RecipeBody>
          <h1>{recipe.title}</h1>
          <h2>{recipe.description}</h2>

          <NavigationTabs ingredients={recipe.ingredient} steps={recipe.step} />
        </RecipeBody>
      </RecipeCard>
    </div>
  );
};
