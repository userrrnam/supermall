import { request } from './request'

export function getDeteil(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.realPrice = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.newPrice = itemInfo.price
        this.desc = itemInfo.desc
        this.columns = columns
        this.services = services
        this.discount = itemInfo.discountDesc
        this.bgColor = itemInfo.discountBgColor
    }
}
export function getRecommend() {
    return request({
        url: '/recommend'
    })
}