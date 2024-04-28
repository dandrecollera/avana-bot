const { SlashCommandBuilder } = require("discord.js");
const { category } = require("./reload");

module.exports = {
    category: 'utility',
    data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Pong!"),
    async execute(interaction) {
        await interaction.reply("Pong!");
    },
};
