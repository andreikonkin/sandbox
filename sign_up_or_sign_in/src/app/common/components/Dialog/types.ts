export type HandleClose = (
  event: Record<string, unknown>,
  reason: 'backdropClick' | 'escapeKeyDown'
) => void
