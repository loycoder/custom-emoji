import * as React from 'react';
import * as ReactDOM from 'react-dom';

import type1 from './mock/catetory/type1.svg';
import type2 from './mock/catetory/type2.svg';
import './pc.example.less';
import RecordDemo from './recordDemo';

import { EmojiPicker, RenderEmoji } from '..';
import '../dist/custom-emoji.cjs.production.min.css';

const content = `[匹配不到的表情包][]



[[破涕为笑]]1111111dasd大大

哈哈哈哈哈[举手-红]


[一百分][ok][666]`;

export default function App() {
  return (
    <div className="App">
      <EmojiPicker
        defaultActiveCategoryId={'seewo-school-pc'}
        emojiClassName="emojiClass"
        emojiPickerContainerStyle={{
          width: 300
        }}
        onClickEmoji={(e, data) => {
          console.log('data: ', data);
        }}
        scrollbarArgs={{
          style: {
            width: '100%',
            height: 200
          }
        }}
        preLine={7}
        categories={[
          {
            id: 'seewo-school-pc',
            name: 'pc端',
            icon: <img alt="" src={type1} />
          },
          {
            id: 'seewo-school-mobile',
            name: 'emoji-2',
            icon: <img alt="" src={type2} />
          }
        ]}
      />

      <RecordDemo />

      <RenderEmoji content={content} />
      {/* <div dangerouslySetInnerHTML={{ __html: abc }} /> */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
