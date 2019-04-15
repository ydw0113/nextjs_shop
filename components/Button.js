import Link from "next/link";
import { Button } from "react-bootstrap";

export default ({ href, text, bgColor, btnType, btnIcon, hrefAs }) => (
  <Button
    variant="outline-success"
    style={{ backgroundColor: bgColor, marginTop: " 50px" }}
    type={btnType}
    icon={btnIcon}
  >
    <Link href={href} as={hrefAs}>
      <a style={{ color: "inherit", marginLeft: btnIcon && "10px" }}>{text}</a>
    </Link>
  </Button>
);
