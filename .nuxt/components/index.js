export { default as Logo } from '../../components/Logo.vue'
export { default as MyCheck } from '../../components/MyCheck.vue'
export { default as MyPagination } from '../../components/MyPagination.vue'
export { default as MyRadio } from '../../components/MyRadio.vue'
export { default as MySelect } from '../../components/MySelect.vue'
export { default as MySex } from '../../components/MySex.vue'
export { default as MyTree } from '../../components/MyTree.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMyCheck = import('../../components/MyCheck.vue' /* webpackChunkName: "components/MyCheck" */).then(c => c.default || c)
export const LazyMyPagination = import('../../components/MyPagination.vue' /* webpackChunkName: "components/MyPagination" */).then(c => c.default || c)
export const LazyMyRadio = import('../../components/MyRadio.vue' /* webpackChunkName: "components/MyRadio" */).then(c => c.default || c)
export const LazyMySelect = import('../../components/MySelect.vue' /* webpackChunkName: "components/MySelect" */).then(c => c.default || c)
export const LazyMySex = import('../../components/MySex.vue' /* webpackChunkName: "components/MySex" */).then(c => c.default || c)
export const LazyMyTree = import('../../components/MyTree.vue' /* webpackChunkName: "components/MyTree" */).then(c => c.default || c)
