import { roundNum } from "utils/roundNum";

const calculateDoneTasks = (tasksArray) => {
    const tasksLength = tasksArray.length;
    const done = tasksArray.filter(el => el.done).length;
    const correctAnswer = tasksArray.filter(el => el.correctDone).length;
    const isAllTasksDone = done === tasksLength;

    return {
        done: {
            inPercentage: `${roundNum(done / tasksLength)}%`,
            inDecimals: `${done}/${tasksLength}`,
            done,
            isAllTasksDone,
        },
        correctDone: {
            inPercentage: `${roundNum(correctAnswer / tasksLength)}%`,
            inDecimals: `${correctAnswer}/${tasksLength}`,
            correctAnswer,
        },
        leftToDo: tasksLength - done,
        correctToDo: `${tasksLength - correctAnswer}`,
        endTime: done / tasksLength * 100 === 100 ? new Date().getTime() : 0,
    };
}

export default calculateDoneTasks;