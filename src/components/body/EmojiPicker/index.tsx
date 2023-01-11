import * as React from 'react';

import {
  queryCategoryEmojiList,
  splitEmojiToChunks
} from '../../../dataUtils/emojiSelectors';
import Flex, { FlexDirection } from '../../Layout/Flex';
import { useActiveCategoryState } from '../../context/PickerContext';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Emoji from '../Emoji';

import './index.less';
import clsx from 'clsx';
import { usePreLine } from '../../../config/useConfig';

interface IAppProps {}

const EmojiVariationPicker: React.FunctionComponent<IAppProps> = () => {
  const [activeCateory] = useActiveCategoryState();
  const emojiList = queryCategoryEmojiList(activeCateory?.id);
  const preLine = usePreLine();
  const chunks = splitEmojiToChunks(emojiList, preLine);

  return (
    <Scrollbars autoHide style={{ width: '100%', height: 300 }}>
      <Flex
        direction={FlexDirection.COLUMN}
        className={clsx('emoji-variation-picker-wrap')}
      >
        {chunks.map((chunk, chunkIndex) => {
          return (
            <Flex className="emoji-variation-picker-pre-line" key={chunkIndex}>
              {chunk.map((emoji, index) => {
                return <Emoji key={index} emoji={emoji} />;
              })}
            </Flex>
          );
        })}
      </Flex>
    </Scrollbars>
  );
};

export default EmojiVariationPicker;
