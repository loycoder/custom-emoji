### 自定义表情包系列组件


#### 存在的意义：
 信鸽业务中，在集体备课评论、教案批注、课件批注，都需要有如下需求：
    1.选择自定义表情包、
    2.点赞、
    3.显示历史点赞记录、
    4. 渲染显示自定义表情包、并支持复制选择

#### Install

```shell
npm install --save @seewo-school/custom-emoji --registry http://nexus.gz.cvte.cn/nexus/repository/npm-group/
```

Use  `.npmrc`

```
@school:registry=http://nexus.gz.cvte.cn/nexus/repository/npm-group/
```



#### Import

```ts
import {
  EmojiPicker,
  ReactionPlan,
  ReactionCodeEnum,
  ReactionRecord,
  deserializersEmoji,
} from '@seewo-school/custom-emoji';

import '@seewo-school/custom-emoji/dist/custom-emoji.cjs.production.min.css';
```


| 组件                    | 说明         |
| ---------------------- | -------------|
| EmojiPicker            | 表情包选择器   |
| ReactionPlan           | 点赞行为面板   |
| ReactionRecord         | 点赞历史记录   |

具体使用详情见 /example

```
  cd /example && npm install
  npm run start



