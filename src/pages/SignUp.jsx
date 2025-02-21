import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/form.css';
import Header from "../components/header";
import Footer from "../components/footer";

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        housenumber: '',
        streetname: '',
        city: '',
        province: '',
        postalCode: '',
        phoneNumber: '',
        email: '',
        dob: new Date().toISOString().split('T')[0],
        password: '',
        confirm: '',
        adults: '',
        children: '',
        income: '',
        consentRules: false,
        consentCommunications: false,
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName) errors.firstName = "*First Name is required.";
        if (!formData.lastName) errors.lastName = "*Last Name is required.";
        if (!formData.housenumber) errors.housenumber = "*House# is Required.";
        if (!formData.streetname) errors.streetname = "*Street Name is Required.";
        if (!formData.city) errors.city = "*City is required.";
        if (!formData.province) errors.province = "*Province is required.";
        if (!formData.postalCode) errors.postalCode = "*Postal Code is required.";
        if (!formData.dob) errors.dob = "*Date of Birth is required.";
        if (!formData.phoneNumber) errors.phoneNumber = "*Phone Number is required.";
        if (!formData.email) errors.email = "*Email is required.";
        if (!formData.password) errors.password = "*Insert Your Password.";
        if (!formData.confirm) errors.confirm = "*Confirm Your Password.";
        if (!formData.adults) errors.adults = "*Number Must be Whole.";
        if (!formData.children) errors.children = "*Number Must be Whole.";
        if (!formData.income) errors.income = "*Insert Gross Income.";
        if (!formData.consentRules) errors.consentRules = "*You must consent to the rules before proceeding.";
        if (!formData.consentCommunications) errors.consentCommunications = "*You must consent to communications before proceeding.";

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = "*Please enter a valid email.";
        if ((formData.email.match(/@/g) || []).length !== 1) errors.email = "*Email must contain exactly one '@'.";

        if (formData.phoneNumber && !/^\d{3}-\d{3}-\d{4}$/.test(formData.phoneNumber)) errors.phoneNumber = "*8 Digits Only.";
        if ((formData.phoneNumber.match(/-/g) || []).length !== 2) errors.phoneNumber = "*Two Dashes Required.";

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            const updatedUser = {
                ...formData,
                address: `${formData.housenumber} ${formData.streetname}`
            };
            navigate("/homepage");
        }
    };
    
    

    return (
        <div className="form-container">
            <Header />
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>

                <div className="first-last-name">
                    <div>
                        <label>*First Name:
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName} 
                                onChange={handleChange}
                                className={formErrors.firstName ? "error" : ""} 
                                placeholder="Ex. John" 
                                maxLength="45"
                                pattern="[A-Za-z ]+" 
                                title="Only letters and spaces are allowed."
                            />
                            {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Last Name:
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName} 
                                onChange={handleChange} 
                                className={formErrors.lastName ? "error" : ""} 
                                placeholder="Ex. Doe" 
                                maxLength="45"
                                pattern="[A-Za-z ]+" 
                                title="Only letters and spaces are allowed."
                            />
                            {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                        </label>
                    </div>
                </div>
                
                <div className="street-unit">

                    <div>
                        <label>*House #:
                            <input type="text" name="housenumber" value={formData.housenumber} onChange={handleChange} className={formErrors.housenumber ? "error" : ""} placeholder="123" maxLength="3" />
                            {formErrors.housenumber && <span className="error-message">{formErrors.housenumber}</span>}
                        </label>
                    </div>

                    <div>
                        <label>Street Name:
                        <input type="text" name="streetname" value={formData.streetname} onChange={handleChange} className={formErrors.streetname ? "error" : ""} placeholder="Sesame Street" maxLength="2" />
                        {formErrors.streetname && <span className="error-message">{formErrors.streetname}</span>}
                        </label>
                    </div>

                    <div>
                        <label>Apartment/Unit:
                            <input type="text" name="apartment" onChange={handleChange} placeholder="#25" maxLength="2" />
                        </label>
                    </div>
                </div>

                <div className="city-province-postal">
                    <div>
                        <label>*City:
                            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Toronto" className={formErrors.city ? "error" : ""} maxLength="25" />
                            {formErrors.city && <span className="error-message">{formErrors.city}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Province:
                            <select name="province" value={formData.province} onChange={handleChange} className={formErrors.province ? "error" : ""}>
                                <option value="">Select</option>
                                {["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"].map((prov) => (
                                    <option key={prov} value={prov}>{prov}</option>
                                ))}
                            </select>
                            {formErrors.province && <span className="error-message">{formErrors.province}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Postal Code:
                            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className={formErrors.postalCode ? "error" : ""} placeholder="L113-J12" maxLength="10" />
                            {formErrors.postalCode && <span className="error-message">{formErrors.postalCode}</span>}
                        </label>
                    </div>
                </div>

                <div className="dob-phone">
                    <div>
                        <label>*Date of Birth:
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className={formErrors.dob ? "error" : ""} />
                            {formErrors.dob && <span className="error-message">{formErrors.dob}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Phone Number:
                            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={formErrors.phoneNumber ? "error" : ""} placeholder="000-000-0000" maxLength="12" />
                            {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
                        </label>
                    </div>
                </div>

                <label>*Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={formErrors.email ? "error" : ""} placeholder="Ex. john.doe@yahoo.com" />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </label>

                <label>*Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className={formErrors.password ? "error" : ""} placeholder="Ex. BuyMoreDollars123/" />
                    {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                </label>

                <label>*Confirm Password:
                    <input type="text" name="confirm" value={formData.confirm} onChange={handleChange} className={formErrors.confirm ? "error" : ""} placeholder="Ex. BuyMoreDollars123/" />
                    {formErrors.confirm && <span className="error-message">{formErrors.confirm}</span>}
                </label>

                <div className="house-member">
                    <div>
                        <label>*Adults in Household:
                            <input 
                                type="number" 
                                name="adults" 
                                value={formData.adults} 
                                onChange={handleChange} 
                                className={formErrors.adults ? "error" : ""} 
                                min="0" 
                            />
                            {formErrors.adults && <span className="error-message">{formErrors.adults}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Minors in Household:
                            <input 
                                type="number" 
                                name="children" 
                                value={formData.children} 
                                onChange={handleChange} 
                                className={formErrors.children ? "error" : ""} 
                                min="0" 
                            />
                            {formErrors.children && <span className="error-message">{formErrors.children}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*Gross Income:
                            <input 
                                type="number" 
                                name="income" 
                                value={formData.income} 
                                onChange={handleChange} 
                                className={formErrors.income ? "error" : ""} 
                                min="0" 
                                step="1000" 
                                placeholder="-$20,000"
                            />
                            {formErrors.income && <span className="error-message">{formErrors.income}</span>}
                        </label>
                    </div>
                </div>


                <label>
                    <input type="checkbox" name="consentRules" checked={formData.consentRules} onChange={handleChange} />
                    *I consent to the Rules and Regulations.
                    {formErrors.consentRules && <span className="error-message">{formErrors.consentRules}</span>}
                </label>

                <label>
                    <input type="checkbox" name="consentCommunications" checked={formData.consentCommunications} onChange={handleChange} />
                    *I consent to receiving communications regarding BuyMore Dollar Products and Sponsors
                    {formErrors.consentCommunications && <span className="error-message">{formErrors.consentCommunications}</span>}
                </label>



                <button type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    );
}

export default SignUp;