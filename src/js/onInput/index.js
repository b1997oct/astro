import findById from "../findById";

export default function onInput(id, fn) {
    findById(id).oninput = e =>{
        let target = e.currentTarget
        fn(target)
    }
}