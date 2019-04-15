import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import OutButton from "../../components/OutButton";
import { Layout, Row, Menu, Dropdown, Icon } from "antd";
import ProductCard from "../../components/ProductCard";
import CartButton from "../../components/CartButton";
import React from "react";
import firebase from "../firebase";
import Router from "next/router";
import styled from "styled-components";
const { Content } = Layout;

export default class extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Home | ShoppingMall</title>
        </Head>
        <Header
          centerColumn={
            firebase.getCurrentUsername() ? (
              <OutButton text="Logout" onClick={this.logout} />
            ) : (
              <Button href="/login" text="Sign in" />
            )
          }
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
            {this.props.data &&
              this.props.data.categories &&
              this.props.data.categories.map(category => (
                <Button
                  key={category.id}
                  href={`/category?name=${category.name.toLowerCase()}`}
                  hrefAs={`/category/${category.name.toLowerCase()}`}
                  text={category.name}
                />
              ))}
          </div>
          <div style={{ marginTop: "50px" }}>
            {this.props.data &&
              this.props.data.onSale &&
              this.props.data.onSale.length !== 0 && <h2>On Sale</h2>}
            <div
              style={{
                marginLeft: "30px",
                display: "grid",
                gridGap: "50px",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                width: "100%"
              }}
            >
              {this.props.data &&
                this.props.data.onSale &&
                this.props.data.onSale.map(product => (
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
            {this.props.data &&
              this.props.data.onSale &&
              this.props.data.onSale.length !== 0 && <h2>All Products</h2>}
            <div
              style={{
                marginLeft: "30px",
                display: "grid",
                gridGap: "50px",
                gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
                width: "100%"
              }}
            >
              {this.props.data &&
                this.props.data.allProducts &&
                this.props.data.allProducts.map(product => (
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
        <Button href="/calendar" text="Calendar" />
      </>
    );
  }

  logout = () => {
    firebase.logout();
    Router.push(`/`);
  };
}
