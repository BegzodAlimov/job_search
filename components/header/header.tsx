import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.svg";
import "./style.css"
import CustomButton from "../custom_button/button";

const Header = () => {
  return (
    <header className="min-h-[90vh]">
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center text-base gap-10 font-medium">
          <Link href={"/"} className="logo flex items-center gap-2 text-xl font-semibold text-secondary mr-20">
            <Image src={Logo} alt="logo"/>
            Ngul!
          </Link>
          <Link href={"/"}>Find Talent</Link>
          <Link href={"/"}>Clients</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About Us</Link>
        </div>
        <div>
            <CustomButton className="border border-white bg-transparent ">   
            <Link href={""}>Log In</Link>
            </CustomButton>
            <CustomButton>   
            <Link href={""}>Sign Up</Link>
            </CustomButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
