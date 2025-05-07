import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Movie Night">
      <Image src={logo} alt="Movie Night Logo" width={32} height={32} />
      <span className="text-xl font-semibold bg-gradient-to-r from-gray-200 to-indigo-200 bg-clip-text text-transparent">
        Movie Night
      </span>
    </Link>
  );
}
