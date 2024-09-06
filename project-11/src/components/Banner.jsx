import React from 'react';

const BannerData = [
  {
    image_path: "/images/img1.png",
    title: "Discount Voucher",
    content: "Quisque velit nisi, pretium ut lacinia in df fasf",
  },
  {
    image_path: "/images/img2.png",
    title: "Fresh Healthy Food",
    content: "Quisque velit nisi, pretium ut lacinia in df fasf",
  },
  {
    image_path: "/images/img3.png",
    title: "Fast Home Delivery",
    content: "Quisque velit nisi, pretium ut lacinia in df fasf",
  },
];

const Banner = () => {
  return (
    <div className="banner_container">
      {BannerData.map((value, index) => (
        <div key={index} className="banner_div">
          <img src={value.image_path} alt={value.title} />
          <div className='banner_info'>
            <h3>{value.title}</h3>
            <p>{value.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
