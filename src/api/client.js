import axios from 'axios';
import { getApiBaseUrl } from './config';

/**
 * Axios instance configured for backend API
 * Base URL from environment variables (build-time or runtime)
 */
const apiClient = axios.create({
    baseURL: getApiBaseUrl(),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - Add auth token if available
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - Handle common errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Handle 401 - Redirect to login
            // Skip redirect if skipAuthRefresh is set in request config
            if (error.response.status === 401 && !error.config.skipAuthRefresh) {
                // Prevent redirect loop if already on login page
                if (!window.location.pathname.includes('/login')) {
                    localStorage.removeItem('authToken');
                    window.dispatchEvent(new Event('auth-change'));
                    window.dispatchEvent(new Event('storage'));
                    window.location.href = '/login';
                }
            }

            // Extract error message from response
            const message = error.response.data?.error || 'An error occurred';
            error.message = message;
        } else if (error.request) {
            // Network error
            error.message = 'Network error. Please check your connection.';
        }

        return Promise.reject(error);
    }
);

export default apiClient;
