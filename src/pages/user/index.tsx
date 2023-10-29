// user/index.tsx
import Container from "@/components/container";
import Index from "@/features/user";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect } from "react";
import { useSnackbar } from "notistack";

const User = () => {
  const auth = useAuthContext();
  const isConnected = auth?.user !== undefined;
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!isConnected) {
      enqueueSnackbar("You are not connected to a wallet.", {
        variant: "warning",
        autoHideDuration: 5000,
      });
    }
  }, []);
  return (
    <Container>
      <Index />
    </Container>
  );
};

export default User;
