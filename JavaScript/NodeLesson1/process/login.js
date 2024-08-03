const loginMessage = "You are logged in.\n";
const registerMessage = "Enter your name to register.\n";

const isLogin = process.argv.some((arg) => arg === '--login');
process.stdout.write(isLogin ? loginMessage : registerMessage);

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    if (!isLogin) {
        console.log(`Registered successfully as ${name}`);
    }
    process.exit();
});
