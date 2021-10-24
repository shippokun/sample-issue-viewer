import { GetterTree } from 'vuex';

import { IssueState } from '../states';
import { Issue, Pagination } from '../../../models';

import { RootState } from '../../store';

export const isFetching = (state: IssueState): IssueState['isFetching'] =>
  state.isFetching;
export const selectedId = (state: IssueState): IssueState['selectedId'] =>
  state.selectedId;
export const issues = (state: IssueState): IssueState['issues'] => {
  // 既にfetchの時点でページネーション済み
  return state.issues;
};
export const issue = (state: IssueState): Issue | null => {
  return state.selectedId
    ? state.issues.find((issue) => issue.number == Number(state.selectedId)) ??
        null
    : null;
};
export const pagination = (state: IssueState): Pagination => {
  return state.pagination;
};

export const getters: GetterTree<IssueState, RootState> = {
  isFetching,
  selectedId,
  issues,
  issue,
  pagination,
};
