import React from 'react'


function Projects() {
    return (
        <div>
            <h2>See some of my work</h2>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                    <img src="https://i.ibb.co/f4LJzRM/connect4.png" className="card-img-top" alt="connect4" border="0"/>
                    <div className="card-body">
                        <h5 className="card-title">connect4</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                    <img src="https://i.ibb.co/hygN8Ks/amazing.png" className="card-img-top" alt="amazing" />
                    <div className="card-body">
                        <h5 className="card-title">Amazing</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                    <img src="https://i.ibb.co/Swbs3x7/nerdstop.png" className="card-img-top" alt="nerdstop" />
                    <div className="card-body">
                        <h5 className="card-title">NerdStop</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                    <img src="https://i.ibb.co/p1QJqrv/panceasite.png" className="card-img-top" alt="panceasite" />
                    <div className="card-body">
                        <h5 className="card-title">Pancea</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
