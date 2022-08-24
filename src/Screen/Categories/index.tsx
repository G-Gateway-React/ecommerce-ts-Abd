
import React from 'react';
import { TopCards } from '../../Assets';
import TopCard from '../../Components/TopCard';
import { CardWrapper } from '../Home/style';
import { Container, Grid } from "@mui/material";
import { Title } from './style';

function  Categories(){

    return(
        <div>
         
         <Grid container spacing={2}>
          <Grid item xs={3}></Grid>
          <Grid item xs={9}>
          <Title>Tops</Title>
            <CardWrapper>
            {TopCards.map((item) => (
                <TopCard 
                img={item.img}
                text={item.text}/>
            )
            )}
            </CardWrapper>
            </Grid>

            </Grid>
        </div>
    )
}
export default Categories