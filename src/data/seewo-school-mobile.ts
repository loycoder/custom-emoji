import mock from './mock';

export default mock.data.reverse().map((vo) => {
  return {
    code: vo.iconName,
    label: vo.iconName,
  };
});
