import React from 'react'
import BillingImg from '../assets/Billing Software.png';
import CoEAutoImg from '../assets/CoE Automation Software.png';
import GatePassImg from '../assets/Gate Pass Software.png';
import HallBookingImg from '../assets/Hall Booking Software.png';
import LabTestImg from '../assets/Lab Test Software.png';
import MaintenanceImg from '../assets/Maintenance.png';
import OnlineImg from '../assets/Online Exam Software.png';
import RecordImg from '../assets/record.png';

export const Project = () => {
  return (
    <section className='py-5 pg-secondary' id="project">
        <div className='relative z-40'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>Projects</div>
            </div>
        </div>
        <div className='w-5/6 px-10 py-5 mx-auto grid md:grid-cols-3 gap-10 z-0'>
            <div className='project-list'><img className='' src={BillingImg}/><span className='text-center p-3'>Billing Software</span></div>
            <div className='project-list'><img src={CoEAutoImg}/><span className='text-center p-3'>CoE Automation Software</span></div>
            <div className='project-list'><img src={GatePassImg}/><span className='text-center p-3'>Gate Pass Software</span></div>
            <div className='project-list'><img src={HallBookingImg}/><span className='text-center p-3'>Hall Booking Software</span></div>
            <div className='project-list'><img src={LabTestImg}/><span className='text-center p-3'>Lab Test Booking Software</span></div>
            <div className='project-list'><img src={MaintenanceImg}/><span className='text-center p-3'>Maintenance Software</span></div>
            <div className='project-list'><img src={OnlineImg}/><span className='text-center p-3'>Online Examination Software</span></div>
            <div className='project-list'><img src={RecordImg}/><span className='text-center p-3'>Record Section Software</span></div>
        </div>
    </section>
  )
}
