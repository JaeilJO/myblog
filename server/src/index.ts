import express from 'express';
import session from 'express-session';
import authRouter from './routes/auth';
import requireLogin from './middleware/requireLogin';
import postRouter from './routes/post';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 1000 * 60 * 30, 
    },
  })
);


app.use('/auth', authRouter);

app.use('/post',requireLogin, postRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
