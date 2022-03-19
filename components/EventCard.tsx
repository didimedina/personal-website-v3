import { styled } from '@stitches/react'
import { createBrotliCompress } from 'zlib'

export const StyledEventCard = styled('div' ,{
    width: '120px',
    height: '52px',
    backgroundColor: "IndianRed",

    variants: {
        color: {
            grey:{
                backgroundColor: 'DarkGrey'
            }
        }
    }
    
})

export default function EventCard() {
    return (
        <StyledEventCard></StyledEventCard>
    )
}




























