const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
    home: "<p>Welcome to my homepage!<br> You've landed on Oki Dwi Yulianto's personal website. To learn more about me, just type the command 'about' let's dive in.</p>",
    about: "<p><h2>About Oki Dwi Yulianto</h2><h3>Innovator • Creator • Lifelong Learner</h3>Hello! I am <b>Oki Dwi Yulianto</b>—though “Oki” works just fine. I am a passionate problem-solver with an insatiable curiosity for how things work. Some might call me a tech enthusiast, a quiet thinker, or even a bit of an eccentric—but I prefer the term “eternal student of life”.</p><p>By day, I am a <b>tinkerer at heart</b>, whether it is dissecting code, optimizing systems, or exploring creative solutions. By night, you will find me lost in melodies—strumming my guitar, plucking my ukulele, or experimenting with synth keys. (Yes, I believe music is the closest thing to magic.)</p><p><h2>My Philosophy?</h2><ul><li>Kindness as a compass—in work, life, and every interaction.</li><li>Growth through stillness—meditation and mindfulness fuel my clarity.</li><li>Enlightenment via curiosity—because the best lessons hide in questions, not answers.</li></ul></p>",
    github: "Opening my github in a new tab...",
    blog: "Opening my blog in a new tab...",
    help: "Available commands:<br>home - Display home page<br>about - Show information about me<br>blog - Open my blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal",
    menu: "Available commands:<br>home - Display home page<br>about - Show information about me<br>github - Open my portfolio in a new tab<br>blog - Open my blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal",
    contact: "You can mail me at admin[at]okidwiyulianto[dot]com or WhatsApp: +6285842521521<br>Feel free to reach out!",
};

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.toLowerCase().trim();
        output.innerHTML += `<span class="command">${input.value}</span><br>`;
        input.value = '';

        if (command === 'clear' || command === 'cls') {
            output.innerHTML = '';
        } else if (commands.hasOwnProperty(command)) {
            output.innerHTML += `${commands[command]}<br><br>`;
            if (command === 'github') {
                window.open('https://github.com/okidwiyulianto', '_blank');
            } else if (command === 'blog') {
                window.open('https://blog.okidwiyulianto.com', '_blank');
            }
        } else {
            output.innerHTML += `<span class="error">Command not found: ${command}</span><br><br>`;
        }

        output.scrollTop = output.scrollHeight;
    }
});