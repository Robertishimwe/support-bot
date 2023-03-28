import Command from '../model/commands.js'
import {deleteCommand, createCommand} from '../services/commandService.js'

class commandControllers {

    
    static createCommand = async (req, res) => {

        const {command, value} = req.body;
        const response = await createCommand(command,value)
        console.log(response)
        return res.status(200).send(response)


    }
}

export default commandControllers;