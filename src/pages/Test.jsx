import React from 'react'
import WizardRegistration from '../components/wizard registration/WizardRegistration'
import FaceDetector from '../components/FaceDetector'

export default function Test() {
  return (
    <div className='container h-100'>
      <div className='row h-100'>
        <div className='col-12 col-sm-10 col-lg-6 p-1 p-sm-3 h-100'>
          <WizardRegistration></WizardRegistration>
        </div>
        <div className='col-12 col-sm-10 col-lg-6 p-1 p-sm-3 h-100'>
          {/* <FaceDetector/> */}
        </div>
      </div>
    </div>
  )
}

