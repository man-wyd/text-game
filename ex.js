function game() {

    let level = 1;
    let levelFinal = 2;

    let levels = [];
    levels[1] = {
        topics: ['art', 'sport', 'science'],
        questions: [
            {question: 'Who painted Mona Lisa?', answer: 'Da Vinci'},
            {question: 'Where was football founded?', answer: 'England'},
            {question: 'Who is the author of Teory of relativity?', answer: 'Einstein'},
        ]
    };
    levels[2] = {
        topics: ['politics', 'medicine', 'IT'],
        questions: [
            {question: '2Who painted Mona Lisa?', answer: 'Da Vinci'},
            {question: '2Where was football founded?', answer: 'England'},
            {question: '2Who is the author of Teory of relativity?', answer: 'Einstein'},
        ]
    };
    
    while (level <= levelFinal) {
        // 0. create a string with all possible topics for the current level
        let topicsPrompt = '';
        for (let i = 0; i < levels[level].topics.length; i++) {
            topicsPrompt += 'To select ' + levels[level].topics[i] + ', enter ' + i + '\n';
        }

        // 1. ask the topic as a number
        let topicSelected = parseInt(prompt('You are at the level ' + level + '\nSelect one of these topics:\n' + topicsPrompt));
        alert('You have selected topic ' + topicSelected);

        // 2. ask the question according to selected topic
        alert(levels[level].questions[topicSelected].question);

        // 3. if answer is right - congrats, go to the next level
        //    if answer is wrong - bad boy! you need to start from the beginning

        // level = 1

        // level - the same

        level++; // if answer is right
    }

}