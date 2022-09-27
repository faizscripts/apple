import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Reviews() {
    return (
        <div className='reviews row mt-5 d-flex justify-content-center'>
            <div className='col-5'>
                <h6>REVIEWS</h6>
                <p>There are no reviews yet</p>
            </div>
            <div className='col-5'>
                <h6>BE THE FIRST TO REVIEW IPHONE 12</h6>
                <p className='mt-4'>Your email address will not be published. Required fields are marked <span
                    style={{color: 'red'}}>*</span></p>
                <div className='mt-4'>
                    <h7>Your Rating <span style={{color: 'red'}}>*</span></h7>
                </div>
                <div className='mt-4'>
                    <h7>Your Review <span style={{color: 'red'}}>*</span></h7>
                    <form>
                        <div className="form-floating mb-3">
                                    <textarea className="form-control comments" placeholder="Leave a comment here"
                                              id="floatingTextarea" rows="3" style={{height: '150px'}} required></textarea>
                            <label htmlFor="floatingTextarea"></label>
                        </div>
                        <div className='row'>
                            <div className="mb-3 col-6">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                                       name="name" required/>
                            </div>
                            <div className="mb-3 col-6">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reviews