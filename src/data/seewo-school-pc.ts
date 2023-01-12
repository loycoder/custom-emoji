import mock from './mock';

export default mock.data.map((vo) => {
  return {
    code: vo.iconName,
    label: vo.iconName,
  };
});
