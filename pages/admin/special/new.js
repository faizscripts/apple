function New() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Special Categories Information
            </div>
            <div className="card-body">
                <form method="POST">
                    <div className="mb-3 form-group">
                        <label htmlFor="special_name" className="form-label" required>Special Category Name</label>
                        <input name="special_name" type="text" className="form-control" id="special_name"
                               aria-describedby="special_name" value="${getInput(input, 'special_name')}" required/>
                            <div className="inputError"></div>
                    </div>
                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit"
                                formAction="/admin/special">SAVE
                        </button>
                        <button className="btn btn-warning save" type="submit" value="submit"
                                formAction="/admin/special/copy">SAVE AND CREATE COPY
                        </button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/special'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New