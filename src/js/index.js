export function Tggr(fn, ...args) {
    return () => fn?.(...args)
}

export function textMk(...texts) {
    return texts.join(' ')
}