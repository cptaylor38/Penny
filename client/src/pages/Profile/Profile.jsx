import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import { Grid, Container, Paper, Button } from '@material-ui/core';
import { FaHome, FaMoneyBill, FaRegLightbulb, FaHeartbeat, FaGamepad, FaCarSide, FaFolderPlus } from 'react-icons/fa';
import SalaryInput from '../../components/SalaryInput/SalaryInput';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import './Profile.css';
import Content from '../../components/Content/Content';
const video = require('../../assets/images/globe.mp4');
const ogvideo = require('../../assets/images/ogglobe.ogv');
const webmglobe = require('../../assets/images/webmglobe.webm');

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const [salarySection, setSalarySection] = useState(false);
    const [chosenCat, setChosenCat] = useState('Home');
    const userData = useContext(UserProvider.context);
    const [expenseToggle, setExpenseToggle] = useState(false);
    useEffect(() => setSelected(userData), [userData]);

    const expenseCategories = [
        { style: { color: '#5A4218' }, name: 'Finances', icon: <FaMoneyBill /> },
        { style: { color: 'green' }, name: 'Living', icon: <FaRegLightbulb /> },
        { style: { color: 'red' }, name: 'Health', icon: <FaHeartbeat /> },
        { style: { color: 'gold' }, name: 'Leisure', icon: <FaGamepad /> },
        { style: { color: 'aquamarine' }, name: 'Travel', icon: <FaCarSide /> }
    ];

    const showSalaryUpdate = () => {
        setSalarySection(true);
    }

    const categoryOnClick = (category) => {
        setChosenCat(category);
    }

    const expenseInputToggle = () => {
        setExpenseToggle(!expenseToggle);
    }

    useEffect(() => {
        let expenseDiv = document.querySelector('#expenseInputPaper');
        if (expenseToggle === false) {
            expenseDiv.style.display = 'none'
        }
        if (expenseToggle === true) {
            expenseDiv.style.display = 'flex'
        }
    }, [expenseToggle])

    const contentDisplay = () => {
        switch (chosenCat) {
            case 'Home':
                return <Content display={'home'} user={selected._id} />
            case 'Travel':
                return <Content display={'travel'} user={selected._id} />
            case 'Health':
                return <Content display={'health'} user={selected._id} />
            case 'Leisure':
                return <Content display={'leisure'} user={selected._id} />
            case 'Living':
                return <Content display={'living'} user={selected._id} />
            case 'Finances':
                return <Content display={'finances'} user={selected._id} />
            default: return <Content displpay={'home'} user={selected._id} />
        }
    }

    return (
        <Container maxWidth='xl' id='profilePage'>
            <div id='backgroundContainer'>
                <video autoPlay loop muted id='backgroundVid'>
                    <source src={video} type='video/mp4'></source>
                    <source src={ogvideo} type='video/ogg'></source>
                    <source src={webmglobe} type='video/webm'></source>
                </video>
            </div>
            <Grid container id='profileHeader'>
                <Grid item xs={12} sm={5} lg={4} id='gridWelcome'>
                    <Paper className='profHeaderSub'>
                        {selected ? (<>
                            <h2 id='welcomeH'>Welcome, {selected.username}</h2>
                            <div className='logoutSection'>
                                <Button size='medium' variant='contained' href='/auth/logout'>Log out</Button>
                            </div>
                        </>) : ''}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={7} lg={8} id='gridSalary'>
                    <Paper className='profHeaderSub'>
                        {selected && !salarySection ? (
                            <>
                                <p id='currentSalP'>Current yearly income: {selected.salary.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD"
                                })}</p>
                                <Button id='salaryUpdateBtn' variant='outlined' onClick={() => showSalaryUpdate()}>Update</Button>
                            </>
                        ) :
                            <SalaryInput selected={selected} setSelected={setSelected} setSalarySection={setSalarySection} />}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='homeCont'>
                <Grid item xs={12} id='homeItem'>
                    <Paper id='homePaper'>
                        <Grid item xs={12} id='homeBtnSection'>
                            <Button id='homeBtn' onClick={() => setChosenCat('Home')}><FaHome style={{ fontSize: '36px' }} /><p>Home</p></Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='expenseCategories'>
                <Grid item xs={12} id='categoryNav'>
                    <Paper className='categorySelectRegion'>
                        {expenseCategories.map((item, index) => {
                            return (
                                <Button href="#text-buttons"
                                    style={item.style}
                                    onClick={() => categoryOnClick(item.name)}
                                    key={index}
                                    className='categoryBtn'>
                                    <p className='catIcon'>{item.icon}</p>
                                    <p>{item.name}</p>
                                </Button>
                            )
                        })}
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='addCont'>
                <Grid item xs={12} id='addItem'>
                    <Paper id='addPaper'>
                        <Grid item xs={12} id='addExpenseSection'>
                            <Button id='toggleExpenseBtn' onClick={expenseInputToggle}><p style={{ marginRight: 10 }}>Add Expense</p> <FaFolderPlus style={{ fontSize: 24 }} /> </Button>
                        </Grid>
                    </Paper>
                    <Paper id='expenseInputPaper'>
                        <Grid item xs={12} id='expenseInputSection'>
                            {selected ? <ExpenseForm user={selected._id} /> : null}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container id='chosenCatContainer'>
                <Grid item xs={12} className='chosenCatRegion'>
                    {selected ? contentDisplay() : <p>Loading</p>}
                </Grid>
            </Grid>
        </Container >
    );
};

export default Profile;