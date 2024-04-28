const { SlashCommandBuilder } = require("discord.js");

function generateNumber() {
    return Math.floor(Math.random() * 10);
}

module.exports = {
    cooldown: 5,
    category: "fun",
    data: new SlashCommandBuilder()
        .setName("randomnumber")
        .setDescription("Provides a random number."),
    async execute(interaction) {
        let randomNumber = generateNumber();
        await interaction.reply(`${randomNumber}`);
    },
};
