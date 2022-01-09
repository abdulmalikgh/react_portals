import { useState } from 'react'

import Modal from "./Modal"

const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1,
    marginTop: '20px',
    marginBottom: '20px'
}
const BUTTON ={
        padding: '10px'
}
const OTHER_CONTENT_STYLES = {
    position: 'relative',
    backgroundColor:'blue',
    padding:'10px',
    zIndex:1
}
const HEADER_STYLE = {
    color:'#000'
}

export default function Portals () {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div style={BUTTON_WRAPPER_STYLES}>
                <button onClick={() => setIsOpen(true)} style={BUTTON}>Open Modal</button>
                <Modal isOpen={isOpen} onClose={ () => setIsOpen(false)}>
                    <h1 style={HEADER_STYLE}>Hello Modal</h1>
                </Modal>
            </div>
            <div style={OTHER_CONTENT_STYLES}>
                Other Content
            </div>
        </>
    )
}