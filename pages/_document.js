import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <title>ShoppingMall</title>
        <Head>
          <meta name="author" content={"Dong"} />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />
          <style>{"body {background-color: #EFF2F5!important}"}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
