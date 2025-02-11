"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically load motion components from Framer Motion
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import("framer-motion").then(mod => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import("framer-motion").then(mod => mod.motion.p), { ssr: false });

export default function Home() {
  return (
    <main className="p-8 bg-orange-100 flex flex-col lg:flex-row items-center justify-center min-h-screen">
      {/* Description Section */}
      <MotionDiv
        className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <MotionH1
          className="font-extrabold text-yellow-600 text-4xl md:text-5xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Furniture
        </MotionH1>
        <MotionP
          className="font-semibold text-yellow-600 text-2xl mt-2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Landing Page
        </MotionP>
        <MotionP
          className="font-light text-yellow-600 mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Launching in the summer of 2003 in a small workshop with a team of 4,
          <br /> House of Zunn has evolved continuously and come very far from its humble beginnings.
        </MotionP>
        <MotionP
          className="font-light text-yellow-600 mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          Today the company is a brand synonymous with luxury, class, and quality.
          From creating large-scale turnkey solutions for corporate clients to providing 
          the perfect armchair for a living room, the company has worked on projects of all sizes.
        </MotionP>
        <MotionP
          className="font-light text-yellow-600 mt-4 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          It&apos;s a great company!
        </MotionP>
      </MotionDiv>

      {/* Image Section */}
      <MotionDiv
        className="lg:w-1/2 flex justify-center overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <MotionDiv className="relative transition-transform duration-500 hover:scale-105">
          <Image
            src="/theme.avif" 
            alt="Furniture"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="lg:w-1 overflow-hidden mt-4">
            <section className="relative">
              <Image 
                src="/dinign.avif"
                alt="Discover"
                width={300}
                height={300}
                className="rounded-full shadow-lg"
              />
            </section>
          </div>
        </MotionDiv>
      </MotionDiv>
    </main>
  );
}
