<script lang="tsx">
import { useRouter } from 'vue-router';
import { defineComponent, PropType, onUpdated } from 'vue';

import { useIssueStore } from '../../../../../stores/issues/facades';

import IssueListComponent from '../../components/issue-list/issue-list.component.vue';
import PaginationComponent from '../../components/pagination/pagination.component.vue';

type Props = {
  page?: string;
  perPage?: string;
};

export default defineComponent({
  name: 'IssueListContainer',
  components: { IssueListComponent, PaginationComponent },
  props: {
    page: {
      type: String as PropType<Props['page']>,
      required: true,
    },
    perPage: {
      type: String as PropType<Props['perPage']>,
      required: true,
    },
  },
  setup(props: Props) {
    const router = useRouter();
    const { issues, pagination, fetchAll } = useIssueStore();

    onUpdated(() => {
      console.log(props);
      fetchAll({ page: props.page, perPage: props.perPage });
    });

    return () => (
      <div>
        <IssueListComponent issues={issues} />
        <PaginationComponent pagination={pagination} />
      </div>
    );
  },
});
</script>
