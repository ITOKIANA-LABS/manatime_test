import Image from 'next/image'
import styles from './page.module.css'
import { Avatar, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export default function Home() {
  return (
    <main className={styles.main}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Utilisateurs</TableCell>
              <TableCell>Categorie</TableCell>
              <TableCell>Periode</TableCell>
              <TableCell>Solde actuel</TableCell>
              <TableCell>Solde pris</TableCell>
              <TableCell>Solde futur</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Marlon Brandon
              </TableCell>
              <TableCell component="th" scope="row">
                Conge paye
              </TableCell>
              <TableCell component="th" scope="row">
                2020 - 2021
              </TableCell>
              <TableCell component="th" scope="row">
                16
              </TableCell>
              <TableCell component="th" scope="row">
                10
              </TableCell>
              <TableCell component="th" scope="row">
                34
              </TableCell>
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex'}}>
                  <IconButton>
                    <Avatar src='./images/Ajuster.svg'/>
                  </IconButton>
                  <IconButton>
                    <Avatar src='./images/Transferer.svg'/>
                  </IconButton>
                  <IconButton>
                    <Avatar src='./images/Solder.svg'/>
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  )
}
