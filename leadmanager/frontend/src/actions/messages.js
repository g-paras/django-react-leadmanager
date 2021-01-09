import { CREATE_MESSAGE } from './types';

// CREATE MESSAGES
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
