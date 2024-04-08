import {Grid} from "@mui/material";

const userForm = props => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor:'#ffffff',
                marginBottom:'30px',
                display: 'block',
            }}
        >

                <Grid item xs={12}>
                    <typography component= {'h1'} sx={{color:'#000000'}}>User Form
                    </typography>
                </Grid>

                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                    <typography 
                        component= {'label'}
                        htmlfor="id"
                        sx={{
                            color:'#000000',
                            marginright:'20px',
                            fontsize:'16px',
                            width:'100px',
                            display:'block',
                        }}
                    >
                        User ID
                    </typography>
                    <input
                        type="number"
                        id='id'
                        name='id'
                        sx={{width:'400px'}}
                        value={''}
                        onChange={e=>{}}
                    />
                </Grid>

                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                    <typography 
                        component= {'label'}
                        htmlfor="id"
                        sx={{
                            color:'#000000',
                            marginright:'20px',
                            fontsize:'16px',
                            width:'100px',
                            display:'block',
                        }}
                    >
                        User First Name
                    </typography>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        sx={{width:'400px'}}
                        value={''}
                        onChange={e=>{}}
                    />
                </Grid>

                
                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                    <typography 
                        component= {'label'}
                        htmlfor="id"
                        sx={{
                            color:'#000000',
                            marginright:'20px',
                            fontsize:'16px',
                            width:'100px',
                            display:'block',
                        }}
                    >
                        User Last Name
                    </typography>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        sx={{width:'400px'}}
                        value={''}
                        onChange={e=>{}}
                    />
                </Grid>

                <button
                    sx={{
                        margin:'auto',
                        marginBottom:'20px',
                        backgroundColor:'#00c6c6',
                        color:'#ffffff',
                        marginLeft:'15px',
                        marginTop:'20px',
                        '&:hover':{
                            opacity:'0.7',
                            backgroundColor:'#00c6c6', 
                        }

                    }}
                
                >ADD</button>

        </Grid>
    );
}

export default userForm;