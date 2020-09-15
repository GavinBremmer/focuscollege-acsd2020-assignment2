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

        //capture args and convert to inches
        let houselength:number=Number((args.length)*12),housewidth:number=Number((args.width)*12)
        //declare variables to be used outside conditionals
        let totalboardslength:number
        let totalboardswidth:number
        let totalpostslength:number
        let totalpostswidth:number

        //if wall is over 20 feet, use this calculation
        if (houselength>=240){
            //get total 16 foot sections, one rounded, one unrounded, remove corner post length
            let quotientlength = (houselength-7)/192
            let Section16length = Math.floor((houselength-7)/192)
            //subtract rounded from unrounded to get remainder wall length, return to measurement in inches, remove postlength of internal posts
            let remainderwalllength = ((quotientlength-Section16length)*192)-(Section16length*3.5)
            //calculate studs, remove length of both corner posts and both sideboards, add in sideboards manually after rounding
            let remainderwallstudslength = Math.floor((remainderwalllength-10)/16)+2
            //calculate plates, remove length of only both corner posts, multiply by 2 for floor and roof plates
            let remainderwallplateslength = Math.ceil((remainderwalllength-7)/96)*2
            //combine and assign to variables, with the 16 foot sections containing 17 boards universally
            totalboardslength = remainderwallstudslength + remainderwallplateslength + (Section16length*17)
            //one post for every 16 foot section
            totalpostslength = Section16length
        }
        //else, use this one
        else {
            //calculate studs and plates as if they are the remainder wall from above, combine
            let studslength = Math.floor((houselength-10)/16)+2
            let plateslength = Math.ceil((houselength-7)/96)*2
            totalboardslength = studslength + plateslength
            //no posts in walls under 20 feet
            totalpostslength = 0
        }
        
        //same as above conditional but for width
        if (housewidth>=240){
            let quotientwidth = (housewidth-7)/192
            let Section16width = Math.floor((housewidth-7)/192)
            let remainderwallwidth = ((quotientwidth-Section16width)*192)-(Section16width*3.5)
            let remainderwallstudswidth = Math.floor((remainderwallwidth-10)/16)+2
            let remainderwallplateswidth = Math.ceil((remainderwallwidth-7)/96)*2
            totalboardswidth = remainderwallstudswidth + remainderwallplateswidth + (Section16width*17)
            totalpostswidth = Section16width
        }
        else {
            let studswidth = Math.floor((housewidth-10)/16)+2
            let plateswidth = Math.ceil((housewidth-7)/96)*2
            totalboardswidth = studswidth + plateswidth
            totalpostswidth = 0
        }

        //combine length and width walls, multiply by 2 for 4 walls, add 10 percent, round up
        let TotalHouseBoards = Math.ceil(((totalboardslength+totalboardswidth)*2)*1.1)
        //combine length and width posts, multiply by 2 for 4 walls, add corner posts, add 10 percent, round up
        let TotalHousePosts = Math.ceil((((totalpostslength+totalpostswidth)*2)+4)*1.1)

        //output results
        console.log("2X4's required:",TotalHouseBoards,"4X4's required:",TotalHousePosts)

    }
);

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();