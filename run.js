const { spawn } = require('child_process')
const cp = require('child_process')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)
function start(cmd) {
	return spawn(cmd, [], {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
}
start('bash')


