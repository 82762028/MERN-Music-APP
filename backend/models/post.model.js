


const mongoose = require("mongoose");


const CompteSchema = mongoose.Schema(
    {
        nom: {type: String, },
        prenom:{type: String},
        mail: {type:String},
        mdp: {type: String},
        pays:{type: String},
        artist: {
            Nom: String,
            image_cover:{
            type: String
            },
            Followers:[ 
               {

                nom:{
                    type: String,

                },
                prenom:{
                    type:String,
                },
                idFollower:{
                    type: String,
                },
                Fait_Date: {
                    type: Date,
                    default: Date.now()
                }
               },
              

            ],
            default:{

            }
        },
        albums: 
          [
               {
                Nom_album: {type: String,},
                album_cover:{type: String},
                morceaux: [
                    {   
                        titre: {type: String},
                        url: {type: String,},
                        image:{type:String},
                        categorie:{ type: String,},
                        likers:[
                            {
                                nom:{
                                    type: String,
                
                                },
                                prenom:{
                                    type:String,
                                },
                                idFollower:{
                                    type: String,
                                },
                                Fait_Date: {
                                    type: Date,
                                    default: Date.now()
                                }
                            }
                        ],
                        comments:[
                            {
                                nom:{
                                    type: String,
                
                                },
                                prenom:{
                                    type:String,
                                },
                                message:{
                                    type: String,
                                },
                                idFollower:{
                                    type: String,
                                },
                                Fait_Date: {
                                    type: Date,
                                    default: Date.now()
                                }
                            }
                        ],
                        Fait_Date: {
                            type: Date,
                            default: Date.now()
                        }
                            
                    },
                ],
                Fait_Date: {
                    type: Date,
                    default: Date.now()
                },
                default:{
                
                }
               }

          ]
        ,
    
       

},
{
    timestamps:true
}
)

module.exports = mongoose.model('Compte', CompteSchema)