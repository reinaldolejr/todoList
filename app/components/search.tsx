import { Card, CardContent, Grid, TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'
import { text } from 'stream/consumers'

const Search = (props: { search: string, setSearch: Function }) => {
    return (
        <div>
            <Card >
                <CardContent >
                    <h2>Search</h2>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField
                                id="text-input"
                                label="Text"
                                type="text"
                                sx={{ m: 2, minWidth: '100vh' }}
                                value={props.search}
                                variant="standard"
                                onChange={(e: ChangeEvent<HTMLInputElement>) => props.setSearch(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default Search