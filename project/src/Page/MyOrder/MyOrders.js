import React from 'react';
import { Card, CardContent, Typography, Stack, Grid } from '@mui/material';
import MyOrder2 from './MyOrder2';
import OrderData from './Data';

const MyOrders = () => {
    const headerStyle = { margin: 0 }
    return (
        <>
            <h2 style={headerStyle}>MyOrder Details</h2>
            <Grid container justifyContent="center" alignItems="center">
                <Stack sx={{ margin: 'auto' }}>
                    {
                        OrderData.map(order => {
                            return <MyOrder2
                                Sr={order.Sr}
                                OrderNo={order.OrderNo}
                                Total={order.Total}
                                OrderStatus={order.OrderStatus}

                            />
                        })
                    }
                </Stack>
            </Grid>
        </>
    )
}

export default MyOrders;