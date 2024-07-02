import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface IContactForm {
  name: IInputState
  email: IInputState
  message: IInputState
}

interface IInputState {
  value: string
  error: boolean
}

export function ContactMe() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [contactForm, setContactForm] = useState<IContactForm>({
    email: {
      value: '',
      error: false,
    },
    name: {
      value: '',
      error: false,
    },
    message: {
      value: '',
      error: false,
    },
  })

  const toggleForm = () => setIsOpen(!isOpen)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    const val = event.target.value
    const err = val === ''
    setContactForm((prev) => ({ ...prev, [field]: { value: val, error: err } }))
  }

  const onSubmit = () => {
    let formIsValid = true

    // Validate name
    if (contactForm.name.value === '') {
      setContactForm((prev) => ({ ...prev, name: { ...prev.name, error: true } }))
      formIsValid = false
    } else {
      setContactForm((prev) => ({ ...prev, name: { ...prev.name, error: false } }))
    }

    // Validate email
    if (contactForm.email.value === '') {
      setContactForm((prev) => ({ ...prev, email: { ...prev.email, error: true } }))
      formIsValid = false
    } else {
      setContactForm((prev) => ({ ...prev, email: { ...prev.email, error: false } }))
    }

    // Validate message
    if (contactForm.message.value === '') {
      setContactForm((prev) => ({ ...prev, message: { ...prev.message, error: true } }))
      formIsValid = false
    } else {
      setContactForm((prev) => ({ ...prev, message: { ...prev.message, error: false } }))
    }

    if (formIsValid) location.href = `mailto:jcook94.dev@gmail.com?subject=${contactForm.name.value}&body=${contactForm.message.value}`
  }


  useEffect( () => {

    if ( !isOpen ) setContactForm({
        email: { value: '', error: false },
        name: { value: '', error: false },
        message: { value: '', error: false },
    })

  }, [isOpen])

  return (
    <div className="my-2 sm:my-4 md:my-6 shadow-sm">
      <div
        className="px-6 items-center justify-center h-20 select-none flex flex-row cursor-pointer"
        onClick={toggleForm}
      >
        <h5 className="pr-2"> Contact Me </h5>
        <IoIosArrowDown style={{ transform: isOpen ? 'rotate(180deg)' : '' }} />
      </div>

      <form
        className={`flex flex-col justify-center px-6 pt-0 overflow-hidden transition-[max-height] duration-400 ease-in ${
          isOpen ? 'max-h-90' : 'max-h-0'
        } w-full`}
      >
        <div className={`flex flex-col p-2 w-full rounded-sm ${contactForm.name.error ? 'border-red-500' : 'border-gray-300'}`}>
          {contactForm.name.error && <p className="text-red-500 text-left">Please enter your name</p>}
          <input
            required
            type="text"
            className={`text-black p-1 h-8 mt-1 w-full rounded-lg ${contactForm.name.error ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-[#009bd6]`}
            placeholder="Name"
            value={contactForm.name.value}
            onChange={(e) => handleChange(e, 'name')}
          />
        </div>
        <div className={`flex flex-col p-2 ${contactForm.email.error ? 'border-red-500' : 'border-gray-300'}`}>
          {contactForm.email.error && <p className="text-red-500 text-left">Please enter your email</p>}
          <input
            required
            type="email"
            className={`text-black p-1 h-8 mt-1 w-full rounded-lg ${contactForm.email.error ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-[#009bd6] focus:ring focus:ring-[#009bd6] focus:ring-opacity-50`}
            placeholder="Email"
            value={contactForm.email.value}
            onChange={(e) => handleChange(e, 'email')}
          />
        </div>
        <div className={`flex flex-col border-lg grow p-2 ${contactForm.message.error ? 'border-red-500' : 'border-gray-300'}`}>
          {contactForm.message.error && <p className="text-red-500 text-left">Please enter a message</p>}
          <textarea
            required
            className={`text-black p-1 h-20 mt-1 w-full rounded-lg ${contactForm.message.error ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-[#009bd6] focus:ring focus:ring-[#009bd6] focus:ring-opacity-50`}
            placeholder="Message..."
            value={contactForm.message.value}
            onChange={(e) => handleChange(e, 'message')}
          />
        </div>
        <div>
          <button
            onClick={onSubmit}
            className="text-black bg-white mt-6 border rounded-xl border-gray-300 p-2 hover:bg-[#009bd6] hover:text-white"
          >
            Submit Message
          </button>
        </div>
      </form>
    </div>
  )
}
