// [
//   {
//     "code": "weixiao",
//     "label": "微笑"
//   },

//   {
//     "code": "heihei",
//     "label": "嘿嘿"
//   },
//   {
//     "code": "huaixiao",
//     "label": "坏笑"
//   }
// ]

import mock from './mock';

export default mock.data.reverse().map((vo) => {
  return {
    code: vo.iconName,
    label: vo.iconName,
  };
});
