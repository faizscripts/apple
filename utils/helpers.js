export const printError = (error) => {
    if (error){
        if (typeof error === "object") return <div className="form-text form-error">{error.message}</div>

        return <div className="form-text form-error">{error}</div>
    }
}

export const showModal = (modalRef) => {
    const modalElement = modalRef.current
    const bsModal = new window.bootstrap.Modal(modalElement, {
        backdrop: 'static',
        keyboard: false
    })
    bsModal.show()
}

export const hideModal = (modalRef, setFormError) => {
    const modalElement = modalRef.current
    const bsModal= bootstrap.Modal.getInstance(modalElement)
    setFormError({})
    bsModal.hide()
}
