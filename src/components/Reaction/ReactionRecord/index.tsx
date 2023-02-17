import clsx from 'clsx';
import * as React from 'react';
import { ReactionFaceMap, ReactionCodeEnum } from '../../../types/likeRecord';
import Container from '../../Layout/Container/index';
import './index.less';

interface IAppProps {
  className?: string;
  ref?: React.MutableRefObject<undefined>;
  type: typeof ReactionCodeEnum;
  recordId: string;
  recordList?: Array<Record>;
  onRecordClick?: (e: unknown, recordId: string, recordList: Record[]) => void;
}

export type onRecordClick = (
  e: unknown,
  recordId: string,
  recordList: Record[]
) => void;

type Record = {
  userId: string;
  likeUid?: string;
  label: string;
};

/**
 * 用户点赞记录
 * @param param0
 * @returns
 */
const ReactionRecord: React.FunctionComponent<IAppProps> = ({
  className,
  ref,
  type,
  recordList = [],
  onRecordClick = null,
  recordId
}) => {
  const emojiType = (ReactionFaceMap as any)?.[type as any];
  if (!emojiType) {
    // eslint-disable-next-line no-console
    console.warn('ReactionRecord type is not match');
    return null;
  }

  return (
    <Container
      data-id={recordId}
      onClick={e => onRecordClick?.(e, recordId, recordList)}
      inlineFix
      ref={ref}
      className={clsx('emoji-reaction-record-wrap', className)}
    >
      <div className="emoji-reaction-record-img">
        <img alt="" src={emojiType} />
      </div>

      <div className="emoji-reaction-record-label-container">
        {recordList.map((item, index) => {
          const length = recordList.length;
          return (
            <div key={index} className={clsx('emoji-reaction-record-label')}>
              <span
                className={clsx({
                  'emoji-reaction-record-label-ellipsis': length > 4
                })}
              >
                {item.label}
              </span>
              {index !== length - 1 && ','}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ReactionRecord;
