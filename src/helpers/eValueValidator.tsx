export function eValueValidator (event: any) {
    const keyCode = event.key
    if (keyCode === 'e' || keyCode === '+' || keyCode === '-' || keyCode === 'E') {
      return false
    }
  }
  