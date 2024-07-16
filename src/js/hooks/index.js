export function useButton(id, fn) {
    document.getElementById(id).onclick = fn
}

export function onClick(id, fn) {
    let ele = document.getElementById(id)
    ele.onclick = fn
}

export function findById(id) {
    return document.getElementById(id)
}
