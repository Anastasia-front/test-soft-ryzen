import { useScreenQuery } from "@/app/hooks/useScreenQuery";
import DesktopServices from "./DesktopServices";
import MobileServices from "./MobileServices";
import TabletServices from "./TabletServices";

export default function Slide({ number }: { number: number }) {
  const { isScreenTabletSm, isScreenTabletXl } = useScreenQuery();
  return isScreenTabletXl ? (
    <DesktopServices number={number} />
  ) : isScreenTabletSm ? (
    <TabletServices number={number} />
  ) : (
    <MobileServices number={number} />
  );
}
