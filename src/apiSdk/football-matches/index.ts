import axios from 'axios';
import queryString from 'query-string';
import { FootballMatchInterface, FootballMatchGetQueryInterface } from 'interfaces/football-match';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFootballMatches = async (
  query?: FootballMatchGetQueryInterface,
): Promise<PaginatedInterface<FootballMatchInterface>> => {
  const response = await axios.get('/api/football-matches', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFootballMatch = async (footballMatch: FootballMatchInterface) => {
  const response = await axios.post('/api/football-matches', footballMatch);
  return response.data;
};

export const updateFootballMatchById = async (id: string, footballMatch: FootballMatchInterface) => {
  const response = await axios.put(`/api/football-matches/${id}`, footballMatch);
  return response.data;
};

export const getFootballMatchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/football-matches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFootballMatchById = async (id: string) => {
  const response = await axios.delete(`/api/football-matches/${id}`);
  return response.data;
};
