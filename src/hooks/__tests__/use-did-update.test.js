import React from "react"
import userEvent from "@testing-library/user-event"
import useDidUpdate from "src/hooks/use-did-update"
import { render } from "test/render"
import { screen } from "@testing-library/react"

test("WHEN a value is updated THEN onUpdate is called", async () => {
  const onUpdate = jest.fn()
  const Component = () => {
    const [count, setCount] = React.useState(0)
    useDidUpdate(count, onUpdate)
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    )
  }
  render(<Component />)
  userEvent.click(screen.getByText(/increment/i))

  expect(onUpdate).toHaveBeenLastCalledWith(0)
  userEvent.click(screen.getByText(/increment/i))
  expect(onUpdate).toHaveBeenLastCalledWith(1)
})
