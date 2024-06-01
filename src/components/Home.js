import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <h1 className='text-center m-3'>Welcome to VITB</h1>
                <p className='text-center m-3'>Click on the links above to navigate</p>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-6">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                    <div className='col'>
                        <img src='https://www.shutterstock.com/image-vector/diverse-group-students-before-university-260nw-2175833353.jpg' alt='college' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home