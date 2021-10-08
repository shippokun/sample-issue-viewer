<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "IssueListPage",
  setup() {
    const route = useRoute();
    const page = ref(String(route.query["page"] || 1));
    const perPage = ref(String(route.query["per_page"] || 10));

    watch(
      () => route.query,
      (query) => {
        page.value = String(query["page"]);
        perPage.value = String(query["per_page"]);
      }
    );

    return { page, perPage };
  },
});
</script>
<template>
  <h1>IssueList</h1>
  <p>page: {{ page }}</p>
  <p>perPage: {{ perPage }}</p>
</template>
