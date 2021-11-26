import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `
query {
  homePage {
    profilePic {
      responsiveImage {
        alt
        src
        srcSet
      }
    }
  }
}
`;

const Home = ({ data }) => {
  return (
    <div className="font-outfit">
      <Head>
        <title>Avi Avinav</title>
        <meta name="description" content="Avi Avinav's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <main>
          <Hero data={data.homePage} />
        </main>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: {
      data,
    },
  };
};

export default Home;
