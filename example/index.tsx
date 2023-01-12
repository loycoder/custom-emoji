import * as React from 'react';
import * as ReactDOM from 'react-dom';

import type1 from './mock/catetory/type1.svg';
import type2 from './mock/catetory/type2.svg';
import './pc.example.less';
import RecordDemo from './recordDemo';

import { EmojiPicker } from '..';

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
            height: 400,
            border: '1px solid red'
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

      <hr />
      <RecordDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
