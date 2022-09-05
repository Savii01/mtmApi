const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// async dbConnection() {

//   try {
      
//       await connect_db.authenticate();
//       console.log('Database online');

//   } catch (error) {
//       throw new Error( error );
//   }

// }

const connectdb = require('./config/configDB');
connectdb.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors("*"));


app.get('/', (req,res)=>{
    res.send('Welcome to artist management');
  });


//Routes  
require("./Routes/acctRoute")(app);
require("./routes/adminAssRoute")(app)
require("./routes/artistRoute")(app)
require("./routes/contractRoute")(app)
require("./routes/eventOrgRoute")(app)
require("./routes/eventTableRoute")(app)
require("./routes/expensesRoute")(app)
require("./routes/generalRoute")(app)
require("./routes/managementRoute")(app)
require("./routes/managerRoutes")(app)
require("./routes/managerRoutes")(app)
require("./routes/newsRoutes")(app)
require("./routes/recArtistRoutes")(app)
require("./routes/addressRoute")(app)
require("./routes/invoiceRoute")(app)








const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`app is listening on port:  ${port}....`)
  )