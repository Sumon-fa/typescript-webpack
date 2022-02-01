import  React from "react";
import { Button, Card, Typography } from "@mui/material";

const App:React.FC=()=> {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <Typography variant="h1">sumon</Typography>
        <Button>Click me!</Button>
      </Card>
    </div>
  );
}
export default App;
