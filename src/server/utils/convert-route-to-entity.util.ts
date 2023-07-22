const mapping: Record<string, string> = {
  activities: 'activity',
  'football-matches': 'football_match',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
