import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
const MainBanner = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-col-reverse items-center md:flex-row w-full justify-center pt-[4rem] md:pt-[8rem] pb-[15rem] bg-whitish px-8 md:px-8 gap-4">
        <div className="flex flex-col w-[100%] lg:max-w-[55%] items-center md:items-start">
          <span className="text-2xl md:text-6xl font-medium capitalize text-center md:text-left">
           Empowering you to achieve you best physical potential.
          </span>
          <span className="mt-6 uppercase text-red font-semibold text-center md:text-left">
            Dr Krutee Sangani | BPT | Certified Yoga Therapist.
          </span>
          <Link
            href={
              "https://docs.google.com/forms/d/1rne83sBWTRTKVWDAvIWlxJ3636w_Cb9GNUQ5igB_gyI/edit?usp=drivesdk"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button variant={"default"} className="w-auto mt-3">
              Schedule a Consultation
            </Button>
          </Link>
        </div>

        <motion.div
          className="relative shrink-0 h-[340px] w-[340px] rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}

        >
          <div className="absolute bg-lightRed w-[17rem] h-[17rem] rounded-full top-[5rem] left-8"></div>
          <Image
            className="relative"
            src={"/kru-bg.png"}
            alt="profile"
            width={340}
            height={340}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default MainBanner;
