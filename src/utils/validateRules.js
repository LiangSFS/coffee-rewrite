/**
 *  Created by liangsfs on 2019-09-23
 */

export const Regular = {
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  emailMsg: '请输入有效邮箱信息',

  password: /[^\t\r\n]{6-10}/,
  passwordMsg: '请输入6到10位密码, 除空白字符'

}
