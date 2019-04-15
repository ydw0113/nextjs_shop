import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import OutButton from "../../components/OutButton";
import { Layout, Input } from "antd";
import CartButton from "../../components/CartButton";
import { Dropdown, Form, Col, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>Search | ShoppingMall</title>
    </Head>
    <Header
      // centerColumn={
      // <h4>{searchTerm === "" ? "Search" : `Searching by ${searchTerm}`}</h4>
      // }
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content
      style={{ padding: "0 50px", position: "relative", marginTop: "70%" }}
    >
      <Form.Label>카테고리 검색 </Form.Label>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Control as="select" style={{ height: "50px" }}>
            {data &&
              data.categories &&
              data.categories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Control as="select" style={{ height: "50px" }}>
            {data &&
              data.categories &&
              data.categories.map(category => (
                <option key={category.id}>{category.name}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="8">
          <Input
            onChange={updateSearchTerm}
            placeholder={"Search by name"}
            value={searchTerm}
            style={{ height: "50px" }}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <OutButton text="검색하기" />
        </Form.Group>
      </Form.Row>

      <div
        style={{
          marginLeft: "30px",
          display: "grid",
          gridGap: "50px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%",
          margin: "50px 0px"
        }}
      >
        {data &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </div>
    </Content>
  </>
);
