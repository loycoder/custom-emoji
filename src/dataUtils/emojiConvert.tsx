import React, { ReactElement } from 'react';
import json from '../data/seewo-icon-api.json';
import { renderToStaticMarkup } from 'react-dom/server';
import svg64 from '../DomUtils/svgTo64';

export function convertJSon() {
  const obj: { [key: string]: string } = {};
  json.forEach(item => {
    obj[item.label.replace(/^ic_/, '')] = item.code;
  });
  return obj;
}

export interface DeserializersEmojiprops {
  html: string;
  svg64: string;
  key: string;
}

/**
 * 将文本中的 emoji字符串 转为图片表情包
 * @param content
 * @returns
 */
export function deserializersEmoji(
  content: string,
  renderComponent?: (res: DeserializersEmojiprops) => ReactElement
): string {
  if (!content.trim().length) {
    return content;
  }
  if (!(content.includes('[') && content.includes(']'))) {
    return content;
  }
  const emojiKeyMap = convertJSon();

  return content.replace(
    /\[(([a-z]|[A-Z]|[0-9]|-|[\u4e00-\u9fa5])+)\]/g,
    (_match, key) => {
      if (emojiKeyMap[key]) {
        const svgElement = document.getElementById(emojiKeyMap[key]);
        if (!svgElement) {
          console.error(`svg 元素:${emojiKeyMap[key]}找不到`);
          return key;
        }
        const html = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">${svgElement?.innerHTML}</svg>`;
        const base64fromSVG = svg64(html);

        const component = !renderComponent ? (
          <img src={base64fromSVG} alt="" />
        ) : (
          renderComponent({ svg64: base64fromSVG, key, html })
        );

        // 服务端渲染将组件转为字符串
        return renderToStaticMarkup(component);
      }
      return key;
    }
  );
}
