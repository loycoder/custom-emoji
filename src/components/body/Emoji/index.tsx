import * as React from 'react';

import { useEmojiClassName, useEmojiClick } from '../../../config/useConfig';
import { EmojiItem } from '../../../types/exposedTypes';
import Container from '../../Layout/Container';
import AppIcon from '../../atoms/AppIcon';
import clsx from 'clsx';

interface EmojiProps {
  emoji: EmojiItem;
  className?: string;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({
  emoji,
  className = ''
}) => {
  const emojiClass = useEmojiClassName();
  const emojiClick = useEmojiClick();

  return (
    <Container
      className={clsx(emojiClass, className)}
      onClick={e => emojiClick(e, emoji)}
    >
      <AppIcon icon={`#${emoji.code}`} />
    </Container>
  );
};

export default Emoji;
