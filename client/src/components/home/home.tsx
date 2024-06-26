"use client";
import * as React from "react";
import Image from "next/image";
import "./homeElement.css"; // Assuming this contains additional styles
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatButton from "@/components/floatButton/floatButton";

const HomeElement = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const c1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const c2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  return (
    <>
      {" "}
      <div className="relative  bg-black h-[68vh] md:h-[88vh] flex flex-col 2xl:pt-20 pt-10 items-center background overflow-hidden">
        <div className="span1"></div>
        <div className="span1"></div>
        <div className="w-full flex flex-col gap-5 md:justify-between h-full">
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="2xl:w-64  w-44">
              <Image
                src="https://res.cloudinary.com/diftttclq/image/upload/v1717162783/Satvika/snndj1det2wddfnomsy6.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </div>

            <div className="md:w-40 w-40">
              <Image
                src="https://res.cloudinary.com/diftttclq/image/upload/v1717176531/Satvika/Lifeamongst_mpiczf.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt="lifeamongst"
              />
            </div>
          </div>
          <span
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <FloatButton />
          </span>
          <div className="w-full md:pb-4 pt-12 -z-1">
            <motion.div
              ref={ref}
              className="container md:w-[100%] w-full md:pb-7 pb-3 opacity-75"
              style={{ translateX: x }}
            >
              <Image
                src="https://res.cloudinary.com/diftttclq/image/upload/v1717163438/Satvika/sATVIkA_kdfo5n.svg"
                width={0}
                height={0}
                className="w-full h-full"
                alt=""
              />
            </motion.div>
            <motion.div
              ref={ref}
              className="container md:w-[95%] w-full"
              style={{ translateX: y }}
            >
              <Image
                src="https://res.cloudinary.com/diftttclq/image/upload/v1717163438/Satvika/sATVIkA_kdfo5n.svg"
                width={0}
                height={0}
                className="w-full h-full pb-7 opacity-50"
                alt=""
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute  bottom-0  w-full overflow-hidden">
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717174024/Satvika/main1_hek8th.png"
            alt="P111"
            className="mx-auto 2xl:w-[720px] xl:w-[520px] w-[600px]"
          />
        </div>
        <motion.div
          className="absolute hidden md:block md:-bottom-12 2xl:-bottom-20 left-0 w-2/3  overflow-hidden"
          style={{ translateX: c1 }}
          ref={ref}
        >
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173764/Satvika/cloud_wjyqsj.png"
            className="w-[400px] xl:w-[300px] 2xl:w-[400px] m-auto"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-44 md:block md:bottom-28 right-0 md:w-2/3 w-1/3  overflow-hidden"
          style={{ translateX: c2 }}
          ref={ref}
        >
          <img
            src="https://res.cloudinary.com/diftttclq/image/upload/v1717173764/Satvika/cloud_wjyqsj.png"
            className="w-[400px] xl:w-[300px] 2xl:w-[400px] m-auto"
          />
        </motion.div>
      </div>
    </>
  );
};

export default HomeElement;
