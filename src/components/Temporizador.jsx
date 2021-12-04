import React, { Fragment } from 'react'

const Temporizador = ({ seconds }) => {
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className='clock'>
                        <section>
                            <p>{seconds}</p>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};

export default Temporizador
