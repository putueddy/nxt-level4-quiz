import { AppProps } from "next/app"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Multi-step Form</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Get a project quote" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "DM Sans",
          colors: {
            primary: ["#4A3AFF", "#962DFF"],
            neutral: ["#170F49", "#6F6C90", "#EFF0F6", "#FFFFFF"],
          },
          headings: {
            sizes: {
              h2: { fontWeight: 700, fontSize: "34px", lineHeight: "46px" },
              h3: { fontWeight: 700, fontSize: "24px", lineHeight: "35px" },
            },
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
