"use client"
import MainBanner from "@/components/MainBanner";
import Specializations from "@/components/Specializations";
import Testimonials from "@/components/Testimonials";


const Home = () => {
  return (
    <div className="h-full">
      <MainBanner />
      <Specializations />
      <Testimonials />
    </div>
  );
};

export default Home;
