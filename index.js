import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import createChatCompletion from '../services/openai'
//import { Configuration, OpenAIApi } from 'openai'

// dotenv.config()

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})


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
    return res.status(200).send(response);



    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //    messages: [
    //      {role: "system", content: "your name is ishimwe"},
    //      {role: "system", content: `Always add signature after response`},
    //      {role: "system", content: `if you are asked about FTP give this link "https://ftp-pro.houston.softwaregrp.com/mffts/home"`},
    //      {role: "system", content: `if you are asked about Time zone give this link "https://www.worldtimebuddy.com"`},
    //      {role: "system", content: `if you are asked about Knowledge base or KB or KM give this link "https://portal.microfocus.com/s/customportalsearch?language=en_US"`},
    //      {role: "user", content: `${prompt}`},
    //      //{role: "user", content: `answer asked question acting as technical support engineer called "ishimwe" working for microfocus. you have to sound as professional techinical support engineer. if a customer ask you about how to access microfocus ftp of ftp, give him this link "https://ftp-pro.houston.softwaregrp.com/mffts/home. please provide information about ftp only if you are asked to". question: ${prompt}`},
    //      {role: "system", content: "your name is ishimwe"}
    //    ], 
    // });

    // res.status(200).send({
    //   bot: response.data.choices[0].message.content
    // });

   
    
  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
