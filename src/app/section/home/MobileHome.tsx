import ButtonJoinNow from "@/app/components/ButtonJoinNow/ButtonJoinNow";

export default function MobileHome() {
  return (
    <div className="flex flex-col gap-[24px] pt-[50px] items-center">
      <div className="text-37 uppercase self-end">
        <p className="font-100 tracking-[1.66px]">
          <span className="font-500">7</span>
          days
        </p>
        <p className="text-12 font-300 tracking-[9.48px] mt-[-10px]">journey</p>
      </div>
      <h1 className="uppercase self-start text-40 font-100 leading-[56px] tracking-[-1.6px] w-[280px] sm:text-center sm:self-center ">
        <span className="font-500">Uncover</span> Carpathian’s Secrets
      </h1>
      <h6 className="font-200 text-10 leading-[16px] w-[157px] self-start sm:self-center xl:self-end">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </h6>
      <h4 className="font-200 text-14 leading-[20px] max-w-[345px] sm:text-center">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </h4>
      <ButtonJoinNow />
    </div>
  );
}
