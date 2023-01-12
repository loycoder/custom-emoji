import AgreeImage from '../assets/images/likeRecord/ic_addone.svg';
import RoseImage from '../assets/images/likeRecord/ic_flower.svg';
import LikeImage from '../assets/images/likeRecord/ic_good.svg';
import handclap from '../assets/images/likeRecord/ic_handclap.svg';
import fullMark from '../assets/images/likeRecord/ic_full-mark.svg';

export enum ReactionCodeEnum {
  LIKE = 'LIKE',
  HANDCLAP = 'HANDCLAP',
  ROSE = 'ROSE',
  AGREE = 'AGREE', // +1
  FULL_MARK = 'FULL_MARK',
}

export const ReactionFaceMap = {
  [ReactionCodeEnum.LIKE]: LikeImage,
  [ReactionCodeEnum.HANDCLAP]: handclap,
  [ReactionCodeEnum.ROSE]: RoseImage,
  [ReactionCodeEnum.AGREE]: AgreeImage,
  [ReactionCodeEnum.FULL_MARK]: fullMark,
};
