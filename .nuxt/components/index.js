export { default as Logo } from '../../components/Logo.vue'
export { default as MyPagination } from '../../components/MyPagination.vue'
export { default as MySelect } from '../../components/MySelect.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMyPagination = import('../../components/MyPagination.vue' /* webpackChunkName: "components/MyPagination" */).then(c => c.default || c)
export const LazyMySelect = import('../../components/MySelect.vue' /* webpackChunkName: "components/MySelect" */).then(c => c.default || c)
