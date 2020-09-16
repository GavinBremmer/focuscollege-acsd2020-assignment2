# Gerald's Contracting Application

To use this application, please follow these instructions:

1. In bash, run the following command to clone the application reository:
```
git clone git@github.com:GavinBremmer/focuscollege-acsd2020-assignment2.git [Gerald's Contracting Applicaiton]
```
2. In bash, use the cd command to navigate into the directory you have just created and cloned into, it will be named Gerald's Contracting Application

3. In bash, run the following command to install the programs dependencies:
```
npm install
```

4. In bash, run the following command to ensure you are on the stable master branch and not the unstable development branch
```
git checkout master
```
5. In bash, run the tsc command to compile the program and enter the command parameters as follows
```
npm start --calc-wood-needed --width [the house' width in feet] --length [the house' length in feet]
```
Note that -w and -l can be used in place of --width and --length. --help can also be used for a short explanation of the --calc-wood-needed command.