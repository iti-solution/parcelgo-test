import { exec } from 'child_process'

exec('payload migrate:fresh --force', (error, stdout, stderr) => {

    console.log(stdout)

    if (error) console.error(error)

    if (stderr) console.error(stderr)
        
})