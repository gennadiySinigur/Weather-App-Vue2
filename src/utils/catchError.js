import { showAlertForUser } from '@/utils/alertForUser';

export const catchError = async(error) => {
  if (!error.response) {
    return;
  }

  const errorMessage = error.response.data.message;

  await showAlertForUser(errorMessage);
};
