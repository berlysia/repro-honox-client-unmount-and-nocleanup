import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Wrapper from '../islands/wrapper'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div class={className}>
      <h1>Hello, {name}!</h1>
      <Wrapper name="parent">
        <Wrapper name="child">
          yo
        </Wrapper>
      </Wrapper>
    </div>,
    { title: name }
  )
})
