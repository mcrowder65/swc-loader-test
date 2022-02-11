import React from "react"
import { render } from "test/render"
import { axe } from "jest-axe"
import TextField from "src/components/text-field"
test("passes axe", async () => {
  const { container } = render(<TextField />)

  expect(await axe(container)).toHaveNoViolations()
})
