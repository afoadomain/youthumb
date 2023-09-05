import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" /> {/* This is the correct comment for adding a description */}
          <meta
            name="description"
            content="Elevate your YouTube channel to new heights with our effortless solution for accessing high-quality thumbnails in a range of resolutions. Our user-friendly application not only simplifies the process of thumbnail downloads but also offers you the opportunity to draw inspiration from the creative works of fellow content creators. It's the perfect tool to enhance and invigorate your own video content.

            With just a simple action, you can transform the visual appeal of your YouTube videos. Paste the video URL into our intuitive interface, and with a quick click on the 'Download' button, you'll have high-quality thumbnails ready to captivate your audience.
            
            Say goodbye to the hassle of searching for the right thumbnail – our application provides a seamless experience, ensuring your content stands out in style.
            
            Take the first step towards making your YouTube channel more engaging and memorable today."
          /> {/* Elevate your YouTube channel to new heights with our effortless solution for accessing high-quality thumbnails in a range of resolutions. Our user-friendly application not only simplifies the process of thumbnail downloads but also offers you the opportunity to draw inspiration from the creative works of fellow content creators. It's the perfect tool to enhance and invigorate your own video content.

          With just a simple action, you can transform the visual appeal of your YouTube videos. Paste the video URL into our intuitive interface, and with a quick click on the 'Download' button, you'll have high-quality thumbnails ready to captivate your audience.
          
          Say goodbye to the hassle of searching for the right thumbnail – our application provides a seamless experience, ensuring your content stands out in style.
          
          Take the first step towards making your YouTube channel more engaging and memorable today. */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
