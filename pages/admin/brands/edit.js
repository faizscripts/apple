function edit() {
    return(
        <div>
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Brand Information
            </div>
            <div className="card-body">
                <form method="POST" action="/admin/brands/edit/${brand.id}">
                    <div className="mb-3 form-group">
                        <label htmlFor="name" className="form-label" required>Brand Name</label>
                        <input name="brand_name" type="text" className="form-control" id="brand_name"
                               aria-describedby="brand_name" value="${getInput(brand, 'brand_name')}" required/>
                            <div className="inputError"></div>
                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="sub-brand" className="form-label">Sub Brand</label>
                    </div>
                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit">SAVE</button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/brands'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default edit