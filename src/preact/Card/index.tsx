import { useState } from "preact/hooks"

type Props = {
  name?: string;
  title?: string;
  init: number;
}

export default function Card({ name, title, init }: Props) {

  let [count, setCount] = useState<number>(init)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
