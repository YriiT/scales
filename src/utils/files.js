
export const uploadFiles = (url, files) => {
  return new Promise((resolve, reject) => {
    const filesToSubmit = files
    if (filesToSubmit.length === 0) {
      resolve()
      return
    }

    const fileForm = new FormData()
    filesToSubmit.forEach((fileList) => {
      fileForm.append(fileList.file.name, fileList.file, fileList.file.name)
    })
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: fileForm
    })
      .then((resp) => resp.json())
      .then(data => resolve(data))
  })
}


export const bytesToMegaBytes = (bytesCount) => {
  return bytesCount / (1024 * 1024)
}

export const fileSizeIsNotTooLarge = (fileSize) => {
  const maxFileSize = 3 // MB
  return bytesToMegaBytes(fileSize) > maxFileSize
}

export const getFileSize = (file) => {
  if (file && file[0]) {
    return file[0].size
  }

  return null
}

export const fileIsTooLarge = (file) => {
  const size = getFileSize(file)

  if (size == null) {
    return false
  }

  return fileSizeIsNotTooLarge(size)
}
