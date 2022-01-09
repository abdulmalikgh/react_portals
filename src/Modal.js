import reactDom from "react-dom"
const MODAL_STYLES = {
    position:'fixed',
    top:'50%',
    left: '50%',
    transform:'translate(-50%,-50%',
    backgroundColor:'#fff',
    padding: "50px",
    zIndex:1000
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor: 'rgba(0,0,0,.7',
    zIndex:1000,
}
export default function Modal({ children, onClose, isOpen }) {
    if(!isOpen) return null
    return reactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} >
                <div className="" style={MODAL_STYLES}>
                    <div>
                    { children }
                    </div>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
