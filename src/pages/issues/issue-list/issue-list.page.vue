<script lang="tsx">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
// MEMO: use barrel
import IssueListContainer from './containers/issue-list/issue-list.container.vue';

export default defineComponent({
  name: 'IssueListPage',
  components: { IssueListContainer },
  setup() {
    const route = useRoute();
    const page = ref(String(route.query['page'] || 1));
    const perPage = ref(String(route.query['per_page'] || 10));

    watch(
      () => route.query,
      (query) => {
        page.value = String(query['page']);
        perPage.value = String(query['per_page']);
      }
    );

    return () => (
      <IssueListContainer page={page.value} perPage={perPage.value} />
    );
  },
});
</script>
