const express=require('express');

const AuthorsRouter=express.Router();
function Router(nav){

    var Authors =[
        {
            name:'Arundhati Roy',
           
            genre:'Genre:Fiction,Nonfiction',
            img:"auth1.jpg",
            read:'Suzanna Arundhati Roy (born 24 November 1961)[1] is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author.[citation needed] She is also a political activist involved in human rights and environmental causes.'
        },
        {
            name:'O. V. Vijayan',
            
            genre:'Genre:Novel, short story, essays',
            img:"auth2.jfif",
            read:'Ottupulackal Velukkuty Vijayan (2 July 1930 – 30 March 2005), commonly known as O. V. Vijayan, was an Indian author and cartoonist, who was an important figure in modern Malayalam language literature. Best known for his first novel Khasakkinte Itihasam (1969), Vijayan was the author of six novels, nine short-story collections, and nine collections of essays, memoirs and reflections.'
           
        },
        {
            name:'Vaikom Muhammad Basheer',
            genre:'Genre:Novel, short story, essays, memoirs',

           
            img:"auth3.jpg",
            read:'Vaikom Muhammad Basheer (21 January 1908 – 5 July 1994), also known as Beypore Sulthan, was an Indian independence activist and writer of Malayalam literature . He was a writer, humanist, freedom fighter, novelist and short story writer, noted for his path-breaking, down-to-earth style of writing that made him equally popular among literary critics as well as the common man. '
        },
        {
            name:' Thakazhi Sivasankara Pillai',
            genre:'Genre:Novel, short story',

           
            img:"auth4.jpg",
            read:'Thakazhi Sivasankara Pillai (17 April 1912 – 10 April 1999), popularly known as Thakazhi after his place of birth, was an Indian novelist and short story writer of Malayalam literature. He wrote over 30 novels and novellas and over 600 short stories focusing on the lives of the oppressed classes. Known for his works such as Kayar (Coir, 1978) and Chemmeen (Prawns, 1956), Pillai was a recipient of the Padma Bhushan, the third highest Indian civilian award. He was also a recipient of the Jnanpith, Indias highest literary award, awarded in 1984 for the novel Kayar.'
        },
        {
            name:' MT Vasudevan Nair',
            genre:'Genre:Novel, short story, childrens literature, travelogue, essays',

           
            img:"auth5.jpg",
            read:'Madath Thekkepaattu Vasudevan Nair (born 1933), popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.[2][3] He was born in Kudallur, a small village in the present day Anakkara panchayath in Pattambi Taluk, Palakkad district (Palghat). He shot into fame at the age of 20 when, as a chemistry undergraduate, he won the prize for the best short story in Malayalam at World Short Story Competition conducted by The New York Herald Tribune. '
        }


        
    ]
    
    AuthorsRouter.get('/',function(req,res){
        
        res.render("Authors",{nav,
        title:'Library',
        Authors
    });
    });
    
    AuthorsRouter.get('/:id',function(req,res){
        const id=req.params.id
        res.render('Author',
        {nav,
        title:'Library',
        Author:Authors[id]
        });
      
    });
    return AuthorsRouter;
}


module.exports = Router;