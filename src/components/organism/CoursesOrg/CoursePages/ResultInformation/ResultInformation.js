import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import RightArrow from '../../../../../assets/Icons/RightArrow.svg'
import DtkImg from '../../../../../assets/Imgs/DtkImg.png'
import Clock from '../../../../../assets/Icons/Clock.svg'
import BarChart from '../../../../../assets/Icons/BarChart.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, LinearProgress } from '@material-ui/core';
import ExerciseBtn from '../../../../atom/ExerciseBtn/ExerciseBtn';

const ResultInformation = () => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: '100vh',
            backgroundColor: '#fff',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        header: {
            minHeight: '10vh',
            backgroundColor: '#fff',
            border: '1px solid #b4b4b4',
        },
        appbar:
        {
            border: '1px solid #E1E1E1',
            backgroundColor: '#f9f9f9'
        },
        size:
        {
            width: 15,
            height: 15
        },
        center_align: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        color_progress: {
            backgroundColor: '#B4B4B4',
            color: '#6FCF97'
        },
        content: {
            minHeight: '90vh',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '90vw'
        }
    }))

    const classes = useStyles(10);




    return <div>
        <CssBaseline />
        <AppBar
            color="#fff"
            className={classes.appbar}
            style={{ boxShadow: "none" }}
            position='absolute'
        >
            <Toolbar>
                {/* <ArrowBackIosIcon color='black' sx={{ width: 100 }} /> */}
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    H??gskoleprov 2021 v??r mars
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth={false} disableGutters style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container maxWidth="md" style={{ marginTop: 65, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box mt={3} sx={{ display: 'flex', width: 600, flexDirection: 'column' }}>
                    <Typography variant="h6" component="h6">H??gskoleprov 2021 v??r mars</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Box mt={1} width={100} sx={{ color: '#222' }}><img style={{marginRight:'.25rem'}} src={BarChart} alt="" />160 fr??gor</Box>
                        <Box mt={1} ml={1} sx={{ color: '#222' }}><img style={{marginRight:'.25rem'}} src={Clock} alt="" />55min per provass</Box>
                    </Box>
                </Box>
                <Box mt={3} padding={6} sx={{ backgroundColor: '#fff', width: 600, height: 373, overflow: 'auto', border: '1px solid #e1e1e1' }}>
                    <Typography variant="h6" component='h6'>
                        Instruktioner
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '600' }}>
                        Fyra provpass
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Ta paus mellan proven. Ditt provpass sparas och du kan forts??tta provet vid ett annat tillf??lle.
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        N??r 55 minuter har g??tt avbryts provpassen och du beh??ver l??mna in f??r att f?? po??ng.
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Du f??r din po??ng f??rst n??r du gjort klart hela provet.
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '600' }}>
                        Kvantiativt provpass
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '600' }}>
                        Verbalt provpass
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Lorem
                    </Typography>
                    <Typography mt={3} variant="h5" component="h5">
                        Hj??lpmedel
                    </Typography>
                </Box>
                <Box padding={1} m={2} sx={{ width: 615 }}>
                    <Link to="#"><ExerciseBtn title="N??sta" /></Link>
                </Box>
            </Container>
        </Container>
    </div>;
};

export default ResultInformation;
