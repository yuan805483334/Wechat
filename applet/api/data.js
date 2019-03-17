import base from '../api/index.js'

export default class user{
  constructor(){
    this.api=new base
  }

  CheckLogin(code) {
    let data = {
      code: code
    }
    return this.api.Post("/Sign/CheckLogin", data).then(res => res.data)
  }
}