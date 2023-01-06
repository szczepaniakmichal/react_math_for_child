const calculateDoneTasks = (tasksArray) => {
    const tasksLength = tasksArray.length;
    const done = tasksArray.filter(el => el.done).length;
    const correctAnswer = tasksArray.filter(el => el.correctDone).length;

    return {
        done: `${done / tasksLength * 100}%`,
        correctDone: `${correctAnswer / tasksLength * 100}%`,
    };
}

export default calculateDoneTasks;