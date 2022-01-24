import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs,setJobs] = useState([])
  const [index,setIndex] = useState(0)
  const [loading,setLoading] = useState(true)

  const fetchData = async() =>{
    setLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      setJobs(data)
      setLoading(false)
      
    } catch (error) {
      console.log(error);
      // setLoading(false)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  //here loading necessary
if(loading){
  return <h2>Loading...</h2>
}

//it loades after loading
const {company,title,dates,duties} = jobs[index]

  return <section className='section'>
    <div className="title">
      <h2>experience</h2>
      <div className="underline"></div>
    </div>
    <div className="jobs-center">
      <div className="btn-container">

     {
       
       jobs.map((cmp,idx)=>{
         return <button className={`job-btn ${idx === index && 'active-btn'}`}
         key={idx} 
         onClick={()=>setIndex(idx)}>
           {cmp.company}
         </button>
       })
     }

      </div>

      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {
          duties.map((duty,idx)=>{
            return <div key={idx} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          })
        }
      </article>
    </div>
  </section>
}

export default App
