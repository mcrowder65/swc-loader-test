import React from "react"
import styled from "@emotion/styled"
import Providers from "src/providers"
const Div = styled.div`
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const decorators = [
  (Story) => (
    <Providers>
      <Div>
        <Story />
      </Div>
    </Providers>
  ),
]
