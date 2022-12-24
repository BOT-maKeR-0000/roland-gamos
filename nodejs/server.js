let express = require('express');
let app = express();

app.post('/code/createroom', function (req, res) {
    let roomId = req.query.roomId;
    console.log(roomId);
    res.status(200).send('OK');
});

app.use('/code', express.static('../code/'));

app.listen(5500, function () {
    console.log('Server is running on port 5500');
});