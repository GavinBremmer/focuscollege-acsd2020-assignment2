// import yargs to re-use code from someone else that has already 
// solved the complexities of parsing command line arguments
import yargs = require('yargs');

let parameters = 

// create a new yargs "command"
yargs.command(

    // yargs.command paramater #1
    // name the command with no spaces
    // this will be the first parameter we send:
    // format:  node dist/index.js [command]
    // example: node dist/index.js calc-wall-studs
    'calc-wood-needed',

    // yargs.command paramater #2
    // describe the command so that the --help flag is helpful
    "Calculate the number of 2x4's and 4x4's required to frame a house",

    // yargs.command paramater #3
    // define the parameters we need for our command
    {

        // format:  node dist/index.js [command] --[parameter] [value]
        // example: node dist/index.js calc-wall-studs --width 8
        width: {
            
            // format:  node dist/index.js [command] --[parameter] [value must be number]
            // example: node dist/index.js calc-wall-studs --width 8
            type: 'number',

            // format:  node dist/index.js [command] -[parameter] [value]
            // example: node dist/index.js calc-wall-studs -w 8
            alias: 'w',

            // this adds the description for the --help flag
            description: 'The width of the house in inches'

        },

        // format:  node dist/index.js [command] --[parameter] [value] --[parameter] [value]
        // example: node dist/index.js calc-wall-studs --width 8 --legth 8
        length: {
            type: 'number',
            alias: 'l',
            description: 'The length of the house in inches'
        }

    },

    // yargs.command parameter #4
    // define the function we want to run once the arguments are parsed
    // the parsed arguments will be provided via the first paramater passed in
    // we've called it 'args' in this function
    function( args ){
        
        // ----------------------------------------------------------------------------------- |
        // NOTE TO STUDENTS:                                                                   |
        // This is where you write your application with access to the command line arguments  |
        // ----------------------------------------------------------------------------------- |
        // inspect the output to infer how you might access the arguments
        console.log("args", args )
        let houselength:number=Number(args.length),housewidth:number=Number(args.width)


    }

);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();