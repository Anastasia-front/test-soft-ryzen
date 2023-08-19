import Section from "@/app/components/Section/Section";
import Image from "next/image";
import photo1 from "../../../../public/assets/content/section-3/desktop/1-2x.jpg";
import photo2 from "../../../../public/assets/content/section-3/desktop/2-2x.jpg";
import photo3 from "../../../../public/assets/content/section-3/desktop/3-2x.jpg";
import photo4 from "../../../../public/assets/content/section-3/desktop/4-2x.jpg";
import photo5 from "../../../../public/assets/content/section-3/desktop/5-2x.jpg";
import s from "./Slider.module.scss";
import { content } from "./content";

const photos = [photo1, photo2, photo3, photo4, photo5];

export default function TabletServices({ number }: { number: number }) {
  const src = photos[number];

  return (
    <Section className={s.bgOverlay}>
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex gap-[170px]">
          <h1 className="text-40 font-100 uppercase leading-[56px] tracking-[-1.6px] items-start">
            {content[number].titlePartThin}
            <span className="font-500">{content[number].titlePartTBold}</span>
          </h1>{" "}
          <p className=" self-right text-43 font-100 mr-[30px] relative">
            {content[number].currentNumber}
            <span className="text-light2">
              {content[number].amountOfSlides}
            </span>
          </p>
        </div>
        <div className="flex gap-[20px]">
          <Image
            src={src}
            alt={content[number].subtitle}
            width={463}
            height={370}
            layout="responsive"
          />
          <div className="flex flex-col items-end gap-[16px]">
            <ul className="flex flex-col gap-[16px] items-left uppercase text-22 text-light2 leading-[18px] max-w-[185px] sm:text-22 sm:leading-[26px] sm:max-w-[270px]">
              {content[number].activity.map((a) => {
                return (
                  <li
                    key={a.id}
                    className={
                      a.active
                        ? "font-500 flex gap-[8px] text-white"
                        : "font-200"
                    }
                  >
                    {a.active && (
                      <Image
                        src="/rhombus.svg"
                        alt="rhombus"
                        width={6}
                        height={6}
                      />
                    )}
                    {a.name}
                  </li>
                );
              })}
            </ul>
            <p className="self-right text-12 font-200 leading-[24px] tracking-[2.4px] sm:text-14">
              {content[number].subtitle}
            </p>
            <h6 className="text-14 font-200 leading-[20px] max-w-[500px] sm:text-18">
              {content[number].description}
            </h6>
          </div>
        </div>
      </div>
    </Section>
  );
}
