import { ArrowRightIcon } from "@heroicons/react/outline";

const TechStackItem = ({ Icon, text, desc, href }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2 relative group cursor-pointer">
      <Icon className="xl:group-hover:scale-110 transition transform ease-out duration-150" />
      <h3 className="text-base sm:text-lg md:text-xl xl:group-hover:scale-110 transition transform ease-out duration-150">
        {text}
      </h3>
      <div className="absolute hidden xl:flex flex-col opacity-0 group-hover:block rounded max-h-60 min-h-[8rem] bg-gray-600 dark:bg-gray-900 backdrop-blur-3xl group-hover:opacity-90 dark:group-hover:opacity-95 text-left py-3 px-4 space-y-0.5 transition ease-out duration-500 -right-40 -top-3 z-40">
        <h3 className="text-lg text-white">{text}</h3>
        <p className="text-base text-green-200">{desc}</p>
        <a
          className="text-base flex items-center underline"
          rel="noopener noreferrer"
          target="_blank"
          href={href}
        >
          More <ArrowRightIcon className="h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default TechStackItem;
