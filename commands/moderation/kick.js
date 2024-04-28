const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    category: "moderation",
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kick a user.")
        .addUserOption((option) =>
            option.setName("user").setDescription("User to Kick").setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    async execute(interaction) {
        if (!interaction.member.permissions.has("KICK_MEMBERS")) {
            return await interaction.reply("You do not have permission to use this command");
        }

        const userToKick = interaction.options.getMember("user");

        if (!userToKick) {
            return await interaction.reply("Please provide a valid user to kick.");
        }

        try {
            await userToKick.ban();
            await interaction.reply(`${userToKick.user.tag} has been kicked.`);
        } catch (error) {
            console.error(error);
            await interaction.reply("There was an error trying to kick a user.");
        }
    },
};
