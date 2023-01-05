const calculateCorrectDone = (tasksArray) => {
    const tasksLength = tasksArray.length;
    const correctAnswer = tasksArray.filter(el => el.done).length;
    return `${correctAnswer / tasksLength * 100}%`;
}

export default calculateCorrectDone;