import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '../history';

const initialUser=localStorage.getItem('auth')?JSON.parse(localStorage.getItem('auth')):null;


// const initialState={
//     isLoading:false,
//     currentUser:null,
//     error:null,
// };
export const authSlice=createSlice({
    name:'auth',
    initialState: {
        isLoading: false,
        currentUser: initialUser,
        error: null,
    },
//     reducers:{
//         loginSuccess:(state,action)=>{
//              state.currentUser=action.payload;
//              state.isLoading=false;
//         },
//         loginFailure:(state,action)=>{
//             state.error=action.payload;

//         },
//         registerSuccess:(state,action)=>{
//           state.currentUser=action.payload;
//           state.isLoading=false;
//         },
//         registerFailure:(state,action)=>{
//             state.error=action.payload;
//         },
//         logoutSuccess:(state)=>{
//               state.currentUser=null;
//         },
//     },
// });

// export const{
//     loginFailure,loginSuccess,registerFailure,registerSuccess,logoutSuccess
// }=authSlice.actions;

// export default authSlice.reducer;

reducers: {
    loginSuccess: (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
    },
    loginFailure: (state, action) => {
        state.error = action.payload;
    },
    logoutSuccess: (state) => {
        state.currentUser = null;
    },
},
extraReducers: (builder) => {
    builder
        .addCase(register.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            state.isLoading = false;
        })
        .addCase(register.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
},
});

export const { loginFailure, loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;

// export const register=(user)=>async(dispatch)=>{
//     try{
//         const formdata=new FormData();
//         formdata.append('username',user.username);
//         formdata.append('email',user.email);
//         formdata.append('password',user.password);

//         const response = await axios.post(
//             'http://localhost:4000/auth/register',
//             formdata
//         );
        
//         console.log(response);
//         if(response){
//             console.log('success');
//             dispatch(registerSuccess(response.data));
//         }else{
//             dispatch(registerFailure('Registration failed. Please try again.'));
//         }
//     }catch(error){
//         console.log(error);
//         if (error.response && error.response.data) {
//             dispatch(registerFailure(error.response.data));
//         } else {
//             dispatch(registerFailure('An unexpected error occurred. Please try again.'));
//         }
//     }
// };


export const register = createAsyncThunk(
    'auth/register',
    async (user, { rejectWithValue }) => {
        try {
            // const formdata = new FormData();
            // formdata.append('username', user.username);
            // formdata.append('email', user.email);
            // formdata.append('password', user.password);
            console.log('Sending user data:', user); // Log user data
            const response = await axios.post(
                'http://localhost:4000/auth/register',
                user,
                { headers: { 'Content-Type': 'application/json' } } 
            );
            console.log('Received response:', response); // Log response
            history.push('/signin');
            window.location.reload();
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An unexpected error occurred.');
        }
    }
);


export const signin = createAsyncThunk(
    'auth/signin',
    async (user, { rejectWithValue }) => {
        try {
            
            console.log('Sending user data:', user); // Log user data
            const response = await axios.post(
                'http://localhost:4000/auth/signin',
                user
            );
            console.log('Received response:', response); // Log response
            if(response){
                localStorage.setItem('auth',JSON.stringify(response.data));
                history.push('/dashboard');
                window.location.reload();
                return response.data;
            }
            
        } catch (error) {
            return rejectWithValue(error.response?.data || 'An unexpected error occurred.');
        }
    }
);
