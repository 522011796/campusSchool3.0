export { default as Logo } from '../../components/Logo.vue'
export { default as MyPagination } from '../../components/MyPagination.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMyPagination = import('../../components/MyPagination.vue' /* webpackChunkName: "components/MyPagination" */).then(c => c.default || c)
