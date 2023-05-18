import CloseIcon from '@mui/icons-material/Close'
import LockIcon from '@mui/icons-material/Lock'
import MailOutline from '@mui/icons-material/MailOutline'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { SvgIcon, SvgIconProps } from '@mui/material'

function Icon(props: SvgIconProps): JSX.Element {
  const { children, ...muiIconProps } = props
  return <SvgIcon {...muiIconProps}>{children}</SvgIcon>
}

export default Icon

export { CloseIcon, LockIcon, MailOutline, Visibility, VisibilityOff }
