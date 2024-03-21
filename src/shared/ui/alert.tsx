import { Alert, AlertProps } from '@mui/material';
import { useEffect } from 'react';

interface CustomAlertProps extends AlertProps {
  showTime: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const CustomAlert = ({
  showTime,
  isOpen,
  setIsOpen,
  children,
  ...props
}: CustomAlertProps) => {
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, showTime);
  }, [isOpen]);

  if (!isOpen) return null;

  return <Alert {...props}>{children}</Alert>;
};
