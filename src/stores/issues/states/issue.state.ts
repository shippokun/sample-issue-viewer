import { Issue, Pagination } from '../../../models';

export const featureKey = 'issues';

export type IssueState = {
  isFetching: boolean;
  selectedId: string | null;
  issues: Issue[];
  pagination: Pagination;
};

export const initialState: IssueState = {
  isFetching: false,
  selectedId: null,
  issues: [],
  pagination: {
    perPage: 10,
    page: 1,
    minPage: 1,
    maxPage: 1,
    totalCount: 0,
  },
};
