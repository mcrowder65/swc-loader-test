import React from "react"
import App from "src/app"
import { screen } from "@testing-library/react"
import { render } from "test/render"
import * as rootService from "src/pages/root/root.service"
test("it renders", async () => {
  jest
    .spyOn(rootService, "getMessage")
    .mockImplementationOnce(() => ({ message: "hello from the server" }))
  render(<App />)
  await screen.findByText(/hello from the server/i)
})
