const initState = {
  "Authorization": null,
  "Online": false
}
export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { "Authorization": action.Authorization, "Online": action.status }
      break;
    case "REMOVEITEM":
      break;
    case "MARKDONE":
      break;
    case "ADDITEM":
      break;
  }
  return state
}