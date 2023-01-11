import * as React from 'react';
import * as ReactDOM from 'react-dom';

import type1 from './mock/catetory/type1.svg';
import type2 from './mock/catetory/type2.svg';
import './index.css';

import { EmojiPicker } from '..';

export default function App() {
  return (
    <div className="App">
      <EmojiPicker
        defaultActiveCategoryId={'seewo-school-pc'}
        emojiClassName="emojiClass"
        emojiPickerStyle={{
          width: 300,
          height: 300
        }}
        preLine={10}
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
