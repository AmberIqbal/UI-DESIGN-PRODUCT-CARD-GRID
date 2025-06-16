import React from "react";
import teeshirt from "../Assets/Images/6901_7.jpg";
import hoodie from "../Assets/Images/s24_99_a03_119318_32162_off_a.avif";
import rainbowShirt from "../Assets/Images/6bc56400c7025c004d0a16431a7d9dc8.jpg";
import og from "../Assets/Images/kinda.png";
import pastelCrop from "../Assets/Images/pastel-color-heart-buttons-crop-top-_7.webp";
import lilDino from "../Assets/Images/dino mu.png";
const products = [
  {
    id: 1,
    title: "Classic Comfort Tee",
    price: "$24.99",
    description:
      "Soft cotton t-shirt with a relaxed fit – perfect for everyday wear.",
    image: teeshirt,
  },
  {
    id: 2,
    title: "Minimalist Hoodie",
    price: "$39.99",
    description: "Cozy fleece hoodie with clean lines and subtle branding.",
    image: hoodie,
  },
  {
    id: 3,
    title: "Kids' Rainbow Tee",
    price: "$19.99",
    description: "Bright and fun rainbow print t-shirt for toddlers and kids.",
    image: rainbowShirt,
  },
  {
    id: 4,
    title: "OG Savage Tee",
    price: "$27.50",
    description:
      "Black and white striped tee with 'OG Kinda Sweet Kinda Savage' text and floral touch.",
    image: og,
  },
  {
    id: 5,
    title: "Pastel Crop Top",
    price: "$22.00",
    description:
      "Trendy pastel crop top – pairs perfectly with high-waisted jeans.",
    image: pastelCrop,
  },
  {
    id: 6,
    title: "CozyWares Baby Bodysuit",
    price: "$18.00",
    description:
      "Super-soft baby bodysuit with playful text and adorable colors.",
    image: lilDino,
  },
];
export default products;
