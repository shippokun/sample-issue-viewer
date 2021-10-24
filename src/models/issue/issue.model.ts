// TODO: codegenで自作する
import { Endpoints } from '@octokit/types';

export type Issue =
  Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data'];

export type GetRepository =
  Endpoints['GET /repos/{owner}/{repo}']['response']['data'];

export type Pagination = {
  page: number;
  perPage: number;
  minPage: number;
  maxPage: number;
  totalCount: number;
};
