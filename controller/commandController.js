import Command from '../model/commands.js'
import {deleteCommand, createCommand} from '../services/commandService.js'

class commandControllers {

    
    static createCommand = async (req, res) => {

        const {command, value} = req.body;
        const response = createCommand(command,value)
        console.log(response)
        res.send(response)


    }
}

export default commandControllers;