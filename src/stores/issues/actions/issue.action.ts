import { ActionTree } from 'vuex';

import { issueService } from '../../../services';
import { IssueState } from '../states';
import { RootState } from '../../store';

export const FETCH_ALL_REQUEST = '[Issue] Fetch All';
export const FETCH_ALL_SUCCESS = '[Issue] Fetch All Success';
export const FETCH_ALL_FAILURE = '[Issue] Fetch All Failure';
export const FETCH_REQUEST = '[Issue] Fetch';
export const FETCH_SUCCESS = '[Issue] Fetch Success';
export const FETCH_FAILURE = '[Issue] Fetch Failure';
export const UPDATE_PAGINATION = '[Issue] Update Pagination';

export const actions: ActionTree<IssueState, RootState> = {
  [FETCH_ALL_REQUEST]: async (
    { commit },
    args: { page: string; perPage: string }
  ) => {
    try {
      const { page, perPage } = args;
      commit(FETCH_ALL_REQUEST);
      const searchResult = await issueService.getRepository();
      commit(UPDATE_PAGINATION, { page, perPage, result: searchResult });
      const result = await issueService.fetchAll({ page, perPage });
      commit(FETCH_ALL_SUCCESS, result);
      return { issues: result };
    } catch (error) {
      commit(FETCH_ALL_FAILURE, error);
      throw error;
    }
  },
  [FETCH_REQUEST]: async ({ commit }, args: { id: string }) => {
    try {
      const { id } = args;
      commit(FETCH_REQUEST, id);
      const result = await issueService.fetch(id);
      commit(FETCH_SUCCESS, result);
      return { issue: result };
    } catch (error) {
      commit(FETCH_FAILURE, error);
      throw error;
    }
  },
};
