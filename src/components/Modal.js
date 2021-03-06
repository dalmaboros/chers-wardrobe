import './Modal.css'

// `children` is a reference to the functionality of opening and closing the modal
const Modal = ({handleClose, show}) => {
    const toggleClassName = show ? "modal display-block" : "modal display-none"

    return (
        <div className={toggleClassName} onClick={handleClose}>
            <div className="inner-modal">
                <section className="modal-main">
                    {/* `onClick` accepts the hideModal() method, 
                    here represented as the argument handleClose, 
                    passed as props into your Dashboard component */}
                    <p>Mis-Match</p>
                </section>
            </div>
        </div>
    )
}

export default Modal