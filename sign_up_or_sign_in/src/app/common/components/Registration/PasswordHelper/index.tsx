import { memo } from 'react'
import Block from '../../Block'
import Text from '../../Text'

export const PasswordHelper = memo(
  ({
    passwordContainsLowercase,
    passwordContainsUppercase,
    passwordContainsNumber,
    passwordContainsSpecialCharacter,
  }: {
    passwordContainsLowercase: boolean
    passwordContainsUppercase: boolean
    passwordContainsNumber: boolean
    passwordContainsSpecialCharacter: boolean
  }) => {
    return (
      <Block display="flex" flexDirection="column" justifyContent="flex-start">
        <Text size="s">Password must contain at least:</Text>
        <Text
          size="s"
          fontColor={passwordContainsLowercase ? 'primary' : 'alert'}
        >
          - 1 lowercase letter;
        </Text>
        <Text
          size="s"
          fontColor={passwordContainsUppercase ? 'primary' : 'alert'}
        >
          - 1 capital letter;
        </Text>
        <Text size="s" fontColor={passwordContainsNumber ? 'primary' : 'alert'}>
          - 1 number;
        </Text>
        <Text
          size="s"
          fontColor={passwordContainsSpecialCharacter ? 'primary' : 'alert'}
        >
          - 1 special character;
        </Text>
      </Block>
    )
  }
)

PasswordHelper.displayName = 'PasswordHelper'

export default PasswordHelper
