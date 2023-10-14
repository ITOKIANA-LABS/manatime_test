import React from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Alert, Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Snackbar, TextField } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addSold, fetchUsers } from '@/app/api';
import Sold from '@/app/entities/Sold';
import dayjs from 'dayjs';

interface dialogAddSold {
  visible: boolean,
  setVisible: Function
}

const initialState = {
  category: '',
  user: 0,
  period: {
    start: '2023',
    end: '2023',
  },
  actualSold: 0,
  gotSold: 0,
  futurSold: 0
}

function DialogAddSold(props: dialogAddSold) {
  const [formData, setFormData] = React.useState<{
    category: string,
    user: number,
    period: {
      start: string,
      end: string,
    },
    actualSold: number,
    gotSold: number,
    futurSold: number
  }>(initialState);
  const [openBackdrop, setOpenBackDrop] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const {visible, setVisible} = props;
  const queryClient = useQueryClient();
  const {data: users, isLoading: usersLoading} = useQuery({
    queryFn: () => fetchUsers(),
    queryKey: ["users"],
  });
  const {mutateAsync: addSoldMutation} = useMutation({
    mutationFn: addSold,
    onSuccess: () => {
      setOpenSuccess(true);
      setOpenBackDrop(false);
      queryClient.invalidateQueries(["solds"]);
      setFormData(initialState);
    }
  })
  const handleClickAddSold = () => {
    setVisible(!visible);
  }
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handlePeriodStartChange = (event: any) => {
    const formDt = {...formData};
    formDt.period.start = event['$y'];
    setFormData(formDt);
  }
  const handlePeriodEndChange = (event: any) => {
    const formDt = {...formData};
    formDt.period.end = event['$y'];
    setFormData(formDt);
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const soldToSave: Sold = {
      id: 0,
      category: formData.category,
      period: `${formData.period.start} - ${formData.period.end}`,
      user: users?.find(user => user.id === formData.user),
      actualSold: Number(formData.actualSold),
      gotSold: Number(formData.gotSold),
      futurSold: Number(formData.futurSold),
    }
    await addSoldMutation(soldToSave)
  };
  return (
    <Dialog open={visible} onClose={handleClickAddSold}>
      {
        !openBackdrop ? (
          <form onSubmit={handleSubmit}>
            <DialogTitle>Ajouter un solde</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Veuillez renseigner les informations suivantes pour créer un nouveu solde
              </DialogContentText>
              <TextField
                required
                id="user"
                select
                label="Utilisateur"
                helperText="Veuillez séléctionner un utilisateur"
                margin="dense"
                fullWidth
                name='user'
                onChange={handleChange}
              >
                {users?.map((option) => (
                  <MenuItem key={option.id} value={option.id}>
                    {`${option.firstName} ${option.lastName}`}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                margin="dense"
                id="category"
                label="Catégorie"
                type="text"
                fullWidth
                name='category'
                value={formData.category} onChange={handleChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    label={'Du'}
                    openTo="year"
                    views={['year']}
                    defaultValue={dayjs('2022')}
                    onChange={handlePeriodStartChange}
                  />
                  <DatePicker
                    label={'Au'}
                    openTo="year"
                    views={['year']}
                    defaultValue={dayjs('2022')}
                    onChange={handlePeriodEndChange}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <TextField
                required
                margin="dense"
                id="actualSold"
                label="Solde actuel"
                type="number"
                fullWidth
                name='actualSold'
                value={formData.actualSold} onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                id="gotSold"
                name="gotSold"
                label="Solde pris"
                type="number"
                fullWidth
                value={formData.gotSold} onChange={handleChange}
              />
              <TextField
                required
                margin="dense"
                id="futurSold"
                name="futurSold"
                label="Solde futur"
                type="number"
                fullWidth
                value={formData.futurSold} onChange={handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickAddSold} type='button'>Annuler</Button>
              <Button type='submit'>Ajouter</Button>
            </DialogActions>
          </form>
        ):(
          <DialogContent>
            <CircularProgress color="inherit" />
          </DialogContent>
        )
      }
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={openSuccess} autoHideDuration={6000} onClose={() => setOpenSuccess(!openSuccess)}>
        <Alert onClose={() => setOpenSuccess(!openSuccess)} severity="success" sx={{ width: '100%' }}>
          Solde ajouté avec succès
        </Alert>
      </Snackbar>
    </Dialog>
  )
}

export default DialogAddSold