<template>
  <div>
    sidebar

    <div
    v-if="layout === 'custom'"
    class="position-absolute w-100 min-height-300 top-0"
    :style="{
      'background-image': 'url(' + image + ')',
      'background-position-y': '50%'
    }"
  >
  <span class="mask bg-success opacity-6"></span>
</div>
<div
    v-show="layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${darkMode ? 'bg-trasnparent' : 'bg-success'}`"
  />

<aside
id="sidenav-main"
class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 ms-4"
:class="` ${sidebarType} ${
      isRTL ? 'fixed-end me-3 rotate-caret' : 'fixed-start ms-3'
    } ${layout === 'landing' ? 'bg-transparent shadow-none' : ''}`"
>
    <div class="sidenav-header">
      <router-link class="m-0 navbar-brand" to="/">
        <img
          :src="
            layout === 'landing' || darkMode || sidebarType === 'bg-default'
              ? logoWhite
              : logo
          "
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span class="ms-2 font-weight-bold">Argon Dashboard 2 PRO</span>
      </router-link>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list/>
</aside>

  </div>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/presentation/assets/img/logo-ct-dark.png";
import logoWhite from "@/presentation/assets/img/logo-ct.png";
import image from "@/presentation/assets/img/profile-layout-header.jpg";
import sidebar from "../../../../data/store/sidebar"

import { mapState } from "vuex";

export default {
  name: "SidenavIndex",
  components: {
    SidenavList
  },
  data() {
    return {
      logo,
      logoWhite,
      image
    };
  },
  computed: {
    ...mapState(sidebar,["layout", "isRTL", "sidebarType", "darkMode"])
  },
  beforeUnmount() {
    this.$store.state.image;
  }
};
</script>
  