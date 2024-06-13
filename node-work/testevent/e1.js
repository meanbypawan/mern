import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("test",()=>{
    console.log("Test event caught...");
});
eventEmitter.on("click",()=>{
    console.log("Clicked clicked...")
});

eventEmitter.emit("test");
eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("click");