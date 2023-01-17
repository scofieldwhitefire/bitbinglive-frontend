import { useState } from "react";
import { Images } from "../assets/images";

const NoData = ({ b }) => {
  const [a] = useState(b);
  return (
    <>
      <div className="flex-col">
        <div className="flex items-center justify-center">
          <img className="w-[50%] h-[50%]" src={Images.empty} />
        </div>
        <p className="px-0 flex items-center justify-center">
          {a}
        </p>
      </div>
    </>
  );
};

export default NoData;
