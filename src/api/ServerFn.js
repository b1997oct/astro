

let tm = {}
const request = async (body, action) => {

    let controller = tm[action]
    if (controller) {
        controller.abort()
    }

    let headers = new Headers()
    headers.append('Server-Fn', action)
    if (!(body instanceof FormData)) {
        body = JSON.stringify(body)
        headers.append('Content-Type', 'application/json')
    }
    controller = new AbortController()
    tm[action] = controller
    let res = await fetch('/server', { body, signal: controller.signal, method: 'POST', headers })
    delete tm[action]
    return res
}


async function ServerFn(action, body) {
    try {
        let res = await request(body, action)
        let data = await res.json()
        if (!res.ok) {
            throw data
        }
        return data
    } catch (error) {
        if (error.name !== 'AbortError') {
            throw data
        }
    }
}

async function reqHandler(action, body, setLoading, onError, onSuccess) {
    try {
        onError?.()
        setLoading?.(true)
        let res = await request(body, action)
        let data = await res.json()
        if (!res.ok) {
            if (data.href) {
                location.href = data.href
            }
            throw data
        }
        onSuccess(data)
        setLoading?.(false)
    } catch (error) {
        if (error.name !== 'AbortError') {
            onError?.(error)
            setLoading?.(false)
        }
    }
}


export const sfn = fnName => ({ setLoading, setError, onResponse }) => {
    const onError = err => {
        setError?.(err?.message)
    }
    const handler = (...params) => reqHandler(fnName, params, setLoading, onError, onResponse)
    return handler
}

export function asyncSfn(action) {
    const handler = async (...params) => await ServerFn(action, params)
    return handler
}