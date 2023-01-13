import * as React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {
  queryCategoryEmojiList,
  splitEmojiToChunks
} from '../../../dataUtils/emojiSelectors';
import Container, { FlexDirection } from '../../Layout/Container';
import { useActiveCategoryState } from '../../context/PickerContext';
import Emoji from '../Emoji';

import './index.less';
import clsx from 'clsx';

import {
  useCategoriesConfig,
  usePreLine,
  useScrollbarArgs
} from '../../../config/useConfig';

interface IAppProps {}

const EmojiVariationPicker: React.FunctionComponent<IAppProps> = () => {
  const [activeCateory] = useActiveCategoryState();
  const emojiList = queryCategoryEmojiList(activeCateory?.id);
  const preLine = usePreLine();
  const chunks = splitEmojiToChunks(emojiList, preLine);
  const scrollbarArgs = useScrollbarArgs();
  const categories = useCategoriesConfig();
  const scrollbarStyle = scrollbarArgs.style || {};

  return (
    <>
      {categories.map((cateory, index) => {
        const _scrollbarArgs = {
          ...scrollbarArgs,
          style: {
            ...scrollbarStyle,
            display:
              cateory?.id === activeCateory?.id
                ? scrollbarArgs?.style?.display || 'unset'
                : 'none'
          }
        };
        return (
          <Scrollbars key={index} autoHide {..._scrollbarArgs}>
            <Container
              direction={FlexDirection.COLUMN}
              className={clsx('emoji-variation-picker-wrap')}
            >
              {chunks.map((chunk, chunkIndex) => {
                return (
                  <Container
                    className="emoji-variation-picker-pre-line"
                    key={chunkIndex}
                  >
                    {chunk.map((emoji, index) => {
                      return <Emoji key={index} emoji={emoji} />;
                    })}
                  </Container>
                );
              })}
            </Container>
          </Scrollbars>
        );
      })}
    </>
  );
};

export default EmojiVariationPicker;
