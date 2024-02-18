import { useState } from "react";
import Product from "../components/Products";

const CartPage = () => {
    const [totalPrize, setTotalPrize] = useState(0);
    
    const [total, setTotal] = useState([]);
  // console.log(totalPrize);

  const handleTotalPrizeSum = (data, index) => {
      // console.log(data, index);
      const finalTotal = total;
      finalTotal[index] = data;
      setTotal(finalTotal)
      
    const totalSum = total.reduce((prev, current) => {
      return prev + current;
    }, 0);
    setTotalPrize(totalSum);
  };

  return (
    <div className="p-2 m-4">
      <div className="items-center">
        <Product
          index={0}
          image="https://5.imimg.com/data5/SELLER/Default/2023/11/357884102/OG/EF/KM/192116902/ganesh-storewell-plastic-spice-rack-set-of-8.jpg"
          title="Plastic Spice Rack"
          desc="A set of 8, Plastic rack , Corner box type"
          prize="350"
          setTotalPrize={handleTotalPrizeSum}
        />
        <Product
          index={1}
          image="https://lmsin.net/cdn-cgi/image/h=750,w=750,q=85,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/homecentre/1000012815162-1000012815161_01-2100.jpg"
          title="Aluminium Cookware Set"
          desc="5 pcs, Frying pan, Dosa Tawa and lid"
          prize="3750"
          setTotalPrize={handleTotalPrizeSum}
        />
        <Product
          index={2}
          image="https://nestasia.in/cdn/shop/products/nsa64dec21142.png?v=1640283985&width=600"
          title="Nitori Cooking Pot"
          desc="White and blue ceramic pot, 1.1 lit, With lid"
          prize="1250"
          setTotalPrize={handleTotalPrizeSum}
        />
        <Product
          index={3}
          image="https://m.media-amazon.com/images/I/81Kp3b8t8yS._AC_SL1500_.jpg"
          title="Dish Drying Rack"
          desc="2-Tier Rack,stainless steel, Utensils holder"
          prize="700"
          setTotalPrize={handleTotalPrizeSum}
        />
      </div>
      <div className="text-center mt-6 text-2xl flex items-center space-x-4 justify-around">
        <span className="text-center p-2 font-bold text-[#A53860]">
          Total Cost of the Product is :{" "}
          <span className="font-semibold text-black">₹ {totalPrize} /-</span>
        </span>
        <button
          type="submit"
          className="bg-[#450920] text-white p-2 text-lg rounded font-semibold font-raleway hover:cusror-pointer hover:bg-[#DA627D]"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
