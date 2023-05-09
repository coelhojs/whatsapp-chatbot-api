
import { app } from './app';

app.listen(process.env.PORT, () => {
  console.log(`Server running with success on ${process.env.HOSTNAME}:${process.env.PORT}`)
})
