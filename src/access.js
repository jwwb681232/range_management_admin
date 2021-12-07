/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
  const { administrator } = initialState || {};
  return {
    canAdmin: administrator && administrator.access === 'admin',
  };
}
