import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "./Container";
import Image from "next/image";
import useScreenSize from "../../hooks/useScreenSize";
import Link from "next/link";

function Navbar() {
  const match = useScreenSize("768px");
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");

  // function delay(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  // async function setLogo() {
  //   const logoName = "arraysnobjects".split("");
  //   let i = 0;
  //   while (i < logoName.length) {
  //     await delay(1000);
  //     setName((prevState) => {
  //       return prevState + logoName[i];
  //     });
  //     i++;
  //   }
  // }

  // useEffect(() => {
  //   setLogo();
  // }, []);

  return (
    <div>
      <div className="flex justify-between p-4">
        <Link href="/">
          <Image src="/logo1.png" alt="logo" width={130} height={30} />
        </Link>
        {/* <div className="flex items-center justify-center">
          <span>{name}</span>
          <span className="h-6 w-[2px] bg-third"></span>
        </div> */}
        {match ? (
          <div className="h-10 w-10 relative ">
            <Image
              src="/hamburger.png"
              alt="hamburger"
              width={40}
              height={40}
              className="absolute z-10"
              onClick={() => setToggle(!toggle)}
            />
          </div>
        ) : null}
        {match ? (
          <div
            className={`absolute top-0 left-0 w-screen bg-secondary ${
              toggle ? `block h-72` : `hidden`
            }`}
          >
            <div
              className={`flex flex-col items-center gap-3 justify-center h-full`}
            >
              <Link
                className={`no-decoration text-third text-base font-bold cursor-pointer`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`no-decoration text-third text-base font-bold cursor-pointer `}
                href="/about"
              >
                About
              </Link>
              <Link
                className={`no-decoration text-third text-base font-bold cursor-pointer`}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-6">
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
        )}
      </div>
    </div>
  );
}

export default Navbar;
