import data from './seewo-icon-api.json';

export default data.map((vo) => ({
  code: vo.code,
  label: vo.label,
}));
