import { Box, CircularProgress } from "@mui/material";

const PreLoader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default PreLoader;
