import React from "react"
import { useQuery } from "react-query"
import { getMessage } from "src/pages/root/root.service"
const Root = () => {
  const { isLoading, data } = useQuery("message", getMessage)

  if (isLoading) {
    return "loading..."
  }

  if (data) {
    return <div>{data.message}</div>
  }

  return null
}

export default Root
