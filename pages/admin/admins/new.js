import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { connect } from "react-redux";
import { updateAdmin } from "../../../store/admin/action";

function New({ updateAdmin }) {
    const router = useRouter()

    const [admin_name, setAdminName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [processing, setProcessing] = useState(false)
    const [formError, setFormError] = useState(false)

    const onFormSubmit = async (event) => {
        event.preventDefault()

        try {
            setProcessing(true)
            const response = await axios.post("/api/admin/admins", {admin_name, email, phone, password, confirm})

            if (response.data._id) {
                updateAdmin(response.data)
                await router.push("/admin/admins")
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

    function printError(error) {
        if (error){
            if (typeof error === "object") return <div className="form-text form-error">{error.message}</div>

            return <div className="form-text form-error">{error}</div>
        }
    }

    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                New Admin Information
            </div>
            <div className="card-body">
                {printError(formError.unexpected)}
                <form onSubmit={onFormSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="admin_name" className="form-label" required>Admin Name</label>
                        <input name="admin_name" type="text" className="form-control" id="admin_name" aria-describedby="admin_name" value={admin_name} onChange={e => setAdminName(e.target.value)} required/>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="email" className="form-label" required>Email</label>
                            <input name="email" type="email" className="form-control" id="email" aria-describedby="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                            {printError(formError.email)}

                        </div>
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="phone" className="form-label" required>Phone</label>
                            <input name="phone" type="number" className="form-control" id="phone" aria-describedby="phone" value={phone} onChange={e => setPhone(e.target.value)} required/>
                            {printError(formError.phone)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="password" className="form-label" required>Password</label>
                            <input name="password" type="password" className="form-control" id="password" aria-describedby="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                            {printError(formError.validate)}
                        </div>
                        <div className="mb-3 col-md-6 form-group">
                            <label htmlFor="confirm" className="form-label" required>Confirm Password</label>
                            <input name="confirm" type="password" className="form-control" id="confirm" aria-describedby="confirm" value={confirm} onChange={e => setConfirm(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit">{processing? "Processing..." : "Save"}</button>
                        <Link href="/admin/admins">
                            <a className="btn btn-secondary save">CANCEL</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default connect(null, {updateAdmin})(New)
