import * as React from 'react';

import { useEmojiClassName } from '../../../config/useConfig';
import { EmojiItem } from '../../../types/exposedTypes';
import AppIcon from '../../atoms/AppIcon';

interface EmojiProps {
  emoji: EmojiItem;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiClass = useEmojiClassName();
  return <AppIcon className={emojiClass} icon={`#${emoji.code}`} />;
};

export default Emoji;
