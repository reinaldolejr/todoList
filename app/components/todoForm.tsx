import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'

const TodoForm = (props: { addTodo: Function }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");


    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (!text || !category) return;
        props.addTodo(text, category);
        setText("");
        setCategory("");
    }

    return (
        <div>
            <Card >
                <CardContent >
                    <Grid container spacing={2}>
                        <form onSubmit={handleSubmit}>
                            <Grid item xs={12}>
                                <TextField
                                    id="text-input"
                                    label="Text"
                                    type="text"
                                    sx={{ m: 2, minWidth: '100vh' }}
                                    value={text}
                                    variant="standard"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="standard" sx={{ m: 2, minWidth: '100vh' }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select a category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={category}
                                        onChange={(e: SelectChangeEvent<string>) => setCategory(e.target.value)}
                                        label="Category"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={'Work'}>Work</MenuItem>
                                        <MenuItem value={'College'}>College</MenuItem>
                                        <MenuItem value={'Home'}>Home</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" sx={{ m: 2 }}>Save</Button>
                            </Grid>
                        </form>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default TodoForm