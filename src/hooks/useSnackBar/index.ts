import { useSnackbar } from "notistack";

const useMySnackbar = (message: string) => {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (options = {}) => {
    enqueueSnackbar(message, {
      variant: "default", // default, error, success, warning, info
      autoHideDuration: 5000,
      ...options,
    });
  };

  return { showSnackbar };
}

export default useMySnackbar;
