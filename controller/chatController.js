import {
  deleteCommand,
  createCommand,
  findComand,
} from "../services/commandService.js";
import { createChatCompletion } from "../services/openai.js";

class chatControllers {
  // chat controller
  static chat = async (req, res) => {
    try {
      const text = req.body.prompt;

      const commandsArray = await findComand(); // use a more descriptive variable name
      console.log("before extract", typeof(commandsArray));

      const extractCommands = (wordsArray) => {
        if (!Array.isArray(wordsArray)) {
          throw new Error("wordsArray is not an array");
        }
        const extractedCommands = wordsArray.map((obj) => obj.command);
        console.log("after extract", extractedCommands);
        return extractedCommands; // add a return statement to return the extracted commands
      };
      extractCommands(commandsArray);

      // const extractedCommands = extractCommands(commandsArray); // call the function and store the returned value in a variable

      // const text = req.body.prompt;

      // const wordsArray = await findComand()
      // console.log("before extract",wordsArray)

      // const extractCommands = (wordsArray) =>{

      //    const g = wordsArray.map(obj => obj.command)
      //    console.log("after extract", g)

      //   };
      // extractCommands(wordsArray)

      //   const findMatchingWord = (text, extractCommands)=> {
      //     const words = text.split(' '); // split text into individual words
      //     for (let i = 0; i < words.length; i++) {
      //       if ( extractCommands.includes(words[i])) {
      //         console.log({"matching words":words[i]})
      //         return words[i]; // return the matching word
      //       }
      //     }
      //     console.log(false)
      //     return false; // return false if no match is found
      //   }

      //  findMatchingWord(text, extractCommands)

      // if(await findComand({command: prompt})){

      // }else{}

      //  if(prompt.toLowerCase().includes("FTP LINK") || prompt.includes("ftp link") || prompt.includes("access ftp")) {
      //   return res.status(200).send({
      //   bot: "Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home"
      // });
      //  }

      //  if(prompt.toLowerCase().includes("Time zone") || prompt.toLowerCase().includes("Timezone")) {
      //   return res.status(200).send({
      //   bot: "Link to Time buddy ---> https://www.worldtimebuddy.com"
      // });
      //  }

      //  if(prompt.toLowerCase().includes("Knowledge base") || prompt.toLowerCase().includes("KB") || prompt.toLowerCase().includes("KM")) {
      //    return res.status(200).send({
      //     bot: "Link to KNOWLEDGE BASE ---> https://portal.microfocus.com/s/customportalsearch?language=en_US"
      //   });
      // }

      const response = await createChatCompletion(text);
      console.log(response);
      return res.status(200).send({ bot: response });
    } catch (error) {
      console.error(error);
      res.status(500).send(error || "Something went wrong");
    }
  };
}

export default chatControllers;
