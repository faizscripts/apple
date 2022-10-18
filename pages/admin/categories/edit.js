function edit() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Category Information
            </div>
            <div className="card-body">
                <form method="POST" encType="multipart/form-data" action="/admin/categories/edit/${category.id}">
                    <div className="mb-3 form-group">
                        <label htmlFor="name" className="form-label" required>Category Name</label>
                        <input name="category_name" value="${category.category_name}" type="text"
                               className="form-control" id="name" aria-describedby="category name" required/>
                            <div className="inputError"></div>
                    </div>
                    <div className="mb-4">
                        <div className="subHeadingCategory">Cover Image
                        </div>
                        <div className="catRow">
                            <div className="card catImageCard">
                                <img src="/img/products/${category.image}" className="catImage"/>
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
                        <button className="btn btn-success save" type="submit" value="submit">SAVE</button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/categories'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default edit