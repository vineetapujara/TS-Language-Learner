import { Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const languages = [
  {
    name: "Japanese",
    code: "ja",
  },
  {
    name: "Hindi",
    code: "hi",
  },
  {
    name: "Spanish",
    code: "es",
  },
  {
    name: "French",
    code: "fr",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const langSelectorHandler = (language: string): void => {
    navigate(`/learn?language=${language}`);
  };

  return (
    <Container maxWidth={"sm"}>
      <Typography>Welcome,Begin your jouney of learning.</Typography>
      <Stack
        direction={"row"}
        spacing={"2rem"}
        p={"2rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {languages.map((i) => (
          <Button
            onClick={() => langSelectorHandler(i.code)}
            key={i.code}
            variant="contained"
          >
            {i.name}
          </Button>
        ))}
      </Stack>
      <Typography>Choose one language of your choice</Typography>
    </Container>
  );
};

export default Home;
