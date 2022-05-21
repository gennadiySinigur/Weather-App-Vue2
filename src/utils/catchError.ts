import { showAlertForUser } from '@/utils/alertForUser';

interface ErrorType {
  response: {
    data: {
      code: string;
      message: string;
    }
  }
}

export const catchError = async(error: ErrorType):
  Promise<Promise<string> | undefined> => {
  if (!error.response) {
    return;
  }

  const errorMessage = error.response.data.message;

  await showAlertForUser(errorMessage);
};
