import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import BarChart from '../../../assets/Icons/BarChart.svg'
import DownArrow from '../../../assets/Icons/DownArrow.svg'
import DtkImg from '../../../assets/Imgs/DtkImg.png'
import Clock from '../../../assets/Icons/Clock.svg'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Card, Paper, Box, CardActions, CardContent, CardMedia, CssBaseline, Grid, Checkbox, Radio, FormControlLabel, Toolbar, Container, LinearProgress } from '@material-ui/core';
import ExerciseBtn from '../../atom/ExerciseBtn/ExerciseBtn';

const ResultQuestionViewLasOrg = () => {




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

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);


    return <div>
        <CssBaseline />
        <AppBar
            color="#fff"
            className={classes.appbar}
            style={{ boxShadow: "none" }}
            position='absolute'
        >
            <Toolbar>
                {/* <ArrowBackIosIcons color='black' sx={{ width: 100 }} /> */}
                <Typography variant="body1" style={{ width: 1200 }} className={classes.center_align}>
                    LAS
                </Typography>
            </Toolbar>
        </AppBar>

        <Container maxWidth="lg" style={{ backgroundColor: '#fff', height: 'fit-content' }} >
            <Container padding={0} maxWidth="md" style={{ backgroundColor: '#fff' }}>
                <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box mt={2} width={100} sx={{ color: '#222' }}><img src={BarChart} alt="" />8 av 12</Box>
                    <Box mt={2} sx={{ color: '#222' }}><img src={Clock} alt="" />20:00 min</Box>
                </Box>
                <Box mt={2}>
                    <LinearProgress className={classes.color_progress} variant="determinate" value={progress} />
                </Box>
            </Container>
            <Container maxWidth="md" style={{ marginTop: 0, backgroundColor: '#f9f9f9', height: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box mt={5} paddingX={6} paddingY={2} sx={{ backgroundColor: '#fff', width: 600, height: 373, overflow: 'auto', border: '1px solid #e1e1e1' }}>
                    <Typography variant="subtitle1" style={{ textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '500' }}>
                        4 uppgifter:
                    </Typography>
                    <Typography variant="h6" component='h6'>
                        Ormbett
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Varje ??r intr??ffar uppskattningsvis cirka 300 bett av huggorm (Vipera berus) i Sverige. De flesta bitna kommer i n??got skede i kontakt med sjukv??rden. I flertalet av dessa fall konsulteras Giftinformationscentralen, som d?? har m??jlighet att f??lja f??rloppet genom upprepade  kontakter med behandlande l??kare samt ??ven f?? tillg??ng till epikriser. Allvarlighetsgraden varierar avsev??rt, men ett fyrtiotal patienter ??rligen utvecklar uttalade lokala reaktioner och/eller toxisk systemp??verkan som blir in-tensivv??rdskr??vande. D??dsfall har f??rekommit, men det senaste k??nda fallet i Sverige ligger n??rmare 20 ??r till-baka i tiden.
                    </Typography>
                    <Typography mt={3} variant="subtitle1" style={{ fontSize: '.7rem', fontWeight: '500' }}>
                        Trots i ??vrigt framg??ngsrika behandlingsrutiner har det dock visat sig sv??rt att undvika att vissa patienter f??r omfattande lokalreaktioner som forts??tter att breda ut sig under de f??rsta dygnen. Orsaken till detta ??r oftast att serum (antitoxin) inte getts alls, getts f??r sent eller att upprepade doser inte kommit till st??nd vid symtom-recidiv.
                        F??r att f??rs??ka komma till r??tta med flertalet av dessa fall konsulteras Giftinformationscentralen, som d?? har m??jlighet att f??lja f??rloppet genom upprepade  kontakter med behandlande l??kare samt ??ven f?? tillg??ng till epikriser. Allvarlighetsgraden varierar avsev??rt, men ett fyrtiotal patienter ??rligen utvecklar uttalade lokala reaktioner och/eller toxisk systemp??verkan som
                    </Typography>
                    <Box>
                        <img src={DtkImg} alt="" />
                    </Box>
                </Box>
                <Box paddingX={4} mt={5} sx={{ backgroundColor: '#fff', width: 600, height: 120, border: '1px solid #e1e1e1', display: 'flex' }}>
                    <FormControlLabel control={<Checkbox />} />
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 500 }}>
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem' }} variant='body1' component='body1'>
                            Uppgift 1 av 10
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Vad ??r enligt texten ett problem med effekten av de huggormsserum som anv??nds f??r n??rva-rande?
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
                            <img src={DownArrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box paddingX={4} sx={{ backgroundColor: '#fff', width: 600, height: 120, border: '1px solid #e1e1e1', display: 'flex' }}>
                    <FormControlLabel control={<Checkbox />} />
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 500 }}>
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem' }} variant='body1' component='body1'>
                            Uppgift 2 av 10
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Vad b??r man, enligt texten, i f??rsta hand observera f??r att bed??ma hur tillst??ndet utvecklas f??r en ormbiten patient som ??r under behandling?
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
                            <img src={DownArrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box paddingX={4} sx={{ backgroundColor: '#fff', width: 600, height: 120, border: '1px solid #e1e1e1', display: 'flex' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 500 }}>
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem' }} variant='body1' component='body1'>
                            Uppgift 3 av 10
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                            Hur kan man sammanfatta textf??rfattarnas in-st??llning till fasciotomi vid huggormsbett?
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
                            <img src={DownArrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                </Box>
                <Box paddingX={4} sx={{ backgroundColor: '#fff', width: 600, height: 120, border: '1px solid #e1e1e1', display: 'flex' }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                    <Box padding={1} mt={2} mb={2} style={{ border: '1px solid #E3E3E3', width: 500 }}>
                        <Typography style={{ textTransform: "uppercase", fontSize: '0.75rem' }} variant='body1' component='body1'>
                            Uppgift 4 av 10
                        </Typography>
                        <Typography variant="h6" component="h6" style={{ fontSize: '.75rem', fontWeight: '600' }}>
                        Hur kan man sammanfatta textf??rfattarnas in-st??llning till fasciotomi vid huggormsbett?
                        </Typography>
                        <Box style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 10 }}>
                            <img src={DownArrow} className={classes.size} alt="" />
                        </Box>
                    </Box>
                </Box>

                <Box padding={1} m={2} sx={{ width: 615 }}>
                    <ExerciseBtn title="N??sta" />
                </Box>
            </Container>
        </Container>

    </div>;
};

export default ResultQuestionViewLasOrg;
