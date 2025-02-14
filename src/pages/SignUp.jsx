import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/form.css';
import { saveAs } from "file-saver";

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
        if (!formData.firstName) errors.firstName = '*First Name is required.';
        if (!formData.lastName) errors.lastName = '*Last Name is required.';
        if (!formData.address) errors.address = '*Address is required.';
        if (!formData.city) errors.city = '*City is required.';
        if (!formData.province) errors.province = '*Province is required.';
        if (!formData.postalCode) errors.postalCode = '*Postal Code is required.';
        if (!formData.phoneNumber) errors.phoneNumber = '*Phone Number is required.';
        if (!formData.email) errors.email = '*Email is required.';
        if (!formData.password) errors.password = '*Insert Your Password.';
        if (!formData.confirm) errors.confirm = '*Confirm Your Password.';
        if (!formData.dob) errors.dob = '*Date of Birth is required.';
        if (formData.adults < 1) errors.adults = '*There must be at least one adult.';
        if (!formData.income) errors.income = '*Insert Income.';
        if (!formData.consentRules) errors.consentRules = '*You must consent to the rules before proceeding.';
        if (!formData.consentCommunications) errors.consentCommunications = '*You must consent to communications before proceeding.';

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = '*Please enter a valid email.';
        if ((formData.email.match(/@/g) || []).length !== 1) errors.email = "*Email must contain exactly one '@'.";
        if (formData.phoneNumber && !/^\d{3}-\d{3}-\d{4}$/.test(formData.phoneNumber)) errors.phoneNumber = '*8 Digits Only.';
        if ((formData.phoneNumber.match(/-/g) || []).length !== 2) errors.phoneNumber = '*Two Dashes Required.';

        return errors;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            const fileContent = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
            saveAs(fileContent, 'user.json');
            navigate('/contest');
        }
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {}
                <label className="field-half">
                    *First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={formErrors.firstName ? 'error' : ''}
                        maxLength="45"
                    />
                    {formErrors.firstName && (
                        <span className="error-message">
                            {formErrors.firstName}
                        </span>
                    )}
                </label>
                {}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;