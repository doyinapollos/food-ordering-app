import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <div className="contact--div">
        
            <div className="contact--aside--left">
                <img className='contact--img' src='https://www.oasdom.com/wp-content/uploads/2017/08/Oasdom-Nigerian-Food-recipes-Efo-Riro.jpg' alt='' />
            </div>
            
            <div className="contact--aside--right">
                
                <form className='contact--form'>
                    <h4>Contact Food Conner</h4>
                    <p className='register'>Register</p> 
                    
                    <label htmlFor='name'>Full Name</label><br />
                    <input name='name' type='text' placeholder='full name' /><br />
                    
                    <label htmlFor='email'>Email</label><br />
                    <input placeholder='email' /><br />
                
                    <label htmlFor='password'>Password</label><br />
                    <input placeholder='password' /><br />

                    <label htmlFor='message'>Message</label><br />
                    <textarea placeholder='enter message' /><br />
                    
                    <div className='contact-form-div'><br />
                        <button className='btn-1'>Sign up as Intern</button>
                        <button className='btn-2'>Already a member? LogIn</button>
                    </div>
                    <p>By signing up, you agree to our<br /><span>Terms and Privacy Policy</span></p>
                    


                </form>

            </div>
        </div>
    </div>
  )
}
