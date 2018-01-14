import moment from 'moment'
import { DateFormat as dateFormat } from 'utils/dates.js'

//const dateFormat = DateFormat

const SHORT_DESCRIPTION = 150
const LONG_DESCRIPTION = 250
const STANDART = 50


export const constants = { SHORT_DESCRIPTION, LONG_DESCRIPTION }

export const isRequired = (item, itemName, errText = 'Обязательное поле') => {
  const errors = {}
  if (!item[itemName] || item[itemName].length === 0) {
    errors[itemName] = errText
  }

  return errors
}

export const isLongerThan = (item, itemName, len, errText = `Длина поля не должна быть меньше ${len} символов`) => {
  const errors = {}

  if (item[itemName] && item[itemName].length < len) {
    errors[itemName] = errText
  }

  return errors
}

export const isShorterThan = (item, itemName, len, errText = `Длина поля не должна превышать ${len} символов`) => {
  const errors = {}
  if (item[itemName] && item[itemName].length > len) {
    errors[itemName] = errText
  }

  return errors
}

export const isChoosedDropdownElement = (item, itemName, errText = 'Выберите значение') => {
  const errors = {}
  if (!item[itemName] || item[itemName] == 0) {
    errors[itemName] = errText
  }

  return errors
}

export const onlyNumbers = (item, itemName) => {
  const errors = {}
  if (item[itemName] && /^\d*$/.test(item[itemName]) === false) {
    errors[itemName] = 'Только цифры'
  }

  return errors
}

export const hasNotNumbers = (item, itemName) => {
  const errors = {}

  if (/[0-9]/.test(item[itemName]))
    errors[itemName] = 'Поле не должно содержать цифр'

  return errors
}

export const isValidDateFormat = (item, itemName) => {
  const errors = {}
  const correctDate = '01-01-1900'
  const res = moment(item[itemName], dateFormat, true)
  // if (!res.isValid() && item[itemName]) {
  //   errors[itemName] = `Не корректная дата 1`
  // }
  if (moment(item[itemName], dateFormat) < moment(correctDate, dateFormat)) {
    errors[itemName] = 'Не корректная дата'
  }
  if (res.isAfter(moment())) {
    errors[itemName] = 'Не корректная дата'
  }
  return errors
}

// export const isOldDate = (item, itemName, correctDate) => {
//   const errors = {}
//   if (moment(item[itemName], dateFormat) < moment(correctDate, dateFormat)) {
//     errors[itemName] = 'Не корректная дата'
//   }
//   return errors
// }

// export const isDateInFuture = (item, itemName) => {
//   const errors = {}
//   const res = moment(item[itemName], DateTimeFormat, true)
//   if (res.isAfter(moment())) {
//     errors[itemName] = 'Не корректная дата'
//   }

//   return errors
// }

export const normalizePhone = (phone) => {
  if (!phone)
    return phone

  return phone.replace(/[\+\s\-\(\)]/g, '')
}

export const isPhoneCorrect = (item, itemName) => {
  let phone = item[itemName]

  if (!phone || phone.length === 0)
    return {}

  phone = normalizePhone(phone)

  const test = {}
  test[itemName] = phone

  return uniteValidators(
    () => onlyNumbers(test, itemName),
    () => haveLength(test, itemName, 10))
}

export const haveLength = (item, itemName, len) => {
  const errors = {}

  if (item[itemName] && item[itemName].length !== len)
    errors[itemName] = `Длина должна быть ${len} символов`

  return errors
}

//source: http://murzix.ru/2011/10/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%B8%D0%BD%D0%BD-%D0%BD%D0%B0-javascript/
function checkINN(inputNumber) {
  //преобразуем в строку
  inputNumber = "" + inputNumber;
  //преобразуем в массив
  inputNumber = inputNumber.split('');
  //для ИНН в 10 знаков
  if ((inputNumber.length == 10)
    && (inputNumber[9] == ((2 * inputNumber[0] + 4 * inputNumber[1] + 10 * inputNumber[2] + 3 * inputNumber[3] + 5 * inputNumber[4] + 9 * inputNumber[5] + 4 * inputNumber[6] + 6 * inputNumber[7] + 8 * inputNumber[8]) % 11) % 10)) {
    return true;
    //для ИНН в 12 знаков
  } else if ((inputNumber.length == 12) && ((inputNumber[10] == ((7 * inputNumber[0] + 2 * inputNumber[1] + 4 * inputNumber[2] + 10 * inputNumber[3] + 3 * inputNumber[4] + 5 * inputNumber[5] + 9 * inputNumber[6] + 4 * inputNumber[7] + 6 * inputNumber[8] + 8 * inputNumber[9]) % 11) % 10) && (inputNumber[11] == ((3 * inputNumber[0] + 7 * inputNumber[1] + 2 * inputNumber[2] + 4 * inputNumber[3] + 10 * inputNumber[4] + 3 * inputNumber[5] + 5 * inputNumber[6] + 9 * inputNumber[7] + 4 * inputNumber[8] + 6 * inputNumber[9] + 8 * inputNumber[10]) % 11) % 10))) {
    return true;
  } else {
    return false;
  }
}


export const isInnValid = (item, itemName) => {
  const errors = {}

  if (!item[itemName])
    return errors

  if (!checkINN(item[itemName]))
    errors[itemName] = 'Введите корректный ИНН'

  return errors
}

export const isCorrectLogin = (item, itemName) => {
  const errors = {}

  if (!(/[A-Za-z0-9]/.test(item[itemName])))
    errors[itemName] = 'Поле должно содержать только латинские символы и цифры'

  return errors
}


export const noLatinSymbols = (item, itemName) => {
  const errors = {}

  if (/[a-zA-Z]/.test(item[itemName]))
    errors[itemName] = 'Поле не должно содержать латинских символов'

  return errors
}

export const noCyrillicSymbols = (item, itemName) => {
  const errors = {}

  if (/[а-яёА-ЯЁ]/.test(item[itemName]))
    errors[itemName] = 'Поле не должно содержать кириллических символов'

  return errors
}

export const isCorrectLanguage = (item, itemName, language) => {
  if (item[itemName]) {
    const validator = language === 'ru' ? noLatinSymbols : noCyrillicSymbols
    return validator(item, itemName)
  } else return {}
}

export const isCorrectTextField = (item, itemName, required = true, language = 'ru', maxLength = 50) => {
  const validator = required ? isRequired : (item, itemName) => ({})
  return uniteValidators(
    () => validator(item, itemName),
    () => isShorterThan(item, itemName, maxLength),
    () => isCorrectLanguage(item, itemName, language),
    () => hasNotNumbers(item, itemName)
  )
}

export const isRequiredWithNoLatinSymbol = (item, itemName) => uniteValidators(
  () => isRequired(item, itemName),
  () => noLatinSymbols(item, itemName)
)

export const isCorrectEmail = (item, itemName) => {
  const errors = {}

  if (!item[itemName])
    return errors;

  // source: http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(item[itemName])) {
    errors[itemName] = 'Введите корректный email адрес'
  }

  return errors
}

export const uniteValidators = (...validators) => {

  let errors = {}

  validators.every((element) => {
    const res = element()

    errors = Object.assign({}, errors, res)

    return Object.keys(res).length === 0
  })

  return errors
}
export const isCorrectFileSize = (file, itemName, size = 100000000) => {
  let errors = {}
  if (file && file.size > size) {
    errors[itemName] = 'Файл слишком большой'
  }
  return errors
}
