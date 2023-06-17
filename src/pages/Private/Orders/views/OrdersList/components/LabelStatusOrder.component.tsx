
import { FC } from "react";

import { Label } from "../../../../../../components/ui";
import { OrderStatus } from "../../../../../../models";
import { Chip } from '@mui/material';


const colorStatusOrderMap: {
  [key: string]: "primary" | "secondary" | "error" | "warning" | "success" | "info" | undefined
} = {
  'PENDING': 'success',
  'IN_PROGRESS': 'info',
  'unpaid': 'warning',
  'DELIVERED': 'info',
  'CANCELLED': 'error',
};

const textStatusOrderMap: { [key: string]: string } = {
  'PENDING': 'Pendiente',
  'IN_PROGRESS': 'En preparación',
  'unpaid': 'Por pagar',
  'DELIVERED': 'Pagado',
  'CANCELLED': 'Cancelado',
  
};


interface Props {
  status: OrderStatus | "unpaid";
}

export const LabelStatusOrder: FC<Props> = (
  {
    status,
  }

) => {

  

  return (
    <Chip
      color={colorStatusOrderMap[status]}
      label={textStatusOrderMap[status]}
      size="small"
     
    />

  )
}