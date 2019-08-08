import { HTTP } from '../utils/http.js'

class GoodsModel extends HTTP {
  //商品
  goodsList() {
    return this.request({
      url: 'goods'
    })
  }
  getList() {
    return this.request({
      url: 'goods',
    })
  }
  commentList() {
    return this.request({
      url: "ratings"
    })
  }
}
export { GoodsModel }