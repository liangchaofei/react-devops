// 点击登录按钮后发送 AJAX 请求到服务器执行登录，接收服务器的响应，修改全局 state ，前端重新渲染，渲染时候根据登录标记决定跳转路由
export const login = (account) => (dispatch) => {
    var headers = new Headers({ 'Content-Type': 'application/json' })
    fetch('http://127.0.0.1:5000/login', { method: 'POST', mode: "cors", body: JSON.stringify(account), headers: headers }
    ).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    }).then(function (response) {
        dispatch({ "type": "LOGIN", "Authorization": response.data, "status": response.status })
    }).catch(function (error) {
        dispatch({ "type": "LOGIN", "status": false, "error": "未能连接到服务器" })
    });
};