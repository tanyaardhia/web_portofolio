import Image from "next/image";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8 flex items-center justify-center overflow-hidden">
      <div className="w-20 sm:w-auto h-auto flex items-center justify-center relative">
        <Image
          className="animate-spin-slow"
          src="/images/bullet.png"
          alt="github photo"
          width={110}
          height={110}
        />
        <Link
          href="mailto:tanyaadhiap@gmail.com"
          className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-medium hover:text-[#8897ca]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}
