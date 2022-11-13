export function createTasks({howManyTasks, howManyValues, maximumSingleValue, typeOfMathOperators}) {
    const arrOfTasks = [];

    for (let i = 1; i <= howManyTasks; i++) {
        const numberValue = [];

        for (let j = 0; j < howManyValues; j++) {
            const number = Math.floor(Math.random() * maximumSingleValue + 1);
            numberValue.push(number);
        }

        const matchTask = numberValue.map((number, index) => {
            const randomMathOperator = typeOfMathOperators[Math.floor(Math.random() * typeOfMathOperators.length)] || '+';
            return `${number} ${index === numberValue.length - 1 ? '' : `${randomMathOperator} `}`
        }).join('')

       const taskObj = {
            task: matchTask,
       }

        arrOfTasks.push(taskObj);
    }

    return arrOfTasks;
}
