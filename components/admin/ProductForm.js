import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import { printError } from "../../utils/helpers";
import ProductImageRow from "./ProductImageRow";

function ProductForm({ newEntry, productId, product_name, setProductName, categoryId, setCategoryId, quantity, setQuantity, wholesale_price, setWholesalePrice, price, setPrice, description, setDescription, status, productImages, categories }) {

    const operation = newEntry ? "new" : "edit"

    const router = useRouter()

    const [processing, setProcessing] = useState(false)
    const [formError, setFormError] = useState({})
    const [formStatus, setFormStatus] = useState((typeof status !== 'undefined') ? status : true)
    const [images, setImages] = useState(productImages || [{ id: uuidv4() }]);

    function printCategories() {
        if (categories.length>0){
            return categories.map(category => <option value={category._id} key={category._id} onClick={() => setCategoryId(category._id)}>{category.category_name}</option>);
        } else return ""
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        images.forEach((image, index) => {
            if (image.file) {
                formData.append('images', image.file);
                formData.append(`image-${index}`, false)
                return;
            }

            formData.append(`image-${index}`, image.filename)
        });
        formData.append('productId', productId);
        formData.append('operation', operation);
        formData.append('product_name', product_name);
        formData.append('categoryId', categoryId);
        formData.append('description', description);
        formData.append('quantity', quantity);
        formData.append('wholesale_price', wholesale_price);
        formData.append('price', price);
        formData.append('status', formStatus);

        try {
            setProcessing(true)
            await axios.post(`/api/admin/products/${operation}`, formData)
            await router.push("/admin/products")
            setImages([{ id: uuidv4() }])
            setProcessing(false)
        } catch (e) {
            let unexpected = {unexpected: 'An unexpected error occurred!'}
            setFormError(unexpected)
            setProcessing(false)
        }
    };

    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                { operation } Product Information
            </div>
            <div className="card-body">
                <form id="addProductsForm" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                    {printError(formError.unexpected)}
                    {printError(formError.validate)}

                    <div className="row mb-3">
                        <div className="col-md-6 form-group">
                            <label htmlFor="product_name" className="form-label" required>Product Name</label>
                            <input name="product_name" type="text" className="form-control" id="product_name" aria-describedby="product_name" value={product_name} onChange={e => setProductName(e.target.value)} required/>
                            {printError(formError.product_name)}
                        </div>
                        <div className="col-md-6 form-group">
                            <label htmlFor="category" className="form-label" required>Category</label>
                            <select className="form-select" aria-label="Select Category" id="category" name="categoryId" value={categoryId} onChange={(event) => setCategoryId(event.target.value)} required>
                                <option value="">-Select a category-</option>
                                {printCategories()}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col form-group">
                        <label htmlFor="description" className="form-label subHeading">Description</label>
                        <textarea className="form-control" id="description" rows="10" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    </div>

                    <div className="table-responsive">
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
                                    <input type="number" name="quantity" min="1" className="form-control" value={quantity} onChange={e => setQuantity(e.target.value)} required />
                                </td>
                                <td>
                                    <input type="number" name="shop_price" min="1" className="form-control" value={wholesale_price} onChange={e => setWholesalePrice(e.target.value)} required />
                                </td>
                                <td>
                                    <input type="number" name="price" min="1" className="form-control" value={price} onChange={e => setPrice(e.target.value)} required />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-4">
                        <div className="subHeading">IMAGES</div>
                        <ProductImageRow images={images} setImages={setImages} />
                    </div>

                    <div className="my-3 d-flex justify-content-evenly">
                        <div>
                            <span id="visibility" className="mt-3">Visibility</span>
                            <label className="switch">
                                <input type="checkbox" name="formStatus" className="visibilitySwitch" onChange={() => setFormStatus(!formStatus)} checked={formStatus} />
                                    <span className="slider round"></span>
                            </label>
                        </div>
                        <button className="btn btn-success save" type="submit">
                            {processing? "Processing..." : "Save"}
                        </button>
                        <Link href="/admin/products">
                            <a className="btn btn-secondary save">
                                Cancel
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm
