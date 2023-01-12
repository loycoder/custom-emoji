import clsx from 'clsx';
import * as React from 'react';
import { ReactionCodeEnum, ReactionFaceMap } from '../../../types/likeRecord';
import Container from '../../Layout/Container';
import './index.less';

interface ReactionPlanProps {
  className?: string;
  reactionList: Array<ReactionCodeEnum>;
  onClick: (code: ReactionCodeEnum) => void;
  ref?: React.MutableRefObject<undefined>;
}

const ReactionPlan: React.FunctionComponent<ReactionPlanProps> = ({
  className = '',
  reactionList = [],
  onClick,
  ref
}) => {
  return (
    <Container
      ref={ref}
      inlineFix
      className={clsx('emoji-reaction-plan-wrap', className)}
    >
      {reactionList.map((code, index) => {
        return (
          <Container
            inlineFix
            onClick={() => onClick?.(code)}
            key={index}
            className="emoji-reaction-plan-item"
          >
            <img alt="" src={(ReactionFaceMap as any)?.[code]} />
          </Container>
        );
      })}
    </Container>
  );
};

export default ReactionPlan;
