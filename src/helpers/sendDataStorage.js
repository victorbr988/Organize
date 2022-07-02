export const userLoginStorage = (id, name) => {
  localStorage.setItem('UserData', JSON.stringify({id, name: name ? name : id}))
}

export const getUser = (key) => {
  const userData = localStorage.getItem(key)
  return JSON.parse(userData);
}