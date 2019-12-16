<template>
  <div class="store">
    <StorePageComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import StorePageComponent from "@/components/Store/Store.vue";

export default {
  name: "store",
  components: {
    StorePageComponent
  }
};
</script>
