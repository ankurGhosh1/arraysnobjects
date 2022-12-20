import React from "react";
import Container from "./Container";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

function Footer() {
  const router = useRouter();

  return (
    <div className="px-4 py-8 fixed w-full -z-10 h-32 bg-primary bottom-0 left-0 max-sm:h-48">
      <Container className="relative">
        <div className="px-4 flex items-center justify-between max-sm:flex-col gap-8">
          <Link href="/">
            <Image src="/logo1.png" alt="logo" width={130} height={130} />
          </Link>
          <div className="flex gap-6 items-center">
            <Link
              className={`no-decoration text-third text-base font-bold cursor-pointer hover:text-secondary  ${
                router.pathname == "/" ? "text-secondary" : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`no-decoration text-third text-base font-bold cursor-pointer hover:text-secondary ${
                router.pathname == "/about" ? "text-secondary" : ""
              }`}
              href="/about"
            >
              About
            </Link>
            {/* <Link
              className={`no-decoration text-third text-base font-bold cursor-pointer hover:text-secondary ${
                router.pathname == "/contact" ? "text-secondary" : ""
              }`}
              href="/contact"
            >
              Contact
            </Link> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
