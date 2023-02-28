import React, { FC, useEffect, useId, useRef } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardNFTVideo from "./CardNFTVideo";
import { Link } from "react-router-dom";

export interface SectionSliderCardNftVideoProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
}

const SectionSliderCardNftVideo: FC<SectionSliderCardNftVideoProps> = ({
  className = "",
  itemClassName = "",
}) => {
  const sliderRef = useRef(null);
  const id = useId();
  const UNIQUE_CLASS = "glidejs" + id.replace(/:/g, "_");

  useEffect(() => {
    if (!sliderRef.current) {
      return;
    }

    const OPTIONS: Glide.Options = {
      perView: 3,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          gap: 28,
          perView: 2.5,
        },
        1024: {
          gap: 20,
          perView: 2.3,
        },
        768: {
          gap: 20,
          perView: 1.5,
        },
        500: {
          gap: 20,
          perView: 1,
        },
      },
    };

    let slider = new Glide(`.${UNIQUE_CLASS}`, OPTIONS);
    slider.mount();
    // @ts-ignore
    return () => slider.destroy();
  }, [sliderRef, UNIQUE_CLASS]);

  return (
    <div className={`nc-SectionSliderCardNftVideo ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`} ref={sliderRef}>
        <Heading desc="Cliquez sur l'icône de lecture et profitez de la vidéo NTFs." hasNextPrev>
          Explorez Les NFTs Video
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {[
              "https://www.map24.com/wp-content/uploads/2022/05/Lacrim.png",
              "https://www.map24.com/wp-content/uploads/2022/05/Lino.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Niska.webp",
              "https://www.map24.com/wp-content/uploads/2022/05/Orelsan.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/SCH.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Nekfeu.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Ninho.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Soprano.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Booba.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/MC-Soldar.jpeg",
              "https://www.map24.com/wp-content/uploads/2022/05/JulJul.jpg",
              "https://www.map24.com/wp-content/uploads/2022/05/Kery-James.jpg",
            ].map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                <CardNFTVideo featuredImage={item} />
              </li>
            ))}
            <li className={`glide__slide  ${itemClassName}`}>
              <Link to={"/page-search"} className="block relative group">
                <div className="flex aspect-w-16 aspect-h-9 w-full h-0 rounded-3xl bg-neutral-100 dark:bg-neutral-800"></div>
                <div className="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center relative">
                    <span className="text-xl font-semibold">NFTs Video</span>
                    <svg
                      className="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 20.4999V3.66992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm mt-1">Show me more</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCardNftVideo;
