
export const defaultSettings = {
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

// ------Юр лица-----

// let test = 9181
// let prod = 9180
// const ulport = test
const ulServerAdress = `http://namezis.com/api/current_weight`
export const currentWeight = `${ulServerAdress}/current_weight`
