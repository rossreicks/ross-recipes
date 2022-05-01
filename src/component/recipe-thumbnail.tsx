import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { GetRecipe_recipe } from "../types/generated/GetRecipe";
import Image from "next/image";
import { GetRecipes_recipes } from "../types/generated/GetRecipes";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { HorizontalRule } from "@mui/icons-material";

const Card = styled.div({
  backgroundColor: "white",
  boxShadow: "0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902)",
  width: "300px",
});

const InfoItem = styled.div({
  display: "flex",
  flexDirection: "column",
});

const DescriptionBox = styled.div({
  p: {
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
});

type Props = {
  recipe: GetRecipes_recipes;
};

const RecipeThumbnail = ({ recipe }: Props) => {
  return (
    <Card>
      {Boolean(recipe.image?.length) && <Image objectFit="cover" width={300} height={200} src={recipe.image[0].url} />}
      <Box padding="0 14px 10px" display="flex" flexDirection="column" gap={2}>
        <div>
          <h3>{recipe.title}</h3>
          <hr />
        </div>
        <Box display="flex" justifyContent="space-between">
          <InfoItem>
            <Box display="flex" gap={1}>
              <AccessTimeIcon />
              <Typography fontWeight="bold" color="#ff4f87">
                {recipe.time}
              </Typography>
            </Box>
            <Typography color="grey">Minutes</Typography>
          </InfoItem>
          <InfoItem>
            <Box display="flex" gap={1}>
              <MenuBookIcon />
              <Typography fontWeight="bold" color="#ff4f87">
                {recipe.ingredient.length}
              </Typography>
            </Box>
            <Typography>Ingredients</Typography>
          </InfoItem>
          <InfoItem>
            <Box display="flex" gap={1}>
              <PersonOutlineOutlinedIcon />
              <Typography fontWeight="bold" color="#ff4f87">
                {recipe.servings}
              </Typography>
            </Box>
            <Typography>Servings</Typography>
          </InfoItem>
        </Box>
        <DescriptionBox>
          <Typography>{recipe.description}</Typography>
        </DescriptionBox>
        <Button
          sx={{ backgroundColor: "#ff4f87" }}
          variant="contained"
          fullWidth
          href={"/" + recipe.slug}
        >
          View Recipe
        </Button>
      </Box>
    </Card>
  );
};

export default RecipeThumbnail;
