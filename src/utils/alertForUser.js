import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';

export const showAlertForUser = (errorMessage) => {
  return Swal.fire({
    title: 'Error!',
    icon: 'error',
    showConfirmButton: true,
    text: errorMessage,
    customClass: {
      content: 'red',
    },
  });
};