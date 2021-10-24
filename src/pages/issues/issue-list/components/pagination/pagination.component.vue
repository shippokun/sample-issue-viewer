<script lang="tsx">
import { defineComponent, PropType, Ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { Pagination } from '../../../../../models';

type Props = {
  pagination: Ref<Pagination>;
};

// TODO: paginationのリンクをラップ
export default defineComponent({
  name: 'PaginationComponent',
  props: {
    pagination: {
      type: Object as PropType<Props['pagination']>,
      required: true,
    },
  },
  setup(props: Props) {
    const isMinPage = computed(() => {
      return props.pagination.value.page == props.pagination.value.minPage;
    });
    const isMaxPage = computed(() => {
      return props.pagination.value.page == props.pagination.value.maxPage;
    });

    const previous = computed(() => {
      return isMinPage.value
        ? props.pagination.value.minPage
        : props.pagination.value.page - 1;
    });
    const next = computed(() => {
      return isMaxPage.value
        ? props.pagination.value.maxPage
        : props.pagination.value.page + 1;
    });

    return () => (
      <nav
        class="pagination is-centered"
        role="navigation"
        aria-label="pagination"
      >
        <RouterLink
          to={{
            path: 'issues',
            query: {
              page: previous.value,
              per_page: props.pagination.value.perPage,
            },
          }}
        >
          <a class="pagination-previous">Previous</a>
        </RouterLink>
        <RouterLink
          to={{
            path: 'issues',
            query: {
              page: next.value,
              per_page: props.pagination.value.perPage,
            },
          }}
        >
          <a class="pagination-next">Next page</a>
        </RouterLink>
        <ul class="pagination-list">
          {!isMinPage.value && (
            <li>
              <RouterLink
                to={{
                  path: 'issues',
                  query: {
                    page: props.pagination.value.minPage,
                    per_page: props.pagination.value.perPage,
                  },
                }}
              >
                <a class="pagination-link" aria-label="Goto page 1">
                  {props.pagination.value.minPage}
                </a>
              </RouterLink>
            </li>
          )}
          {props.pagination.value.minPage !== previous.value && (
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
          )}
          {props.pagination.value.minPage !== previous.value && (
            <li>
              <RouterLink
                to={{
                  path: 'issues',
                  query: {
                    page: previous.value,
                    per_page: props.pagination.value.perPage,
                  },
                }}
              >
                <a class="pagination-link" aria-label="Goto previous page">
                  {previous.value}
                </a>
              </RouterLink>
            </li>
          )}
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page current"
              aria-current="page"
            >
              {props.pagination.value.page}
            </a>
          </li>
          {props.pagination.value.maxPage !== next.value && (
            <li>
              <RouterLink
                to={{
                  path: 'issues',
                  query: {
                    page: next.value,
                    per_page: props.pagination.value.perPage,
                  },
                }}
              >
                <a class="pagination-link" aria-label="Goto next page">
                  {next.value}
                </a>
              </RouterLink>
            </li>
          )}
          {props.pagination.value.maxPage !== next.value && (
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
          )}
          {!isMaxPage.value && (
            <li>
              <RouterLink
                to={{
                  path: 'issues',
                  query: {
                    page: props.pagination.value.maxPage,
                    per_page: props.pagination.value.perPage,
                  },
                }}
              >
                <a class="pagination-link" aria-label="Goto latest page">
                  {props.pagination.value.maxPage}
                </a>
              </RouterLink>
            </li>
          )}
        </ul>
      </nav>
    );
  },
});
</script>
