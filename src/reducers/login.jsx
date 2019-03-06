const initState = {
  "Authorization": sessionStorage.getItem("Authorization"),     // 当页面刷新 js 被重新执行，尝试从 sessionStorage 中读取登录 token
  "Online": sessionStorage.getItem("Online")
}
export default (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      // 当用户登录，将用户获得的 jwt token 存储到 sessionStorage 中，刷新不会要求再登录
      sessionStorage.setItem("Authorization", action.Authorization)
      sessionStorage.setItem("Online", action.status)
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