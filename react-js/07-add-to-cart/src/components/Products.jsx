import { useState } from "react";

const Product = ({ index, image, title, desc, prize,setTotalPrize }) => {
  const [value, setValue] = useState(0);
  // console.log(value,setValue);

  const increment = () => {
      setValue(value + 1);
      setTotalPrize((value+1)*prize, index)
  };
  const decrement = () => {
      setValue(value - 1);
      setTotalPrize((value-1)*prize, index)
  };

  return (
    <div>
      <div className="p-4 max-w-6xl mx-auto m-4 bg-[#A53860] rounded ">
        <div className="flex items-center gap-x-8 justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <img src={image} alt="spice-rack" className="rounded w-40 h-40" />
            </div>
            <div className="flex-col space-y-2 items-center text-white">
              <h4 className="text-3xl font-bold font-raleway">{title}</h4>
              <p className="text-xl italic font-lighter">{desc}</p>
              <span className="pt-2 text-4xl text-[#F9DBBD] font-bold">
                ₹ {prize}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-lg">
            <span
              className="bg-[#FFA5AB] p-2 rounded font-bold hover:cursor-pointer"
              onClick={decrement}
            >
              -
            </span>
            <span className="font-bold">{value}</span>
            <span
              className="bg-[#FFA5AB] p-2 rounded font-bold hover:cursor-pointer"
              onClick={increment}
            >
              +
            </span>
          </div>
        </div>
        <span className="text-lg text-white font-bold font-raleway">
          Total Cost is : {value * prize}
        </span>
      </div>
    </div>
  );
};

export default Product;
