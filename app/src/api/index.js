import requests from "./request.js";
import mockRequests from './mockRequest'
// 三级联动的接口
export const reqCategoryList = () => {
        return requests({
                url: '/product/getBaseCategoryList',
                method: 'get'
        })
}
// 获取banner（Home首页轮播图接口）
export const reqBannerList = () => {
        return mockRequests({
                url: '/banner',
                method: 'get'
        })
}
// 获取floor的数据
export const reqFloorList = () => {
        return mockRequests.get('/floor')
}
// 获取搜索模块数据  地址/api/list  请求方式post    参数：需要带参数
export const reqGetSearchInfo = (params) => requests({
        url: "/list",
        method: 'post',
        data: params
})
// 获取详情页的数据i接口，请求方式为get
export const reqGetDetailInfo = (skuId) => {
        return requests({ url: `/item/${skuId}`, method: 'get' })
};
// 添加购物车（对已有物品进行数量改动）
// /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
// 删除购物车产品的接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })
// 修改商品选中状态的接口
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
// 获取验证码的接口
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 注册的接口
export const reqUserRegister = (data) => requests({ url: `/user/passport/register`, data, method: 'post' })
// 登录接口
export const reqUserLogin = (data) => requests({ url: `/user/passport/login`, data, method: 'post' })
// 获取用户的信息（需要带着用户的token向服务器要用户信息）
export const reqUserInfo = () => requests({ url: `/user/passport/auth/getUserInfo`, method: 'get' })
// 退出登录的接口
export const reqUserLogout = () => requests({ url: `/user/passport/logout`, method: 'get' })
// 获取用户地址信息
export const reqUserAddress = () => requests({ url: `/user/userAddress/auth/findUserAddressList`, method: 'get' })
// 获取交易的清单
export const reqOrderInfo = () => requests({ url: `/order/auth/trade`, method: 'get' })
// 提交订单的接口
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })
// 获取订单支付信息的接口
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
// 获取订单支付状态的接口
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: `get` })
// 获取个人中心的数据的接口
export const reqMyorderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' })

