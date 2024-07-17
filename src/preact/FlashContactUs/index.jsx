import Text from "../UW/Text/index.jsx";
import useLes from '../UW/Hooks/useLes/index.js'
import { contactSfn } from '@/api/index.js'


export default function FlashContactUs() {

    let data = { note: 'I Need To Create Business Website Thank You' },
        { error, loading, setError, setLoading } = useLes(),
        onResponse = res => {
            alert('form submited successfully')
            location.reload()
        }, contact = contactSfn({ setError, setLoading, onResponse })

    function onChange(e) {
        let { id, value } = e.target
        data[id] = value
    }

    function submit(e) {
        e.preventDefault()
        contact(data)
    }

    const Getter = id => ({ id, onChange, value: data[id] || '' })

    return (
        <div class="w-full max-w-xl bg p md:p-10 rounded-xl">
            <h2><Text>Flash Contact Us Form</Text></h2>
            <br />
            <form onSubmit={submit}>
                <input required {...Getter('email')} type="email" placeholder="Contact Email*" />
                <input placeholder="Contact Number" {...Getter('mobile')} />
                <textarea placeholder="Note" {...Getter('note')} />
                <button
                    type='submit'
                    class="rounded-full hover:bg-black border-none shadow-md bg-blue-600 text-white px-10 py-2 text-xl"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
