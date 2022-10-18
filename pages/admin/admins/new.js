function New() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                New Admin Information
            </div>
            <div className="card-body">
                <form method="POST">
                    <div className="mb-3 form-group">
                        <label htmlFor="admin_name" className="form-label" required>Admin Name</label>
                        <input name="admin_name" type="text" className="form-control" id="admin_name"
                               aria-describedby="admin_name" value="${getInput(input, 'admin_name')}" required/>
                            <div className="inputError"></div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="email" className="form-label" required>Email</label>
                            <input name="email" type="email" className="form-control" id="email"
                                   aria-describedby="email" value="${getInput(input, 'email')}" required/>
                                <div className="inputError"></div>

                        </div>
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="phone" className="form-label" required>Phone</label>
                            <input name="phone" type="number" className="form-control" id="phone"
                                   aria-describedby="phone" value="${getInput(input, 'phone')}" required/>
                                <div className="inputError"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="password" className="form-label" required>Password</label>
                            <input name="password" type="password" className="form-control" id="password"
                                   aria-describedby="password" value="${getInput(input, 'password')}" required/>
                                <div className="inputError"></div>
                        </div>
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="password_confirmation" className="form-label" required>Password
                                Confirmation</label>
                            <input name="password_confirmation" type="password" className="form-control"
                                   id="password_confirmation" aria-describedby="password_confirmation"
                                   value="${getInput(input, 'password_confirmation')}" required/>
                                <div className="inputError"></div>
                        </div>
                    </div>

                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit"
                                formAction="/admin/admins/">SAVE
                        </button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/admins'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default New