const calculateDoneTasks = (tasksArray) => {
    const tasksLength = tasksArray.length;
    const done = tasksArray.filter(el => el.done).length;
    const correctAnswer = tasksArray.filter(el => el.correctDone).length;

    return {
        done: `${done / tasksLength * 100}% (${done}/${tasksLength})`,
        correctDone: `${correctAnswer / tasksLength * 100}% (${correctAnswer}/${tasksLength})`,
        leftToDo: `${tasksLength-done}`,
        correctToDo: `${tasksLength-correctAnswer}`,
    };
}

export default calculateDoneTasks;