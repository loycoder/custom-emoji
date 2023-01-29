import * as React from 'react';

import { useEmojiClassName, useEmojiClick } from '../../../config/useConfig';
import { EmojiItem } from '../../../types/exposedTypes';
import Container from '../../Layout/Container';
import AppIcon from '../../atoms/AppIcon';

interface EmojiProps {
  emoji: EmojiItem;
}

const Emoji: React.FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiClass = useEmojiClassName();
  const emojiClick = useEmojiClick();

  return (
    <Container className={emojiClass} onClick={e => emojiClick(e, emoji)}>
      <AppIcon icon={`#${emoji.code}`} />
    </Container>
  );
};

export default Emoji;
