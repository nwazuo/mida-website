import React, { useState } from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <fieldset className="w-full mb-4 my-4">
      <label className="text-[24px] font-[600] mb-3">{label}</label>
      <input
        style={{ border: '1px solid #525252', marginTop: '12px' }}
        className="w-full p-3 rounded-[8px]"
        placeholder={placeholder}
      />
    </fieldset>
  )
}

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#1EA1F6] text-white px-14 py-3 rounded-[8px]"
    >
      {children}
    </button>
  )
}

const OutlineButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ border: '1px solid #1EA1F6' }}
      className="text-[#1EA1F6] px-14 py-3 rounded-[8px]"
    >
      {children}
    </button>
  )
}

const TextField = ({ label, placeholder }) => {
  return (
    <fieldset className="w-full my-4">
      <label className="text-[24px] font-[600] mb-3">{label}</label>
      <textarea
        style={{ border: '1px solid #525252', marginTop: '12px' }}
        className="w-full p-3 rounded-[8px] md:h-[170px]"
        placeholder={placeholder}
      />
    </fieldset>
  )
}

const Stepper = ({ currIndex, steps }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {steps.map((s, i) => (
        <div className="w-full" key={i}>
          <p>
            {i + 1}. {s}
          </p>
          <div
            style={{
              backgroundColor: currIndex >= i + 1 ? '#1EA1F6' : '#a5d9fb',
              borderRadius: '7px',
              height: '7px',
            }}
          />
        </div>
      ))}
    </div>
  )
}

const AboutForm = ({ onNext }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <Input label="Full Name" placeholder="Enter full name" />
        <Input label="Email address" placeholder="Enter email address" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
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
      <div className="mt-[36px]">
        <PrimaryButton onClick={() => onNext()}>Next</PrimaryButton>
      </div>
    </div>
  )
}

const ProjectBasics = ({ onNext, onPrev }) => {
  return (
    <div className="w-full">
      <h5 className="text-[24px] font-[700] mb-4">Category</h5>
      <div className="grid grid-cols-3 md:w-[80%]">
        {[
          { title: 'UI/UX Design', value: 0 },
          { title: 'Web Design', value: 1 },
          { title: 'Web Development', value: 2 },
          { title: 'Blockchain', value: 3 },
          { title: 'Not sure, but I can describe', value: 4 },
        ].map((item, i) => (
          <div className="flex items-center" key={i}>
            <input type="radio" key={i} />
            <p className="ml-2">{item.title}</p>
          </div>
        ))}
      </div>

      <TextField label="Describe Project" placeholder="Describe your project" />

      <Input
        label="Color Preference (Optional)"
        placeholder="Enter name of color or color code"
      />

      <div className="flex items-center justify-between mt-[36px]">
        <OutlineButton onClick={onPrev}>Previous</OutlineButton>
        <PrimaryButton onClick={onNext}>Next</PrimaryButton>
      </div>
    </div>
  )
}

const YourWords = ({ onPrev }) => {
  return (
    <div className="w-full">
      <TextField
        label="What 3 brands do you love the most?"
        placeholder="Enter the brands you love"
      />
      <TextField
        label="Who are your competitors?"
        placeholder="Enter competitors name"
      />
      <TextField
        label="Anything you'd like us to know?"
        placeholder="Any additional details or creative contributions. we want to make sure we are on the same page through out the collaborative process "
      />
      <div className="flex items-center justify-between mt-[36px]">
        <OutlineButton onClick={onPrev}>Previous</OutlineButton>
        <PrimaryButton onClick={() => {}}>Get Estimate</PrimaryButton>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [currIndex, setCurrIndex] = useState<number>(1)
  const FORM_STEPS = [
    {
      title: 'About',
      form: <AboutForm onNext={() => setCurrIndex(2)} />,
      index: 1,
    },
    {
      title: 'Project Basics',
      form: (
        <ProjectBasics
          onNext={() => setCurrIndex(3)}
          onPrev={() => setCurrIndex(1)}
        />
      ),
      index: 2,
    },
    {
      title: 'Your Words',
      form: <YourWords onPrev={() => setCurrIndex(2)} />,
      index: 3,
    },
  ]
  return (
    <div className="w-full">
      <Stepper
        currIndex={currIndex}
        steps={FORM_STEPS.map((item) => item.title)}
      />
      <div className="w-full">
        {FORM_STEPS.find((item) => item.index === currIndex).form}
      </div>
    </div>
  )
}

export default ContactForm
