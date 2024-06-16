export type TMember = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TMemberResponse = {
  data: TMember;
};

export type TTeamResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: TMember[];
};