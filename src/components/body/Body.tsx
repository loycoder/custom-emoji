import * as React from 'react';

import Flex, { FlexDirection } from '../Layout/Flex';
import { useBodyRef } from '../context/ElementRefContext';

import './body.less';
import CategoryNavigation from '../navigation';

import EmojiPicker from './EmojiPicker';

import { ClassNames } from '../../DomUtils/classNames';
import { useEmojiPickerContainerStyle } from '../../config/useConfig';

interface IAppProps {}

const Body: React.FunctionComponent<IAppProps> = () => {
  const BodyRef = useBodyRef();
  const containerStyle = useEmojiPickerContainerStyle();
  return (
    <Flex
      className={ClassNames.scrollBody}
      style={containerStyle}
      ref={BodyRef}
      direction={FlexDirection.COLUMN}
    >
      <CategoryNavigation />
      <EmojiPicker />
    </Flex>
  );
};

export default Body;
