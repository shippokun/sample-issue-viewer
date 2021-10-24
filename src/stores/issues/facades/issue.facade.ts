import { computed } from 'vue';
import { useStore } from 'vuex';

import { Issue } from '../../../models';

import * as actions from '../actions';
import * as getters from '../getters';
import { featureKey } from '../states';

export const useIssueStore = () => {
  const store = useStore();
  const isFetching = computed<ReturnType<typeof getters.isFetching>>(
    () => store.getters[`${featureKey}/${getters.isFetching.name}`]
  );
  const issues = computed<ReturnType<typeof getters.issues>>(
    () => store.getters[`${featureKey}/${getters.issues.name}`]
  );
  const issue = computed<ReturnType<typeof getters.issue>>(
    () => store.getters[`${featureKey}/${getters.issue.name}`]
  );
  const pagination = computed<ReturnType<typeof getters.pagination>>(
    () => store.getters[`${featureKey}/${getters.pagination.name}`]
  );

  const fetchAll = (args: {
    page?: string;
    perPage?: string;
  }): Promise<{ issues: Issue[] }> => {
    return store.dispatch(`${featureKey}/${actions.FETCH_ALL_REQUEST}`, args);
  };
  const fetch = (args: { id: string }): Promise<{ issue: Issue }> => {
    return store.dispatch(`${featureKey}/${actions.FETCH_REQUEST}`, args);
  };

  return {
    isFetching,
    issues,
    issue,
    pagination,
    fetchAll,
    fetch,
  } as const;
};
