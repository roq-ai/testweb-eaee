const mapping: Record<string, string> = {
  'blog-posts': 'blog_post',
  companies: 'company',
  'performance-evaluations': 'performance_evaluation',
  'time-trackings': 'time_tracking',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
