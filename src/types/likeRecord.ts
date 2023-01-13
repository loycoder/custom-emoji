import AgreeImage from '../assets/images/likeRecord/ic_addone.svg';
import RoseImage from '../assets/images/likeRecord/ic_flower.svg';
import LikeImage from '../assets/images/likeRecord/ic_good.svg';
import applause from '../assets/images/likeRecord/ic_applause.svg';
import fullMark from '../assets/images/likeRecord/ic_full-mark.svg';

export enum ReactionCodeEnum {
  /**
   * 点赞 大拇指
   */
  LIKE = 'LIKE',

  /**
   * 鼓掌
   */
  APPLAUSE = 'APPLAUSE',

  /**
   * 玫瑰花
   */
  ROSE = 'ROSE',

  /**
   * 赞同 + 1
   */
  AGREE = 'AGREE',

  /**
   * 满分
   */
  FULL_MARK = 'FULL_MARK',
}

export const ReactionFaceMap = {
  [ReactionCodeEnum.LIKE]: LikeImage,
  [ReactionCodeEnum.APPLAUSE]: applause,
  [ReactionCodeEnum.ROSE]: RoseImage,
  [ReactionCodeEnum.AGREE]: AgreeImage,
  [ReactionCodeEnum.FULL_MARK]: fullMark,
};
