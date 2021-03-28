import { Typography } from "@material-ui/core";
const date = new Date();
function Footer() {
  return (
    <footer>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        <span>&#169;</span> Copyright {date.getFullYear()} By Fake Store.
      </Typography>
    </footer>
  );
}

export default Footer;
