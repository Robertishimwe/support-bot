import express from 'express'
import cors from 'cors'
import {createChatCompletion} from './services/openai.js'


const app = express()
app.use(cors())
app.use(express.json())



app.post('/new', async (req, res) => {
  try {
    
    const prompt = req.body.prompt;

    
    
    
     if(prompt.toLowerCase().includes("FTP LINK") || prompt.includes("ftp link") || prompt.includes("access ftp")) {
      return res.status(200).send({
      bot: "Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home"
    });
     }
      
     if(prompt.toLowerCase().includes("Time zone") || prompt.toLowerCase().includes("Timezone")) {
      return res.status(200).send({
      bot: "Link to Time buddy ---> https://www.worldtimebuddy.com"
    });
     }
      
     if(prompt.toLowerCase().includes("Knowledge base") || prompt.toLowerCase().includes("KB") || prompt.toLowerCase().includes("KM")) {
       return res.status(200).send({
        bot: "Link to KNOWLEDGE BASE ---> https://portal.microfocus.com/s/customportalsearch?language=en_US"
      });
    }




    const response = await createChatCompletion(prompt)
    console.log(response)
    return res.status(200).send({bot: response});



   
    
  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
