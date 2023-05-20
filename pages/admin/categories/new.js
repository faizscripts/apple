import { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import CategoryForm from "../../../components/admin/CategoryForm";

function NewCategory() {

    const [category_name, setCategoryName] = useState("")

    return(
        <CategoryForm
            newEntry={true}
            category_name={category_name}
            setCategoryName={setCategoryName}/>
    )
}

NewCategory.pageLayout = AdminLayout

export default NewCategory
