import { useState, useEffect } from "react";
import Link from "next/link";
import AdminLayout from "../../../layout/AdminLayout";
import axios from "axios";

function Index() {

    const [admins, setAdmins] = useState([])

    useEffect(() => {
        void fetchAdmins()
    }, [])

    const fetchAdmins = async () => {
        try {
            const response = await axios.get("/api/admin/admins")
            if (response.data.length > 0) {
                setAdmins(response.data)
            }
        } catch (e) {
            console.log(e);
        }
    }

    const renderAdmins = admins.map(
        admin => {
            return (
                <tr key={admin._id}>
                    <td>{admin.dateCreated}</td>
                    <td style={{textTransform:"capitalize"}}>{admin.admin_name}</td>
                    <td><a href="mailto:{admin.email}"> {admin.email}</a></td>
                    <td><a href="tel:0{admin.phone}">0{admin.phone}</a></td>
                </tr>
            )
        }
    )

    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <Link href="/admin/admins/new">
                    <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}>
                        Add New Admin
                    </button>
                </Link>
            </div>
            <div className="card-body table-responsive">
                <table className="table table-hover table-bordered" id="adminT">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="tableHeader">Date Created</th>
                        <th scope="col" className="tableHeader" style={{textTransform:"capitalize"}}>Name</th>
                        <th scope="col" className="tableHeader">Email</th>
                        <th scope="col" className="tableHeader">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderAdmins}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

Index.pageLayout = AdminLayout

export default Index
