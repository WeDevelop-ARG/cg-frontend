import React from 'react';

import './Landing.scss';

// components
import ProductCard from '../../components/ProductCard';

// TODO this must come from a service
const productData = [
  {
    id: 1,
    productPicture: 'https://www.adidas.co.th/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw456a9333/zoom/F36218_01_standard.jpg',
    marketPrice: 60,
    price: 20,
    totalSales: 15,
    totalSold: 7,
  },
  {
    id: 2,
    productPicture: 'https://contents.mediadecathlon.com/p1419921/k$72b461620e3e5ec61db942355362dd66/8486177.jpg?&f=x',
    marketPrice: 70,
    price: 50,
    totalSales: 40,
    totalSold: 1,
  },
  {
    id: 3,
    productPicture: 'https://i.pinimg.com/474x/b3/22/97/b3229725489aaf407bbf1c01dc862892.jpg',
    marketPrice: 55,
    price: 30,
    totalSales: 11,
    totalSold: 5,
  },
  {
    id: 4,
    productPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCk6-j9uPgIxe5-ih6xwvAm994HqnCGUtNpd8gE8oRRsH_gmbu',
    marketPrice: 11,
    price: 3,
    totalSales: 30,
    totalSold: 13,
  },
  {
    id: 5,
    productPicture: 'https://www.tylt.com/media/catalog/product/cache/1/base_image/650x/9df78eab33525d08d6e5fb8d27136e95/b/a/xbackpack-c-02_new.jpg.pagespeed.ic.Eo7ca6f4RU.jpg',
    marketPrice: 55,
    price: 20,
    totalSales: 30,
    totalSold: 5,
  },
  {
    id: 6,
    productPicture: 'https://cdn.shopify.com/s/files/1/0745/1299/products/20190702_Nomatic_S_TP_AngleFront_1024x1024.jpg?v=1566322412',
    marketPrice: 70,
    price: 25,
    totalSales: 40,
    totalSold: 33,
  },
  {
    id: 7,
    productPicture: 'https://images-na.ssl-images-amazon.com/images/I/71o9N5l7aXL._AC_SX522_.jpg',
    marketPrice: 66,
    price: 21,
    totalSales: 39,
    totalSold: 2,
  },
  {
    id: 8,
    productPicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzkj1k3DL9uls2-1FjETp2X2digd0-nmN_xVnKxv7x4Vbvytxg',
    marketPrice: 7,
    price: 3,
    totalSales: 8,
    totalSold: 1,
  },
  {
    id: 9,
    productPicture: 'https://www.ttstoreusa.com/wp-content/uploads/2019/01/KB-LVT-SSBRUS-01_4275c12f818545f8989ae8698ff53db7.jpg',
    marketPrice: 30,
    price: 10,
    totalSales: 28,
    totalSold: 10,
  },
];

const Landing = () => {
  return (
    <div className="Landing">
      <h1>Product List</h1>
      <div class="Landing__main-container">
        {
          productData.map((product) => (
            <ProductCard
              key={product.id}
              productPicture={product.productPicture}
              marketPrice={product.marketPrice}
              price={product.price}
              totalSales={product.totalSales}
              totalSold={product.totalSold}
            />
          ))
        }
      </div>
      <div className="Landing__wantsales">
        <button type="button" name="want-sales">
          Quiero vender
        </button>
      </div>
    </div>
  );
}

export default Landing;
