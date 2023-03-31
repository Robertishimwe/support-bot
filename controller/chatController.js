import {deleteCommand, createCommand, findComand} from '../services/commandService.js'
import { createChatCompletion } from '../services/openai.js';

class chatControllers {

    // chat controller
    static chat = async (req, res) => {

        try {
    
            const text = req.body.prompt;

        const wordsArray = await findComand()
        
        const extractCommands = wordsArray => wordsArray.map(obj => obj.command);



            const findMatchingWord = (text, extractCommands)=> {
              const words = text.split(' '); // split text into individual words
              for (let i = 0; i < words.length; i++) {
                if (wordsArray.includes(words[i])) {
                  console.log({"matching words":words[i]})
                  return words[i]; // return the matching word
                }
              }
              console.log(false)
              return false; // return false if no match is found
            }
            
           findMatchingWord(text, extractCommands)










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
        
        
        
        
            const response = await createChatCompletion(text)
            console.log(response)
            return res.status(200).send({bot: response});
        
        
        
           
            
          } catch (error) {
            console.error(error)
            res.status(500).send(error || 'Something went wrong');
          }
  
      
    };
  

  }
  
  export default chatControllers;
