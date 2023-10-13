"use client"

import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import BalanceIcon from '@mui/icons-material/Balance';

import { Avatar, Badge, Box, Breadcrumbs, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import BurgerMenus from '../BurgerMenus/BurgerMenus';

const Navbar = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = React.useState<boolean>(false);
  const handleClickBurger = () => {
    setOpenBurgerMenu(!openBurgerMenu);
  }
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 2000, boxShadow: 'none' }}>
        <Toolbar sx={{ backgroundColor: 'background.paper' }}>
        <Grid 
            container spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
          <Grid item xs={2}>
            <IconButton sx={{ ml: 6 }} onClick={handleClickBurger}>
              <Avatar sx={{ '& .MuiAvatar-img': { width: '70%', height: '70%'}}} variant='square' src="./images/burger.svg" />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={
                  <Avatar
                    variant="square"
                    src="./images/stripe2.svg"
                    sx={{'& .MuiAvatar-img': { width: '30%', height: '60%'}, mx: 1}}
                  />
                }
                aria-label="breadcrumb"
              >
                <Link underline="hover" key="1" color="#494949" href="/" sx={{ display: 'flex', alignItems: 'center', fontSize: '24px', fontWeight: '500' }}>
                  <Avatar sx={{ mr: 2, '& .MuiAvatar-img': { width: '150%', height: '150%'}}} variant='square' src="./images/Module_Absences.svg" />
                  Absence
                </Link>
                <Link
                  underline="hover"
                  key="2"
                  color="#858585"
                  href="/"
                  sx={{ display: 'flex', alignItems: 'center', fontSize: '18px', fontWeight: '500' }}
                >
                  <BalanceIcon sx={{ mr: 2 }} />
                  Sous module
                </Link>
                <Typography key="3" color="#858585" sx={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '400' }}>
                  Sous sous module
                </Typography>,
              </Breadcrumbs>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
              <Box>
                <IconButton sx={{ color: '#858585', p: 0, mr: '10px'}}>
                  <Avatar variant="circular" src="./images/Help.svg" />
                </IconButton>
                <IconButton sx={{ color: '#858585', p: 0}}>
                  <Avatar variant="circular" src="./images/Settings.svg" />
                </IconButton>
              </Box>
              <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: '30px', borderColor: '#858585'}} />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Stack spacing={0} sx={{textAlign: 'center', mr: '30px' }}>
                  <Typography fontWeight={700} fontSize={'16px'} color="text.primary">Nom et prenom</Typography>
                  <Typography variant="body2" fontSize={'14px'} color="text.secondary">
                    Entreprise
                  </Typography>
                </Stack>
                <Badge color="success" sx={{'& .MuiBadge-dot': { backgroundColor: '#64dd17'}}} overlap="circular" badgeContent=" " variant="dot">
                  <Avatar variant="circular" src="./images/Photo.png" />
                </Badge>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <BurgerMenus visible={openBurgerMenu} />
    </>
  )
}

export default Navbar