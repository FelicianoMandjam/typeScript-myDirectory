import * as readline from "readline";

// let arrayContact: object = [] ;

// function contact(){

// }

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arrayContact: object[] = [];

let counter = 0 ; 
let count =()=>counter++

let addContact = () =>{
  rl.question("Votre prenom?", (answer1) => {
  
    let contact: {
      id:number;
      prenom: string;
      nom: string;
      numero: string;
    };
  
    // console.log(answer1);
    
  
    if (answer1) {
      rl.question("Votre nom?", (answer2) => {
        //   Stocker la reponse dans le tableau
        // console.log(answer2);
        
  
        if (answer2) {
          rl.question("Contact:", (answer3) => {
            //   Stocker la reponse dans le tableau
            // console.log(answer3);
            
  
            contact = {
              id: count(),
              prenom: answer1,
              nom: answer2,
              numero: answer3,
            };
  
            arrayContact.push(contact);
            
            
            if (answer3) {
              rl.question("Vous voulez ajouter une nouveau contact? (oui / non)",(answer4)=>{
                if(answer4 === 'oui'){
                  addContact()
                }
                if(answer4 === 'non'){
                  console.log(arrayContact)
                  acceuil()
                }
              })
            }
            
          });
        }
      });
    }
  });
}

let acceuil = ()=>{
  rl.question(
    "entrée /help pour oir la liste de commandes  Command: ", (cmd) => {
  
      if (cmd === "/help") {
        console.log("Liste de commandes : ")
          console.log("/help: Display all the commands available")
          console.log('/stop: Quit your loved application')
          console.log('/add: Add a new contact in your directory')
          console.log('/list: List all the contacts you have in your loved directory ')
          console.log('/delete: Delete one your contact by specifiying his ID')
          console.log('/return : You go back to the main menu')
        ;
       rl.question("Command:  " , (cmd)=>{

        if (cmd === "/stop") {
          rl.close();
        } 
        if (cmd === "/add") {
          addContact()
         
        } 
        if (cmd === "/list") {
          arrayContact.map(contact => console.log(contact))
          // console.log(arrayContact)

          rl.question("Si vou souhaitez retourner entree /return" , (cmd)=>{
            if (cmd === "/return"){
              acceuil()
            }
          }
          
       )}
        if (cmd === "/return"){
          acceuil()
        }
       })
        
      } 
      if (cmd === "/stop") {
        rl.close();
      } 
      if (cmd === "/add") {
        addContact()
       
      } 
      if (cmd === "/list") {
        arrayContact.map(contact => console.log(contact))
        // console.log(arrayContact)

        rl.question("Si vou souhaitez retourner entree /return" , (cmd)=>{
          if (cmd === "/return"){
            acceuil()
          }
        })
      }
      // if (cmd === "/delete"){
      //   // Delete
      //   arrayContact.filter(arrayContact , index)
      // }
    } 
  );
}


acceuil()



//
// Créer un tableau pour stocker les contacts
// Créer un tableau pour stocker les réponses
// Mettre en place la premiere
// S'il répond à la premiere question on pose la deuxime question
