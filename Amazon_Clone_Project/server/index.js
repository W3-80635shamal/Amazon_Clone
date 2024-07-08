const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const config = require('./config');
const utils = require('./utils');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static('images'));
app.use(express.urlencoded({ extended: true }));


app.use((request, response, next) => {
    const skipUrls = ['/user/signup', '/user/signin', '/products','/cart/add','/cart/remove']; 
    if (skipUrls.includes(request.url)) {
        next(); 
    } else {
        const token = request.headers['token'];
        if (!token) {
            response.send(utils.createError('missing token'));
        } else {
            try {
                const payload = jwt.verify(token, config.secret);
                request.data = payload;
                next();
            } catch (ex) {
                response.send(utils.createError('invalid token'));
            }
        }
    }
});


const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use('/user', userRouter);
app.use('/products', productsRouter); 
app.use('/cart', cartRouter);



app.listen(9898, '0.0.0.0', () => {
    console.log('Server started on port 9898');
});
