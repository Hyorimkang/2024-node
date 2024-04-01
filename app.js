const express = require('express')
const path = require('path')    //node에서 제공하는 기본패키지
const app = express();
const port = 3000;


// app.use('/html', express.static(path.join(__dirname, 'html'))) 
app.use('/html', express.static(__dirname + '/html'))

// get method 요청에 대한 라우팅
app.get('/', (req, res) => {
    res.send("hello world")
})



//http://localhost:3000/test/KHR?lang=ko
app.get('/test/:name', (req, res) =>{
    console.log('path', req.path)       //'test/KHR'
    console.log('params', req.params)   //{name: 'KHR'}
    console.log('query', req.query)     //{lang: 'ko'}
    res.send('콘솔 보세요')

})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(path.join(__dirname, 'html'))
})