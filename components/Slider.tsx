// import React from "react";
"use client";
import { motion, AnimatePresence } from "framer-motion";

// const Slider = () => {
//   return (
//     <div
//       data-hs-carousel='{
//     "loadingClasses": "opacity-0",
//     "isAutoPlay": true
//   }'
//       className="relative w-[70%]"
//     >
//       <div className="hs-carousel relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg">
//         <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center h-full bg-gray-100 p-6">
//               <span className="self-center text-4xl transition duration-700">
//                 First slide
//               </span>
//             </div>
//           </div>
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center h-full bg-gray-200 p-6">
//               <span className="self-center text-4xl transition duration-700">
//                 Second slide
//               </span>
//             </div>
//           </div>
//           <div className="hs-carousel-slide">
//             <div className="flex justify-center h-full bg-gray-300 p-6">
//               <span className="self-center text-4xl transition duration-700">
//                 Third slide
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button
//         type="button"
//         className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
//       >
//         <span className="text-2xl" aria-hidden="true">
//           <svg
//             className="w-4 h-4"
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
//             />
//           </svg>
//         </span>
//         <span className="sr-only">Previous</span>
//       </button>
//       <button
//         type="button"
//         className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
//       >
//         <span className="sr-only">Next</span>
//         <span className="text-2xl" aria-hidden="true">
//           <svg
//             className="w-4 h-4"
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
//             />
//           </svg>
//         </span>
//       </button>

//       <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
//         <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
//         <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
//         <span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, User, UserCircle, UserCircle2, UserCircleIcon, UserRound } from "lucide-react";
import StarRating from "./StarRating";

const reviews = [
  {
    id: 0,
    name: "Zubin Mehta",
    rating: 5,
    review: `My mother, Ella Mehta, had ​undergone a knee ​replacement surgery and had ​taken up physiotherapy from ​the Clinic. Dr. Krutee Sangani ​really helper her a lot with the ​recovery and was very patient ​with the treatment. She ​helped in dealing with the ​pain and also gave a lot of ​encouragement to deal with ​the surgery. Much thanks!`,
  },
  {
    id: 1,
    name: "Beena Sheth",
    rating: 5,
    review: `I have knee and heel problem and ​Doctor had suggested me knee ​replacement. Dr.Madhura ​referred me for physiotherapy ​and I have started my treatment. I ​was treated by Dr.Krutee who ​was very kind and motivating. ​Thanks to her exercises  my heel ​pain is solved.`,
  },
  {
    id: 2,
    name: "Rohit Nair",
    rating: 5,
    review: `My mother was treated for ​coccyx pain by Dr. Krutee. She ​had knowledge about the ​condition and educated her well. ​Her pain level was also reduceed ​after the treatment.`,
  },
];
const Slider = () => {
  const [slide, setSlide] = useState(0);
  return (
    <AnimatePresence>
      <div className="relative flex items-center justify-center w-full  m-auto py-8 lg:w-[50%]">
        <Card className="min-h-[300px]">
          <CardHeader>
            <motion.div
              initial={{ opacity: 0, left: -10 }}
              animate={{ opacity: 1, left: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
              key={slide}
            >
              <CardTitle className="flex items-center gap-2">
                <UserRound />
                {reviews[slide].name}
              </CardTitle>
            </motion.div>
          </CardHeader>
          <motion.div
            initial={{ opacity: 0, left: -10 }}
            animate={{ opacity: 1, left: 0 }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            key={slide}
          >
            <CardContent>
              <StarRating rating={reviews[slide].rating} />
              <div className="mt-3">{reviews[slide].review}</div>
            </CardContent>
          </motion.div>
        </Card>

        <Button
          variant="default"
          size="icon"
          className="absolute -right-[3rem] hidden md:block rounded-full"
          onClick={() => {
            setSlide((slide + 1) % reviews.length);
          }}
        >
          <ChevronRight className="h-4 w-4 m-auto " color="white" />
        </Button>
        <Button
          variant="default"
          size="icon"
          className="md:absolute md:-left-[3rem] hidden md:block rounded-full"
          onClick={() => {
            setSlide(
              slide === 0
                ? reviews.length - 1
                : Math.abs(slide - 1) % reviews.length
            );
          }}
        >
          <ChevronLeft className="h-4 w-4 m-auto" color="white"/>
        </Button>
        
      </div>
      <div className="flex items-center justify-center gap-6 md:hidden">
        
      <Button
          variant="default"
          size="icon"
          className="rounded-full"
          onClick={() => {
            setSlide((slide + 1) % reviews.length);
          }}
        >
          <ChevronLeft className="h-4 w-4 " color="white"/>
        </Button>
        <Button
         variant="default"
          size="icon"
          className="rounded-full"
          onClick={() => {
            setSlide(
              slide === 0
                ? reviews.length - 1
                : Math.abs(slide - 1) % reviews.length
            );
          }}
        >
          <ChevronRight className="h-4 w-4" color="white"/>
        </Button>
      </div>
    </AnimatePresence>
  );
};

export default Slider;
