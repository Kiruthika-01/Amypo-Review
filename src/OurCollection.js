import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './OurCollection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomPrevArrow, CustomNextArrow } from './CustomArrow';

const OurCollection = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const images = [
    {
      src: "https://i.pinimg.com/736x/e4/61/38/e461384fa58e51024e8c197a81d4ad58.jpg",
      price: "Rs.49.99"
    },
    {
      src: "https://hiqualityfashion.com/cdn/shop/collections/cat-acc.jpg?v=1707288107&width=1024",
      price: "Rs.39.99"
    },
    {
      src: "https://images-cdn.ubuy.co.in/635217cf23b68769f930000f-off-the-shoulder-long-satin-prom-dresses.jpg",
      price: "Rs.59.99"
    },
    {
      src: "https://image.made-in-china.com/2f0j00EahovZDFrJpO/Wholesale-Promotion-High-Quality-Pearl-Headband-Knot-Headband-Hair-Accessories-Hair-Band-for-Woman-Girls.webp",
      price: "Rs.29.99"
    },
    {
      src: "https://imgmedia.lbb.in/media/2022/05/62945d4802b49762a359d8ae_1653890376928.jpg",
      price: "Rs.54.99"
    },
    {
      src: "https://images-cdn.ubuy.co.in/64ac863b38faf61c040680c7-20colors-high-quality-boutique-ribbon.jpg",
      price: "Rs.19.99"
    },
    {
      src: "https://media.istockphoto.com/id/1392077405/photo/female-handbags-on-rack-in-a-store.jpg?s=612x612&w=0&k=20&c=ngoZnqB6-7u3AP1UlbV9hbwXdNUkYiVIVEqQisUO5fQ=",
      price: "Rs.44.99"
    },
    {
      src: "https://m.media-amazon.com/images/I/61WVDdtZiTL._AC_UY1100_.jpg",
      price: "Rs.34.99"
    },
    {
      src: "https://i.pinimg.com/736x/8d/a7/68/8da76895643db663a5f8021e9d3e1395.jpg",
      price: "Rs.34.99"
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0049/3649/9315/files/koskii-lavender-stonework-net-designer-gown-gnrm0034431_lavender_1_4_large.jpg?v=1713960788",
      price: "Rs.34.99"
    },
    {
      src: "https://m.media-amazon.com/images/I/61B1t8HD-dL._AC_UF350,350_QL80_.jpg",
      price: "Rs.34.99"
    },
    {
      src: "https://www.ggstyle.in/cdn/shop/files/1658455094b39dd520678dedee1e1a75d607a1af62.jpg?v=1705760623",
      price: "Rs.34.99"
    },
    {
      src: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27215084/2024/1/29/6dee8e4d-eb62-4546-b780-f82ebc3bf2541706509072036SYGAGirlsTiara1.jpg",
      price: "Rs.34.99"
    },
    {
      src: "https://i.pinimg.com/736x/d4/ae/40/d4ae401371c3b2e6ad0d9146bdfc17b8.jpg",
      price: "Rs.34.99"
    },
    {
      src: "https://images.meesho.com/images/products/127704154/1mvxs_512.webp",
      price: "Rs.34.99"
    },
    {
      src: "https://clothsvilla.com/cdn/shop/products/ReadymadeNavyBluePrintedCrepeIndoWesternSkirtWithPinkCropTop_1_1024x1024@2x.jpg?v=1660656439",
      price: "Rs.34.99"
    },
    {
      src: "https://www.aishwaryadesignstudio.com/content/images/thumbs/0136840_flawless-multi-designer-indo-western-lehenga-choli-for-wedding-and-reception.jpeg",
      price: "Rs.34.99"
    },
  ];

  const handleBuyNow = () => {
    navigate('/payment-details');
  };

  return (
    <div className="collection-page">
      <h2>Our Collection</h2>
      <Slider {...settings} className="dress-images">
        {images.map((image, index) => (
          <div key={index} className="dress-card">
            <img
              src={image.src}
              alt={`Dress ${index + 1}`}
              className="dress-image"
            />
            <p className="dress-price">{image.price}</p>
            <button
              className="collectionbuy-now-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurCollection;
