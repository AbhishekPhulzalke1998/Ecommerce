import React from "react";
import { Card, Grid, Typography, TextField, Stack, CardMedia, CardContent } from "@mui/material";
import { useState } from "react";

const Product = () => {

    return (
        <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ margin: '20px' }}>
            <Card sx={{ maxWidth: 520 }}>
                <CardMedia sx={{ height: 250 }}
                    image="https://mui.com/static/images/cards/paella.jpg"
                />

                <CardContent>
                    <Typography variant="h3" style={{ fontWeight: 'bold' }}>Shrimp and Chorizo Paella</Typography>
                    <Typography variant='subtitle1'>
                        Paella dish
                        This impressive paella is
                        a perfect party
                        dish and a fun meal to
                        cook together with your
                        guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                    </Typography>
                    <Typography variant="h5" style={{ color: ' #24c148', fontWeight: '100' }}>Rs.250</Typography>
                    <Typography variant="h6" style={{ color: "skyblue", fontWeight: '50' }}>QTY:- 1</Typography>
                    <Typography variant="h6" style={{ color: "skyblue", fontWeight: '50' }}>Discount:- 20%</Typography>
                </CardContent>




            </Card>

        </Stack>
        </Grid>
    )
}
export default Product;