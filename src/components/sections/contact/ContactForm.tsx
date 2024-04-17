import React, { forwardRef, HTMLProps, useEffect, useState } from 'react'

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string
  placeholder: string
  required?: boolean
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, placeholder, required, onChange, ...rest }, ref) => {
    const [isValid, setIsValid] = useState<boolean>(!required)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      const isValidValue = required ? !!value : true
      setIsValid(isValidValue)
      onChange?.(event)
    }

    return (
      <fieldset className="w-full mb-4 my-4">
        <label className="text-[24px] font-[600] mb-3">{label}</label>
        <input
          name={name}
          {...rest}
          ref={ref}
          required={required}
          onChange={handleChange}
          style={{
            border: '1px solid #525252',
            marginTop: '12px',
            borderColor: isValid ? '#525252' : 'red',
          }}
          className="w-full p-3 rounded-[8px]"
          placeholder={placeholder}
        />
        {!isValid && <p className="text-red-500">This field is required</p>}
      </fieldset>
    )
  },
)

const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`bg-[#1EA1F6] text-white px-14 py-3 rounded-[8px] ${disabled && 'opacity-50 cursor-not-allowed'}`}
      disabled={disabled} // Disable button based on 'disabled' prop
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

interface TextFieldProps extends HTMLProps<HTMLTextAreaElement> {
  label: string
  placeholder: string
  required?: boolean
}

// eslint-disable-next-line react/display-name
const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ label, placeholder, required, ...rest }, ref) => {
    const [isValid, setIsValid] = useState<boolean>(!required)

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target
      const isValidValue = required ? !!value : true
      setIsValid(isValidValue)
      rest.onChange?.(event)
    }

    useEffect(() => {
      if (required) {
        setIsValid(!!rest.value)
      }
    }, [required, rest.value])

    return (
      <fieldset className="w-full mb-4 my-4">
        <label className="text-[24px] font-[600] mb-3">{label}</label>
        <textarea
          {...rest}
          ref={ref}
          required={required}
          onChange={handleChange}
          style={{
            border: '1px solid #525252',
            marginTop: '12px',
            borderColor: isValid ? '#525252' : 'red',
            padding: '12px',
            borderRadius: '8px',
            width: '100%',
            boxSizing: 'border-box',
          }}
          placeholder={placeholder}
        />
        {!isValid && <p className="text-red-500">This field is required</p>}
      </fieldset>
    )
  },
)

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

const AboutForm = ({ onNext, handleInputChange, formValue }) => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  return (
    <form
      className="w-full"
      onSubmit={(e) => {
        e.preventDefault()
        if (isFormValid) {
          onNext()
        }
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <Input
          name="name"
          label="Full Name"
          placeholder="Enter full name"
          required
          value={formValue.name}
          onChange={(e) => {
            setIsFormValid(true)
            handleInputChange(e)
          }}
        />
        <Input
          name="email"
          label="Email address"
          placeholder="Enter email address"
          required
          value={formValue.email}
          onChange={(e) => {
            setIsFormValid(true)
            handleInputChange(e)
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <Input
          label="Phone Number (optional)"
          name="phone"
          placeholder="Enter phone number"
          value={formValue.phone}
          onChange={(e) => {
            setIsFormValid(true)
            handleInputChange(e)
          }}
        />
        <Input
          label="Business Name (optional)"
          placeholder="Enter business name"
          name="business_name"
          value={formValue.business_name}
          onChange={(e) => {
            setIsFormValid(true)
            handleInputChange(e)
          }}
        />
      </div>
      <TextField
        label="Message"
        name="message"
        value={formValue.message}
        placeholder="Enter message"
        required
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
      />
      <div className="mt-[36px]">
        <PrimaryButton
          onClick={() => {
            console.log('form value', formValue)
            onNext()
          }}
          disabled={!isFormValid}
        >
          Next
        </PrimaryButton>
      </div>
    </form>
  )
}

const ProjectBasics = ({ onNext, onPrev, handleInputChange, formValue }) => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
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

      <TextField
        label="Describe Project"
        name="project"
        value={formValue.project}
        required
        placeholder="Describe your project"
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
      />

      <Input
        label="Color Preference (Optional)"
        name="color"
        value={formValue.color}
        placeholder="Enter name of color or color code"
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
      />

      <div className="flex items-center justify-between mt-[36px]">
        <OutlineButton onClick={onPrev}>Previous</OutlineButton>
        <PrimaryButton
          onClick={() => {
            console.log('form value', formValue)
            onNext()
          }}
          disabled={!isFormValid}
        >
          Next
        </PrimaryButton>
      </div>
    </div>
  )
}

const YourWords = ({ onPrev, handleInputChange, formValue }) => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  return (
    <div className="w-full">
      <TextField
        value={formValue.brands}
        name="brands"
        label="What 3 brands do you love the most?"
        placeholder="Enter the brands you love"
        required
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
      />
      <TextField
        value={formValue.competitors}
        name="competitors"
        label="Who are your competitors?"
        placeholder="Enter competitors name"
        required
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
      />
      <TextField
        name="know"
        value={formValue.know}
        label="Anything you'd like us to know?"
        required
        onChange={(e) => {
          setIsFormValid(true)
          handleInputChange(e)
        }}
        placeholder="Any additional details or creative contributions. we want to make sure we are on the same page through out the collaborative process "
      />
      <div className="flex items-center justify-between mt-[36px]">
        <OutlineButton onClick={onPrev}>Previous</OutlineButton>
        <PrimaryButton
          onClick={() => {
            console.log('form value', formValue)
          }}
          disabled={!isFormValid}
        >
          Get Estimate
        </PrimaryButton>
      </div>
    </div>
  )
}

const ContactForm = () => {
  const [currIndex, setCurrIndex] = useState<number>(1)
  const [submit, setSubmit] = useState({})
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    console.log('Changing', { [e?.target?.name]: e?.target?.value })
    setSubmit({ ...submit, [e?.target?.name]: e?.target?.value })
  }
  const FORM_STEPS = [
    {
      title: 'About',
      form: (
        <AboutForm
          handleInputChange={handleInputChange}
          formValue={submit}
          onNext={() => {
            setCurrIndex(2)
          }}
        />
      ),
      index: 1,
    },
    {
      title: 'Project Basics',
      form: (
        <ProjectBasics
          handleInputChange={handleInputChange}
          formValue={submit}
          onNext={() => {
            setCurrIndex(3)
          }}
          onPrev={() => setCurrIndex(1)}
        />
      ),
      index: 2,
    },
    {
      title: 'Your Words',
      form: (
        <YourWords
          handleInputChange={handleInputChange}
          formValue={submit}
          onPrev={() => setCurrIndex(2)}
        />
      ),
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
