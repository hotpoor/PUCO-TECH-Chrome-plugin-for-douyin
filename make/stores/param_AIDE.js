const countryOptions = ['AM', 'CN']

const nameOptions = [
  { label: 'me', key: 'ME' },
  { label: 'your', key: 'YOUR' },
  { label: 'her', key: 'HER' }
]

const ageOptions = [
  { label: '17岁', key: '17' },
  { label: '18岁', key: '18' }
]

function getList(data) {
  return [{a:1,b:2}]
}

function publicFilter(ele) {
  if(ele){
    return '有效'
  }else{
    return '无效'
  }
}

const contact_name="店小二"
const contact_mobile="18018629009"
const contact_wechat="18018629009"
const cooperation_desc="您好！\nLuck幸运珠宝，专业认证，佣金佳。水贝对水贝品质保障，高净值带货优选。\n诚意期待与您有机会合作呢。"

export {

 contact_name,
 contact_mobile,
 contact_wechat,
 cooperation_desc
}