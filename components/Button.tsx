import { styled } from '@stitches/react'
import { motion } from "framer-motion"


const StyledButton = styled(motion.button, {
    // Reset
    appearance: 'none',
    border: 'none',
    fontSize: '14px',
    lineHeight: 1,
    height: '25px',
    borderRadius: '99999px',
    paddingLeft: '10px',
    paddingRight: '10px',
    
    
    variants: {
        color: {
            translucent: {
                backgroundColor: 'transparent',
            },
            gray: {
                backgroundColor: 'LightGray',
            },
            black: {
                backgroundColor: 'black',
                color: 'white'
            } 
        },
        size: {
            sm: {
                height: '24px' 
            },
            md: {
                height: '32px' 
            },
            lg: {
                height: '40px' 
            },
        }
    },

    defaultVariants: {
        color: 'black',
        size: 'md'
    }

})

export default function Button() {
    return (
        <div>
            <StyledButton animate={{ rotate: 360 }}
    transition={{ duration: 2 }} size={"lg"} color={"gray"}>
                Hello World
            </StyledButton>
            <StyledButton size={"sm"} color={"black"}>
                Hello World
            </StyledButton>
            <StyledButton size={"md"} color={"translucent"}>
                Hello World
            </StyledButton>
        </div>
    )
}