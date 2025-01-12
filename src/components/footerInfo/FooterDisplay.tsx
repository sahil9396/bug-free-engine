import { coinType } from "@/types/data";
import FooterSlider from "./FooterSlider";

const FooterDisplay = ({
  title,
  coins,
  ComponentToUse,
}: {
  title: string;
  coins: coinType[];
  ComponentToUse: React.FC<{
    coin: coinType;
  }>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <FooterSlider>
        {coins.map((coin, index) => (
          <ComponentToUse key={index} coin={coin} />
        ))}
      </FooterSlider>
    </div>
  );
};

export default FooterDisplay;
