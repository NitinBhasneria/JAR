import { useState, useEffect } from "react"
import AcadExp from "./AcadExp"
import ProfExp from "./ProfExp"

const CandidateList = () => {
    const [candidates, setCandidates] = useState([])
    const [display, setDisplay] = useState(-1)

    const fetchCandidate = () => {
        console.log("feteching")
        fetch('http://localhost:8000/api/candidate/')
            .then(res => res.json())
            .then(data => setCandidates(data))
            .catch(err => console.log(err))
    }

    const updateStatus = (id, option) => {
        let data = candidates[id-1];
        data = {
            ...data,
            status: option
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        if(candidates[id-1].status != option)
            fetch(`http://localhost:8000/api/candidate/${id}/`, requestOptions)
                .then(fetchCandidate)
    }

    useEffect(fetchCandidate, [])

    return(
        <div className="mainCont">
            {
                candidates.map(candidate => {
                    return (
                        <div onClick={()=>{setDisplay(candidate.id)}} className={display==candidate.id ? 'candidate cand2' : 'candidate cand1'}>
                            <div className="top">
                                <p className="name">{candidate.name}</p>
                                <p className="status">{candidate.status}</p>
                            </div>
                            <h2 className="email">Email: {candidate.email}</h2>
                            {   
                                <div className="main">
                                    <div className="flexm">
                                        <p className="pos">Position Applied:</p>
                                        <p className="pos">{candidate.profile}</p>
                                    </div>
                                    <ProfExp id={candidate.id} />
                                    <AcadExp id={candidate.id} />
                                    <div className="flexm">
                                        <button onClick={()=>updateStatus(candidate.id, "Accepted")} className="accept btn">Accept</button>
                                        <button onClick={()=>updateStatus(candidate.id, "Rejected")} className="reject btn">Reject</button>
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CandidateList