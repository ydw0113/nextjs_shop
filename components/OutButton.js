import { Button } from "react-bootstrap";

export default ({ text, bgColor, btnType, btnIcon, onClick }) => (
  <Button
    variant="outline-success"
    style={{ backgroundColor: bgColor, marginTop: " 50px" }}
    type={btnType}
    icon={btnIcon}
    onClick={onClick}
    block
    style={{ height: "50px" }}
  >
    <a style={{ color: "inherit", marginLeft: btnIcon && "10px" }}>{text}</a>
  </Button>
);
