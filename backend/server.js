
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port=3001
const app = express();


//connexion à la base de donnée
connectDB();

//contenu de notre application

//app donne moi un certains nombre de donné qui s'appelle post
/*
app.get('/post',(req,res)=>{
    //return un objet json
    res.json({message:"voici les données"})
})

*/

//Middleware qui permet de traiter les données du request
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Autoriser l'origine du client
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Méthodes HTTP autorisées
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // En-têtes autorisés
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // Autoriser les cookies (si nécessaire)
  
    // Répondre aux pré-requêtes (preflight requests)
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/post",require("./routes/post.routes"))
//lancer le server
app.listen(port,()=>{
    console.log("le serveur a demaré au port "+ port)
})

