import React from "react"
const useCallbackRef = (callback) => {
  const callbackRef = React.useRef(null)

  React.useEffect(() => {
    callbackRef.current = callback
  }, [callback])
  return callbackRef
}

export default useCallbackRef
