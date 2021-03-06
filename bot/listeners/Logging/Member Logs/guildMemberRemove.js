const { Listener } = require('discord-akairo')
const dmd = require('discord-md-tags')
const UserModel = require('../../../structures/Schemas/UserSchema')

module.exports = class extends Listener {
    constructor() {
        super('guildmemberremove', {
            emitter: 'client',
            event: 'guildMemberRemove'
        })
    }

    async exec(member) {
        let cguild = member.guild
        console.log(del)
        for (let guild of this.client.guilds.cache.filter(g => g != cguild).array()) {
            if(guild.members.cache.get(member.user.id)) {
                del = false
                break
            }
        }

        if(del) await UserModel.findOneAndDelete({
            id: member.user.id
        })

    }
}