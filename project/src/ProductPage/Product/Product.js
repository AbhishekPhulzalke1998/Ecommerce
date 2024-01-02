import React from "react";
import { Card, Grid, Typography, TextField, Stack, CardMedia, CardContent } from "@mui/material";
 
 
const Product = (props) => {
    console.log(props);
 
    return (
        <Grid container justifyContent="center" alignItems="center">
        <Stack sx={{ margin: '20px' }}>
            <Card sx={{ maxWidth: 520 }}>
                <CardMedia sx={{ height: 250 }}
                    image={props.image}
                />
 
                <CardContent>
                    <Typography variant="h3" style={{ fontWeight: 'bold' }}>ProductName:{props.ProductName}</Typography>
                    <Typography variant='subtitle1'>
                    productdescription: {props.ProductDescription}
                    </Typography>
                    <Typography variant="h5"  style={{textAlign:'center'}}>Price :     {props.Price}</Typography>
                    <Typography variant="h6"  style={{textAlign:'center'}}>Quantity :   {props.Quantity}</Typography>
                    <Typography variant="h6"  style={{textAlign:'center'}}>Discount :   {props.Discount}</Typography>
                    
                </CardContent>
 
 
 
 
            </Card>
 
        </Stack>
        </Grid>
    )
}
export default Product;