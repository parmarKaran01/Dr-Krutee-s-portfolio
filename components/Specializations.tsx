import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const specials = [
  {
    id: 1,
    title: "Orthopedic Rehabilitation",
    description:
      "Orthopedic rehabilitation ​in physiotherapy is a ​specialized treatment ​approach focused on ​helping individuals ​recover from ​musculoskeletal injuries ​or surgeries related to the ​bones, joints, muscles, and ​connective tissues. The ​primary goals of ​orthopedic rehab are to ​reduce pain, improve ​mobility, restore strength ​and function, and enhance ​the patient's overall quality ​of life.",
  },
  {
    id: 2,
    title: "Neuromuscular ​Re-education​",
    description:
      "Neuromuscular ​Reeducation focuses on improving the ​function of the ​neuromuscular system, ​which includes the nerves ​and muscles, after injury ​or dysfunction like stroke, ​Parkinson's disease etc. ​This type of rehabilitation ​aims to restore proper ​movement patterns, ​muscle strength, and ​coordination.",
  },
  {
    id: 3,
    title: "Cardiorespiratory ​Reh​abilitation",
    description:
      "It typically involves ​structured exercise ​programs and education to ​help individuals with ​conditions like heart ​disease, chronic ​obstructive pulmonary ​disease (COPD), and other ​cardiopulmonary issues. ​The goals include ​enhancing cardiovascular ​fitness, reducing ​symptoms, and improving ​the overall quality of life. ​Treatment may involve ​aerobic exercises, strength ​training, breathing ​exercises, and lifestyle ​modifications",
  },
  {
    id: 4,
    title: "Geriatric ​Rehabilition",
    description:
      "Geriatric rehabilitation in ​physiotherapy is tailored ​for older adults to address ​age-related health ​concerns and functional ​limitations. It aims to ​improve the physical, ​functional, and cognitive ​aspects of elderly patients. ​Common conditions ​addressed include ​arthritis, osteoporosis, ​balance problems, and ​cognitive impairments ​like dementia. The focus is ​on enhancing mobility, ​strength, balance, and ​promoting independence ​in daily activities.",
  },
];

const SpecialsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Card className="flex flex-col hover:scale-105 hover:transition">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-8">
        <Image src={"/OpenPeepsStanding.png"} width={100} height={100} alt="" className="hidden md:block"/>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
       <Button variant={"outline"}>Know more</Button>
      </CardFooter>
    </Card>
  );
};
const Specializations = () => {
  return (
    <div className=" w-full bg-lightRed md:px-24 md:py-24 px-6 py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full justify-center gap-12">
        {specials.map((item) => {
          return (
            // <div key={item.id}>
            //   <h2 className="text-2xl font-semibold">{item.title}</h2>
            //   <p>{item.description}</p>
            // </div>
            <SpecialsCard title={item.title} description={item.description} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default Specializations;
