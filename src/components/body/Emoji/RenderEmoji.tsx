import * as React from 'react';
import {
  deserializersEmoji,
  DeserializersEmojiprops
} from '../../../dataUtils/emojiConvert';
import Container from '../../Layout/Container';
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
  const htmlStr = deserializersEmoji(
    content,
    ({ svg64, key }: DeserializersEmojiprops) => {
      return (
        <Container inlineFix className="custom-emoji-parse-wrap">
          <img src={svg64} alt="" />
          <span className="custom-emoji-parse-copy-text">{key}</span>
        </Container>
      );
    }
  );
  return (
    <Container
      inlineBlock
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlStr }}
    />
  );
};

// const RenderEmoji

export default RenderEmoji;
