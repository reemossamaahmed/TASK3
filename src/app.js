const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path')
const publicDirectory = path.join(__dirname,'../public') 
app.use(express.static(publicDirectory));

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Hello in my website, Here all information you Need',
    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About US',
    })
})

app.get('/services',(req,res)=>{
    res.render('services',{
        title:'Our Services',
        img_1:'images/06.jpg',
        img_2:'images/02.jpg',
        img_3:'images/08.jpg'
    })
})

app.get('/blogs',(req,res)=>{
    res.render('blogs',{
        title:'Our Blogs',
        img_1:'images/06.jpg',
        img_2:'images/02.jpg',
        img_3:'images/08.jpg'
    })
})

const viewsDirectory = path.join(__dirname,'../resources/views')
app.set('views',viewsDirectory)

const hbs = require('hbs');
const partialsDirectory = path.join(__dirname,'../resources/partials');
hbs.registerPartials(partialsDirectory);


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})