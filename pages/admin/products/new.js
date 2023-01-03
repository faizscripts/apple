import AdminLayout from "../../../layout/AdminLayout";
import Link from "next/link";

function New() {

    function checkinBox(content) {
        if (content){
            return `${content.inBox}`
        } else return null;
    }

    return(
        <div id="add-product" className="container card mt-3 mb-5">
            <div className="card-header">
                Product Information
            </div>
            <div className="card-body">
                <form id="addProductsForm" method="POST" encType="multipart/form-data">

                    <div className="mb-3 form-group">
                        <label htmlFor="product_name" className="form-label" required>Product Name</label>
                        <input name="product_name" type="text" className="form-control" id="product_name"
                               aria-describedby="product_name" value="${getInput(input, 'product_name')}" required/>
                            <div className="inputError"></div>
                    </div>

                    <div className="row mb-4">
                        <div className="mb-3 col-md-4 form-group ">
                            <label htmlFor="category" className="form-label" required>Category</label>
                            <select className="form-select" aria-label="Select Category" id="category" name="categoryID"
                                    required>
                                <option value="">-Select a category-</option>
                            </select>
                            <div className="form-text">quickly type the name to select</div>
                        </div>
                        <div className="mb-3 col-md-4 form-group ">
                            <label htmlFor="brand" className="form-label" required>Brand</label>
                            <select className="form-select" aria-label="Select Brand" id="brand" name="brandID"
                                    required>
                                <option value="">-Select a brand or a sub brand-</option>
                            </select>
                            <div className="form-text">quickly type the name to select</div>
                        </div>
                        <div className="mb-3 col-md-4 form-group ">
                            <label htmlFor="special" className="form-label" required>Special Category</label>
                            <select className="form-select" aria-label="Special Category" id="special" name="specialID"
                                    required>
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
                            <label htmlFor="inBox" className="form-label richTitle">Whats in the box</label>
                            <ul className="tool-list">
                                <li>
                                    <button type="button" className="inBoxBtn ulButton"
                                            data-command="insertOrderedList">
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

                            {/*<div className="inBoxCopy d-none">${checkinBox(input)}</div>*/}
                    </div>

                    <div className="mb-4 table-responsive">
                        <div className="subHeading">PRICING</div>
                        <table className="table table-bordered mt-3" id="addProductT">
                            <thead>
                            <tr className="table-primary">
                                <th scope="col" required>Quantity</th>
                                <th scope="col" required>Wholesale Price (ksh)</th>
                                <th scope="col" required>Price (ksh)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <input type="number" name="quantity" min="1" value="${getInput(input, 'quantity')}"
                                           required/>
                                        {/*<div className="inputError">${getError(error, 'quantity')}</div>*/}
                                </td>
                                <td>
                                    <input type="number" name="shop_price" min="1"
                                           value="${getInput(input, 'shop_price')}" required/>
                                        {/*<div className="inputError">${getError(error, 'shop_price')}</div>*/}
                                </td>
                                <td>
                                    <input type="number" name="price" min="1" value="${getInput(input, 'price')}"
                                           required/>
                                        {/*<div className="inputError">${getError(error, 'price')}</div>*/}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-4">
                        <div className="subHeading">IMAGES</div>
                        <div className="row imgRow">
                            <div className="col-2 card imageCard">
                                <img src="..." className="imgCol"/>
                                    <div className="card-body d-flex justify-content-between">
                                        <div>Main</div>
                                        <div>
                                            <label htmlFor="image1"><i className="far fa-edit"></i></label>
                                            <input type="file" id="image1" name="image1" accept="image/*" hidden/>
                                                <i className="fas fa-plus addImage"></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="pOption" className="form-label">Product Options</label>
                        <select className="form-select mb-1" aria-label="Select Option" id="pOption" name="pOption">
                            <option value="false" selected>Not applicable</option>
                            <option value="true">Present</option>
                        </select>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-primary optionBtn mt-1" disabled>Add option
                            </button>
                        </div>
                        <ul className="optionsList"></ul>
                    </div>

                    <div className="mb-4 d-md-flex justify-content-evenly">
                        <div>
                            <span id="visibility" className="mt-3">Visibility</span>
                            <label className="switch">
                                <input type="checkbox" name="status" className="visibilitySwitch" checked/>
                                    <span className="slider round"></span>
                            </label>
                        </div>
                        <button className="btn btn-success save" type="submit" formAction="/admin/products">SAVE
                        </button>
                        <button className="btn btn-warning save" type="submit" formAction="/admin/products/copy">SAVE
                            AND CREATE COPY
                        </button>
                        <Link href="/admin/products">
                            <a className="btn btn-secondary save">CANCEL</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

New.pageLayout = AdminLayout

export default New
