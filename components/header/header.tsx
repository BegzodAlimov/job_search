"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/images/logo.svg";
import "./style.css";
import CustomButton from "../custom_button/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Search from "@/public/icons/search-normal.svg";
import SearchWhite from "@/public/icons/search_button.svg";
import Department from "@/public/icons/briefcase.svg";
import Location from "@/public/icons/location.svg";
import Google from "@/public/images/google-1-1 1.svg";
import Microsoft from "@/public/images/microsoft 1.svg";
import Airbnb from "@/public/images/airbnb 1.svg";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

const Header = () => {
  return (
    <header>
      <nav className="py-5 pr-5 flex items-center justify-between">
        <div className="flex items-center text-base gap-10 font-medium">
          <Link
            href={"/"}
            className="logo flex items-center gap-2 text-xl font-semibold text-secondary mr-5 min-[110px]:mr-20"
          >
            <Image src={Logo} alt="logo" />
            Ngul!
          </Link>
          <Link href={"/"}>Find Talent</Link>
          <Link href={"/"}>Clients</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About Us</Link>
        </div>
        <div className="flex gap-8">
          <CustomButton className="border border-white bg-transparent px-8 py-3 text-base">
            <Link href={""}>Log In</Link>
          </CustomButton>
          <CustomButton className="px-8 py-3 bg-white text-primary text-base">
            <Link href={""}>Sign Up</Link>
          </CustomButton>
        </div>
      </nav>
      <div>
        <h1 className="text-7xl font-medium max-w-[788px] mt-16">
          Portal Job for Developer, Designer, and Marketers
        </h1>
        <p className="text-base font-normal max-w-[493px] my-10">
          Jobs is a curated job board of the best jobs for developers, designers
          and marketers in the tech industry.
        </p>
        <Tabs defaultValue="Find Job" className="tabs w-2/3 rounded-3xl">
          <TabsList>
            <TabsTrigger value="Find Job">Find Job</TabsTrigger>
            <TabsTrigger value="Find Talents">Find Talents</TabsTrigger>
          </TabsList>
          <TabsContent value="Find Job" className="flex gap-5 pt-5 pb-3 pl-5">
            <div className="relative ">
              <Label
                htmlFor="search"
                className="cursor-pointer absolute left-2.5 h-full flex items-center"
              >
                <Image src={Search} alt="Icon" width={16} height={16} />
              </Label>
              <Input
                id="search"
                placeholder="Search for job.."
                className="py-2.5 pl-9 h-full rounded-3xl text-sm placeholder:text-sm text-input_color placeholder:text-input_color"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[186px] py-3 pl-9 h-auto rounded-3xl text-sm text-input_color placeholder:text-input_color relative">
                <div className="cursor-pointer absolute left-2.5 h-full flex items-center">
                  <Image src={Location} alt="Icon" width={16} height={16} />
                </div>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[186px] py-3 pl-9 h-auto rounded-3xl text-sm text-input_color placeholder:text-input_color relative">
                <div className="cursor-pointer absolute left-2.5 h-full flex items-center">
                  <Image src={Department} alt="Icon" width={16} height={16} />
                </div>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <CustomButton
              type="submit"
              className=" px-8 py-3 rounded-4xl flex items-center text-base gap-2"
            >
              <Image src={SearchWhite} alt="Icon" width={20} height={20} />
              Search
            </CustomButton>
          </TabsContent>
          <TabsContent value="Find Talents" className="flex gap-5 pt-5 pb-3 pl-5">
            <div className="relative ">
              <Label
                htmlFor="search"
                className="cursor-pointer absolute left-2.5 h-full flex items-center"
              >
                <Image src={Search} alt="Icon" width={16} height={16} />
              </Label>
              <Input
                id="search"
                placeholder="Search for job.."
                className="py-2.5 pl-9 h-full rounded-3xl text-sm placeholder:text-sm text-input_color placeholder:text-input_color"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[186px] py-3 pl-9 h-auto rounded-3xl text-sm text-input_color placeholder:text-input_color relative">
                <div className="cursor-pointer absolute left-2.5 h-full flex items-center">
                  <Image src={Location} alt="Icon" width={16} height={16} />
                </div>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[186px] py-3 pl-9 h-auto rounded-3xl text-sm text-input_color placeholder:text-input_color relative">
                <div className="cursor-pointer absolute left-2.5 h-full flex items-center">
                  <Image src={Department} alt="Icon" width={16} height={16} />
                </div>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <CustomButton
              type="submit"
              className=" px-8 py-3 rounded-4xl flex items-center text-base gap-2"
            >
              <Image src={SearchWhite} alt="Icon" width={20} height={20} />
              Search
            </CustomButton>
          </TabsContent>
        </Tabs>
      </div>
      <div className="p-5 pl-0 mt-14">
        <h2 className="text-lg text-input_color font-medium">Trusted by:</h2>
        <div className="flex items-center gap-5 mt-3">
          <Image src={Google} alt="icon" width={69}/>
          <Image src={Microsoft} alt="icon" width={113}/>
          <Image src={Airbnb} alt="icon" width={77}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
