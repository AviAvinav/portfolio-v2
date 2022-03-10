import Head from "next/head";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiStripe,
  SiStyledcomponents,
  SiCss3,
  SiHtml5,
  SiFigma,
  SiAdobexd,
  SiGit,
  SiBootstrap,
} from "react-icons/si";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStackItem from "../components/TechStackItem";

import { request } from "../lib/datocms";
import Footer from "../components/Footer";

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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-20 md:gap-x-30 gap-y-10 text-green-400 dark:text-green-200 text-5xl md:text-6xl py-5 overflow-x-hidden overflow-y-hidden">
              <TechStackItem
                Icon={SiTailwindcss}
                text="Tailwind CSS"
                desc="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
                href="https://tailwindcss.com/"
              />
              <TechStackItem Icon={SiNextdotjs} text="Next.js" />
              <TechStackItem Icon={SiReact} text="React.js" />
              <TechStackItem Icon={SiRedux} text="Redux" />
              <TechStackItem Icon={SiNodedotjs} text="Node.js" />
              <TechStackItem Icon={SiMongodb} text="MongoDB" />
              <TechStackItem Icon={SiFirebase} text="Firebase" />
              <TechStackItem Icon={SiGraphql} text="GraphQL" />
              <TechStackItem Icon={SiStripe} text="Stripe" />
              <TechStackItem
                Icon={SiStyledcomponents}
                text="Styled Components"
              />
              <TechStackItem Icon={SiCss3} text="CSS3" />
              <TechStackItem Icon={SiHtml5} text="HTML5" />
              <TechStackItem Icon={SiFigma} text="Figma" />
              <TechStackItem Icon={SiAdobexd} text="Adobe XD" />
              <TechStackItem Icon={SiGit} text="Git" />
              <TechStackItem Icon={SiBootstrap} text="Bootstrap" />
            </div>
          </div>
        </main>
        <Footer />
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
