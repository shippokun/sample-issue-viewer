<script lang="tsx">
import { RouterLink } from 'vue-router';
import { defineComponent, PropType } from 'vue';
import Markdown from 'vue3-markdown-it';

import { Issue } from '../../../../../models';

type Props = {
  issue: Issue | null;
  isFetching: boolean;
};

export default defineComponent({
  name: 'IssueDetailComponent',
  components: { Markdown },
  props: {
    issue: {
      type: Object as PropType<Props['issue']>,
      default: null,
    },
    isFetching: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: Props) {
    return () => (
      <nav class="panel is-link">
        <p class="panel-heading">IssueDetail</p>
        {props.isFetching ? (
          <div>loading...</div>
        ) : (
          <div>
            <div class="px-3 pt-3">
              <div class="field">
                <label class="label">Title</label>
                <p>{props.issue?.title}</p>
              </div>
              <div class="field">
                <label class="label">Body</label>
                <Markdown source={props.issue?.body} />
              </div>
            </div>
            <div class="panel-block is-justify-content-flex-end p-3">
              <div class="field is-grouped">
                <p class="control">
                  <RouterLink to={{ path: '/issues' }}>
                    <a class="button">Back</a>
                  </RouterLink>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
  },
});
</script>
