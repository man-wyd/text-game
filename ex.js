function game() {

    let level = 1;
    let levelFinal = 3;
    alert("Let's play a game! 🎮 \n Welcome to the Quiz Game!\n" + "You will go through " + levelFinal + " levels." + "Good luck!\n");
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
        topics: ['politics', 'animals', 'IT'],
        questions: [
            {question: 'Who was the first President of the United States', answer: 'George Washington'},
            {question: 'What animal goes "moo"?', answer: 'Cow'},
            {question: 'What is the name of the computers main processing chip', answer: 'CPU'},
        ]
    };

    levels[3] = {
        topics: ['logic', 'fun facts', 'Music'],
        questions: [
            {question: 'What number comes next: 2, 4, 8, 16...?', answer: '32'},
            {question: 'What animal cant jump?', answer: 'Elephant'},
            {question: 'What instrument has 88 keys?', answer: 'Piano'},
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
        let userAnswer = prompt(levels[level].questions[topicSelected].question);

        // 3. if answer is right - congrats, go to the next level
        //    if answer is wrong - bad boy! you need to start from the beginning
        if (userAnswer.trim().toLowerCase() === levels[level].questions[topicSelected].answer.toLowerCase()) {
            alert('Correct! ✅');
            level++;
            if (level > levelFinal) {
                alert("Great job! You finished the game! 🏆");
            } else {
                alert("Next level is "+ level);
            }
        } else {
            alert('Wrong answer! 😡 Restarting the game...');
            level = 1;
        }

        
    }

}



