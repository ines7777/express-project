const date=new Date()


const currentHour= date.getHours()
console.log(currentHour)

const currentDay= date.getDay()
console.log(currentDay)


const logger =(req,res,next)=>{
    if(currentHour>=9 && currentHour<17 && currentDay >=1 && currentDay <6)
    {next()} 
    else {res.send('<h2>sorry we are closed</h2>')}
}

module.exports= logger