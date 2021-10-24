<script lang="tsx">
import { RouterLink } from 'vue-router';
import { defineComponent, PropType, Ref } from 'vue';

import { Issue } from '../../../../../models';

type Props = {
  issues: Ref<Issue[]> | null;
};

export default defineComponent({
  name: 'IssueListComponent',
  props: {
    issues: {
      type: Object as PropType<Props['issues']>,
      default: null,
    },
  },
  setup(props: Props) {
    return () => (
      <nav class="panel is-link">
        <p class="panel-heading">IssueList</p>
        {props.issues?.value?.map((issue) => (
          <RouterLink to={{ path: `/issues/${issue.number}` }}>
            <a class={'panel-block is-justify-content-space-between'}>
              <span style="display: flex; align-items: center">
                <span class="panel-icon">
                  <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                [#{issue.number}]{issue.title}
              </span>
            </a>
          </RouterLink>
        ))}
      </nav>
    );
  },
});
</script>
