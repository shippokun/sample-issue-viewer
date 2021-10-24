import { createStore } from 'vuex';

export interface RootState {}

import * as issue from './issues';

export const store = createStore<RootState>({
  modules: {
    [issue.featureKey]: issue.module,
  },
});

export type Store = typeof store;
