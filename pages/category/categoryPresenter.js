import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Row } from "antd";
import ProductCard from "../../components/ProductCard";
import CartButton from "../../components/CartButton";
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | ShoppingMall</title>
    </Head>
    <Header
      rightColumn={<CartButton />}
      leftColumn={<Button href="/search" text="Search" />}
    />
    <Content
      style={{ padding: "0 50px", position: "relative", marginTop: "70%" }}
    >
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          width: "100%"
        }}
      >
        {data &&
          data.categories &&
          data.categories.map(category => (
            <Button
              key={category.id}
              href={`/category?name=${category.name.toLowerCase()}`}
              hrefAs={`/category/${category.name.toLowerCase()}`}
              text={category.name}
            />
          ))}
      </div>
      <div style={{ marginTop: "50px" }}>
        {data && data.onSale && data.onSale.length !== 0 && <h2>On Sale</h2>}
        <div
          style={{
            marginLeft: "30px",
            display: "grid",
            gridGap: "50px",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            width: "100%"
          }}
        >
          {data &&
            data.onSale &&
            data.onSale.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                subtitle={product.detail}
                price={product.price}
                photoUrl={product.photo.url}
              />
            ))}
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        {data && data.onSale && data.onSale.length !== 0 && (
          <h2>All Products</h2>
        )}
        <div
          style={{
            marginLeft: "30px",
            display: "grid",
            gridGap: "50px",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            width: "100%"
          }}
        >
          {data &&
            data.allProducts &&
            data.allProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                category={product.category}
                name={product.name}
                subtitle={product.detail}
                price={product.price}
                photoUrl={product.photo.url}
              />
            ))}
        </div>
      </div>
    </Content>
  </>
);
