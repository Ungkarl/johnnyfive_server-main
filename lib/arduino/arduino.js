import five from 'johnny-five';

const arduino = {};

arduino.devices = {
    trueFalse: null,
};

arduino.init = () => {
    let board = new five.Board({ port: 'COM3' });

    const setup = () => {
        arduino.devices.trueFalse = new five.Pin({
            pin: 11,
            mode: five.Pin.INPUT
        });
    };


    board.on("ready", () => {
        setup();

        board.loop(1000, () => {
            arduino.devices.trueFalse.query((state) => {
                console.log(state.value);
            });
        });
    });
};

// Named export for getAnswerResult
export const getAnswerResult = () => {
    return new Promise((resolve) => {
        arduino.devices.trueFalse.query((state) => {
            resolve(state.value);
        });
    });
};

// Export arduino object if needed elsewhere
export default arduino;
