const mongoose=require('mongoose');

const mongoURI='mongodb+srv://Sweetik:DX1dkfG5M6BqyI7o@cluster0.9ita8pq.mongodb.net/taskManager';
// const mongoURI='mongodb://localhost:27017/taskManager';
const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

mongoose.connect(mongoURI,options).then(()=>{
    console.log('Connected to MongoDB');
}).catch((error)=>{
    console.error('Error connecting to MongoDB: ',error);
});