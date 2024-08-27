import type { IRegisterData } from '../../pages/Registration/interface/interface';

import { API_URL } from './config';

function handleResponse (res: Response) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
}

export const getCases = () => {
  return fetch(`${API_URL}/cases`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(res => handleResponse(res));
};

export const getUniversity = () => {
  return fetch(`${API_URL}/universities`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(res => handleResponse(res));
};

export const getCourses = () => {
  return fetch(`${API_URL}/levels`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(res => handleResponse(res));
};

export const registration = (data: IRegisterData) => {
  return fetch(`${API_URL}/register/`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      login: data.login,
      university: data.university,
      case: data.case,
      participants: data.participants,
    }),
  })
  .then(res => handleResponse(res));
};
