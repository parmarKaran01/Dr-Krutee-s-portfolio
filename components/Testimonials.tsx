import React from "react";
import Slider from "./Slider";
import Link from "next/link";
import { Button } from "./ui/button";

const Testimonials = () => {
  return (
    <div className="w-full h-full bg-whitish md:px-32 md:py-24 px-6 py-8 flex flex-col items-center">
      <h2 className="text-center text-4xl uppercase font-semibold">
        Testimonials
      </h2>
      <Slider />
      <Link
        href={
          "https://docs.google.com/forms/d/18mu4yTGxTFsDATtpwPZqoDwfBTlph8yMurTQiAHTo5Q/edit?usp=drivesdk"
        }
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button variant={"default"} className="w-auto mt-3">
          Leave a feedback
        </Button>
      </Link>
    </div>
  );
};

export default Testimonials;
