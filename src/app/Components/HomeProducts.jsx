
import { Tabs } from 'antd';
import ProductCard from "./common/ProductCard";
import NewArrival from './NewArrival';
import BestSellers from './BestSellers';
import Featured from './Featured';

const HomeProducts = () => {





const items = [
  {
    key: '1',
    label: 'New Arrival',
    children: <NewArrival/>
  },
  {
    key: '2',
    label: 'Bestseller',
    children: <BestSellers/>,
  },
  {
    key: '3',
    label: 'Featured Products',
    children: <Featured/>,
  },
];


  return (
    <>
   
      <div className="container">
        <div className="text-[18px] text-secText font-medium flex items-center gap-8">
  
        </div>
        <div className="mt-8 ">
             <Tabs defaultActiveKey="1" items={items}  />
        </div>
      </div>
    </>
  );
};

export default HomeProducts;
