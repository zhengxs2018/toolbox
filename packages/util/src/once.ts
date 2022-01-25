export function once(cb: () => void): () => void {
  let called = false

  return () => {
    if (called) return
    cb()
    called = true
  }
}
