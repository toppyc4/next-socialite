import Image from "next/image";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <nav className="flex justify-between p-6 px-4">
      <div className="flex justify-between items-center w-full">
        <div className="xl:w-1/3">
          <Link className="block max-w-max" href="/">
            <Image
              className=""
              width={170}
              height={50}
              src="/icons/socialite-logo.svg"
              alt="logo"
              priority
            />
          </Link>
        </div>
        <div className="hidden xl:block xl:w-1/3 removed"></div>
        <div className="hidden xl:block xl:w-1/3">
          <div className="flex items-center justify-end">
            <Link
              className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md"
              href="/login"
            >
              Log In
            </Link>
            <Link
              className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
              href="signup"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
