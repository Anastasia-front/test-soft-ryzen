"use client";

import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import Image from "next/image";
import Link from "next/link";

export default function ButtonJoinNow() {
  const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();

  return isScreenTabletXl ? (
    <Link
      className="uppercase font-700 text-32 leading-[48px] py-[16px] px-[64px]  h-[71px]  flex items-center justify-center bg-light1 relative"
      href="#contacts"
    >
      <Image
        className="absolute top-0 left-0"
        src="/svg/buttonJoinNow/desktop-left.svg"
        alt="desktop left part of border"
        width={44}
        height={71}
      />
      join now
      <Image
        className="absolute top-0 right-0"
        src="/svg/buttonJoinNow/desktop-right.svg"
        alt="desktop right part of border"
        width={44}
        height={71}
      />
    </Link>
  ) : isScreenTabletSm ? (
    <Link
      className="uppercase font-700 text-18 leading-[48px] py-[16px] px-[64px] h-[53px] flex items-center justify-center bg-light1 relative"
      href="#contacts"
    >
      <Image
        className="absolute top-0 left-0"
        src="/svg/buttonJoinNow/tablet-left.svg"
        alt="tablet left part of border"
        width={35}
        height={50}
      />
      join now
      <Image
        className="absolute top-0 right-0"
        src="/svg/buttonJoinNow/tablet-right.svg"
        alt="tablet right part of border"
        width={35}
        height={50}
      />
    </Link>
  ) : (
    <Link
      className="uppercase font-700 text-18 leading-[48px] py-[16px] px-[64px]  h-[53px] flex items-center justify-center bg-light1 relative"
      href="#contacts"
    >
      <Image
        className="absolute top-0 left-0"
        src="/svg/buttonJoinNow/mobile-left.svg"
        alt="mobile left part of border"
        width={42}
        height={53}
      />
      join now
      <Image
        className="absolute top-0 right-0"
        src="/svg/buttonJoinNow/mobile-right.svg"
        alt="mobile right part of border"
        width={42}
        height={53}
      />
    </Link>
  );
}
