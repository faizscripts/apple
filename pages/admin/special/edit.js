function edit() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Special Categories Information
            </div>
            <div className="card-body">
                <form method="POST" action="/admin/special/edit/${special.id}">
                    <div className="mb-3 form-group">
                        <label htmlFor="special_name" className="form-label" required>Special Category Name</label>
                        <input name="special_name" value="${special.special_name}" type="text" className="form-control"
                               id="name" aria-describedby="special name" required/>
                            <div className="inputError"></div>
                    </div>
                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit">SAVE</button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/special'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default edit