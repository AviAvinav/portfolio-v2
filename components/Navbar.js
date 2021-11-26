import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const Navbar = ({ mode }) => {
  return (
    <nav className="flex sticky top-0 min-w-100 items-center px-10 md:px-28 py-4 z-50 bg-white dark:bg-gray-900 border-b-2 border-dashed border-green-100 justify-between text-black dark:text-white">
      <h1 className="flex text-4xl items-baseline">
        AV<p className="text-green-500 font-semibold text-3xl px-2">i</p>
      </h1>
      <div className="flex space-x-16 tracking-wide text-sm md:text-[15px] dark:text-gray-200 items-center">
        <div>
          <SunIcon className="h-6 cursor-pointer active:scale-75 transition transform duration-150 ease-out" />
        </div>
        <div className="flex items-center space-x-10 font-medium">
          <div className="relative group active:scale-90 transition duration-100 ease-out">
            <h2 className="cursor-pointer text-[17px]">About</h2>
            <div className="absolute h-1.5 w-full bg-green-300 dark:bg-green-700 bottom-0 z-[-50] opacity-0 group-hover:opacity-100" />
          </div>
          <div className="relative group active:scale-90 transition duration-100 ease-out">
            <h2 className="cursor-pointer text-[17px]">Projects</h2>
            <div className="absolute h-1.5 w-full bg-green-300 dark:bg-green-700 bottom-0 z-[-50] opacity-0 group-hover:opacity-100" />
          </div>
          <div className="relative group active:scale-90 transition duration-100 ease-out">
            <h2 className="cursor-pointer text-[17px]">Contact</h2>
            <div className="absolute h-1.5 w-full bg-green-300 dark:bg-green-700 bottom-0 z-[-50] opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
