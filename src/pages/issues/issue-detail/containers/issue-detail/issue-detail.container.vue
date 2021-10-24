<script lang="tsx">
import { defineComponent, onMounted, onUnmounted } from 'vue';

import { useIssueStore } from '../../../../../stores/issues/facades';

import IssueDetailComponent from '../../components/issue-detail/issue-detail.component.vue';

type Props = {
  issueId: string;
};

export default defineComponent({
  name: 'IssueDetailContainer',
  props: {
    issueId: {
      type: String,
      required: true,
    },
  },
  components: { IssueDetailComponent },
  setup(props: Props) {
    const { issue, fetch, isFetching } = useIssueStore();

    onMounted(() => {
      fetch({ id: props.issueId });
    });

    return () => (
      <IssueDetailComponent issue={issue.value} isFetching={isFetching.value} />
    );
  },
});
</script>
