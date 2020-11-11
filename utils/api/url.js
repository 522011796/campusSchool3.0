/**
 * 公共接口地址
 * @type {{session_url: string}}
 */
export const common = {
  session_url: '/proxy/user/user/getSess',
  organization_week: '/proxy/edu/edu/term/current/week',//当前学期学周
  organization_url:  '/proxy/school/hierarchical/get-organize-tree',//组织机构列表
  organization_add:  '/proxy/school/school/dept/add',//组织机构添加
  organization_update:  '/proxy/school/school/dept/update',//组织机构编辑
  organization_delete: '/proxy/school/school/dept/delete',//组织机构删除
  organization_file: '/proxy/school/school/organize/download',//组织机构导入文件模版
  organization_upload: '/proxy/school/school/organize/multyImport'//组织机构导入地址
};
