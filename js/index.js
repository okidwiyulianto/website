const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
    home: "Welcome to the home page!<br>You are visiting Oki Dwi Yulianto personal website. For further information about me you can type command 'about' without single quote.",
    about: "About Me:<br>I'm just an ordinary man passionate about creating, learning, and analyzing anything. My hobbies are listening and playing musics. My religion is kindness. My life dedicated to learn and pursue nirvana. Wanna know about my daily life? type command 'blog'",
    portfolio: "Opening GitHub in a new tab...",
    blog: "Opening blog in a new tab...",
    help: "Available commands:<br>home - Display home page<br>about - Show information about me<br>portfolio - Open GitHub in a new tab<br>blog - Open blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal",
    menu: "Available commands:<br>home - Display home page<br>about - Show information about me<br>portfolio - Open GitHub in a new tab<br>blog - Open blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal"
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
            if (command === 'portfolio') {
                window.open('https://github.com/okidwiyulianto', '_blank');
            } else if (command === 'blog') {
                window.open('https://okidwiyulianto.com', '_blank');
            }
        } else {
            output.innerHTML += `<span class="error">Command not found: ${command}</span><br><br>`;
        }

        output.scrollTop = output.scrollHeight;
    }
});
