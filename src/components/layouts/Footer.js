import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className="container mx-auto text-white flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-extrabold items-center uppercase text-gray-100">
          <Image alt="Pizza Walia Logo" src="/pizza-img.png" width={60} height={60} />
          <p className="leading-5 text-xl mx-2">Pizza Walia</p>
        </Link>

        <p>
          Copyright 2024 | Pizza Walia
        </p>
      </div>

    </footer>
  );
};

export default Footer;
