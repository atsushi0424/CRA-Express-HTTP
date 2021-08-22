const express = require('express');
const cors = require('cors');

const app = express();
const todoList = [];
const PORT = 3001;
app.use(cors());

// urlencodedとjsonは別々に初期化する
// app.use(express.urlencoded({
//     extended: true
// }));
app.use(express.json());

app.listen(PORT);
console.log('Server is online.');

app.get('/', (req, res) => {
    // JSONを送信する
    // console.log(req);
    res.json(todoList);
});

app.post('/', function(req, res) {
    // リクエストボディを出力
    console.log(req.body);
    // パラメータ名、nameを出力
    console.log(req.body.name);

    todoList.push((req.body.name).toString());

    res.send('POST request to the homepage');
})