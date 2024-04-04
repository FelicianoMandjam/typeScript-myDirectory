"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
// let arrayContact: object = [] ;
// function contact(){
// }
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arrayContact = [];
let counter = 0;
let count = () => counter++;
let addContact = () => {
    rl.question("Votre prenom?", (answer1) => {
        let contact;
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
                            rl.question("Vous voulez ajouter une nouveau contact? (oui / non)", (answer4) => {
                                if (answer4 === 'oui') {
                                    addContact();
                                }
                                if (answer4 === 'non') {
                                    console.log(arrayContact);
                                    acceuil();
                                }
                            });
                        }
                    });
                }
            });
        }
    });
};
let acceuil = () => {
    rl.question("entrée /help pour oir la liste de commandes  Command: ", (cmd) => {
        if (cmd === "/help") {
            console.log("Liste de commandes : ");
            console.log("/help: Display all the commands available");
            console.log('/stop: Quit your loved application');
            console.log('/add: Add a new contact in your directory');
            console.log('/list: List all the contacts you have in your loved directory ');
            console.log('/delete: Delete one your contact by specifiying his ID');
            console.log('/return : You go back to the main menu');
            rl.question("Command:  ", (cmd) => {
                if (cmd === "/stop") {
                    rl.close();
                }
                if (cmd === "/add") {
                    addContact();
                }
                if (cmd === "/list") {
                    arrayContact.map(contact => console.log(contact));
                    // console.log(arrayContact)
                    rl.question("Si vou souhaitez retourner entree /return", (cmd) => {
                        if (cmd === "/return") {
                            acceuil();
                        }
                    });
                }
                if (cmd === "/return") {
                    acceuil();
                }
            });
        }
        if (cmd === "/stop") {
            rl.close();
        }
        if (cmd === "/add") {
            addContact();
        }
        if (cmd === "/list") {
            arrayContact.map(contact => console.log(contact));
            // console.log(arrayContact)
            rl.question("Si vou souhaitez retourner entree /return", (cmd) => {
                if (cmd === "/return") {
                    acceuil();
                }
            });
        }
        // if (cmd === "/delete"){
        //   // Delete
        //   arrayContact.filter(arrayContact , index)
        // }
    });
};
acceuil();
//
// Créer un tableau pour stocker les contacts
// Créer un tableau pour stocker les réponses
// Mettre en place la premiere
// S'il répond à la premiere question on pose la deuxime question
