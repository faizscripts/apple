function ProductItem({img,category,price,productName,options,colors}) {
    function renderOptions() {
        if (options){
            return(
                <div className='product-size'>
                    <h5>38MM</h5>
                    <h5>42MM</h5>
                </div>
            )
        } else {
            return null
        }
    }

    function renderedColor() {
        if (colors){
            return  (
                <div className='d-flex justify-content-center mt-2'>
                    <div className='div-colors red me-2'></div>
                    <div className='div-colors yellow me-2'></div>
                    <div className='div-colors blue me-2'></div>
                    <div className='div-colors green me-2'></div>
                    <div className='div-colors purple me-2'></div>
                </div>
            )
        } else {
            return null
        }
    }


  return(
      <div className='d-flex mt-4 me-5'>
          {renderOptions()}
          <div className='products-container'>
              <img src={`./images/products/${img}`} alt="" className='product-image'/>
              {renderedColor()}
              <div className='d-flex justify-content-center products-description'>
                  <div><h3 className='product-header mt-2 text-center'>{productName}</h3></div>
                  <div><span className='product-name mt-2'>{category}</span></div>
                  <div><p className='price mt-2'>Ksh {price}</p></div>
              </div>
          </div>
      </div>
  )
}

export default ProductItem