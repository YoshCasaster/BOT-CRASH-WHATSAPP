const { checkApproval, approveScript, isApproved, validateApprovalData, checkScriptIntegrity } = require('./scriptSecurity/scriptSecurity');
const config = require('./scriptSecurity/config');
const chalk = require('chalk');

console.log(chalk.cyan.bold("Script utama menggunakan module scriptSecurity - Credits: zaenishi"));

// Fungsi utama untuk memeriksa dan melakukan tindakan keamanan script
async function main() {
    if (!(await isApproved())) {
        if (m.sender.includes(config.approval.num) && budy.includes(config.approval.text)) {
            await approveScript(m.sender, conn.authState.creds.pairingCode);
            await m.reply(config.approval.greet);
        } else {
            await checkApproval();
        }
    }
}

main();

if (!await isApproved() && isCmd) {
    return;
}

// Mengecek apakah kode approval masih ada di (case.js)
checkScriptIntegrity();

// Memeriksa kredensial
if (await isApproved()) {
    validateApprovalData(conn.authState.creds.pairingCode);
}
