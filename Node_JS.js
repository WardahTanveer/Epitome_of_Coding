/*NODE.JS
- It is an environment used to run js outside the browser.
- It has no DOM, BOM, server-side apps (as there is no browser).
- It has file system, version, commonjs library modules (not es6).

EXECUTING NODE.JS
- Two ways:
1) Reple -> in terminal itself after typing "node". Really just for playing around.
2) CLI -> code is in a file and it's run on terminal by typing "node filename.js". More preferred.
(or just use vscode terminal lol)

GLOBALS (GLOBAL VARIABLES) IN NODE.JS
- __dirname -> path to current directory
- __filename -> file name
- require -> function to use modules (CommonJS)
- module -> info about current module (file)
- process -> info about env (environment) where the program is being executed*/

/*MODULES
- In CommonJS, every file is a module by default.
- Modules help to create encapsulated code i.e. sharing minimum (separation of concerns).
eg. >>> file1.js
const secret="Secret";
const name1="Rahul";
const name2="Sara";
module.exports={name1, name2};
>>> file2.js
const greet=(name)=>{
    console.log(`Hello ${name}.`);
};
module.exports=greet;
>>> file3.js
module.exports.items=["item1", "item2"];
const person={name:"Bob"};
module.exports.p=person;
>>> file4.js
const a=1, b=2;
function add(){
    console.log(`Sum: ${a+b}`);
}
add();
>>> file5.js
const names=require("./file1.js");  //returns object {name1:"Rahul", name2:"Sara"}
const greet=require("./file2.js");  //returns function greet
greet("Sohan");
greet(names.name1);
greet(names.name2); //works normally.
const data=require("./file3.js");   //returns {items: ["item1", item2], singlePerson: {name:"Bob"}}
require("./file4.js");  //prints "Sum: 3"
- In above eg, the secret only stays as a local variable in file1. It cannot be accessed anywhere else.

BUILT IN MODULES
- There are many built-in modules. We'll cover only important ones for now.
1) OS
- For interacting with os and server
eg. const os=require("os"); //returns object containing all os methods
const user=os.userInfo();
console.log(user);
console.log(`System uptime: ${os.uptime()} secs`);
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};
console.log(currentOS);

2) PATH
- For intercating with directories and file paths
eg. const path=require("path");
console.log(path.sep);  //returns '/' (for me it's returning '\')
const filePath=path.join("/folder", "folder2", "filename"); //filepath="\folder\folder2\filename"
const base=path.basename(filePath); //base="filename"
const absolute=path.resolve(__dirname, "folder", "folder2", "filename");    //absolute will contain absolute path of 'filename'

3) FS
- Interacts with file system.
- It has two approaches:
i) SYNCHRONOUS
eg. const fs=require("fs");
const f1=fs.readFileSync("./...file1", "utf8"); //utf8 -> unicode transformation format 8-bit
const f2=fs.readFileSync("./...file2", "utf8");
console.log(f1, f2);
fs.writeFileSync("./...file3", `Here is the result: ${f1}, ${f2}`); //creates file3 if doesn't exist, else overwrites content into it.
fs.writeFileSync("./...file3", `Here is the result: ${f1}, ${f2}`, {flag: 'a'});    //appends into file3
ii) ASYNCHRONOUS
eg. const fs=require("fs");
fs.readFile("./...file1", "utf8", (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const f1=result;
    fs.readFile("./...file2", "utf8", (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const f2=result;
        fs.writeFile("./...file3", `Here is the result: ${f1}, ${f2}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});
//This asynchronous fs is what we call 'callback hell' lol

4) HTTP
- Transferring data over hypertext transfer protocol
eg. const http=require("http");
const server=http.createServer((request,response)=>{
    console.log(request);
    if(request.url==='/'){
        response.write("Welcome to our home page.");
        response.end();
    }
    else if(request.url==='/about'){
        response.end("Here is our short history.");
    }
    response.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for.</p>
    <a href="/">Back Home</a>`);
});
server.listen(5000, ()=>{
    console.log("Server listening on port: 5000")});
//The "Welcome to our home page." will be visible in window of link 'localhost:5000'
*/

/*NPM (Node Package Manager)
- We can use and share code with other developers using npm (npmjs.com)
- Npm calls the reusable code a package
- A package is a folder that contains a js code
- 'Package', 'dependency' or 'module' is used interchangeably for shareable js code.

WAYS OF INSTALLING NPM
1) Local dependency - use only for particular project (used more often) (package.json file is used)
eg. npm i <packageName>
2) Global dependency - use in any project (done in terminal)
eg. npm install -g <packageName>
eg. sudo npm install -g <packageName> (for mac)

PACKAGE.JSON
- manifest file (stores info about project/package as an object)
- manual approach (create package.json in the root, create properties/keys etc)
- npm init (step by step process, press enter to skip)
- npm init -y (everything default)
- If we wanna publish it, the name should be unique.

'DEPENDENCIES' PROPERTY
- Stores the packages our project is using. It is shown in the package.json file for the project. It will also create a folder 'node_modules' in same directory as project, which will contain all dependency folders.
- Due to this property, we don't need the large size node_modules folder from any other code we use off the internet. The package.json file is enough to set it up on our own computer.
(Setting up is done using 'npm install')

eg. >>> In folder3:
npm init -y
npm i lodash
npm i bootstrap
//Now in any js file inside folder3, we can use lodash and bootstrap module.
>>> In script2.js:
const _=require("lodash");
const items=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);  //[1,2,3,4]

DEV DEPENDENCY
- When a dependency is only used during development and not in production. For testing packages, linting, formatting etc. (eg. nodemon)
- npm i <packageName> -D
OR
npm i <packageName> --save-dev

NODEMON
- Just another way off running a js file.
- Stops using ctrl+c.

REMOVING DEPENDENCY
- npm uninstall <packageName>
- or just manually remove the name of dependency from package.json (but there are other complications w this like package-lock.json)

NPX
- npx <command>
- This way we didn't need to install command globally.. or smth

VERSIONS
- Older versions may become obsolete, so package.json records which version is used in any project so it doesn't give errors.
- Version number -> x.yy.zz (eg. v4.17.20)
x is for any groundbreaking (major) changes
yy is for backward compatible (minor) changes
zz is for bug fixes*/

/*EVENT LOOP
- It allows node.js to perform non-blocking i/o (even tho js is single-threaded) by offloading operations to kernel whenever possible.
eg. const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("Home page");
    }
    if(req.url==="/About"){
        for(let i=0;i<1000;++i){
            for(let j=0;j<1000;++j){
                console.log(`${i} ${j}`);   //Blocking code. Will block all pages as it's synchronous.
            }
        }
        res.end("About page");
    }
    res.end("Error page");
})*/

/*ASYNC PATTERNS
- Using async/await is better than callbacks. (like the callback hell we faced in the asynchronous fs module segment.)
There are several ways to do so:

1) USING PROMISES
const fs=require("fs");
const r=(path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path, "utf8", (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}
const w=(path,content)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(path, content, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}
const start=async()=>{
        try{
            const first=await r("../folder2/file1");
            const second=await r("../folder2/file2");
            const third=await w("../folder2/file3", `Here is the result: ${first}, ${second}`);
            console.log(first,second,third);
        }
        catch(error){
            console.log(error);
        }
    }
start();

2) USING UTIL.PROMISIFY (creates promise out of a method)
const fs=require("fs");
const util=require("util");
const r=util.promisify(fs.readFile);
const w=util.promisify(fs.writeFile);
const start=async()=>{
    try{
        const first=await r("../folder2/file1", "utf8");
        const second=await r("../folder2/file2", "utf8");
        const third=await w("../folder2/file3", `Here is the result: ${first}, ${second}`);
        console.log(first,second,third);
    }
    catch(error){
        console.log(error);
    }
}
start();

3) USING REQUIRE().PROMISES
const fs=require("fs").promises;
const start=async()=>{
    try{
        const first=await fs.readFile("../folder2/file1", "utf8");
        const second=await fs.readFile("../folder2/file2", "utf8");
        const third=await fs.writeFile("../folder2/file3", `Here is the result: ${first}, ${second}`);
        console.log(first,second,third);
    }
    catch(error){
        console.log(error);
    }
}
start();
*/

/*EVENTS
- Event-driven programming is one in which the flow of the program is determined by the events that occur as it executes.
- Used heavily in node.js (We listen for events and register response functions for those events.)
- We use events module and get a class from it. We can also create an instance of this class
- Methods used:
1) on -> to listen for an event
2) emit -> to emit an event
We always listen for event first, then emit it. Else it will do nothing.
eg. const EventEmitter=require("events");   //EventEmitter is class
const customEmitter=new EventEmitter(); //customEmitter is instance of class
customEmitter.on("response", ()=>{  //response -> name of event
    console.log("Data received.");
});
customEmitter.on("response", ()=>{
    console.log("Some other logic.");
});
customEmitter.emit("response");
- We can also send other parameters for callback through the emitter.
eg. const EventEmitter=require("events");
const customEmitter=new EventEmitter();
customEmitter.on("response", (name, id)=>{
    console.log(`Data received. user:${name}, id:${id}`);
});
customEmitter.emit("response", "Rahul", 34);

EVENTS IN SERVERS
- Most built-in modules can use event emitters.
- Http server can also use events (specifically request events).
eg. const http=require("http");
const server=http.createServer();
server.on("request", (req,res)=>{
    res.end("Welcome");
})
server.listen(5000);
*/

/*STREAMS
- Used to read or write sequentially (like when we have to handle streaming data eg. continuous storage for a big file)
- Types:
1) Writeable -> write data sequentially
2) Readable -> read data sequentially
3) Duplex -> both read and write data sequentially
4) Transform -> modifying data while writing or reading
- Most built-in modules implement streaming interface.
- Streams are like an extension of events class.
eg. USING SYNC APPROACH
const {writeFileSync}=require("fs");
for(let i=0;i<100000;++i){
    writeFileSync("../folder2/file3", `hello world ${i}\n`, {flag: "a"});
}
USING STREAMS
const {createReadStream}=require("fs");
const stream=createReadStream("../folder2/file3");
stream.on('data', (result)=>{
    console.log(result);
});
stream.on('error', (err)=>{
    console.log(err);
});

- Stream reads file in chunks (default size of buffer = 64KB)
- Last buffer -> remainder
- highWaterMark -> control size
eg. const stream=createReadStream("../folder2/file3", {highWaterMark:90000}); //90KB
eg. const stream=createReadStream("../folder2/file3", {encoding:"utf8"});

STREAMS IN SERVERS
- It's not a good idea to stream in one large instance (one big chunk) of data into our server. We can use streams for same:
eg. const http=require("http");
const fs=require("fs");
http
    .createServer((req, res)=>{
        const fileStream=fs.createReadStream("../folder2/file3", "utf8");
        fileStream.on('open', ()=>{
            fileStream.pipe(res);   //pushes from readStream into writeStream.
        })
        fileStream.on('error', (err)=>console.log(err));
    })
    .listen(5000);
*/

/*HTTP MESSAGES
- Two types:
1) HTTP Request Message - user typing a url
2) HTTP Response Message - resources sent by server
- 'Servers' are just computers whose job is to always make said resource available. They don't have GUI.
- 'Cloud' is a bunch of these servers connected together.
- Both request and response messages have similar general structure- a start line, optional headers, a blank line indicating all meta info has been sent (headers are that meta info), optional body.

HTTP REQUEST MESSAGE COMPONENTS:
HTTP METHODS (START LINE)
1) GET -> Read data (default request performed by browser)
eg. GET www.store.com/api/orders (get all orders)
eg. GET www.store.com/api/orders/:id (get single order - path params)
2) POST -> Insert data
eg. POST www.store.com/api/orders (place order (send data))
3) PUT -> Update data
eg. PU www.store.com/api/orders/:id (update specific order (params + send data))
4) DELETE -> Delete data
eg DELETE www.store.com/api/orders/:id (delete order (path params))
HEADERS
- Info about our message in form of key-value pairs
- Mostly dealt with on their own.
BODY
- There's no body if user is just requesting resource.
- If user has to add smth onto the server, they are expected to provide data aka payload.

HTTP RESPONSE MESSAGE COMPONENTS:
START LINE
- Has http version eg. HTTP/1.1
- Status code -> signals the result of the request eg. 200 (successful), 400 (request error), 401 (unauthorized request), 404 (resource not found) etc.
- Status text -> message corresponding to status code eg. OK (200), Continue (100), Not Found (404) etc.
HEADER
- Info of message is provided. Same as request message (eg content-type)
BODY
- Same as request message.

STATUS CODES
- Different response classes:
100-199 -> Informational response
200-299 -> Successful response
300-399 -> Redirects
400-499 -> Client errors
500-599 -> Server errors
*/

/*MORE ABOUT SERVERS/HTTP MODULE
eg. const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("User hit the server");
    const url=req.url;
    if(url==="/"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Home page</h1>");
        res.end();
    }
    else if(url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>About page</h1>");
        res.end();
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
});
server.listen(5000);
- We specify the port (5000 in this case)
- Port is a communication endpoint.
- 443 -> https (secure communication)
- 0 to 1024 -> already have specific uses
- 'User hit the server' will be printed on console every time user searches/refreshes url of type 'localhost:5000/...'.
- res.writeHead(status_code, headers); -> used to transmit data. eg. by specifying content-type as html, the stuff in res.write is interpreted as html and we get a big "Home page", else it would just be "<h1>Home page</h1>" i.e. plain text.
- req -> request object
- req.method -> GET/POST/PUT/DELETE
- req.url -> /...
- We can also read, say, an html file using fs module and then pass it as a parameter in res.write(). We'd still have to specify content-type as any variable passed would only contains contents of file and not file type.
- But this does mean that we have to handle all request messages for any external files/links the html code is using (like links, images, css, js etc.) and then we'll have to make an if case for each of them (as done in ./folder/App Proto). To avoid this, we can use express.js
*/
