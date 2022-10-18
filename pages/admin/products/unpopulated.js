function unpopulated(){
    return(
        <div id="viewProducts" className="card ">
            <div className="card-body table-responsive ">
                <table className="table table-hover table-bordered mt-2">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="product-name-heading">Product Name</th>
                        <th scope="col">Shop Price</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default unpopulated