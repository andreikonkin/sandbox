import { Dialog as MuiDialog, DialogProps } from '@mui/material'

function Dialog(props: DialogProps): JSX.Element {
  const { children, ...muiDialogProps } = props

  return <MuiDialog {...muiDialogProps}>{children}</MuiDialog>
}

export default Dialog

export type { DialogProps }
