import Slideshow from "../components/elements/Slideshow";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeCompare, faHeart, faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function Modal() {
    const [count,setCount]=useState(0)

    function decrementCount (){
        if (count === 0){
            return 0
        } else{
            setCount(prevCount => prevCount-1)
        }

    }

    function addCount (){
        setCount(prevCount => prevCount+1)
    }
    return(
          <>
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                   aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                          <div className="modal-body d-flex row">
                              <div className='col-6 mt-3'>
                                  <Slideshow/>
                              </div>
                              <div className="header-container col-5">
                                  <h1 className='mt-3'>iPhone 11</h1>
                                  <h1 className='mt-3 price'>Ksh 72,000</h1>
                                  <h5 className='mt-3 mb-4'>Key Features:</h5>
                                  <ul>
                                      <li>11.94 cm (4.7”) Retina HD</li>
                                      <li>128GB ROM | iOS 15</li>
                                      <li>Apple, A15 Bionic Chip, Hexa Core</li>
                                      <li>12MP Rear camera | 7MP Front Camera</li>
                                      <li>Built-in Rechargeable Lithium‑ion Battery</li>
                                      <li>Touch ID Fingerprint Sensor | Barometer | Three‑axis Gyro | Accelerometer | Proximity Sensor | Ambient Light Sensor</li>
                                  </ul>
                                  <div className='d-flex mt-4'><h6 className='me-4'>Capacity: </h6> <h6 className='me-2'>64GB</h6> <h6 className='me-2'><span>128GB</span></h6></div>
                                  <div className='d-flex mt-4 align-items-center'>
                                      <h6 className='me-4'>Color:</h6>
                                      <div className='div-colors red me-2'></div>
                                      <div className='div-colors yellow me-2'></div>
                                      <div className='div-colors blue me-2'></div>
                                      <div className='div-colors green me-2'></div>
                                      <div className='div-colors purple me-2'></div>
                                  </div>
                                  <div className='mt-4 d-flex'>
                                      <div className="no-items">
                                          <div className="minus text-black-50" onClick={decrementCount}>
                                              <FontAwesomeIcon icon={faMinus} aria-hidden='minus' className='icon-symbols'/>
                                          </div>
                                          <div className='text-black-50'>
                                              <p1 className="icon-no">{count}</p1>
                                          </div>
                                          <div className="add text-black-50" onClick={addCount}>
                                              <FontAwesomeIcon icon={faPlus} aria-hidden='plus' className='icon-symbols'/>
                                          </div>
                                      </div>
                                      <button className="btn btn-primary me-2" type="submit">ADD TO CART</button>
                                      <button type="button" className="btn btn-success">ORDER ON WHATSAPP</button>
                                  </div>
                                  <div className='d-flex mt-4'>
                                      <p className='me-3'><FontAwesomeIcon icon={faCodeCompare} aria-hidden='compare icon' className='me-1' />Compare</p>
                                      <p><FontAwesomeIcon icon={faHeart} className='me-1'/>Add to Wishlist</p>
                                  </div>
                                  <hr className='description-hr'/>
                                  <div>
                                      <h6 className='mb-3'>SKU:<span>     iphone-11</span></h6>
                                      <h6 className='mb-3'>Category:<span>     iPhone</span></h6>
                                      <h6 className='mb-3'>Tags:<span>     iPhone 11, iPhones</span></h6>
                                      <h6 className='mb-3'>Share:<span>     iphone-11</span></h6>
                                  </div>
                              </div>
                              <button type="button" className="btn-close col-1" data-bs-dismiss="modal"
                                      aria-label="Close"></button>
                          </div>
                      </div>
                  </div>
              </div>
          </>
    )
}

export default Modal