import AdminLayout from "../../../layout/AdminLayout";
import Link from "next/link";

function New() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Order Information
            </div>
            <div className="card-body">
                <form method="post" >
                    <div className="row mb-4">
                        <div className="mb-3 col-md-4 form-group">
                            <label htmlFor="fullname" className="form-label" required>Name</label>
                            <input name="fullname" type="fullname" className="form-control" id="fullname" aria-describedby="name" required/>
                        </div>
                        <div className="mb-3 col-md-4 form-group">
                            <label htmlFor="email" className="form-label" required>Email</label>
                            <input name="email" type="text" className="form-control" id="email" aria-describedby="email" required/>
                        </div>
                        <div className="mb-3 col-md-4 form-group">
                            <label htmlFor="phone" className="form-label" required>Phone</label>
                            <input name="phone" type="text" className="form-control" id="phone" aria-describedby="phone" required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="products" className="form-label" required>Products</label>
                        <div id="viewProducts" className="m-0">
                            <div className="card-body table-responsive ">
                                <table className="table table-hover table-bordered mt-2" id="newOrderPTable">
                                    <thead>
                                    <tr className="table-dark">
                                        <th scope="col" className="product-name-heading">Product Name</th>
                                        <th scope="col" className="product-others">Shop Price</th>
                                        <th scope="col" className="product-others">Price</th>
                                        <th scope="col" className="product-others">Profit</th>
                                        <th scope="col" className="product-others">Units Sold</th>
                                        <th scope="col" className="product-others">Income</th>
                                        <th scope="col" className="product-others">Quantity</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <label htmlFor="products" className="form-label">Selected products</label>
                        <div id="viewProducts" className="m-0">
                            <div className="card-body table-responsive ">
                                <table className="table table-success table-striped">

                                </table>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="my-3 d-flex justify-content-evenly">
                <button className="btn btn-success save" type="submit" value="submit" >SAVE</button>
                <button className="btn btn-warning save" type="submit" value="submit" >SAVE AND CREATE COPY</button>
                <Link href="/admin/orders">
                    <a className="btn btn-secondary save">CANCEL</a>
                </Link>
            </div>
</div>
    )
}

New.pageLayout = AdminLayout

export default New
