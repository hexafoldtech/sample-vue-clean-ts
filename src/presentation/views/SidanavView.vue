<template>
    <div>
        <SidenavIndex/>
    </div>
</template>

<script lang="ts">
import SidenavIndex from "../components/molecules/sidenav/SidenavIndex.vue"
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    SidenavIndex
  },
})
export default class SidenavView extends Vue{
  
   
}
</script>