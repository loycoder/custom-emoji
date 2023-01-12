import * as React from 'react';

import { useEmojiClassName, useEmojiClick } from '../../../config/useConfig';
import { EmojiItem } from '../../../types/exposedTypes';
import Flex from '../../Layout/Flex';
import AppIcon from '../../atoms/AppIcon';

interface EmojiProps {
  emoji: EmojiItem;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiClass = useEmojiClassName();
  const emojiClick = useEmojiClick();

  return (
    <Flex onClick={e => emojiClick(e, emoji)}>
      <AppIcon className={emojiClass} icon={`#${emoji.code}`} />
    </Flex>
  );
};

export default Emoji;
