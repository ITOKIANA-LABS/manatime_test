import React from 'react'
import { Avatar, Box, Card, CardContent, Fade, Grid, Typography } from '@mui/material'
import Image from 'next/image'

interface burgerMenusProps {
  visible: boolean
}

const BurgerMenus = (props: burgerMenusProps) => {
  const {visible} = props
  return (
    <Fade in={visible}>
      <Box position={'fixed'} sx={{top: 0, bottom: 0, right: 0, left: '200px', zIndex: 90000}}>
        <Box sx={{width: '100%', height: '100%', backdropFilter: 'blur(4px)'}}></Box>
        <Box 
          position={'absolute'} 
          sx={{
            background: '#fff',
            width: 800,
            bottom: 0,
            top: 0,
            borderRadius: '0 40px 40px 0',
            boxShadow: '10px 0 20px rgba(0,0,0,.03)'
          }}>
          <Grid container direction={'column'}>
            <Grid item xs={4}>
              <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', mt: '118px'}}>
                <Image width={350} height={73} alt='Logo' src='./images/Logo.svg'/>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box sx={{display: 'flex', width: '100%', mt: '118px', px: '47px', flexWrap: 'wrap', gap: '6px'}}>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Mdule_Documents.svg'/>
                    <Typography fontSize={'18px'}>Documents</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_Absences.svg'/>
                    <Typography fontSize={'18px'}>Absences</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_Compétences.svg'/>
                    <Typography fontSize={'18px'}>Compétences</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_Entretiens.svg'/>
                    <Typography fontSize={'18px'}>Entretiens</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_Heures.svg'/>
                    <Typography fontSize={'18px'}>Heures</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_Matériels.svg'/>
                    <Typography fontSize={'18px'}>Matériels</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_RH.svg'/>
                    <Typography fontSize={'18px'}>RH</Typography>
                  </CardContent>
                </Card>
                <Card sx={{width: '170px', borderRadius: '10px', border: '1px solid #D4D4D4', boxShadow: 'none', textAlign: 'center'}}>
                  <CardContent>
                    <Image width={122} height={122} alt='Item1' src='./images/Module_SalaireetPAie.svg'/>
                    <Typography fontSize={'18px'}>Salaire et PAie</Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Fade>
  )
}

export default BurgerMenus