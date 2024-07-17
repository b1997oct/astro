import Modal from '../UW/Modal'
import { useEffect, useState } from 'preact/hooks'
import FlashContactUs from '../FlashContactUs'

export default function ContactModal() {

    let [open, setOpen] = useState()
    

    useEffect(()=>{
        document.getElementsByName('contact-modal').forEach(d=>{
            d.onclick = () => setOpen(true)
        })
        
    },[])

    return (
        <Modal open={open} onClose={setOpen}>
           <FlashContactUs />
        </Modal>
    )
}
