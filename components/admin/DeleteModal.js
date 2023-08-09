import { useRef, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { hideModal, printError, showModal } from '../../utils/helpers';

const DeleteModal = ({itemId, itemName, setItem, url }) => {

    const modalRef = useRef();

    const [formError, setFormError] = useState({})

    const deleteCategory = async (event, itemId) => {
        event.preventDefault()

        try {
            const response = await axios.post(url, {itemId})
            setItem(response.data)
            hideModal(modalRef, setFormError)
        } catch (e) {
            let unexpected = {unexpected: 'An unexpected error occurred!'}
            setFormError(unexpected)
        }
    }

    return (
        <>
            <div className="deleteForm ms-4">
                <button type="button" className="formBtn" onClick={() => showModal(modalRef)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="table-icon"/>
                </button>
            </div>

            <div ref={modalRef} className="modal fade show" tabIndex="-1" aria-labelledby="adminModal"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form onSubmit={(event) => deleteCategory(event, itemId)}>
                            <div className="modal-body">
                                {printError(formError.unexpected)}
                                <p><b>DELETE</b> {itemName}?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => hideModal(modalRef, setFormError)}>
                                    Cancel
                                </button>
                                <button className="btn btn-danger" type="submit">
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal;
