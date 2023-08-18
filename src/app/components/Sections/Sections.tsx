import About from "@/app/section/about/page";
import Career from "@/app/section/career/page";
import Contacts from "@/app/section/contacts/page";
import Gallery from "@/app/section/gallery/page";
import Home from "@/app/section/home/page";
import Services from "@/app/section/services/page";

export default function Sections() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contacts />
    </>
  );
}
