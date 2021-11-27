import Head from "next/head";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiTensorflow,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiStripe,
  SiPostgresql,
  SiStyledcomponents,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiAdobexd,
  SiCanva,
  SiAndroid,
  SiApollographql,
  SiMaterialui,
  SiGit,
  SiBootstrap,
  SiMapbox,
} from "react-icons/si";

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
    title1
    para1
    title2
  }
}
`;

const Home = ({ data }) => {
  return (
    <div className="font-outfit">
      <Head>
        <title>Avi Avinav</title>
        <meta name="description" content="Avi Avinav portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <main>
          <Hero data={data.homePage} />
          <div className="flex flex-col items-center bg-opacity-50 bg-green-100 dark:bg-gray-800 min-w-full py-24 px-28 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white">
              {data.homePage.title1}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-[35px] xl:leading-10 2xl:leading-[45px] text-gray-600 dark:text-green-300">
              {data.homePage.para1}
            </p>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="flex flex-col items-center bg-opacity-50 bg-green-200 dark:bg-[#141d29] min-w-full py-24 px-28 space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black dark:text-white">
              {data.homePage.title2}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-20 md:gap-x-40 gap-y-10 text-green-400 dark:text-green-200 text-5xl md:text-6xl py-5">
              <SiTailwindcss />
              <SiNextdotjs />
              <SiReact />
              <SiRedux />
              <SiNodedotjs />
              <SiTensorflow />
              <SiPython />
              <SiMongodb />
              <SiFirebase />
              <SiGraphql />
              <SiStripe />
              <SiPostgresql />
              <SiStyledcomponents />
              <SiCss3 />
              <SiHtml5 />
              <SiFigma />
              <SiAdobexd />
              <SiCanva />
              <SiAndroid />
              <SiApollographql />
              <SiMaterialui />
              <SiGit />
              <SiBootstrap />
              <SiMapbox />
            </div>
          </div>
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
