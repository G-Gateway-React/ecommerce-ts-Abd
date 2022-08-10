 import React from 'react';
 import { ImgSecCard } from '../../Assets';
import { H6, SectionSecoCard, StyledSecoCard } from './style';



const SecoCard: React.FC = () => {
        return(
        
            <SectionSecoCard>
                {ImgSecCard.map((imges)=>{ 
                    return(
                    
                    <StyledSecoCard>

                     <img src={imges.img} />
                     <H6>{imges.text}</H6>
                    </StyledSecoCard>
                    ) 
    
                })}

            </SectionSecoCard>
        )}

export default SecoCard 
