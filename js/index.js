const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
    home: "Welcome to my home page!<br>You are visiting Oki Dwi Yulianto personal website. For further information about me you can type command 'about' without single quote.",
    about: "About Me:<br>Hello I'm Oki Dwi Yulianto, you just call me Oki. I'm an ordinary man, passionate about creating, learning, and analyzing anything. Sometimes maybe people think I am an introvert, tech geek, nerd, or weird. That's just how I am. I like joke and comedy. My hobbies are listening musics, playing keyboard, ukulele, and guitar. My religion is kindness. My life dedicated to learning, meditating and pursuing enlightenment. Wanna know about my daily life? type command 'blog' without the prefix 'go' in front of it.",
    portfolio: "Opening my portfolio in a new tab...",
    blog: "Opening my blog in a new tab...",
    help: "Available commands:<br>home - Display home page<br>about - Show information about me<br>blog - Open my blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal",
    menu: "Available commands:<br>home - Display home page<br>about - Show information about me<br>portfolio - Open my portfolio in a new tab<br>blog - Open my blog in a new tab<br>help - Display this help message<br>clear - Clear the terminal",
    contact: "You can mail me at admin[at]okidwiyulianto[dot]com or WhatsApp: +6288225229396"
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
                window.open('https://blog.okidwiyulianto.com', '_blank');
            }
        } else {
            output.innerHTML += `<span class="error">Command not found: ${command}</span><br><br>`;
        }

        output.scrollTop = output.scrollHeight;
    }
});
