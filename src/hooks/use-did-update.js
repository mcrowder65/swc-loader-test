import React from "react"
import usePrevious from "src/hooks/use-previous"
import useCallbackRef from "src/hooks/use-callback-ref"

const useDidUpdate = (value, onUpdate) => {
  const prev = usePrevious(value)
  const onUpdateRef = useCallbackRef(onUpdate)
  React.useEffect(() => {
    if (prev !== value) {
      onUpdateRef.current(prev)
    }
  }, [prev, value])
}

export default useDidUpdate
