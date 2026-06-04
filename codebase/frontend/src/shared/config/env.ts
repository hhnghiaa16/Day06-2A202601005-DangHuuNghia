const getEnv = (key: string, fallback = '') => {
  const value = import.meta.env[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
};

export const env = {
  apiBaseUrl: getEnv('VITE_API_BASE_URL', 'http://localhost:8000/api'),
};
