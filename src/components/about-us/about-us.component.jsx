import React, { Fragment } from 'react';

const Aboutus = () => {
    return (
        <Fragment>
            <div className="text-center container">
                <h3>About Us</h3>
                <div className="container">
                <img src="https://crisisconsultant.com/wp-content/uploads/2017/10/preparation.jpeg" className="img-fluid w-50 h-75" alt="Responsive image"></img>    
                </div>

                {/* <img src="" alt="some image here " /> */}
                <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione vero, ipsum temporibus et voluptatibus voluptatum quam tempora! Eum perspiciatis voluptatum natus distinctio, quisquam maxime hic ducimus similique autem nemo aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero ex repellat, consequatur tempore illum modi sunt pariatur blanditiis. Qui ex consequatur maxime deserunt repellendus, aut repellat reprehenderit dicta voluptate?</p>
            </div>
        </Fragment>
    );
};

export default Aboutus;