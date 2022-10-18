function New() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Category Information
            </div>
            <div className="card-body">
                <form method="POST" encType="multipart/form-data">
                    <div className="mb-3 form-group">
                        <label htmlFor="category_name" className="form-label" required>Category Name</label>
                        <input name="category_name" type="text" className="form-control" id="category_name"
                               aria-describedby="category_name" value="${getInput(input, 'category_name')}" required/>
                            <div className="inputError">${getError(error, 'category_name')}</div>
                    </div>
                    <div className="mb-4">
                        <div className="subHeadingCategory">Cover Image
                        </div>
                        <div className="catRow">
                            <div className="card catImageCard">
                                <img src="" className="catImage"/>
                                    <div className="card-body d-flex justify-content-end">
                                        <div>
                                            <label htmlFor="category"><i className="far fa-edit"></i></label>
                                            <input type="file" id="category" name="category" accept="image/*" hidden/>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" formAction="/admin/categories">SAVE
                        </button>
                        <button className="btn btn-warning save" type="submit" formAction="/admin/categories/copy">SAVE
                            AND CREATE COPY
                        </button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/categories'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
exp