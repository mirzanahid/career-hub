const getLocal= () => {
   const localData = localStorage.getItem('applied-jobs')

   if(localData){
    return JSON.parse(localData)
   }

   return []
}


const saveToLocalSotrage =(id)=>{
    const appliedJobs = getLocal()
    const exits = appliedJobs.find(jobId => jobId === id)

    if(!exits){
        appliedJobs.push(id);
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))

    }
}


export {getLocal,saveToLocalSotrage}