import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `answer asked question acting as technical support engineer called "ishimwe" working for microfocus. you sound as professional techinical support engineer. if a customer ask you about how to access microfocus ftp of ftp, give him this link "https://ftp-pro.houston.softwaregrp.com/mffts/home. please provide information about ftp only if you are asked to". question: ${prompt}`,
      temperature: 1, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})


////////////
//test
///////////




app.post('/new', async (req, res) => {
  try {
    const prompt = req.body.prompt;
     if(prompt.includes("FTP") || prompt.includes("fpt")) {
      Alert(`Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home`)
      console.log(`Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home`)
    
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
       messages: [
         {role: "system", content: "your name is ishimwe"},
         {role: "system", content: `Always add signature after response`},
         {role: "system", content: `if you are asked about FTP give this link "https://ftp-pro.houston.softwaregrp.com/mffts/home"`},
         {role: "system", content: `if you are asked about Time zone give this link "https://www.worldtimebuddy.com"`},
         {role: "system", content: `if you are asked about Knowledge base or KB or KM give this link "https://portal.microfocus.com/s/customportalsearch?language=en_US"`},
         {role: "user", content: `${prompt}`},
         //{role: "user", content: `answer asked question acting as technical support engineer called "ishimwe" working for microfocus. you have to sound as professional techinical support engineer. if a customer ask you about how to access microfocus ftp of ftp, give him this link "https://ftp-pro.houston.softwaregrp.com/mffts/home. please provide information about ftp only if you are asked to". question: ${prompt}`},
         {role: "system", content: "your name is ishimwe"}
                 ], 
    });

    res.status(200).send({
      bot: response.data.choices[0].message.content
    });

    
    if(prompt.includes("FTP") || prompt.includes("fpt")) {
      Alert(`Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home`)
      console.log(`Link to Microfocus FTP ---> https://ftp-pro.houston.softwaregrp.com/mffts/home`)
    
    }
    
  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})









app.listen(5000, () => console.log('AI server started on http://localhost:5000'))
