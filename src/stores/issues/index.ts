import { Module } from 'vuex';
import { RootState } from '../store';
import { IssueState, initialState } from './states';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const module: Module<IssueState, RootState> = {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};

export * from './states';
export * from './actions';
export * from './getters';
export * from './mutations';
