import { Tabs } from "antd";
import NewArrival from "./NewArrival";
import BestSellers from "./BestSellers";
import Featured from "./Featured";

const HomeProducts = () => {
  const items = [
    {
      key: "1",
      label: "New Arrival",
      children: <NewArrival />,
    },
    {
      key: "2",
      label: "Bestseller",
      children: <BestSellers />,
    },
    {
      key: "3",
      label: "Featured Products",
      children: <Featured />,
    },
  ];

  return (
    <>
      <section className="px-4 lg:px-0">
        <div className="container">
          <div className="text-[18px] text-secText font-medium flex items-center active:text-black gap-4 lg:gap-8">
            <Tabs defaultActiveKey="1" items={items} tabBarGutter={32} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProducts;
