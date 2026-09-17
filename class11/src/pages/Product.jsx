import React from 'react'

const Product = () => {
  return (
    <div>
      <h1 className="text-3xl underline font-bold fixed left-[50vw] -translate-x-1/2">
        Product Page
      </h1>
      <div>
        <Link className='text-xl font-semibold underline'to="/product/mens">Men's Collection</Link>
        <Link className='text-xl font-semibold underline'to="/product/womens">Women's Collection</Link>
      </div>
    </div>
  );
}

export default Product