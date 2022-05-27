import React, { Component } from 'react';
import './Form.css'
import { Navigate } from 'react-router-dom';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            status: 'Applied',
            email: '',
            profile: '',
            currCompany: '',
            currYears: '',
            prof: [],
            currSchool: '',
            currPassYear: '',
            acad: [],
            submitted: false
         }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    addProf = () => {
        if(!this.state.currCompany){
            alert('Fill company name')
        }
        else if(this.state.currYears === '')
            alert('Fill company years')
        else {
            this.setState({
                prof: [
                  ...this.state.prof,
                  {
                    company: this.state.currCompany,
                    years: this.state.currYears   
                  } 
                ]
              })
            this.setState({currCompany: '', currYears: ''})
        }
    }
    addAcad = () => {
        if(!this.state.currSchool){
            alert('Fill school name')
        }
        else if(!this.state.currPassYear === '')
            alert('Fill school passout years')
        else {
            this.setState({
                acad: [
                ...this.state.acad,
                {
                    school: this.state.currSchool,
                    passYear: this.state.currPassYear   
                } 
                ]
            })
            this.setState({currSchool: '', currPassYear: ''})
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name) 
            alert('Please Fill Name')
        else if(!this.state.email) 
            alert('Please Fill email')
        else if(!this.state.profile) 
            alert('Please Fill profile')
        else {
            this.setState({submitted: true})
            const candidate = {
                name: this.state.name, 
                status: this.state.status, 
                email: this.state.email, 
                profile: this.state.profile}
            console.log(candidate);
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(candidate)
            };
            fetch(`http://localhost:8000/api/candidate/`, requestOptions)
                .then(res => res.json())
                .then(data => {
                    this.state.acad.map(p => {
                        fetch(`http://localhost:8000/api/acad/${data.id}/`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                ...p,
                                candidate: data.id
                            })
                        })
                    })
                    this.state.prof.map(p => {
                        fetch(`http://localhost:8000/api/prof/${data.id}/`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                ...p,
                                candidate: data.id
                            })
                        })
                    })
                })
        } 
    }
    render() { 
        const {name, prof, acad, email, profile, currCompany, currYears, currSchool, currPassYear} = this.state;
        if(this.state.submitted)
            return <Navigate to="/" />
        return ( 
            <div className='containerForm mainCont'>
                <label>Name: </label>
                <input type='text' name='name' onChange={this.handleChange} value={name}></input>
                <label>Email: </label>
                <input type='text' name='email' onChange={this.handleChange} value={email}></input>
                <label>Profile: </label>
                <input type='text' name='profile' onChange={this.handleChange} value={profile}></input>
                <h3>Professional Experience</h3>
                {
                    prof.map(p => {
                        return (
                            <div className='flexm innerContainer'>
                                <p>Company: {p.company}</p>
                                <p>Years: {p.years}</p>
                            </div>
                        )
                    })
                }
                <label>Company: </label>
                <input type='text' name='currCompany' onChange={this.handleChange} value={currCompany}></input>
                <label>Years: </label>
                <input type='text' name='currYears' onChange={this.handleChange} value={currYears}></input>
                <div className='btnDiv'><button className='btnForm' onClick={this.addProf}>Add Professional Experience</button></div>
                <h3>Academics Experience</h3>
                {
                    acad.map(p => {
                        return (
                            <div className='flexm innerContainer'>
                                <p>School: {p.school}</p>
                                <p>Passout Year: {p.passYear}</p>
                            </div>
                        )
                    })
                }
                <label>School: </label>
                <input type='text' name='currSchool' onChange={this.handleChange} value={currSchool}></input>
                <label>Passout Year: </label>
                <input type='text' name='currPassYear' onChange={this.handleChange} value={currPassYear}></input>
                <div className='btnDiv'><button className='btnForm' onClick={this.addAcad}>Add Academics Experience</button></div>
                <div className='btnDiv'><button className='btnForm submit' type='submit' onClick={this.handleSubmit}>Submit</button></div>
            </div>
         );
    }
}
 
export default PostForm;