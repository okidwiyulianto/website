const output = document.getElementById('output');
const input = document.getElementById('command-input');

const commands = {
    home: "Welcome to my homepage!<br> You've landed on Oki Dwi Yulianto's personal website. To learn more about me, just type the command 'about' let's dive in.",
    about: "About Me:<br>Hey there! I'm Oki Dwi Yulianto, but just call me Oki. I'm your average guy who loves to create, learn, and figure things out. Some folks might think I'm a bit of an introvert, a tech geek, a nerd, or maybe even a little weird. But hey, that's just me! I enjoy a good laugh and love cracking jokes.  When I'm not busy tinkering, you'll find me listening to music or jamming on my keyboard, ukulele, or guitar. Kindness is my religion, and I dedicate my life to learning, meditation, and seeking enlightenment.  Curious about my day-to-day? Just type 'blog' – no need for the 'go' in front.",
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
