import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html style={{ scrollBehavior: 'smooth' }}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Merriweather:wght@300;400&display=swap"
                    rel="stylesheet"
                />

                <script
                    src="https://upload-widget.cloudinary.com/global/all.js"
                    type="text/javascript"
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
