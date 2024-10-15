"use client";

import { Button, ButtonProps, CircularProgress } from "@mui/material";

interface LoadingButtonProps extends ButtonProps {
  isSubmitting: boolean;
  children: Readonly<React.ReactNode>;
  disabled?: boolean;
}

export const LoadingButton = ({
  isSubmitting,
  children,
  disabled,
  ...rest
}: LoadingButtonProps) => {
  return (
    <Button
      {...rest}
      variant="contained"
      type="submit"
      disabled={disabled || isSubmitting}
    >
      {isSubmitting ? (
        <CircularProgress style={{ width: "24px", height: "24px" }} />
      ) : (
        children
      )}
    </Button>
  );
};
