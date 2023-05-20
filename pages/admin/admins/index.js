import {useState} from "react";
import Link from "next/link";
import AdminLayout from "../../../layout/AdminLayout";
import connectDB from "../../../utils/db";
import { Admin } from "../../../models/admin/admins";
import DeleteModal from '../../../components/admin/DeleteModal';

function Index({ rawAdmins }) {

    const [admins, setAdmins] = useState(rawAdmins)

    const renderAdmins = admins.map(
        admin => {
            return (
                <tr key={admin._id}>
                    <td>{new Date(admin.dateCreated).toLocaleDateString('en-GB') }</td>
                    <td style={{textTransform:"capitalize"}}>{admin.admin_name}</td>
                    <td><a href="mailto:{admin.email}"> {admin.email}</a></td>
                    <td><a href="tel:0{admin.phone}">0{admin.phone}</a></td>
                    <td>
                        <DeleteModal itemId={admin._id} itemName={admin.admin_name} setItem={setAdmins} url={'/api/admin/admins/delete'} />
                    </td>
                </tr>
            )
        }
    )

    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <Link href="/admin/admins/new">
                    <button type="button" className="btn btn-primary mt-4 me-3 main-add-button">
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
                        <th scope="col" className="tableHeader">Actions</th>
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

export async function getServerSideProps() {
    await connectDB()
    const data = await Admin.find().collation({locale: "en" }).sort('admin_name');
    const rawAdmins = JSON.parse(JSON.stringify(data))
    return {
        props: { rawAdmins }
    }
}
