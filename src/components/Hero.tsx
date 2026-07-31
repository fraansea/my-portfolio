import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { getHeroCarouselImages } from "@/lib/adminStorage";
import { StoredImage } from "./StoredImage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Download, Eye } from "lucide-react";

const DEFAULT_CAROUSEL_IMAGES = ["/one.png", "/two.png", "/three.png"];
const RESUME_PATH = "/Francis Gigi Resume.pdf";
const RESUME_FILENAME = "Francis-Gigi-Resume.pdf";

export const Hero: React.FC = () => {
  const [carouselImages, setCarouselImages] = useState<string[]>(() =>
    getHeroCarouselImages().length > 0 ? getHeroCarouselImages() : DEFAULT_CAROUSEL_IMAGES
  );

  useEffect(() => {
    const sync = () => {
      const stored = getHeroCarouselImages();
      setCarouselImages(stored.length > 0 ? stored : DEFAULT_CAROUSEL_IMAGES);
    };
    window.addEventListener("storage", sync);
    window.addEventListener("hero-carousel-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("hero-carousel-updated", sync);
    };
  }, []);
  return (
    <section
      className="flex w-full flex-col items-center px-4 text-center max-md:items-center max-md:text-center sm:px-8 md:px-12"
      data-aos="fade-up"
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/75b8460b6ce84d6296a26b9d9db8bac5/b284fec22e4056f40d299282ece95dba8a6e297f?placeholderIfAbsent=true"
        alt="Francis Gigi profile"
        className="mt-8 aspect-[1] w-[90px] max-w-full rounded-full object-contain sm:mt-[65px] sm:w-[100px]"
      />
      <h1 className="mt-6 max-w-xs font-manrope text-[2.1rem] font-extrabold leading-tight tracking-tight text-black sm:mt-8 sm:max-w-full sm:text-[42px]">
        Hey, I'm Francis.
        <br />
        Product Designer
      </h1>
      <p className="mt-4 max-w-xs font-manrope text-base font-normal leading-snug tracking-wide text-zinc-600 sm:mt-5 sm:max-w-full sm:text-lg md:w-1/2">
        Crafting seamless experiences and bold visuals. College student by day,
        creative thinker, and aspiring innovator by night.
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="mt-8 w-full max-w-xs rounded-2xl bg-black px-8 py-4 font-manrope text-lg font-medium text-white transition-colors hover:bg-zinc-800 sm:mt-[26px] sm:max-w-fit"
          >
            Download Me
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="min-w-[180px]">
          <DropdownMenuItem
            onClick={() => window.open(RESUME_PATH, "_blank", "noopener,noreferrer")}
          >
            <Eye className="mr-2 h-4 w-4" />
            View Resume
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href={RESUME_PATH} download={RESUME_FILENAME}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="mt-5 flex w-full items-center justify-center sm:mt-4">
        <div className="flex w-full max-w-xs items-center gap-2 rounded-full bg-green-100 px-6 py-3 font-manrope text-base font-medium text-green-700 sm:max-w-fit">
          <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
          <span>Available for new project</span>
        </div>
      </div>
      {/* Carousel for project containers */}
      <div className="mt-16 w-full max-w-6xl">
        {(() => {
          const carouselOptions = { loop: true };
          const autoScrollPlugin = React.useRef(
            AutoScroll({
              speed: 2, // Adjust for desired smoothness
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ).current;
          return (
            <Carousel
              opts={carouselOptions}
              plugins={[autoScrollPlugin]}
              className="mx-auto"
            >
              <CarouselContent>
                {carouselImages.map((src, i) => (
                  <CarouselItem
                    key={i}
                    className="flex min-w-[350px] max-w-[420px] justify-center px-2"
                  >
                    <div
                      className="flex items-center justify-center overflow-hidden rounded-[20px] border border-solid border-[rgba(242,242,242,1)] bg-neutral-50 p-4"
                      style={{
                        width: 350,
                        height: 220,
                        minWidth: 350,
                        minHeight: 220,
                      }}
                    >
                      <StoredImage
                        src={src}
                        alt={`Project ${i + 1}`}
                        className="h-full w-full rounded-[16px] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          );
        })()}
      </div>
    </section>
  );
};
