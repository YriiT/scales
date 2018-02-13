export const defaultSettings = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}

export const mainGet = (url, actionType) => {
  return (dispatch) => {
    return new Promise(resolve => {
      fetch(url, {
        method: 'GET',
        ...defaultSettings
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          dispatch(actionType(data))
        })
        .catch(error => console.log(error))
    })
  }
}

export const mainPost = (url, data, getAfterPost) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ data }),
        ...defaultSettings
      })
        .then(() => getAfterPost())
        .catch(err => dispatch(console.log(err)))
    })
  }
}
