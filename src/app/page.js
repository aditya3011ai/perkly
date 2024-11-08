import MainCarousel from "../components/mainCarousel/MainCarousel";

import Product from "../components/product/Product";
import SectionHeading from './../components/SectionHeading/sectionHeading';
export default function Home() {
  return (
    <>
      <div className="container">
          <div className="mt-8">
            <MainCarousel />
          </div>
        <section className="mt-8">
        <SectionHeading category={"Mobiles"}/>
        <div className="content">       
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        </section>
        <section className="mt-8">
        <SectionHeading category={"Fashion"}/>
        <div className="content">       
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        </section>
        <section className="mt-8">
        <SectionHeading category={"Laptops"}/>
        <div className="content">       
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        </section>
      </div>
    </>
  );
}
