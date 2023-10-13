"use client"

import React from 'react'

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { Box } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DoneIcon from '@mui/icons-material/Done';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BalanceIcon from '@mui/icons-material/Balance';
import SearchIcon from '@mui/icons-material/Search';
import { drawerList } from './styles.modules';
import ListItemMenu from '../ListItemMenu/ListItemMenu';

const DRAWER_WIDTH = 200;

const LINKS = [
  { text: 'Accueil', href: '/', icon: HomeIcon },
  { text: 'Ajouter', href: '/', icon: AddIcon },
  { text: 'Mon espace', href: '/', icon: AccountBoxIcon, submenus: [
    { href: '/', text: 'Gestion des soldes'},
    { href: '/', text: 'Ajuster un solde'},
    { href: '/', text: 'Compteurs'},
    { href: '/', text: 'Historique'},
  ]},
  { text: 'Validation', href: '/', icon: DoneIcon, submenus: [
    { href: '/', text: 'Gestion des soldes'},
    { href: '/', text: 'Ajuster un solde'},
    { href: '/', text: 'Compteurs'},
    { href: '/', text: 'Historique'},
  ]},
  { text: 'Indicateurs', href: '/', icon: ChecklistIcon, submenus: [
    { href: '/', text: 'Gestion des soldes'},
    { href: '/', text: 'Ajuster un solde'},
    { href: '/', text: 'Compteurs'},
    { href: '/', text: 'Historique'},
  ]},
  { text: 'Soldes', href: '/', icon: BalanceIcon, submenus: [
    { href: '/', text: 'Gestion des soldes'},
    { href: '/', text: 'Ajuster un solde'},
    { href: '/', text: 'Compteurs'},
    { href: '/', text: 'Historique'},
  ]},
  { text: 'Recherche', href: '/', icon: SearchIcon },
];

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          top: ['48px', '56px', '64px'],
          height: '94vh',
          bottom: 0,
          background: ("linear-gradient(-180deg, rgba(9,70,148,1) 45%, rgba(2,129,227,1) 83%)"),
          border: 'none'
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List sx={drawerList}>
        {LINKS.map(({ text, href, icon: Icon , submenus = []}) => (
          <>
            <ListItemMenu text={text} href={href} icon={Icon} submenus={submenus}/>
          </>
        ))}
      </List>
      <Box sx={{
        mt: 'auto',
        height: 289,
        backgroundColor: 'transparent',
        background: 'url("./images/Graphic.svg") no-repeat',
        backgroundSize: 'cover'
      }}></Box>
    </Drawer>
  )
}

export default Sidebar