const CronJob = require('cron').CronJob

const job = new CronJob('* * * * * *', () => {
    console.log("Every second"),
    null,
    true,
    'America/Sao_Paulo'
})

job.start()