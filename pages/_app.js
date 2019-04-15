import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgress from "next-nprogress/component";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <Container>
        <NProgress color="black" spinner={true} />
        <ApolloProvider client={apollo}>
          <Layout style={{ backgroundColor: "#FFF" }}>
            <Component {...pageProps} />
            <Footer style={{ backgroundColor: "#FFF" }} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withNProgress()(withApollo(MyApp));
