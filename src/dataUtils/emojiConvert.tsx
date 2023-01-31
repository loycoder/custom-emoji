import React, { ReactElement } from 'react';
import emojiList from '../data/seewo-icon-api.json';
import { renderToStaticMarkup } from 'react-dom/server';
import AppIcon from '../components/atoms/AppIcon';
import './emojiConvert.less';

export type RenderEmojiComponentParams = {
  html: string;
  svg64: string;
  key: string;
};

export type DeserializersEmoji = (
  content: string,
  renderComponent?: (emoji: { code: string; label: string }) => ReactElement
) => string;

export const EMOJI_REG = /\[([a-z]|[A-Z]|[0-9]|-|[\u4e00-\u9fa5])+\]/g;
/**
 * 将文本中的 emoji字符串 转为图片表情包
 * @param content
 * @returns
 */
export const deserializersEmoji: DeserializersEmoji = (
  content,
  renderComponent = null
) => {
  if (!content.trim().length) {
    return content;
  }
  if (!(content.includes('[') && content.includes(']'))) {
    return content;
  }

  return content.replace(EMOJI_REG, label => {
    const emoji = emojiList.find(v => v.label === label);
    if (!emoji) return label;
    const component = renderComponent ? (
      renderComponent(emoji)
    ) : (
      <div className="custom-emoji-parse-wrap">
        <AppIcon icon={`#${emoji.code}`} />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAACdJREFUSA3t0DEBAAAAwqD1T+1vBohAYcCAAQMGDBgwYMCAAQMGfmAOLgABrSzR1AAAAABJRU5ErkJggg=="
          alt={emoji.label}
        />
      </div>
    );

    return renderToStaticMarkup(component);
  });
};
