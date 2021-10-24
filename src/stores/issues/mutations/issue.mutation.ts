import { MutationTree } from 'vuex';

import { IssueState } from '../states';
import { Issue, GetRepository } from '../../../models';

import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  UPDATE_PAGINATION,
} from '../actions';

export const mutations: MutationTree<IssueState> = {
  [FETCH_ALL_REQUEST]: (state) => {
    state.isFetching = true;
  },
  [FETCH_ALL_SUCCESS]: (state, issues: Issue[]) => {
    state.isFetching = false;
    state.issues = issues;
  },
  // TODO: error対応
  [FETCH_ALL_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [FETCH_REQUEST]: (state, id: string) => {
    state.selectedId = id;
    state.isFetching = true;
  },
  [FETCH_SUCCESS]: (state, issue: Issue) => {
    state.isFetching = false;
    state.issues = state.issues.map((i) => i.number).includes(issue.number)
      ? state.issues.map((i) => (i.number == issue.number ? issue : i))
      : [...state.issues, issue];
  },
  // TODO: error対応
  [FETCH_FAILURE]: (state) => {
    state.isFetching = false;
  },
  [UPDATE_PAGINATION]: (
    state,
    args: { page: string; perPage: string; result: GetRepository }
  ) => {
    const { open_issues_count } = args.result;
    const { page, perPage } = args;
    state.pagination.totalCount = open_issues_count;
    state.pagination.page = Number(page);
    state.pagination.perPage = Number(perPage);
  },
};
