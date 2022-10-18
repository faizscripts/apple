function Edit() {
   return(
       <div id="add-product" className="container card mt-3 mb-5">
           <div className="card-header">
               Product Information
           </div>
           <div className="card-body">
               <form id="editProductsForm" method="POST" encType="multipart/form-data">

                   <div className="mb-3 form-group">
                       <label htmlFor="product_name" className="form-label">Product Name</label>
                       <input name="product_name" value="${product.product_name}" type="text" className="form-control"
                              id="product_name"
                              aria-describedby="product name"/>
                           <div className="form-text">use this format (brand: product name : for device - colour) e.g
                               Nillkin frosted shield for iPhone 12 - Black
                           </div>
                           <div className="inputError"></div>
                   </div>

                   <div className="row mb-4">
                       <div className="mb-3 col-md-4 form-group ">
                           <label htmlFor="category" className="form-label" required>Category</label>
                           <select className="form-select" aria-label="Select Category" id="category" name="categoryID"
                                   required>
                               <option value="">-Select a category-</option>
                               ${renderedCategories}
                           </select>
                           <div className="form-text">quickly type the name to select</div>
                       </div>

                       <div className="mb-3 col-md-4 form-group ">
                           <label htmlFor="brand" className="form-label" required>Brand</label>
                           <select className="form-select" aria-label="Select Brand" id="brand" name="brandID" required>
                               <option value="">-Select a brand or a sub brand-</option>
                               ${renderedBrands}
                           </select>
                           <div className="form-text">quickly type the name to select</div>
                       </div>

                       <div className="mb-3 col-md-4 form-group ">
                           <label htmlFor="special" className="form-label" required>Special Category</label>
                           <select className="form-select" aria-label="Special Category" id="special" name="specialID"
                                   required>
                               <option value="">-Select a special category-</option>
                               ${renderedSpecials}
                           </select>
                       </div>
                   </div>

                   <div className="mb-4 col form-group">

                       <div className="d-md-flex">
                           <label htmlFor="description" className="form-label richTitle">Description</label>
                           <ul className="tool-list">
                               <li>
                                   <button type="button" className="descriptionBtn ulButton"
                                           data-command="insertOrderedList">
                                       <i className=' fas fa-list-ol'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="descriptionBtn ulButton"
                                           data-command="insertUnorderedList">
                                       <i className=' fas fa-list-ul'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="descriptionBtn ulButton" data-command="bold">
                                       <i className=' fas fa-bold'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="descriptionBtn ulButton" data-command="italic">
                                       <i className=' fas fa-italic'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="descriptionBtn ulButton" data-command="underline">
                                       <i className=' fas fa-underline'></i>
                                   </button>
                               </li>
                           </ul>
                       </div>

                       <iframe name="descriptionFrame" className="ulList border form-control">
                       </iframe>

                       <input type="text" name="description" id="description" className="d-none"/>

                           <div className="descriptionCopy d-none"></div>

                   </div>

                   <div className="mb-4 col form-group">
                       <div className="d-md-flex">
                           <label htmlFor="inBox" className="form-label richTitle"> Whats in the box</label>
                           <ul className="tool-list">
                               <li>
                                   <button type="button" className="inBoxBtn ulButton" data-command="insertOrderedList">
                                       <i className=' fas fa-list-ol'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="inBoxBtn ulButton"
                                           data-command="insertUnorderedList">
                                       <i className=' fas fa-list-ul'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="inBoxBtn ulButton" data-command="bold">
                                       <i className=' fas fa-bold'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="inBoxBtn ulButton" data-command="italic">
                                       <i className=' fas fa-italic'></i>
                                   </button>
                               </li>
                               <li>
                                   <button type="button" className="inBoxBtn ulButton" data-command="underline">
                                       <i className=' fas fa-underline'></i>
                                   </button>
                               </li>
                           </ul>
                       </div>

                       <iframe name="inBoxFrame" className="ulList border form-control">
                       </iframe>

                       <input type="text" name="inBox" id="inBox" className="d-none"/>

                           <div className="inBoxCopy d-none"></div>
                   </div>

                   <div className="mb-4 table-responsive">
                       <div className="subHeading">PRICING</div>
                       <table className="table table-bordered mt-3" id="addProductT">
                           <thead>
                           <tr className="table-primary">
                               <th scope="col" required>Quantity</th>
                               <th scope="col" required>Shop Price (ksh)</th>
                               <th scope="col" required>Price (ksh)</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td>
                                   <input type="number" name="quantity" min="1" value="${getInput(product, 'quantity')}"
                                          required/>
                                       <div className="inputError"></div>
                               </td>
                               <td>
                                   <input type="number" name="shop_price" min="1"
                                          value="${getInput(product, 'shop_price')}" required/>
                                       <div className="inputError"></div>
                               </td>
                               <td>
                                   <input type="number" name="price" min="1" value="${getInput(product, 'price')}"
                                          required/>
                                       <div className="inputError"></div>
                               </td>
                           </tr>
                           </tbody>
                       </table>
                   </div>

                   <div className="mb-4">
                       <div className="subHeading">IMAGES</div>
                       <div className="form-text" style={{color: "red",fontSize:"1rem"}}>Deleting an image will delete all
                           images
                           except the main image. Refresh the page to undo the deletion
                       </div>
                       <div className="row editImgRow">
                           <input className="imagesLength d-none" value="${product.product_images.length}"/>
                       </div>
                   </div>

                   <div className="mb-3 form-group">
                       <label htmlFor="pOption" className="form-label">Product options</label>
                   </div>

                   <div className="my-3 d-md-flex justify-content-evenly">
                       <div>
                           <span id="visibility" className="mt-3">Visibility</span>
                           <label className="switch">
                               ${visibility(product.status)}
                           </label>
                       </div>
                       <button className="btn btn-success save" type="submit"
                               formAction="/admin/products/edit/${product.id}">SAVE
                       </button>
                       <button className="btn btn-warning save" type="submit"
                               formAction="/admin/products/edit/copy/${product.id}">SAVE AND CREATE NEW COPY
                       </button>
                       <a className="btn btn-secondary save" onClick="location.href='/admin/products/cancel'">CANCEL</a>
                   </div>
               </form>
           </div>
       </div>
   )
}

export default Edit