import React from "react";
import "./home.scss";
import Slider from "../../components/slider/Slider";
import HomeInfoBox from "./HomeInfoBox";
import { productData } from "../../components/carousel/data";
import Carousel from "react-multi-carousel";
import ProductCarouselItem from "../../components/carousel/ProductCarouselItem";
import ProductCarousel from "../../components/carousel/ProductCarousel";
import ProductCategory from "../../components/productCategory/ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";

const PageHeading = ({ heading, btnText }) => {
    return (
        <>
            <div className="--flex-between">
                <h2 className="--fw-thin">{heading}</h2>
                <button className="--btn">
                    {btnText}
                </button>
            </div>
            <div className="--hr"></div>
        </>
    )
};

export default function Home() {
    const pData = productData.map((item) => (
        <div key={item.id}>
            <ProductCarouselItem
                name={item.name}
                url={item.imageurl}
                price={item.price}
                description={item.description}
            />
        </div>
    ));

    return (
        <>
            <Slider />
            <section>
                <div className="container">
                    <HomeInfoBox />
                    <PageHeading heading={"Latest Products"} btnText={"Shop Now >"} />
                    <ProductCarousel products={pData} />
                </div>
            </section>

            <section className="--bg-grey">
                <div className="container">
                    <h3>Categories</h3>
                    <ProductCategory />
                </div>
            </section>

            <section>
                <div className="container">
                    <PageHeading heading={"Mobile Phones"} btnText={"Shop Now >"} />
                    <ProductCarousel products={pData} />
                </div>
            </section>
            <FooterLinks />
        </>
    );
};
