import * as React from 'react';

import { useBodyRef } from '../context/ElementRefContext';
import Flex, { FlexDirection } from '../Layout/Flex';

import './body.less';
import CategoryNavigation from '../navigation';

import EmojiPicker from './EmojiPicker';
import { ClassNames } from '../../DomUtils/classNames';
import { useEmojiPickerStyle } from '../../config/useConfig';

interface IAppProps {}

const Body: React.FunctionComponent<IAppProps> = () => {
  const BodyRef = useBodyRef();
  const style = useEmojiPickerStyle();
  return (
    <Flex
      className={ClassNames.scrollBody}
      style={style}
      ref={BodyRef}
      direction={FlexDirection.COLUMN}
    >
      <CategoryNavigation />
      <EmojiPicker />
    </Flex>
  );
};

export default Body;
