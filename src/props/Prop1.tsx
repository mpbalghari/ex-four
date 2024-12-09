import React, { ReactNode } from 'react'
import "prop-types";
import PropTypes from 'prop-types';
function Prop1() {
  // components stuffs.............../

  const Student = ({ nam, roll }) => {
    return <p>{nam}'s roll no is {roll}</p>
  }
  Student.propTypes = {
    nam: PropTypes.string.isRequired,
    roll: PropTypes.number.isRequired
  }

  const Stuu : React.FC<({})> = () => {
    return (
      <p>child comp</p>
    )
  }
  

  const Stu: React.FC<({ num: number, Rt : ReactNode })> = ({ num ,Rt}) => {
    return (
      <div>Given value number:{num}, comp: {Rt} </div>
    )
  }
  const Clc = () => {
    return (<>Works</>)
  }

  return (
    <>
      <p className="text-2 opacity-50 text-secondary">Prop child one component</p>
      <p>Using prop-type</p>
      <Student nam={"Ali"} roll={34} />
      <h6>Props Type</h6>
      <Stu num={54} Rt={<Stuu/>} />n
    </>
    //return stuffs................./

  )
}

export default Prop1