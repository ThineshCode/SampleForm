import React,{useState, useRef} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Loader from './Loader'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function Form() {
    const [value, setValue] = React.useState(new Date('2022-01-14'));
    const [region, setregion] = React.useState('');
    const [btnDisable, setbtnDisable] = useState(false)
    const [dateErrMsg, setdateErrMsg] = useState('')
    const [showLoader, setshowLoader] = useState(false)
    const [formCheckbox, setformCheckbox] = useState(false)
    const [snackOpen, setsnackOpen] = useState(false)
    const firstName = useRef('');
    const email = useRef('');
    const formRef = useRef('');

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const fetchRegion = async () => {
        const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        if(response){
            setshowLoader(false)
            setsnackOpen(true)
        }
        console.log(response.data)
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        setshowLoader(true)
        fetchRegion();
        setdateErrMsg('')
        setregion('')
        setformCheckbox(false)
        formRef.current.reset();
    }
    const handledateerror = () => {
        setbtnDisable(true)
        setdateErrMsg("Enter a Valid date")
    }
    const handleChange = (newValue) => {
        if(newValue === null){
            setbtnDisable(true)
        }else {
            setbtnDisable(false)
            setdateErrMsg('')
        }
        setValue(newValue);
    };
    const handleChangeSelect = (event) => {
        setregion(event.target.value);
    };
    const handleCheck = () => {
        setformCheckbox(!formCheckbox)
    }
    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
          }
        setsnackOpen(false)
    }
    return (
        <div className="container">
            {showLoader ? <Loader /> : '' }
            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                Data Submitted Successfully!
                </Alert>
            </Snackbar>
            <h3>Sample Form</h3>
            <form onSubmit={handleSubmit} ref={formRef}>
                <FormControl fullWidth><TextField required inputRef={firstName} className="outline-space" id="standard-basic" label="Fullname" variant="outlined" /></FormControl>
                <FormControl fullWidth><TextField required inputRef={email} className="outline-space" id="standard-basic" label="Email" variant="outlined" /></FormControl>
                <FormControl fullWidth className="outline-space">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={handleChange}
                    onError={handledateerror}
                    renderInput={(params) => <TextField {...params} />}
                    />
                    <span className="err-msg">{dateErrMsg}</span>
                </LocalizationProvider></FormControl>
                <FormControl fullWidth className="outline-space">
                    <InputLabel id="demo-simple-select-label">Region</InputLabel>
                    <Select
                    className="select-value"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    label="Region"
                    required
                    onChange={handleChangeSelect}
                    >
                    <MenuItem value="Africa">Africa</MenuItem>
                    <MenuItem value="Americas">Americas</MenuItem>
                    <MenuItem value="Asia">Asia</MenuItem>
                    <MenuItem value="Europe">Europe</MenuItem>
                    <MenuItem value="Oceania">Oceania</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth className="outline-space">
                    <FormControlLabel control={<Checkbox checked={formCheckbox} onChange={handleCheck} required/>} label="I agree to Terms and Conditions" />
                </FormControl>
                <Button variant="contained" type="submit" disabled={btnDisable} color="success">
                    Submit
                </Button>
            </form>
        </div>
    )
}
