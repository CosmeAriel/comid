import { Card, CardHeader, CardContent, Button, Typography, Box, CardActions } from '@mui/material';
import { useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { DateOrders } from '../../../models/date-orders.interface';
import { useFetchAndLoad } from '../../../../../../hooks/useFetchAndLoad';
import { getOrdersEachDate } from '../../../services/dashboard.service';
import { useAsync } from '../../../../../../hooks/useAsync';
import { Paid, Assignment } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { selectOrders } from '../../../../../../redux';


export const OrdersSummary = () => {

  const [datesOrders, setDatesOrders] = useState<DateOrders[]>([]);


  const {orders} =useSelector(selectOrders);

  const { loading, callEndpoint } = useFetchAndLoad();

  // const getDatesOrdersCall = async () => await callEndpoint(getOrdersEachDate())

  const loadDatesOrdersState = (data: DateOrders[]) => { setDatesOrders(data); }

  // useAsync(getDatesOrdersCall, loadDatesOrdersState, () => { }, []);

  return (
    <>
      <Card>

        <CardHeader
          title={
            <Typography variant="h4" >Pedidos</Typography>
          }
          action={
            <Button
              disableRipple
              to="/orders/list"
              component={RouterLink}
              variant="outlined"

              size='small'
            >
              Ver más
            </Button>

          }
        />

        <CardContent

          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center'

          }}

        >

          <Assignment color='info' fontSize='large' />
          <Typography variant="h3" component="div" textAlign='center'>
            {orders.length}
          </Typography>


        </CardContent>

        {/* <CardActions
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}

        >

        </CardActions> */}




      </Card>
    </>
  )
}