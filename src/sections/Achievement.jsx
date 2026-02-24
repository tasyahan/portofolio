import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { certificates } from "../constants";
const firstRow = certificates.slice(0, certificates.length / 2);
const secondRow = certificates.slice(certificates.length / 2);

const ReviewCard = ({ img, title, description }) => {
  return (
    <figure
      className={twMerge(
        "relative w-72 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-midnight to-violet-950 p-4 hover:scale-105 transition-transform duration-300"
      )}
    >
      <div className="w-full h-40 overflow-hidden rounded-lg mb-4 bg-white/10">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm text-white/70 leading-relaxed">
       {title}
      </p>
      <figcaption className="font-semibold text-white mb-2">
         {description}
      </figcaption>
    </figure>
  );
};

export default function Achievement() {
  return (
    <div className="items-start my-25 md:my-35 c-space" id="achievement">
      <h2 className="text-heading">Achievements</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((certicate) => (
            <ReviewCard key={certicate.username} {...certicate} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((certicate) => (
            <ReviewCard key={certicate.username} {...certicate} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
