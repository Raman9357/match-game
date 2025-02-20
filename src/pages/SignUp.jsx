import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/form.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
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
        if (!formData.address) errors.address = "*Address is required.";
        if (!formData.city) errors.city = "*City is required.";
        if (!formData.province) errors.province = "*Province is required.";
        if (!formData.postalCode) errors.postalCode = "*Postal Code is required.";
        if (!formData.phoneNumber) errors.phoneNumber = "*Phone Number is required.";
        if (!formData.email) errors.email = "*Email is required.";
        if (!formData.password) errors.password = "*Insert Your Password.";
        if (!formData.confirm) errors.confirm = "*Confirm Your Password.";
        if (!formData.dob) errors.dob = "*Date of Birth is required.";
        if (!formData.houseMember) errors.houseMember = "*HM's Name is Required.";
        if (!formData.income) errors.income = "*Insert Income.";
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
            navigate("/contest");
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>*First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={formErrors.firstName ? "error" : ""} maxLength="45" />
                    {formErrors.firstName && <span className="error-message">{formErrors.firstName}</span>}
                </label>

                <label>*Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={formErrors.lastName ? "error" : ""} maxLength="45" />
                    {formErrors.lastName && <span className="error-message">{formErrors.lastName}</span>}
                </label>

                <div className="street-unit">

                    <div>
                        <label>*Address:
                            <input type="text" name="address" value={formData.address} onChange={handleChange} className={formErrors.address ? "error" : ""} maxLength="50" />
                            {formErrors.address && <span className="error-message">{formErrors.address}</span>}
                        </label>
                    </div>

                    <div>
                        <label>Street Number:
                            <input type="text" name="street" value={formData.address} onChange={handleChange} maxLength="10" />
                        </label>
                    </div>

                    <div>
                        <label>Apartment, Suite, Unit:
                            <input type="text" name="apartment" value={formData.address} onChange={handleChange} maxLength="3" />
                        </label>
                    </div>
                </div>

                <div className="city-province-postal">
                    <div>
                        <label>*City:
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className={formErrors.city ? "error" : ""} maxLength="25" />
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
                            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} className={formErrors.postalCode ? "error" : ""} maxLength="10" />
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
                            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={formErrors.phoneNumber ? "error" : ""} maxLength="12" />
                            {formErrors.phoneNumber && <span className="error-message">{formErrors.phoneNumber}</span>}
                        </label>
                    </div>
                </div>

                <label>*Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className={formErrors.email ? "error" : ""} />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </label>

                <label>*Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className={formErrors.password ? "error" : ""} />
                    {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                </label>

                <label>*Confirm Password:
                    <input type="text" name="confirm" value={formData.confirm} onChange={handleChange} className={formErrors.confirm ? "error" : ""} />
                    {formErrors.confirm && <span className="error-message">{formErrors.confirm}</span>}
                </label>

                <div className="house-member">
                    <div>
                        <label>*House Member's Name:
                            <input type="text" name="houseMember" value={formData.houseMember} onChange={handleChange} className={formErrors.houseMember ? "error" : ""} maxLength="10" />
                            {formErrors.houseMember && <span className="error-message">{formErrors.houseMember}</span>}
                        </label>
                    </div>

                    <div>
                        <label>*HM's Income:
                            <select
                                name="income"
                                value={formData.income}
                                onChange={handleChange}
                                className={formErrors.income ? "error" : ""}
                            >
                                <option value="">Select</option>
                                {["Below $20,000", "$20,000-$39,999", "$40,000-$59,999", "$60,000-$79,999", "$80,000-$99,999", "$100,000-$149,999", "$150,000-$199,999", "Above $200,000"]
                                    .map((income) => (
                                        <option key={income} value={income}>{income}</option>
                                    ))}
                            </select>
                            {formErrors.income && <span className="error-message">{formErrors.income}</span>}
                        </label>
                    </div>
                </div>

                <button
                    type="submit" onClick={handleSubmit} className="submit-button" >
                    Confirm Income
                </button>

                <label>
                    <input type="checkbox" name="consentRules" checked={formData.consentRules} onChange={handleChange} />
                    *I consent to the rules and regulations.
                    {formErrors.consentRules && <span className="error-message">{formErrors.consentRules}</span>}
                </label>

                <label>
                    <input type="checkbox" name="consentCommunications" checked={formData.consentCommunications} onChange={handleChange} />
                    *I consent to receiving communications regarding
                    {formErrors.consentCommunications && <span className="error-message">{formErrors.consentCommunications}</span>}
                </label>



                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;