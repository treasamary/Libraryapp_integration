const express=require('express');

const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function Router(nav){

    // var books=[
    //     {
    //         title:'The God of Small Things ',
    //         author:'Arundhati Roy',
    //         genre:'Novel',
    //         img:"book1.jpg",
    //         read:'The modern-day book that launched the Malayali identity onto the international scene, The God of Small Things by Arundhati Roy, won the Booker Prize in 1997. Centered on the life of twin siblings Rahel and Estha, it traces their growing up, along with their mother Ammu’s, whose life gets cursed after she dares to love a man below her in society’s class hierarchy.'
    //     },
    //     {
    //         title:'Khasakinte Ithihasam (The Legends of Khasak)  ',
    //         author:'OV Vijayan',
    //         genre:'Novel(Magic realism)',
    //         img:"book2.jfif",
    //         read:'Published in 1969, it has undergone more than 50 reprints since, making it one of the biggest bestselling books in Asia. The novel was translated into English by the author himself in 1994, titled The Legends of Khasak. It has also been translated into French and German. The story traces the journey of the protagonist Ravi, who is tormented by the guilt of having an illegitimate love affair with his stepmother.'
           
    //     },
    //     {
    //         title:'Mathilukal (The Walls)',
    //         author:'Vaikom Muhammad Basheer',
    //         genre:'Romance,Patriotic',
    //         img:"book3.jpg",
    //         read:'Written in 1965, Mathilukal, by Vaikom Muhammad Basheer, is one of the all-time classics of Malayalam literature. The legendary tale narrates the love of the central figure Basheer (as the writer himself), who romances Narayani across the wall of a prison which separates them, without the two ever meeting each other. The masterpiece book has been made into an equally brilliant Malayalam film by the same name.'
           
    //     },
    //     {
    //         title:'Chemmeen',
    //         author:'Thakazhi Sivasankara Pillai',
    //         genre:'Romance,Drama',
    //         img:"book4.jfif",
    //         read:'One of the first classics of modern Malayalam literature, Chemmeen was printed in 1956. It is the tragic romantic saga of Karuthamma and Pareekutty. The story, which was made into a film, became a cult hit and remains a classic of Malayalam cinema as well. The story skilfully depicts the lives of the fishermen community in Kerala, their beliefs, mores, customs, practices, and their intense faith in the sea goddess who shows her wrath upon those who dare to defy her.'
           
    //     },
    //     {
    //         title:'Randamoozham (The Second Turn, Bhima: Lone Warrior) ',
    //         author:'MT Vasudevan Nair',
    //         genre:'Mythology, drama, historical fiction',
    //         img:"book5.jpg",
    //         read:'Released in 1984, Randamoozham, meaning “second turn,” is a path-breaking book that re-looked at conventional mythological perspectives. The novel is a recapitulation of the Indian epic Mahabharata from the outlook of Bhima, one of the Pandava brothers. Its cult stardom can be attributed to its departure from the fantasy world of gods to human realities.'
           
    //     }



        
    // ]
    
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',
            {nav,
            title:'Library',
            book
            }
            );
          
        })
        
        
    
    });

    booksRouter.get('/:id',function(req,res){
        const id=req.prams.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
        res.render('book',{nav,
        title:'Library',
        book
    });
        })
    });
    
    return booksRouter;
}


module.exports = Router;