import * as React from 'react';

export type EmojiClickData = EmojiItem;

export type EmojiClickProps = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
  emojiData: EmojiClickData
) => void;

/**
 *  @description 内部emoji
 */
export interface EmojiItem {
  code: string;
  label: string;
}

/**
 *  @description 自定义emoji
 */
export interface CustomEmoji extends EmojiItem {
  imageUrl: string | React.ReactNode;
  categoryId: string;
}

export * from './likeRecord';
