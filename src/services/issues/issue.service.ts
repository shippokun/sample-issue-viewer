import { Issue, GetRepository } from '../../models';

export class IssueService {
  async fetchAll(args: { page?: string; perPage?: string }): Promise<Issue[]> {
    const { page, perPage } = args;
    const url = new URL(`${this.baseUrl}/issues`);
    if (page !== undefined) {
      url.searchParams.append('page', page);
    }
    if (perPage !== undefined) {
      url.searchParams.append('per_page', perPage);
    }
    return await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  async fetch(id: string): Promise<Issue> {
    const url = new URL(`${this.baseUrl}/issues/${id}`);
    return await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  async getRepository(): Promise<GetRepository> {
    const url = new URL(`${this.baseUrl}`);
    return await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  }

  constructor(private readonly baseUrl: string) {}
}
