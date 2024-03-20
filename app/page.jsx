import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_3/page";

export const metadata = {
  title: "Halo Holidays | Best All Inclusive Holiday Expers in UK",
  description: "Let Halo Holidays, your UK all-inclusive experts, plan your dream Holidays. Relax knowing everything is taken care of. Explore destinations and deals now.",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
