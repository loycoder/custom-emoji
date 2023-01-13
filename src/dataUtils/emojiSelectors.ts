import emojiData from '../data/index';
import { EmojiItem } from '../types/exposedTypes';

export function queryCategoryEmojiList(categoryId: string): EmojiItem[] {
  if (!categoryId) {
    return [];
  }
  // 分类不存在
  if (!emojiData.hasOwnProperty(categoryId)) {
    return [];
  }
  return (emojiData as any)[categoryId];
}

/**
 * 根据每行表情包拆分
 * @param emojiList
 * @param perChunkSize
 * @returns
 */
export function splitEmojiToChunks(
  emojiList: EmojiItem[],
  perChunkSize: number
): EmojiItem[][] {
  const emojiCount = emojiList.length;
  const total = Math.ceil(emojiCount / perChunkSize);
  const chunksArr = [];
  for (let i = 1; i <= total; i++) {
    chunksArr.push(emojiList.slice((i - 1) * perChunkSize, i * perChunkSize));
  }
  return chunksArr;
}
