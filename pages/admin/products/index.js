function Index() {
 return(
     <div id="viewProducts" className="card ">
         <div className="d-flex justify-content-end">
             <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}
                     onClick="location.href='/admin/products/new'">Add Product
             </button>
         </div>
         <div className="card-body table-responsive ">
             <table className="table table-hover table-bordered mt-2">
                 <thead>
                 <tr className="table-dark">
                     <th scope="col" className="product-name-heading">Product Name</th>
                     <th scope="col" className="product-others">Wholesale</th>
                     <th scope="col" className="product-others">Price</th>
                     <th scope="col" className="product-others">Profit</th>
                     <th scope="col" className="product-others">Units Sold</th>
                     <th scope="col" className="product-others">Income</th>
                     <th scope="col" className="product-others">Quantity</th>
                     <th scope="col" className="product-others">Status</th>
                     <th scope="col" className="product-others">Actions</th>
                 </tr>
                 </thead>
                 <tbody>
                 </tbody>
             </table>
         </div>
     </div>
 )
}

export default Index