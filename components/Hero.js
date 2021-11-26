import { ArrowDownIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Hero = ({ data }) => {
  return (
    <div className="relative min-h-[90vh] min-w-full flex flex-col-reverse md:flex-row items-center justify-between py-20 px-28 bg-white dark:bg-gray-900">
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wider text-black dark:text-white">
          Hi!
        </h1>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wider text-black dark:text-white pt-1 md:pt-3">
          I'm Avi.
        </h1>
        <p className="pt-3 text-lg md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
          Web & App Developer
        </p>
        <button className="bg-blue-200 text-blue-500 hover:opacity-80 active:scale-90 transition transform duration-150 ease-out font-semibold tracking-wide text-lg rounded w-64 p-3 mt-6 md:mt-10">
          HIRE ME
        </button>
        <ArrowDownIcon className="hidden md:inline-flex absolute h-12 left-1/2 bottom-20 animate-bounce dark:text-white" />
      </div>
      <div className="relative w-64 sm:w-72 lg:w-96 h-64 sm:h-72 lg:h-96 border-8 border-opacity-50 border-gray-400 rounded-full">
        <Image
          src={data.profilePic.responsiveImage.src}
          alt={data.profilePic.responsiveImage.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-full"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Hero;
