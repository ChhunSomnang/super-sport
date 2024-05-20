import React from "react";

const Item = (props) => {
  return (
    <div>
      <div className="">
        <div className=" rounded-xl shadow-lg mx-4">
          <div className=" p-5 flex flex-col">
            <div className=" rounded-xl overflow-hidden max-w-xs max-h-xs">
              <img className="" src={props.Image} alt="" />
            </div>
            <h5 className="py-1.5">{props.Name}</h5>
            <p>{props.Price}$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
