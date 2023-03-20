import Command from '../model/commands.js'

class commandControllers {

    
    static createCommand = async (req, res) => {

        const {command, value} = req.body;
        console.log(command,value)


    }
}

export default commandControllers;