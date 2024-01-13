import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="">
          <Main />
          <NextScript />
          <script
            src="https://product-gallery.cloudinary.com/all.js"
            type="text/javascript"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
