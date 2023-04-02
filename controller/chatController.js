// import {
//   deleteCommand,
//   createCommand,
//   findComand,
// } from "../services/commandService.js";
// import { createChatCompletion } from "../services/openai.js";

// class chatControllers {
//   // chat controller
//   static chat = async (req, res) => {
//     try {
//       const text = req.body.prompt;

//       const commandsArray = await findComand(); // use a more descriptive variable name
//       console.log("before extract", commandsArray);
//       // res.send(commandsArray)

//       const extractCommands = (wordsArray) => {
//         if (!Array.isArray(wordsArray)) {
//           throw new Error("wordsArray is not an array");
//         }
//         const extractedCommands = wordsArray.map((obj) => obj.command);
//         console.log("after extract", extractedCommands);
//         return extractedCommands; // add a return statement to return the extracted commands
//       };
      




      
//         const findMatchingWord = (text, extractCommands)=> {
//           const words = text.split(' '); // split text into individual words
//           for (let i = 0; i < words.length; i++) {
//             if ( extractCommands.includes(words[i])) {
//               console.log({"matching words":words[i]})
//               return words[i]; // return the matching word
//             }
//           }
//           console.log(false)
//           return false; // return false if no match is found
//         }

//       if(findMatchingWord(text, extractCommands(commandsArray?.data))){
//         const myServeResponse = await findComand({command: findMatchingWord(text, extractCommands(commandsArray?.data))})
//         const response = await createChatCompletion(text);
//       // console.log(response);
//       return res.status(200).send({ dbres: myServeResponse.data[0].value, bot: response });
        
//       }else{
//         const response = await createChatCompletion(text);
//         // console.log(response);
//         return res.status(200).send({ bot: response });
      
//       }

//     } catch (error) {
//       console.error(error);
//       res.status(500).send(error || "Something went wrong");
//     }
//   };
// }

// export default chatControllers;

import { deleteCommand, createCommand, findCommand } from "../services/commandService.js";
import { createChatCompletion } from "../services/openai.js";

class ChatController {
  static chat = async (req, res) => {
    try {
      const text = req.body.prompt;

      const commands = await findCommand(); // use a more descriptive variable name
      console.log("Commands:", commands);

      const extractCommands = (wordsArray) => {
        if (!Array.isArray(wordsArray)) {
          throw new Error("wordsArray is not an array");
        }

        const extractedCommands = wordsArray.map((obj) => obj.command);
        console.log("Extracted commands:", extractedCommands);
        return extractedCommands;
      };

      const findMatchingWord = (text, commands) => {
        const words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
          if (commands.includes(words[i])) {
            console.log({ "Matching words": words[i] });
            return words[i];
          }
        }

        console.log(false);
        return false;
      };

      const matchingWord = findMatchingWord(text, extractCommands(commands?.data));

      if (matchingWord) {
        const myServeResponse = await findCommand({ command: matchingWord });
        const response = await createChatCompletion(text);
        return res.status(200).send({ dbres: myServeResponse.data[0].value, bot: response });
      } else {
        const response = await createChatCompletion(text);
        return res.status(200).send({ bot: response });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error || "Something went wrong");
    }
  };
}

export default ChatController;

