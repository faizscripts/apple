import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { printError } from "../../utils/helpers";

function CategoryForm({ newEntry, category_name, setCategoryName, categoryId }) {

    const operation = newEntry ? "new" : "edit"

    const router = useRouter()

    const [processing, setProcessing] = useState(false)
    const [formError, setFormError] = useState({})

    const onFormSubmit = async (event) => {
        event.preventDefault()

        try {
            setProcessing(true)
            const response = await axios.post(`/api/admin/categories/${operation}`, { operation, category_name, categoryId })

            if (response.data._id) {
                await router.push("/admin/categories")
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

    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                { operation } Category Information
            </div>
            <div className="card-body">
                <form onSubmit={onFormSubmit}>
                    {printError(formError.unexpected)}
                    <div className="mb-3 form-group">
                        <label htmlFor="category_name" className="form-label" required>Category Name</label>
                        <input name="category_name" type="text" className="form-control" id="category_name" aria-describedby="category_name" value={category_name} onChange={e => setCategoryName(e.target.value)} required/>
                        {printError(formError.category_name)}
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

export default CategoryForm
