import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { connect } from "react-redux";
import { updateAdmin } from "../../store/admin/action";

function Login({ updateAdmin }) {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [processing, setProcessing] = useState(false)
    const [formError, setFormError] = useState({})

    const onFormSubmit = async (event) => {
        event.preventDefault()

        try {
            setProcessing(true)
            const response = await axios.post("/api/admin/login", {email, password})

            if (response.data._id) {
                updateAdmin(response.data)
                await router.push("/admin/dashboard")
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
            return <div className="form-text form-error">{error}</div>
        }
    }

    return(
        <div id="login">
            <div className="card">
                <div className="card-header">
                    Admin Login
                </div>
                <div className="card-body">
                    <form onSubmit={onFormSubmit}>
                        {printError(formError.unexpected)}
                        <div className="mb-3 form-group">
                            <label htmlFor="email" className="form-label" required>Admin Email</label>
                            <input name="email" type="text" className="form-control" id="email" aria-describedby="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                            {printError(formError.email)}
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="password" className="form-label" required>Password</label>
                            <input name="password" type="password" className="form-control" id="password" aria-describedby="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                            {printError(formError.password)}
                        </div>
                        <div className="my-3 d-flex justify-content-center">
                            <button className="btn btn-success save" type="submit" value="submit">{processing? "Processing..." : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect(null, {updateAdmin})(Login)
