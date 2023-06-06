<template>
    <div 
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
    >
    <ul class="navbar-nav">
        <li class="nav-item">
            <sidenav-collapse>
            mnbk
            </sidenav-collapse>
        </li>
    </ul>
        sidebar
    </div>
</template>
<script>
//   import SidenavItem from "./SidenavItem.vue";
  import SidenavCollapse from "./SidenavCollapse.vue";
//   import SidenavCard from "./SidenavCard.vue";
//   import SidenavCollapseItem from "./SidenavCollapseItem.vue";

export default {
    name: "SidenavList",
    components: {
        //   SidenavItem,
          SidenavCollapse,
        //   SidenavCard,
        //   SidenavCollapseItem
    },
    methods: {
          getRoute() {
            // const routeArr = this.$route.path.split("/");
            // return routeArr[1];
            return "som"
          }
    }
};
</script>
  