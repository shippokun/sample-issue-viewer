import { IssueService } from './issue.service';

export const issueService = new IssueService(
  'https://api.github.com/repos/facebook/react'
);
