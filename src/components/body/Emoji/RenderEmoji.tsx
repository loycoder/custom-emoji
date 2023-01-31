import * as React from 'react';
import { deserializersEmoji } from '../../..';
import './RenderEmoji.less';

interface EmojiProps {
  content: string;
  className?: string;
}

const RenderEmoji: React.FunctionComponent<EmojiProps> = ({
  content,
  className = ''
}) => {
  if (!content.trim().length) {
    return content as any;
  }
  const htmlStr = deserializersEmoji(content);
  return (
    <pre
      className={`emoji-content-wrap ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: htmlStr }}
    />
  );
};

export default RenderEmoji;
