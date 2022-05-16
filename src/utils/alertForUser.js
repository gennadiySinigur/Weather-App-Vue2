import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';

export const showAlertForUser = (errorMessage) => {
  const errorText = document.createElement('p');
  const titleText = document.createElement('h4');

  errorText.innerText = `${errorMessage}`;
  titleText.innerText = 'Error!';

  errorText.style.fontFamily = 'sans-serif';
  titleText.style.fontFamily = 'sans-serif';

  return Swal.fire({
    title: titleText,
    icon: 'error',
    showConfirmButton: true,
    html: errorText,
    width: '470px',
  });
};
