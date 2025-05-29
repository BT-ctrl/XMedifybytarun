import { Link, Stack } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function FooterLink({ children, href = "#" }) {
  return (
    <Link
      href={href}
      underline="none"
      color="#fff"
      fontWeight={300}
      fontSize={14}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        transition: "color 0.2s",
        "&:hover": {
          color: "primary.light",
        },
      }}
    >
      <Stack direction="row" gap={0.5} alignItems="center">
        <KeyboardArrowRightIcon fontSize="small" />
        {children}
      </Stack>
    </Link>
  );
}
