import * as React from 'react';

export type EmojiClickData = {
  unified: string;
  unifiedWithoutSkinTone: string;
  emoji: string;
  names: string[];
};

/**
 *  @description 内部emoji
 */
export interface EmojiItem {
  code: string;
  name: string;
}

/**
 *  @description 自定义emoji
 */
export interface CustomEmoji extends EmojiItem {
  imageUrl: string | React.ReactNode;
  categoryId: string;
}
