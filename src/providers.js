import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from "src/theme"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"
const queryClient = new QueryClient()
const Providers = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{props.children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default Providers
