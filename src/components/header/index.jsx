import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ dashtitle, dashsub }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h5"
        color="#165e3b"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {dashtitle}
      </Typography>
      <Typography color="#000">{dashsub}</Typography>
    </Box>
  );
};

export default Header;
