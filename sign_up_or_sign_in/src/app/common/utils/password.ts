export function passwordRegex(password: string): boolean {
  return (
    lowercaseRegex(password) &&
    uppercaseRegex(password) &&
    numberRegex(password) &&
    specialCharacterRegex(password)
  )
}

export function lowercaseRegex(string: string): boolean {
  return /[a-z]+/.test(string)
}

export function uppercaseRegex(string: string): boolean {
  return /[A-Z]+/.test(string)
}

export function numberRegex(string: string): boolean {
  return /[0-9]+/.test(string)
}

export function specialCharacterRegex(string: string): boolean {
  return /[*@!#%&()^~{}]+/.test(string)
}
