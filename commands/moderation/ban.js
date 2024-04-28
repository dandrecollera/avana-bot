const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    category: "moderation",
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Ban a user.")
        .addUserOption((option) =>
            option.setName("user").setDescription("User to Ban").setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        if (!interaction.member.permissions.has("BAN_MEMBERS")) {
            return await interaction.reply("You do not have permission to use this command");
        }

        const userToBan = interaction.options.getMember("user");

        if (!userToBan) {
            return await interaction.reply("Please provide a valid user to ban.");
        }

        try {
            await userToBan.ban();
            await interaction.reply(`${userToBan.user.tag} has been banned.`);
        } catch (error) {
            console.error(error);
            await interaction.reply("There was an error trying to ban a user.");
        }
    },
};
