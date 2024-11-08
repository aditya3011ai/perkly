import React from 'react'
import Product from '../../components/product/Product';
import Filter from '../../components/filter/Filter';

const page = () => {
  return (
    <div className="container">
        <Filter className="mt-6 p-9"/>
      <div className="content">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default page