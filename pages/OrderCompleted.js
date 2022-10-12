function OrderCompleted() {
    
    function getCurrentDate() {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${month}/${day}/${year}`;
        return <>{currentDate}</>
    }


    return(
        <div className='table-container container'>
            <h1 className='d-flex align-items-center justify-content-center header-tag'>ORDERS</h1>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">DATE</th>
                <th scope="col">ITEM NAME(S)</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">PAYMENT</th>
                <th scope="col">STATUS</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{getCurrentDate()}</th>
                <td>Iphone 11</td>
                <td>65,000</td>
                <td>On delivery</td>
                <td>
                    <button type="button" className="btn btn-primary">Order Completed</button>
                </td>
            </tr>
            <tr>
                <th scope="row">{getCurrentDate()}</th>
                <td>Iphone 13</td>
                <td>105,000</td>
                <td>On delivery</td>
                <td>
                    <button type="button" className="btn btn-primary">Order Completed</button>
                </td>
            </tr>
            <tr>
                <th scope="row">{getCurrentDate()}</th>
                <td>Iphone 12</td>
                <td>95,000</td>
                <td>On delivery</td>
                <td>
                    <button type="button" className="btn btn-primary">Order Completed</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}

export default OrderCompleted