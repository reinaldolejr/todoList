import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Todo = (props: { todo: todoModel, doneTodo: Function, deleteTodo: Function }) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Card sx={{ my: 2 }} >
                <CardContent >
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography noWrap style={{ textDecoration: props.todo.isCompleted ? 'line-through' : '' }} >
                                <b> {props.todo.text}</b> <br />
                                <small>{props.todo.category}</small>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="success" startIcon={<CheckCircleIcon />} onClick={() => props.doneTodo(props.todo.id)}>
                                Done
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => props.deleteTodo(props.todo.id)}>
                                delete
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div >
    )
}

export default Todo