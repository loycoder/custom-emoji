import clsx from 'clsx';
import * as React from 'react';

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<any>, HTMLDivElement> {
  className?: string;
}

export default function Button(props: Props) {
  return (
    <div {...props} className={clsx('epr-btn', props.className)}>
      {props.children}
    </div>
  );
}
