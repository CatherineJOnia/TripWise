import { styled } from "@mui/system";
import { Box } from "@mui/system";

{
  /* <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      sx={{
        bgcolor: "#87BBA2",
        pt: 3,
      }}>
      */
}
const StyledBox = styled(Box)({
  justifyContent: "center",
  display: "flex",
  width: "60%",
  height: "100%",
  backgroundColor: "#c9e4ca",
  paddingTop: 30,
  borderRadius: "16px",
  textAlign: "center",
  paddingBottom: 30,
});

export default StyledBox;
