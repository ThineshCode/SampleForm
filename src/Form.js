import React,{useState} from 'react';
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

export default function Form(props) {
    const [dummy, setdummy] = useState('');
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("success")
    }

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleChangeSelect = (event) => {
        setAge(event.target.value);
      };
    return (
        <div className="container">
            <h3>Sample Form</h3>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth><TextField className="outline-space" id="standard-basic" label="Fullname" variant="outlined" /></FormControl>
                <FormControl fullWidth><TextField className="outline-space" id="standard-basic" label="Email" variant="outlined" /></FormControl>
                <FormControl fullWidth className="outline-space">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider></FormControl>
                <FormControl fullWidth className="outline-space">
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                    className=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChangeSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth className="outline-space">
                    <FormControlLabel control={<Checkbox />} label="I agree to Terms and Conditions" />
                </FormControl>
                <Button variant="contained" type="submit" color="success">
                    Submit
                </Button>
            </form>
        </div>
    )
}
