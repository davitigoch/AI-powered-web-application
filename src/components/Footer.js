import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ padding: "0px 20px" }}>Magicbook LLC</Box>
      <Link href="https://facebook.com">
        <FacebookIcon />
      </Link>
      <Link href="https://instagram.com">
        <InstagramIcon />
      </Link>
      <Link href="https://youtube.com">
        <YouTubeIcon />
      </Link>
    </Box>
  );
}
