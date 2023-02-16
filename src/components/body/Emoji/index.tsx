import * as React from 'react';

import { useEmojiClassName, useEmojiClick } from '../../../config/useConfig';
import { EmojiItem } from '../../../types/exposedTypes';
import Container from '../../Layout/Container';
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
      <svg
        width="24"
        height="24"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <use xlinkHref={`#${emoji.code}`} />
      </svg>
    </Container>
  );
};

export default Emoji;
