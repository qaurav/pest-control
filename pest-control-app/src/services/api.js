import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor for adding auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const createBooking = async (bookingData) => {
  const response = await api.post('/bookings', bookingData);
  return response;
};

export const fetchBookings = () => {
  return api.get('/bookings').then(response => response.data);
};

export const updateBooking = (id, updateData) => {
  return api.patch(`/bookings/${id}`, updateData);
};

export const deleteBooking = (id) => {
  return api.delete(`/bookings/${id}`);
};

export const login = (credentials) => {
  return api.post('/auth/login', credentials);
};

export default api;
