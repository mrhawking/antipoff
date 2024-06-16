import { TLoginResponse, TRegisterResponse } from '../models/auth';
import { TMemberResponse, TTeamResponse } from '../models/team';

const MAIN_URL = 'https://reqres.in/api/';

// Регистрация пользователя
export const registerUser = async (email: string, password: string): Promise<TRegisterResponse> => {
  const response = await fetch(`${MAIN_URL}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Ошибка регистрации пользователя');
  }

  const data = await response.json();
  return data;
};

// Авторизация пользователя
export const loginUser = async (email: string, password: string): Promise<TLoginResponse> => {
  const response = await fetch(`${MAIN_URL}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    throw new Error('Ошибка авторизации пользователя');
  }

  const data = await response.json();
  return data;
};

//Запросить список членов команды
export const fetchTeam = async (page: number, perPage: number): Promise<TTeamResponse> => {
  const response = await fetch(`${MAIN_URL}users?page=${page}&per_page=${perPage}`)

  if (!response.ok) {
    throw new Error('Ошибка загрузки команды');
  }

  const data = await response.json();
  return data;
};

//Запросить члена команды
export const fetchMember = async (id: string): Promise<TMemberResponse> => {
  const response = await fetch(`${MAIN_URL}users/${id}`)

  if (!response.ok) {
    throw new Error('Ошибка загрузки');
  }

  const data = await response.json();
  return data;
};

