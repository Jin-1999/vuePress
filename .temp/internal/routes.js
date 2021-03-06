/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\person\\blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-e445b00e",
    path: "/theme-reco/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-e445b00e").then(next)
    },
  },
  {
    path: "/theme-reco/index.html",
    redirect: "/theme-reco/"
  },
  {
    name: "v-47ba4132",
    path: "/theme-reco/plugin.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-47ba4132").then(next)
    },
  },
  {
    name: "v-25e5b222",
    path: "/theme-reco/api.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-25e5b222").then(next)
    },
  },
  {
    name: "v-47a488f8",
    path: "/theme-reco/theme.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-47a488f8").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]