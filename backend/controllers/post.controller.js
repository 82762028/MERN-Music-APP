
const PostModel = require('../models/post.model');




module.exports.getArtist= async (req,res)=>{
    const posts = await PostModel.find({_id:req.params.id})
    res.status(200).json(posts)
}


module.exports.getPosts= async (req,res)=>{
    const posts = await PostModel.find()
    res.status(200).json(posts)
}

module.exports.setPosts = async (req,res)=>{

    //res.json({message:"ca fonctionne"})
try{
    /*
    let newCompte = {
    nom: "Nakamura",
    prenom: "Aya",
    mail: "adresse@mail.com",
    mdp: "MotDePasse",
    artist:{
        Nom: "Aya Nakamoura",
        Followers: []

    },
    albums: [
        {
            Nom_album: "Album1",
            morceaux: [
                {   

                    titre:"Aya nakamoura 1",
                    url: "https://drive.google.com/uc?id=1FGLhNU3BOliCK3JOGwBe4YuxRbgrcgV6",
                    image: "https://drive.google.com/uc?id=1_1gQgQEhtV9RlYm-QqpFJbYsIkFofL0I",
                    categorie: "RAP",
                    likers: [] // Vous pouvez initialiser la liste des likers ici si nécessaire
                },
                {   
                    titre:"2-Aya_Nakamura_-_Baby_(Clip_officiel)(128k)",
                    url: "https://drive.google.com/uc?id=18mFD7ZKo5oyvyfDO0Q7Ji-KTxbj3ToH0",
                    image: "https://drive.google.com/uc?id=1iQ1ojJ6Nm5cIed9lp42PctTGbn_4m5MU",
                    categorie: "ROCK",
                    likers: [] // Vous pouvez initialiser la liste des likers ici si nécessaire
                },
                {   
                    titre:"3-Aya_Nakamura_-_Daddy_feat._SDM_(Clip_Officiel)(128k)",
                    url: "https://drive.google.com/uc?id=1D3Y_QrVwedxIuE5k3Z1ajyxu6DQEUvZS",
                    image: "https://drive.google.com/uc?id=1MmmX7w3Dz5RKP3ipuMa7hqTH47Zg8n-l",
                    categorie: "RAP",
                    likers: [] // Vous pouvez initialiser la liste des likers ici si nécessaire
                },
                {   
                    titre:"4-Aya_Nakamura_-_Oumou_Sangaré_(Clip_officiel)(128k)",
                    url: "https://drive.google.com/uc?id=11gyq4IhY5GKmJP87vdaYk8P2cv18jZF8",
                    image:"https://drive.google.com/uc?id=1DtAVRaEBN7iRTTTKCvLHAHo3PTIxncF4",
                    categorie: "RAP",
                    likers: [] // Vous pouvez initialiser la liste des likers ici si nécessaire
                }
            ]
        },



    ]
    }
    */

   




    
    let newCompte = {
        nom: "Sissoko",
        prenom: "Ibrahim",
        mail: "adresse@mail.com",
        mdp: "MotDePasse",
        pays:"Mali",
        artist:{
            Nom: "Iba One",
            image_cover:'https://momapi-music.netlify.app/iba/iba2.jpg',
            Followers: [
              {
              	nom:"Amagana",
              	prenom:"sagara",
              },
              {
                nom:"Amagana",
                prenom:"sagara",
            },
             {
                nom:"Jude",
                prenom:"sagara",
            }, 
               {
              	nom:"Jude",
              	prenom:"sagara",
              }, {
              	nom:"Ama",
              	prenom:"sagara",
              }, {
              	nom:"Toure",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, 

            ]
    
        },
        albums: [
            {
                Nom_album: "Mon Empire",
                album_cover: "https://momapi-music.netlify.app/iba/iba2.jpg",
                morceaux: [
                  
                    {
                        titre:"Diago Kadi",
                        url: "https://momapi-music.netlify.app/iba/1iba.m4a",
                        image: "https://momapi-music.netlify.app/iba/iba1.jpg",
                        categorie: "RAP",
                        likers: [
                            {
                                nom:"Toure",
                                prenom:"sagara",
                            },
                             {
                                nom:"Amagana",
                                prenom:"sagara",
                            },
                             {
                                nom:"Amagana",
                                prenom:"sagara",
                            },
             {
              	nom:"Toure",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, 





                           ] 
                    },
                    
                    {
                        titre:"Tout vas Bien",
                        url: "https://momapi-music.netlify.app/iba/2iba.m4a",
                        image: "https://momapi-music.netlify.app/iba/iba2.jpg",
                        categorie: "RAP",
                        likers: [
             {
              	nom:"Toure",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              },
               {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            },
            {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
              nom:"Amagana",
              prenom:"sagara",
          }, {
              nom:"Amagana",
              prenom:"sagara",
          }, {
              nom:"Amagana",
              prenom:"sagara",
          }, {
              nom:"Amagana",
              prenom:"sagara",
          },
          {
            nom:"Amagana",
            prenom:"sagara",
        }, {
            nom:"Amagana",
            prenom:"sagara",
        },
            {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            },




                           ] 
                    },
                 
                    {
                        titre:"Bling Bling",
                        url: "https://momapi-music.netlify.app/iba/3iba.m4a",
                        image: " https://momapi-music.netlify.app/iba/iba3.png",
                        categorie: "RAP",
                        likers: [
          
              {
              	nom:"Amagana",
              	prenom:"sagara",
              }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            }, {
                nom:"Amagana",
                prenom:"sagara",
            },





                           ] 
                    },
               
                  
        
                ]
            },
    
      
    
        ]
        }


    
    const post = await PostModel.create(newCompte)


    res.status(200).json(post)
}
catch(err){
 console.log(err)
}

}

module.exports.editPost = async (req, res) => {
    try {
   
      const updatedPost = await PostModel.findByIdAndUpdate(
        '6516b89adca2411fb1e49429', 
        {
          $set: {
            'pays': 'ML',
          },
        },
        { new: true } // Pour retourner le document mis à jour
      );
  
      console.log('Mise à jour réussie.');
        res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour' });
    }
  };

module.exports.deletePost= async (req, res)=>{
    

    const post = await PostModel.findById(req.params.id);
    if(!post){
    res.status(400).json({message: "Ce post n'existe pas"})
    }

    await post.remove();
    res.status(200).json("Message Suprimé"+post)
}

module.exports.likePost= async (req, res)=>{
    
try { 
// Exemple d'utilisation de la fonction pour ajouter un liker à un album
const albumId = "6512d1bd692687187f968d40"; // Remplacez par l'ID de l'album que vous souhaitez mettre à jour
const newLiker = {
nom: "Amagana",
prenom: "Sagara",
idFollower: "ID_DU_LIKER"
}

  
  
  
  
/*
   await PostModel.findByIdAndUpdate({ _id: req.params.id },
        { $push: { "albums.0.morceaux.0.likers": newLiker,
         "albums.0.morceaux.1.likers": newLiker,
          "albums.0.morceaux.2.likers": newLiker,
    
    } },
        {
            new: true // Pour renvoyer le document mis à jour
        }
    ).then((data)=> res.status(200).send(data))
*/
}catch(err){
    res.status(400).json(err)}
}


module.exports.dislikePost= async (req, res)=>{
    
    try { 
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull:{likers: req.body.userId}},
            {new:true}
        ).then((data)=> res.status(200).send(data))
    
    }catch(err){
        res.status(400).json(err)}
    }
    


   
    //Classements par popularité

    module.exports.getCharts= async (req,res)=>{
        const posts = await PostModel
        .aggregate([
            // Étape 1: Décomposez les morceaux en documents individuels
            { $unwind: "$albums" },
            { $unwind: "$albums.morceaux" },
            
            // Étape 2: Calculez le nombre de likers en utilisant $size avec $ifNull pour gérer les cas où "likers" est manquant ou n'est pas un tableau
            {
                $addFields: {
                    totalLikers: {
                        $size: {
                            $ifNull: ["$albums.morceaux.likers", []]
                        }
                    }
                }
            },
            
            // Étape 3: Triez par ordre décroissant du nombre de likers
            { $sort: { totalLikers: -1 } },
            
            // Étape 4: Projetez les morceaux
            {
                $project: {
                    _id: 0,
                    pays:"$pays",
                    artistid: "$_id" ,
                    morceau: "$albums.morceaux",
                    artist: "$artist" ,
                    albums: "$albums"
                }
            },
       
        ]);
        const morceauxOrderByLikers = posts.map(item => ({
            ...item.morceau,
            artist: item.artist,
            albums:item.albums,
            artistid: item.artistid,
            pays: item.pays
        }));
        res.status(200).json(morceauxOrderByLikers)
    }