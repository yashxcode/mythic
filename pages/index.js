import Layout from "@/components/Layout"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mythic</title>
        <meta
          name="description"
          content="Mythic is a video-streaming platform that offers a fun, social way to watch people play games."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Layout />
    </div>
  )
}
