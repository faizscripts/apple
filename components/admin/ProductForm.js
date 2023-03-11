import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { printError } from "../../utils/helpers";

function ProductForm({ newEntry, product_name, setProductName, quantity, setQuantity, wholesale_price, setWholesalePrice, price, setPrice, description, setDescription, categories }) {

    const operation = newEntry ? "new" : "edit"

    const router = useRouter()

    const [processing, setProcessing] = useState(false)
    const [formError, setFormError] = useState({})
    const [categoryId, setCategoryId] = useState("")

    const onFormSubmit = async (event) => {
        event.preventDefault()

        try {
            setProcessing(true)
            const response = await axios.post(`/api/admin/products/${operation}`, { operation, product_name, quantity, wholesale_price, price })

            if (response.data._id) {
                await router.push("/admin/products")
                setProcessing(false)
            } else {
                setFormError(response.data)
                setProcessing(false)
            }
        } catch (e) {
            let unexpected = {unexpected: 'An unexpected error occurred!'}
            setFormError(unexpected)
            setProcessing(false)
        }
    }

    function printCategories() {
        if (categories.length>0){
            return categories.map(category => <option value={category._id} key={category._id} onClick={() => setCategoryId(category._id)}>{category.category_name}</option>);
        } else return ""
    }

    let i = 2;

    const imageRowClick = (event) => {

        const target = event.target;

        if (target.matches('.add-image')) {
            if (i <= 10) {
                let card = document.createElement('div');
                card.classList.add('col-2', 'card', 'imageCard');
                card.innerHTML = `
                <img src="..." class="imgCol">
                <div class="card-body d-flex justify-content-evenly">
                    <label for="image${i}" class="image-card-actions edit-image">edit</label>
                    <input type="file" id="image${i}" name="image${i}" accept="image/*" hidden>
                    <span class="image-card-actions delete-image mx-2">delete</span>
                    <span class="image-card-actions add-image">add</span>
                </div>
                `
                i++;
                let row = document.querySelector('.imgRow');
                row.append(card);
            }
        }

        const selectedImageCard = target.offsetParent

        if (target.matches('.edit-image')) {
            let input = selectedImageCard.children[1].children[1];
            input.addEventListener('change', evt => {
                let output = selectedImageCard.children[0];
                output.src = URL.createObjectURL(evt.target.files[0]);
                output.onload = function () {
                    URL.revokeObjectURL(output.src) // free memory
                }
            })
        }

        if (target.matches('.delete-image')) {
            selectedImageCard.remove()
            i--;
        }
    }

    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                { operation } Category Information
            </div>
            <div className="card-body">
                <form onSubmit={onFormSubmit} encType="multipart/form-data">
                    {printError(formError.unexpected)}
                    {printError(formError.validate)}

                    <div className="row mb-3">
                        <div className="col-md-6 form-group">
                            <label htmlFor="product_name" className="form-label" required>Product Name</label>
                            <input name="product_name" type="text" className="form-control" id="product_name" aria-describedby="product_name" value={product_name} onChange={e => setProductName(e.target.value)} required/>
                            {printError(formError.product_name)}
                        </div>
                        <div className="col-md-6 form-group ">
                            <label htmlFor="category" className="form-label" required>Category</label>
                            <select className="form-select" aria-label="Select Category" id="category" name="categoryID" required>
                                <option value="">-Select a category-</option>
                                {printCategories()}
                            </select>
                        </div>
                    </div>

                    <div className="mb-3 col form-group">
                        <label htmlFor="description" className="form-label subHeading">Description</label>
                        <textarea className="form-control" id="description" rows="5" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
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

                    <div className="mb-3">
                        <div className="subHeading">IMAGES</div>
                        <div onClick={imageRowClick} className="row imgRow">
                            <div className="col-2 card imageCard">
                                <img src="..." className="imgCol"/>
                                <div className="card-body d-flex justify-content-evenly">
                                    <label htmlFor="image1" className="image-card-actions edit-image"> edit </label>
                                    <input type="file" id="image1" name="image1" accept="image/*" hidden/>
                                    <span className="image-card-actions add-image">add</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" formAction="/admin/categories">
                            {processing? "Processing..." : "Save"}
                        </button>
                        <Link href="/admin/categories">
                            <a className="btn btn-secondary save">
                                CANCEL
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm
