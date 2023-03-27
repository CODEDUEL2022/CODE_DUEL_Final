import axios from 'axios';
import aspida from '@aspida/axios';
import api from '../api/$api';

export const apiClient = api(aspida(axios, { baseURL: 'http://localhost:3000/api' }));
