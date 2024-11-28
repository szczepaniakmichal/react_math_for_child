const calculateDoneTasks = (tasksArray) => {
    const tasksLength = tasksArray.length;
    const done = tasksArray.filter(el => el.done).length;
    const correctAnswer = tasksArray.filter(el => el.correctDone).length;
    const isAllTasksDone = done === tasksLength;

    return {
        done1: `${(done / tasksLength * 100).toFixed(2)}% (${done}/${tasksLength})`,
        correctDone1: `${(correctAnswer / tasksLength * 100).toFixed(2)}% (${correctAnswer}/${tasksLength})`,
        done: {
            inPercentage: `${(done / tasksLength * 100).toFixed(2)}%`,
            inDecimals: `${done}/${tasksLength}`,
            done,
            isAllTasksDone,
        },
        correctDone: {
            inPercentage: `${(correctAnswer / tasksLength * 100).toFixed(2)}%`,
            inDecimals: `${correctAnswer}/${tasksLength}`,
            correctAnswer,
        },
        leftToDo: tasksLength - done,
        correctToDo: `${tasksLength - correctAnswer}`,
        endTime: done / tasksLength * 100 === 100 ? new Date().getTime() : 0,
    };
}

export default calculateDoneTasks;