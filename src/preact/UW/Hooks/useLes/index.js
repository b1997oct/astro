import { useState } from "preact/hooks"


export default function useLes() {
    let [loading, setLoading] = useState(),
        [error, setError] = useState()
    return { loading, setLoading, error, setError }
}
