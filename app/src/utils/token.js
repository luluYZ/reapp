// 对外暴露一个函数
// 存储token
export const setToken=(token)=>{
    localStorage.setItem('TOKEN',token)
}
// 获取token
export const getToken=()=>{
   return  localStorage.getItem('TOKEN')
}
// 清除token
export const removeToken=()=>{
    return localStorage.removeItem('TOKEN')
}