import React from "react"
import { render as rtlRender } from "@testing-library/react"
import Providers from "src/providers"

export const render = (ui) => {
  return rtlRender(<Providers>{ui}</Providers>)
}
