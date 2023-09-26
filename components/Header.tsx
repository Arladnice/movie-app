import Image from "next/image";
import Link from "next/link";
import ava from "@/public/ava.png";

const Header = () => {
  return (
    <header className="py-4 px-5 bg-gray-800">
      <Link
        href="/"
        className="flex items-center justify-between text-xl font-medium text-white"
      >
        <Image width={100} height={100} src={ava} alt="Лого" />
        <h1 className="text-3xl font-bold">Киновтопку</h1>
      </Link>
    </header>
  );
};

export default Header;
