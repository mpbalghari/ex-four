import React from 'react'
import Prop1 from './Prop1'
import Prop2 from './Prop2'
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/App.css"
function MainProps() {
    return (
        <> 
         <div className="container border bg-gray border-white rounded-2 pt-2 pb-2 ">
            <h5 className="text-2 opacity-50 pt-2 mb-2 "> Prop parent components </h5>
            <div>
                <Prop1 />
                <Prop2 />
            </div>
        </div>
        </>
    )
}

export default MainProps