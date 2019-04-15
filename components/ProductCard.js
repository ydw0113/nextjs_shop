import Link from "next/link";
import { Card, Icon } from "antd";
const { Meta } = Card;

export default ({ id, name, subtitle, price, category, photoUrl }) => (
  <div style={{ marginBottom: "25px" }}>
    <Link href={`/product?id=${id}`} as={`/product/${id}`}>
      <a>
        {<img alt="example" src={photoUrl} height={"350px"} />}
        <Meta title={name} style={{ textAlign: "center", marginTop: "25px" }} />

        <Meta
          description={<span style={{ color: "#c78665" }}> ${price} </span>}
          style={{ textAlign: "center" }}
        />
      </a>
    </Link>
  </div>
);
