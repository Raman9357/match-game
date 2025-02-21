import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/form.css';
import Header from "../components/header";
import Footer from "../components/footer";

function SignUp() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
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

    const toggleModal = () => setShowModal(!showModal); 


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
            navigate("/login");
        }
    };
    
    

    return (
            <div className="form-container">
                <Header />
                <form onSubmit={handleSubmit}>
                    <h2 className="form-title">Sign Up</h2>
        
                    <div className="first-last-name">
                        <div className="first-name-container">
                            <label className="first-name-label">*First Name:
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleChange}
                                    className={`first-name-input ${formErrors.firstName ? "error" : ""}`} 
                                    placeholder="Ex. John" 
                                    maxLength="45"
                                    pattern="[A-Za-z ]+" 
                                    title="Only letters and spaces are allowed."
                                />
                                {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                            </label>
                        </div>
        
                        <div className="last-name-container">
                            <label className="last-name-label">*Last Name:
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleChange} 
                                    className={`last-name-input ${formErrors.lastName ? "error" : ""}`} 
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
                        <div className="house-number-container">
                            <label className="house-number-label">*House #:
                                <input 
                                    type="text" 
                                    name="housenumber" 
                                    value={formData.housenumber} 
                                    onChange={handleChange} 
                                    className={`house-number-input ${formErrors.housenumber ? "error" : ""}`} 
                                    placeholder="123" 
                                    maxLength="3" 
                                    pattern="\d+" 
                                    title="Only numbers are allowed."
                                />
                                {formErrors.housenumber && <span className="error-message">{formErrors.housenumber}</span>}
                            </label>
                        </div>

        
                        <div className="street-name-container">
                            <label className="street-name-label">Street Name:
                                <input 
                                    type="text" 
                                    name="streetname" 
                                    value={formData.streetname} 
                                    onChange={handleChange} 
                                    className={`street-name-input ${formErrors.streetname ? "error" : ""}`} 
                                    placeholder="Sesame Street" 
                                    maxLength="30" 
                                />
                                {formErrors.streetname && <span className="error-message">{formErrors.streetname}</span>}
                            </label>
                        </div>
        
                        <div className="apartment-container">
                            <label className="apartment-label">Apartment/Unit:
                                <input 
                                    type="text" 
                                    name="apartment" 
                                    onChange={handleChange} 
                                    className="apartment-input" 
                                    placeholder="#25" 
                                    maxLength="2" 
                                    pattern="\d+" 
                                    title="Only numbers are allowed."
                                />
                            </label>
                        </div>

                    </div>
        
                    <div className="city-province-postal">
                        <div className="city-container">
                        <label className="city-label">*City:
                            <input 
                                type="text" 
                                name="city" 
                                value={formData.city} 
                                onChange={handleChange} 
                                className={`city-input ${formErrors.city ? "error" : ""}`} 
                                placeholder="Toronto" 
                                maxLength="25" 
                                pattern="[A-Za-z]+" 
                                title="Only letters are allowed."
                            />
                            {formErrors.city && <span className="error-message">{formErrors.city}</span>}
                        </label>
                        </div>
        
                        <div className="province-container">
                            <label className="province-label">*Province:
                                <select 
                                    name="province" 
                                    value={formData.province} 
                                    onChange={handleChange} 
                                    className={`province-input ${formErrors.province ? "error" : ""}`}
                                >
                                    <option value="">Select</option>
                                    {["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"].map((prov) => (
                                        <option key={prov} value={prov}>{prov}</option>
                                    ))}
                                </select>
                                {formErrors.province && <span className="error-message">{formErrors.province}</span>}
                            </label>
                        </div>
        
                        <div className="postal-code-container">
                            <label className="postal-code-label">*Postal Code:
                                <input 
                                    type="text" 
                                    name="postalCode" 
                                    value={formData.postalCode} 
                                    onChange={handleChange} 
                                    className={`postal-code-input ${formErrors.postalCode ? "error" : ""}`} 
                                    placeholder="L113-J12" 
                                    maxLength="10" 
                                />
                                {formErrors.postalCode && <span className="error-message">{formErrors.postalCode}</span>}
                            </label>
                        </div>
                    </div>
        
                    <div className="dob-phone">
                        <div className="dob-container">
                            <label className="dob-label">*Date of Birth:
                                <input 
                                    type="date" 
                                    name="dob" 
                                    value={formData.dob} 
                                    onChange={handleChange} 
                                    className={`dob-input ${formErrors.dob ? "error" : ""}`} 
                                />
                                {formErrors.dob && <span className="error-message">{formErrors.dob}</span>}
                            </label>
                        </div>
        
                        <div className="phone-container">
                            <label className="phone-label">*Phone Number:
                                <input 
                                    type="tel" 
                                    name="phoneNumber" 
                                    value={formData.phoneNumber} 
                                    onChange={handleChange} 
                                    className={`phone-input ${formErrors.phoneNumber ? "error" : ""}`} 
                                    placeholder="000-000-0000" 
                                    maxLength="12" 
                                />
                                {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
                            </label>
                        </div>
                    </div>
        
                    <label className="email-label">*Email:
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className={`email-input ${formErrors.email ? "error" : ""}`} 
                            placeholder="Ex. john.doe@yahoo.com" 
                        />
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </label>
        
                    <label className="password-label">*Password:
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            className={`password-input ${formErrors.password ? "error" : ""}`} 
                            placeholder="Ex. BuyMoreDollars123/" 
                        />
                        {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                    </label>
        
                    <label className="confirm-password-label">*Confirm Password:
                        <input 
                            type="password" 
                            name="confirm" 
                            value={formData.confirm} 
                            onChange={handleChange} 
                            className={`confirm-password-input ${formErrors.confirm ? "error" : ""}`} 
                            placeholder="Ex. BuyMoreDollars123/" 
                        />
                        {formErrors.confirm && <span className="error-message">{formErrors.confirm}</span>}
                    </label>
        
                    <div className="house-member">
                        <div className="adults-container">
                            <label className="adults-label">*# of Adults:
                                <input 
                                    type="number" 
                                    name="adults" 
                                    value={formData.adults} 
                                    onChange={handleChange} 
                                    className={`adults-input ${formErrors.adults ? "error" : ""}`} 
                                    min="0" 
                                    maxLength="20"
                                />
                                {formErrors.adults && <span className="error-message">{formErrors.adults}</span>}
                            </label>
                        </div>
        
                        <div className="children-container">
                            <label className="children-label">*$ of Minors:
                                <input 
                                    type="number" 
                                    name="children" 
                                    value={formData.children} 
                                    onChange={handleChange} 
                                    className={`children-input ${formErrors.children ? "error" : ""}`} 
                                    min="0" 
                                    maxLength="20"
                                />
                                {formErrors.children && <span className="error-message">{formErrors.children}</span>}
                            </label>
                        </div>
        
                        <div className="income-container">
                            <label>*HM's Income:
                            <select 
                                    name="income" 
                                    value={formData.income} 
                                    onChange={handleChange} 
                                    className={formErrors.income ? "error" : ""}
                                >
                                    <option value="">Select</option>
                                    {["Below $20,000","$20,000-$39,999", "$40,000-$59,999", "$60,000-$79,999", "$80,000-$99,999", "$100,000-$149,999", "$150,000-$199,999", "Above $200,000"]
                                        .map((income) => (
                                            <option key={income} value={income}>{income}</option>
                                        ))}
                                </select>
                                {formErrors.income && <span className="error-message">{formErrors.income}</span>}
                            </label>
                        </div>
                </div>


                <div>
                    <label className="checkboxes">
                        <input
                        type="checkbox"
                        name="consentRules"
                        checked={formData.consentRules}
                        onChange={handleChange}
                        />
                        *I consent to the <a href="#" onClick={toggleModal}>Rules and Regulations.</a>
                        {formErrors.consentRules && (
                        <span className="error-message">{formErrors.consentRules}</span>
                        )}
                    </label>

                    {}
                    {showModal && (
                        <div className="modal">
                        <div className="modal-content">
                            <h2>Rules and Regulations</h2>
                            <p>1. Introduction</p>
                            <p>
                            Welcome to the BuyMore Dollars Match Game Contest ("Contest").
                            By participating in this Contest, you agree to these Terms and
                            Conditions ("Terms"). Please read these Terms carefully before
                            entering. If you do not agree to these Terms, you may not
                            participate in the Contest.
                            </p>
                            <p>
                            The Contest is organized by BuyMore Dollars Inc. ("Organizer"),
                            a company registered in Canada. For inquiries related to this
                            Contest, please contact customersupport@buymoredollars.com.
                            </p>
                            <p>2. Eligibility</p>
                            <p>
                            2.1 Participation Requirements: The Contest is open to legal
                            residents of Canada aged 16 to 20 years ("Entrants"). Entrants
                            under 18 years of age must obtain parental or guardian consent
                            to participate in compliance with the Age of Majority laws in
                            their province or territory except Quebec.
                            </p>
                            <p>2.2 Exclusions: Employees, officers, directors, agents, and representatives of BuyMore Dollars Inc., including their immediate family members and household members, are not eligible to participate.</p>
                            <button onClick={toggleModal}>Close</button>
                        </div>
                        </div>
                    )}
                </div>

                

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