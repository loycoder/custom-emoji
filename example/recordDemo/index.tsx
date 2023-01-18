/* eslint-disable sort-keys */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import { ReactionCodeEnum, ReactionPlan, ReactionRecord } from '../../dist';
import { cloneDeep, random, uniqueId } from 'lodash';
import { useState, useCallback } from 'react';
import { onRecordClick } from '../../dist/components/Reaction/ReactionRecord';

interface IAppProps {}

function getRandomChineseWord() {
  const _rsl = '';
  const _randomUniCode = Math.floor(
    Math.random() * (40870 - 19968) + 19968
  ).toString(16);
  eval('_rsl=' + '"\\u' + _randomUniCode + '"');
  return _rsl;
}

const createRecord = (): RootObject[] => {
  return Array.from({ length: 3 }).map((_item, key) => {
    const map = Object.values(ReactionCodeEnum);

    const name = Array.from({ length: 10 })
      .map(() => getRandomChineseWord())
      .join('');

    return {
      id: uniqueId(),
      label: 'nick_' + random(100000, 90000),
      type: map[key] || map[0],
      recordList: Array.from({ length: random(2, 630) }).map(() => ({
        id: uniqueId(),
        label: name
      }))
    };
  });
};

interface RootObject {
  id: string;
  label: string;
  type: string;
  recordList: RecordList[];
}

interface RecordList {
  id: string;
  label: string;
}

const recordDemo: React.FunctionComponent<IAppProps> = props => {
  const mockData = createRecord();
  const [recordList, setRecordList] = useState<RootObject[]>(mockData);
  const currentUserInfo = {
    uuid: 'test',
    name: 'loy'
  };

  const onContainerClick: onRecordClick = useCallback(
    (e, recordId) => {
      const cloneList = cloneDeep(recordList);
      const findIndex = cloneList.findIndex(vo => vo.id === recordId);
      const childrenList = cloneList[findIndex].recordList;

      const findMeIndex = childrenList.findIndex(
        vo => vo.id === currentUserInfo.uuid
      );
      if (findMeIndex !== -1) {
        childrenList.splice(findMeIndex, 1);
      } else {
        childrenList.unshift({
          id: currentUserInfo.uuid,
          label: currentUserInfo.name
        });
      }
      cloneList[findIndex].recordList = childrenList;
      setRecordList(cloneList);
    },
    [currentUserInfo, recordList]
  );

  return (
    <div>
      <div
        style={{
          maxWidth: 400,
          margin: '20px 0'
        }}
      >
        {recordList.map((vo, index) => {
          return (
            <ReactionRecord
              onRecordClick={onContainerClick}
              recordId={vo.id}
              className="reaction-record-override"
              key={index}
              recordList={vo.recordList}
              type={vo.type as any}
            />
          );
        })}
      </div>

      <div
        style={{
          maxWidth: 200
        }}
      >
        <ReactionPlan
          onClick={code => {
            console.log('code: ', code);
          }}
          reactionList={[...Object.values(ReactionCodeEnum)]}
        />
      </div>
    </div>
  );
};

export default recordDemo;
