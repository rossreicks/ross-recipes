import styled from "@emotion/styled";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`navigation-tab-${index}`}
      aria-labelledby={`navigation-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: index.toString(),
    "aria-controls": `navigation-option-${index}`,
  };
}

const Ingredients = styled.ul({
  margin: 0,
  padding: 0,
  marginLeft: 10,
  columnCount: 1,
  li: {
    marginBottom: 5,
  },
  "li:before": {
    //content: '\2022',
    color: "#eb9376",
    marginRight: 5,
  },
  "@media(min-width: 599px)": {
    columnCount: 2,
  },
});

const Methods = styled.ul({
  listStyle: "",
  margin: 0,
  padding: 0,
  marginLeft: 10,
  columnCount: 1,
  li: {
    marginBottom: 8,
  },
});

export default function NavigationTabs({ ingredients = [], steps = [] }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="navigation links"
        >
          <Tab label="Ingredients" {...a11yProps(0)} />
          <Tab label="Method" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Ingredients>
          {ingredients.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </Ingredients>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Methods>
          {steps.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </Methods>
      </TabPanel>
    </Box>
  );
}
