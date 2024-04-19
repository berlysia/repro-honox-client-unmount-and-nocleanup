import { css } from 'hono/css'
import { PropsWithChildren, useEffect, useState } from 'hono/jsx'

const className = css`
  padding: 2rem;
  border: 1px solid black;
`

type Props = {
  name: string;
}

export default function Wrapper({children, name}: PropsWithChildren<Props>) {
  const [count, setCount] = useState(0)
  const id = useState(() => Math.random().toString(36))[0];

  useEffect(() => {
    console.log("effect", name, id);
    return () => {
      console.log("cleanup", name, id);
    }
  }, [name, id])

  return (
    <div className={className}>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  )
}
