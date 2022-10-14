import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons/faHeart";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {useRef,useState} from "react";
import QuickView from "../pages/QuickView";
import Modal from "./Modal";

function ProductItem({img,category,price,productName,options,colors,icons}) {
    const showIconRef=useRef(null)
    const showIconTextRef=useRef(null)
    const [cartColor,setCartColor]=useState(false)
    const [heartColor,setHeartColor]=useState(false)

    function showIcon() {
        showIconRef.current.focus()
        showIconRef.current.classList.add('show-icon')
    }

    function hideIcon() {
        showIconRef.current.focus()
        showIconRef.current.classList.remove('show-icon')
    }

    function showIconText() {
        showIconTextRef.current.focus()
        showIconTextRef.current.classList.add('p-tag')
    }

    function hideIconText() {
        showIconTextRef.current.focus()
        showIconTextRef.current.classList.remove('p-tag')
    }

    function changeCartIcon() {
       setCartColor(!cartColor)
    }

    function changeHeartIcon() {
        setHeartColor(!heartColor)
    }



    function renderOptions() {
        if (options){
            return(
                <div className='product-size'>
                    {loopOptions()}
                </div>
            )
        } else {
            return null
        }
    }

    function loopOptions() {
            return options.map(
                option=>{
                    return(
                        <h5 key={option}>{option}</h5>
                        )
                }
            )
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

    // function renderedIcons


  return(
      <div className='d-flex mt-4 main-product-container' onMouseOver={showIcon} onMouseLeave={hideIcon}>
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
          <div className='hover-container' ref={showIconRef}>
              <i onClick={changeHeartIcon} className={heartColor?'icon-color':''} >
                  <div className='d-flex'>
                      <FontAwesomeIcon icon={faHeart} className='heart-icon mt-2'/>
                      <p className='add-to-wishlist-text p-tag' ref={showIconTextRef}>Add to Wishlist</p>
                  </div>
              </i>
              <i onClick={changeCartIcon} className={cartColor?'icon-color':''}>
                  <FontAwesomeIcon icon={faShoppingCart} className='mt-3'/>
                  <p className='add-to-cart-text p-tag'  ref={showIconTextRef}>Add to Cart</p>
              </i>
              <QuickView>
                  <Modal/>
              </QuickView>
          </div>
      </div>
  )
}

export default ProductItem