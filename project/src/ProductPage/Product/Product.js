import React from "react";
import { Card, Grid, Typography, Stack, CardMedia, CardContent } from "@mui/material";
import './Product.css'; 

const Product = (props) => {
    console.log(props);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Stack className="product-stack">
                <Card className="product-card">
                    <CardMedia
                        className="product-card-media"
                        image={props.image}
                    />

                    <CardContent className="product-card-content">
                        <Typography variant="h3" className="product-name">ProductName:{props.ProductName}</Typography>
                        <Typography variant='subtitle1' className="product-description"> ProductDescription: {props.ProductDescription}</Typography>
                        <Typography variant="h5" className="product-price">Price :     {props.Price}</Typography>
                        <Typography variant="h6" className="product-quantity">Quantity :   {props.Quantity}</Typography>
                        <Typography variant="h6" className="product-discount">Discount :   {props.Discount}</Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Grid>
    )
}

export default Product;
