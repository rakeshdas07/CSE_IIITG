// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'https://your-api-endpoint.com/api'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a timeout for requests
});

// Intercept requests to add headers if necessary
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Set authorization header
    }
    return config;
  },
  (error) => Promise.reject(error) // Handle request errors
);

// Function to fetch meal plans
export const getMealPlan = async () => {
  return await fetchData('/mealplans'); // Adjust the endpoint as needed
};

// Generalized function to fetch data from an endpoint
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw new Error(error.response?.data?.message || 'Failed to fetch data.');
  }
};

// Generalized function to post data to an endpoint
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error posting data to ${endpoint}:`, error);
    throw new Error(error.response?.data?.message || 'Failed to post data.');
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  return await postData('/auth/login', credentials); // Adjust the endpoint as per your API structure
};

// New function to register a user
export const registerUser = async (userData) => {
  return await postData('/auth/register', userData); // Adjust the endpoint as per your API structure
};

// Function to submit feedback
export const submitFeedback = async (feedbackData) => {
  return await postData('/feedback', feedbackData); // Adjust the endpoint as per your API structure
};

// Function to fetch the menu
export const getMenu = async () => {
  try {
    const response = await fetchData('/menu'); // Adjust the endpoint as needed
    return response; // Return the menu data
  } catch (error) {
    console.error('Failed to fetch menu:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch menu.');
  }
};

// Function to fetch notices
export const getNotices = async () => {
  try {
    const response = await fetchData('/notices'); // Adjust the endpoint as needed
    return response; // Return the notices data
  } catch (error) {
    console.error('Failed to fetch notices:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch notices.');
  }
};

// New function to fetch payment status
export const getPaymentStatus = async () => {
  try {
    const response = await fetchData('/payment/status'); // Adjust the endpoint as needed
    return response; // Return the payment status data
  } catch (error) {
    console.error('Failed to fetch payment status:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch payment status.');
  }
};

// Function to update meal plans
export const updateMealPlan = async (mealPlan) => {
  return await updateData('/mealplans', mealPlan); // Adjust endpoint
};

// Generalized function to update data at an endpoint
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error updating data at ${endpoint}:`, error);
    throw new Error(error.response?.data?.message || 'Failed to update data.');
  }
};

// Generalized function to delete data at an endpoint
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data; // Return the data
  } catch (error) {
    console.error(`Error deleting data at ${endpoint}:`, error);
    throw new Error(error.response?.data?.message || 'Failed to delete data.');
  }
};

// New function to delete meal plan by ID
export const deleteMealPlan = async (id) => {
  return await deleteData(`/mealplans/${id}`); // Adjust the endpoint as per your API structure
};

// Function to fetch attendance report
export const getAttendanceReport = async () => {
  try {
    const response = await fetchData('/attendance'); // Adjust endpoint as per your API structure
    return response;
  } catch (error) {
    console.error('Failed to fetch attendance report:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch attendance report.');
  }
};

// Function to fetch feedback analysis
export const getFeedbackAnalysis = async () => {
  try {
    const response = await fetchData('/feedback/analysis'); // Adjust the endpoint as per your API structure
    return response;
  } catch (error) {
    console.error('Failed to fetch feedback analysis:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch feedback analysis.');
  }
};

// Function to update inventory
export const updateInventory = async (inventoryData) => {
  return await updateData('/inventory', inventoryData); // Adjust endpoint as per your API structure
};

// Function to get inventory
export const getInventory = async () => {
  try {
    const response = await fetchData('/inventory'); // Adjust the endpoint as per your API structure
    return response;
  } catch (error) {
    console.error('Failed to fetch inventory:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch inventory.');
  }
};

// Function to fetch billing history
export const getBillingHistory = async () => {
  try {
    const response = await fetchData('/billing/history'); // Adjust the endpoint as per your API structure
    return response;
  } catch (error) {
    console.error('Failed to fetch billing history:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch billing history.');
  }
};

// New function to fetch report analytics
export const getReportAnalytics = async () => {
  try {
    const response = await fetchData('/report/analytics'); // Adjust the endpoint as per your API structure
    return response;
  } catch (error) {
    console.error('Failed to fetch report analytics:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch report analytics.');
  }
};
