export const getMessage = () => {
  return fetch("/api/hello").then((res) => res.json())
}
