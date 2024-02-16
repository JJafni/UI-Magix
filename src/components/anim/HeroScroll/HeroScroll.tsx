"use client";
import React from "react";
import { ContainerScroll } from "../..";

const HeroScroll = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Check out my <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Interests and hobby's
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
};

const users = [
  {
    name: "Series",
    designation: "Not anymore",
    image:
      "https://i.pinimg.com/originals/5b/e0/a1/5be0a1b5a6a50d8fdc91df74ba19e741.jpg",
    badge: "Mentor",
  },
  {
    name: "Gaming",
    designation: "PC",
    image:
      "https://i.pinimg.com/564x/d1/a7/0e/d1a70e51b93f14bd71fa679ce8ce7944.jpg",
    badge: "Mentor",
  },
  {
    name: "Sport",
    designation: "Data Scientist, DataWorks",
    image:
      "https://i.pinimg.com/564x/68/ca/a6/68caa61544f890fc00a9b8a66719a3f8.jpg",
    badge: "Mentor",
  },
  {
    name: "Hanging out",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Digital Art",
    designation: "CTO, FutureTech",
    image:
      "https://i.pinimg.com/originals/5b/e0/a1/5be0a1b5a6a50d8fdc91df74ba19e741.jpg",
    badge: "Mentor",
  },
  {
    name: "Music",
    designation: "CEO, StartUp",
    image:
      "https://i.pinimg.com/564x/d5/cb/a5/d5cba5a1a074bef1b9068a8d4f422eb6.jpg",
  },
  {
    name: "Coding",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Investing",
    designation: "Marketing Manager, MarketGrowth",
    image:
      "https://i.pinimg.com/564x/93/0f/b5/930fb5f9ff25ce867f272e7e252a5523.jpg",
    badge: "Mentor",
  },
];

export { HeroScroll };
