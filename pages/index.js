import Head from "next/head";

const Home = () => {
  return (
    <div className="font-outfit">
      <Head>
        <title>Avi Avinav</title>
        <meta name="description" content="Avi Avinav's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full bg-gray-50 dark:bg-gray-800"></div>
    </div>
  );
};

export default Home;
