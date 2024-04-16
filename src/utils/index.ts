export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const range = (start, end) => {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}
