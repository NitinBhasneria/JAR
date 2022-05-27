import { useEffect, useState } from "react"

const AcadExp = (props) => {
    const [Acad, setAcad] = useState([]);

    const fetchExp = () => {
        fetch(`http://localhost:8000/api/acad/${props.id}/`)
            .then(res => res.json())
            .then(data => setAcad(data))
            .catch(err => console.log(err))
    }

    useEffect(fetchExp, [])

    return (
            <div style={{display: `${Acad.length == 0 ? 'none': 'block'}`}} className="exp">
                <p className="head">Academics Experience</p>
                {   
                    Acad.map(exp => {
                        return (
                            <div  className="flexm">
                                <p>School: {exp.school}</p>
                                <p>Passout Year: {exp.passYear}</p>
                            </div>
                        )
                    })
                }
            </div>   
    )
}

export default AcadExp