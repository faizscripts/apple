import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import Modal from "../components/Modal";

function QuickView({children}) {
    return(
        <div className='quick-view' >
            <i className='search-icon' data-bs-toggle="modal" data-bs-target="#exampleModal">
                <FontAwesomeIcon icon={faSearch} className='mt-3'/>
                <p className='quick-view-text p-tag'>Quick View</p>
            </i>
            {children}
        </div>
    )
}

export default QuickView
