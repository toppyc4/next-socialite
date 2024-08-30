// "use client";

// import { useState, useEffect } from "react";
import Link from "next/link";
import { JustArrivedIcon } from "../../components/base/JustArrivedIcon";
import prisma from "@/app/lib/db";

export default async function justArrived() {
  // const [filters, setFilters] = useState({
  //   category: "all",
  // });
  // const fetchInterests = await prisma.justarrivedinterests.findMany();
  const fetchInterests1 = {
    Art_and_Culture: {
      Digital_Art: {
        name: "Digital Art",
        selected: false,
        interest_type: "Art_and_Culture",
      },
      Drawing: {
        name: "Drawing",
        selected: false,
        interest_type: "Art_and_Culture",
      },
      Music: {
        name: "Music",
        selected: false,
        interest_type: "Art_and_Culture",
      },
    },
    Career_and_Business: {
      Real_Estate: {
        name: "Real Estate",
        selected: false,
        interest_type: "Career_and_Business",
      },
      Startup: {
        name: "Startup",
        selected: false,
        interest_type: "Career_and_Business",
      },
      Marketing: {
        name: "Marketing",
        selected: false,
        interest_type: "Career_and_Business",
      },
    },
    Technology: {
      "Artificial Intelligent": {
        name: "Artificial Intelligent",
        selected: false,
        interest_type: "Technology",
      },
      "Open Source": {
        name: "Open Source",
        selected: false,
        interest_type: "Technology",
      },
      "Software Development": {
        name: "Software Development",
        selected: false,
        interest_type: "Technology",
      },
    },
    Sports_and_Fitness: {
      Basketball: {
        name: "Basketball",
        selected: false,
        interest_type: "Sports_and_Fitness",
      },
      Weightlifting: {
        name: "Weightlifting",
        selected: false,
        interest_type: "Sports_and_Fitness",
      },
      Yoga: {
        name: "Yoga",
        selected: false,
        interest_type: "Sports_and_Fitness",
      },
    },
    Food_and_Culinary_Arts: {
      Cooking: {
        name: "Cooking",
        selected: false,
        interest_type: "Food_and_Culinary_Arts",
      },
      Coffee: {
        name: "Coffee",
        selected: false,
        interest_type: "Food_and_Culinary_Arts",
      },
      "Food Blogging": {
        name: "Food Blogging",
        selected: false,
        interest_type: "Food_and_Culinary_Arts",
      },
    },
  };

  // console.log(fetchInterests);
  // const fetchInterests = {
  //   Digital_Art: { name: "Digital Art", selected: false },
  //   Drawing: { name: "Drawing", selected: false },
  //   Meusuem: { name: "Meusuem", selected: false },
  //   Real_Estate: { name: "Real Estate", selected: false },
  //   Startup: { name: "Startup", selected: false },
  //   Marketing: { name: "Marketing", selected: false },
  //   Sustainability: { name: "Sustainability", selected: false },
  //   Philantropy: { name: "Philantropy", selected: false },
  //   Non_Profit: { name: "Non Profit", selected: false },
  // };

  // const [interests, setInterests] = useState(fetchInterests);
  return (
    <div>
      <section
        className="py-24 md:pt-32 bg-white"
        // style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-3xl md:text-4xl leading-tight text-coolGray-900 font-bold">
              Pick Your Interests
            </h2>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full p-8 mb-16 bg-gray-200 rounded-3xl">
              <div className="group h-full">
                <h3 className="mt-8 mb-4 text-2xl leading-7 font-bold max-w-xs md:text-3xl ">
                  Art & Culture
                </h3>
                <ul>
                  <li>
                    {Object.entries(fetchInterests1.Art_and_Culture).map(
                      ([key, interestObj]) => (
                        <>
                          {/* <p>h1</p> */}
                          <JustArrivedIcon
                            key={key}
                            interestObj={interestObj}
                          />
                        </>
                      )
                    )}
                  </li>
                </ul>
                <h3 className="mt-8 mb-4 text-2xl leading-7 font-bold max-w-xs md:text-3xl">
                  Career & Business
                </h3>
                <ul>
                  <li>
                    {Object.entries(fetchInterests1.Career_and_Business).map(
                      ([key, interestObj]) => (
                        <>
                          {/* <p>h1</p> */}
                          <JustArrivedIcon
                            key={key}
                            interestObj={interestObj}
                          />
                        </>
                      )
                    )}
                  </li>
                </ul>
                <h3 className="mt-8 mb-4 text-2xl leading-7 font-bold max-w-xs md:text-3xl">
                  Community & Event
                </h3>
                <ul>
                  <li>
                    {Object.entries(fetchInterests1.Technology).map(
                      ([key, interestObj]) => (
                        <>
                          {/* <p>h1</p> */}
                          <JustArrivedIcon
                            key={key}
                            interestObj={interestObj}
                          />
                        </>
                      )
                    )}
                  </li>
                </ul>
                <h3 className="mt-8 mb-4 text-2xl leading-7 font-bold max-w-xs md:text-3xl">
                  Dancing
                </h3>
                <ul>
                  <li>
                    {Object.entries(fetchInterests1.Sports_and_Fitness).map(
                      ([key, interestObj]) => (
                        <>
                          {/* <p>h1</p> */}
                          <JustArrivedIcon
                            key={key}
                            interestObj={interestObj}
                          />
                        </>
                      )
                    )}
                  </li>
                </ul>
                <h3 className="mt-8 mb-4 text-2xl leading-7 font-bold max-w-xs md:text-3xl">
                  Health & Wellbeing
                </h3>
                <ul>
                  <li>
                    {Object.entries(fetchInterests1.Food_and_Culinary_Arts).map(
                      ([key, interestObj]) => (
                        <>
                          {/* <p>h1</p> */}
                          <JustArrivedIcon
                            key={key}
                            interestObj={interestObj}
                          />
                        </>
                      )
                    )}
                  </li>
                </ul>
                <Link className="flex ml-auto" href="#">
                  <button className="ml-auto mt-8 p-2 bg-cyan-400 font-bold rounded-lg text-md md:text-xl">
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
