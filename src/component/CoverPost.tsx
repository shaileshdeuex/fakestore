import { Grid, Paper, Typography } from "@material-ui/core";

function CoverPost() {
  return (
    <Paper className="coverPost" data-testid="coverPostContainer">
      <Grid container className="coverPost_containt">
        <Grid item md={6}>
          <div>
            <Typography
              className="fontWhite coverPost_heading"
              component="h1"
              variant="h3"
              data-testid="coverPostHeading"
              gutterBottom
            >
              Big Billion Days are Comming.
            </Typography>
            <Typography
              className="fontWhite"
              variant="h5"
              data-testid="coverPostPara"
              gutterBottom
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto rem corrupti ullam. Molestias esse eum illum numquam ab
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className="coverPost_Overlay" />
    </Paper>
  );
}

export default CoverPost;
