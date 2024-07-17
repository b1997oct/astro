import { Tggr } from '@/js/index.js'
import { useState } from 'preact/hooks'

export default function Menu() {

    let [open, setOpen] = useState(false)
    console.log('open: ', open);

    return open && (
        <ul class="list-none pl-0 gap-8 md:gap-0 fdc md:fdr md:df jce md:aic">
            <li><a href="/docs" class="px a py md:py-6 hover:bg-blue-50">Docs</a></li>
            <li><a href="/" class="py md:py-6 px a hover:bg-blue-50">Get Started</a></li>
            <li>
                <a
                    href="/contact"
                    class="bg-blue-600 hover:bg-black shadow-lg text-white rounded-full px-6 py-2 ml-2"
                >
                    Contact
                </a>
            </li>
        </ul>
    )
}
