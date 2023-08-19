import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-[48px]  md:flex-row md:gap-[24px] xl:gap-[56px] capitalize font-400 text-18 tracking-[1.8px] md:text-14 md:tracking-[1.4px]">
      <Link href="#about" scroll={true}>
        About
      </Link>
      <Link href="#services" scroll={true}>
        Services
      </Link>
      <Link href="#career" scroll={true}>
        Career
      </Link>
      <Link href="#gallery" scroll={true}>
        Gallery
      </Link>
      <Link href="#contacts" scroll={true}>
        Contacts
      </Link>
    </nav>
  );
}
