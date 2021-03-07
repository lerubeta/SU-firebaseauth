import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Home() {
    
    return (
        <div>
            <h2>Home Not private</h2>
            <Card>
                <Card.Body>
                    <Link to="/login" className="btn btn-primary w-100 mt-3">
                        Login
                    </Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Link to="/signup" className="btn btn-primary w-100 mt-3">
                        Signup
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
    
}
