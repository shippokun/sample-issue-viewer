<script lang="tsx">
import { useRoute } from 'vue-router';
import { defineComponent, ref } from 'vue';

import IssueDetailContainer from './containers/issue-detail/issue-detail.container.vue';

export default defineComponent({
  name: 'IssueDetailPage',
  components: { IssueDetailContainer },
  setup() {
    const route = useRoute();
    const issueId = ref(String(route.params['id']));

    return () => <IssueDetailContainer issueId={issueId.value} />;
  },
});
</script>
