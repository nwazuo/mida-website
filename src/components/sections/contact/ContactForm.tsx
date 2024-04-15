import React, { useState } from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <fieldset className="w-full mb-4">
      <label>{label}</label>
      <input
        style={{ border: '1px solid #525252' }}
        className="w-full p-3 rounded-[8px]"
        placeholder={placeholder}
      />
    </fieldset>
  )
}

const PrimaryButton = () => {
  return (
    <button className="bg-[#1EA1F6] text-white px-14 py-3 rounded-[8px]">
      Next
    </button>
  )
}

const OutlineButton = () => {
  return (
    <button
      style={{ border: '1px solid #1EA1F6' }}
      className="text-[#1EA1F6] px-14 py-3 rounded-[8px]"
    >
      Next
    </button>
  )
}

const TextField = ({ label, placeholder }) => {
  return (
    <fieldset>
      <label>{label}</label>
      <textarea
        style={{ border: '1px solid #525252' }}
        className="w-full p-3 rounded-[8px]"
        placeholder={placeholder}
      />
    </fieldset>
  )
}

const Stepper = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="w-full">
        <p>1. About</p>
        <div
          style={{
            backgroundColor: '#1EA1F6',
            borderRadius: '7px',
            height: '7px',
          }}
        />
      </div>
      <div className="w-full">
        <p>2. Project Basis</p>
        <div
          style={{
            backgroundColor: '#1EA1F6',
            borderRadius: '7px',
            height: '7px',
          }}
        />
      </div>
      <div className="w-full">
        <p>3. Your words</p>
        <div
          style={{
            backgroundColor: '#1EA1F6',
            borderRadius: '7px',
            height: '7px',
          }}
        />
      </div>
    </div>
  )
}

const AboutForm = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4 w-full">
        <Input label="Full Name" placeholder="Enter full name" />
        <Input label="Email address" placeholder="Enter email address" />
      </div>
      <div className="flex items-center justify-between gap-4 w-full">
        <Input
          label="Phone Number (optional)"
          placeholder="Enter phone number"
        />
        <Input
          label="Business Name (optional)"
          placeholder="Enter business name"
        />
      </div>
      <TextField label="Message" placeholder="Enter message" />
      <PrimaryButton />
      <OutlineButton />
    </div>
  )
}

const FORM_STEPS = [{ title: 'About', form: <AboutForm />, index: 0 }]

const ContactForm = () => {
  const [currIndex, setCurrIndex] = useState<number>(1)
  return (
    <>
      <Stepper />
      <AboutForm />
    </>
  )
}

export default ContactForm
