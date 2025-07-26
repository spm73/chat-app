import { ValidatorFn , Validators } from '@angular/forms';

export const VALIDATORS = [Validators.required].concat(toValidatorFns(
  [(psswd) => psswd.length >= 8, 'Password must have at least 8 characters'],
  [(psswd) => psswd.match(/\d/g) != null, 'Password must contain a digit'],
  [(psswd) => psswd.match(/[A-Z]/g) != null, 'Password must contain a capital letter'],
  [(psswd) => contains(psswd, '|@#~"·$%&/()=?¿\\€¡!\''.split('')), 'Password must contain a symbol']
))

function toValidatorFn(predicate: (_: string) => boolean, errorMsg: string): ValidatorFn {
  return control => {
    return predicate(control.value) ? null : { error: errorMsg };
  }
}

function toValidatorFns(...validators: [((_: string) => boolean), string][]): ValidatorFn[] {
  return validators.map(validator => toValidatorFn(validator[0], validator[1]));
}

function contains(str: string, chars: string[]): boolean {
  return str.split('').some(strChar => chars.some(char => char === strChar));
}