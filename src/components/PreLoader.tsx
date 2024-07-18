import { Box, CircularProgress } from "@mui/material";

const PreLoader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default PreLoader;
