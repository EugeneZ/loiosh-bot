const Botkit = require('botkit');

if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const controller = Botkit.slackbot({
    debug: true,
});

const bot = controller.spawn({
    token: process.env.token
}).startRTM();

controller.on('direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, speak(`You're pretty smart for a mammal.`))
});

controller.hears(['how'], 'direct_message,direct_mention,mention', function(bot, message) {
    bot.reply(message, speak(`That's what the sparkles are for.`))
});

controller.hears(['vlad', 'taltos'], 'message_received', function(bot, message) {
    bot.reply(message, speak(`Hear that, boss?`));
    bot.reply(message, speak(`Think they will appreciate a dead teckla on their pillow?`));
});


function speak(msg) {
    return `:sparkles: ${msg} :sparkles:`;
}