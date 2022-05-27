import { useEffect, useState } from "react"

const ProfExp = (props) => {
    const [prof, setProf] = useState([]);

    const fetchExp = () => {
        fetch(`http://localhost:8000/api/prof/${props.id}/`)
            .then(res => res.json())
            .then(data => setProf(data))
            .catch(err => console.log(err))
    }

    useEffect(fetchExp, [])

    return (
        <div style={{display: `${prof.length == 0 ? 'none': 'block'}`}} className="exp">
            <p className="head">Professional Experience</p>
            {  
                prof.map(exp => {
                    return (
                        <div  className="flexm">
                            <p>Company: {exp.company}</p>
                            <p>{exp.years} years</p>
                        </div>
                    )
                })
            }
        </div>    
    )
}

export default ProfExp