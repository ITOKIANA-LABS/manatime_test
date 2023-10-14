"use client"

import React from 'react'

import { Alert, Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteSold, fetchSolds } from '@/app/api';

function SoldTable() {
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  const {data: solds, isLoading: soldsLoading} = useQuery({
    queryFn: () => fetchSolds(),
    queryKey: ["solds"],
  });
  const queryClient = useQueryClient();
  const {mutateAsync: removeSoldMutation} = useMutation({
    mutationFn: deleteSold,
    onSuccess: () => {
      setOpenSuccess(true);
      setOpen(false);
      queryClient.invalidateQueries(["solds"]);
    }
  })
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickDel = (id: number) => {
    setOpen(!open);
    setSelectedId(id);
  };
  if(soldsLoading) {
    return <div>Loading...</div>
  }
  return (
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
          {
            solds?.map( sold => (
              <TableRow
                key={sold.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {`${sold.user?.firstName} ${sold.user?.lastName}`}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sold.category}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sold.period}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sold.actualSold}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sold.gotSold}
                </TableCell>
                <TableCell component="th" scope="row">
                  {sold.futurSold}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Box sx={{display: 'flex'}}>
                    <IconButton>
                      <Avatar src='./images/Ajuster.svg'/>
                    </IconButton>
                    <IconButton>
                      <Avatar src='./images/Transferer.svg'/>
                    </IconButton>
                    <IconButton onClick={() => handleClickDel(sold.id)}>
                      <Avatar src='./images/Solder.svg'/>
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openSuccess} autoHideDuration={6000} onClose={() => setOpenSuccess(!openSuccess)}>
        <Alert onClose={() => setOpenSuccess(!openSuccess)} severity="success" sx={{ width: '100%' }}>
          Solde supprimé avec succès
        </Alert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Suppression de ligne"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Etes-vous sure de vouloir supprimé ce solde?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick}>Annuler</Button>
          <Button color='error' onClick={() => removeSoldMutation(selectedId)} autoFocus>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  )
}

export default SoldTable