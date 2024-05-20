import React from 'react'
import all_product from "./Assets/all_product";
import Item from "./Item";

const PopularProduct = () => {
  return (
    <div className="flex justify-center mt-14">
    <div>
      <h1 className="text-6xl text-center my-5">Popular Product</h1>
      <div className=" grid grid-cols-4 gap-10">
        {all_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            Name={item.Name}
            Image={item.Image}
            Price={item.Price}
          />
        ))}
        </div>
      </div>
    </div>
  )
}

export default PopularProduct