import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("data",()=>{
    console.log("Data Event Caught...");
});

eventEmitter.on("error",()=>{
    console.log("Error event caught");
});

eventEmitter.on("finish",()=>{
    console.log("Finish event caught...");
});

eventEmitter.emit("data");
eventEmitter.emit("error");
eventEmitter.emit("finish");