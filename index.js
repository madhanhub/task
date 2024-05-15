const express=require('express')
const app=express()
const mongoose=require('mongoose')
const morgan=require('morgan')
const path=require('path')


app.use(express.json())
app.use(morgan('dev'))

app.listen(9000,()=>{
    console.log('app listen')
})

app.get('/',async(req,res)=>{
    res.json('welcome')
})

var user=[
    {
        id:1,
        user_name:'ram',
        
    }
]

app.get('/user',async(req,res)=>{
   res.status(200).send({
        message:'data fetch',
        data:user
   })
})


app.post('/user',async(req,res)=>{
    var user_name=req.body.user_name
    user.push({
        id:(user.length+1).toString(),
        user_name:user_name
    })

    res.status(200).send({
        message :'data added successfully'
    })
})

app.put('/user/:id',async(req,res)=>{
    var id=req.params.id
    var user_name=req.body.user_name

    var index=user.findIndex(el => el.id == id)

    user[index]={
        ...user[index],
        user_name:user_name
    }
    res.status(200).send({
        message:'data updated'
    })
})

app.delete('/user/:id',async(req,res)=>{
    var id=req.params.id
    var new_user=user.filter(el => el.id != id)
    user=new_user
    res.status(200).send({
        message:'data deleted'
    })
})
