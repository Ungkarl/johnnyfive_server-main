import { getAnswerResult } from "../arduino/arduino.js";

const sockets = (socket) => {


    setInterval(async () => {
        const result = await getAnswerResult();
        socket.emit('result', result);
    }, 1000);
    
  

   
}

export default sockets;