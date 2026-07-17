// FinancialForm.jsx
import React, { useState } from 'react';
import "../styles/pages/financialForm.css";

export default function FinancialForm() {
    const [formData, setFormData] = useState({
        fullName: '', fathersName: '', mothersName: '', dob: '', gender: '', maritalStatus: '', nationality: 'Indian',
        panNumber: '', aadhaarNumber: '', passportNumber: '', drivingLicense: '',
        employmentType: '', employerName: '', companyAddress: '', yearsExperience: '', designation: '', monthlyIncome: '', annualIncome: '',
        bankName: '', branchName: '', accountNumber: '', ifscCode: '', accountType: '', existingLoans: '', creditScore: '',
        investmentType: '', riskProfile: '', expectedReturn: '', existingInvestments: '', mutualFunds: '', stocks: '', fixedDeposits: '',
        taxRegime: '', annualTaxPaid: '', gstNumber: '', tdsDeducted: '', businessIncome: '',
        propertyType: '', marketValue: '', mortgageStatus: '', loanAmount: '', emiAmount: '',
        permAddress: '', currAddress: '', city: '', state: '', pincode: '', country: 'India',
        decl1: false, decl2: false, decl3: false, decl4: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted Legally and Successfully', formData);
    };

    return (
        <div className="fin-form-container">
            <header className="fin-form-header">
                <div className="fin-brand">COREBANK ENTERPRISE PORTAL</div>
                <h1>Comprehensive Financial Assessment & Verification Protocol</h1>
                <p>Form Ref: CAF-2026-X99 // Please fill out all mandatory fields (*) marked in strict alignment with your official documentation.</p>
            </header>

            <form onSubmit={handleSubmit} className="fin-form-body">

                {/* SECTION 1 */}
                <div className="fin-card">
                    <div className="fin-card-title">1. Personal Information & Demographics</div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Full Name (As in Passport) <span className="req">*</span></label>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Father's Legal Name <span className="req">*</span></label>
                            <input type="text" name="fathersName" value={formData.fathersName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Mother's Maiden Name <span className="req">*</span></label>
                            <input type="text" name="mothersName" value={formData.mothersName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Date of Birth <span className="req">*</span></label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="fin-grid-3">
                        <div className="fin-field">
                            <label>Gender <span className="req">*</span></label>
                            <select name="gender" value={formData.gender} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="nonbinary">Non-Binary</option>
                                <option value="undisclosed">Prefer Not to Disclose</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Marital Status <span className="req">*</span></label>
                            <div className="fin-radio-group">
                                <label><input type="radio" name="maritalStatus" value="single" onChange={handleInputChange} /> Single</label>
                                <label><input type="radio" name="maritalStatus" value="married" onChange={handleInputChange} /> Married</label>
                                <label><input type="radio" name="maritalStatus" value="divorced" onChange={handleInputChange} /> Divorced</label>
                            </div>
                        </div>
                        <div className="fin-field">
                            <label>Nationality <span className="req">*</span></label>
                            <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="fin-card">
                    <div className="fin-card-title">2. Statutory Identity Verification</div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Permanent Account Number (PAN) <span className="req">*</span></label>
                            <input type="text" name="panNumber" placeholder="ABCDE1234F" value={formData.panNumber} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Aadhaar Identity Number <span className="req">*</span></label>
                            <input type="password" name="aadhaarNumber" placeholder="12-digit Number" value={formData.aadhaarNumber} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Passport Alphanumeric ID</label>
                            <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleInputChange} />
                        </div>
                        <div className="fin-field">
                            <label>Driving License Authority Ref</label>
                            <input type="text" name="drivingLicense" value={formData.drivingLicense} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="fin-grid-2">
                        <div className="fin-field">
                            <label>Upload PAN Card Copy (PDF/JPEG max 2MB) <span className="req">*</span></label>
                            <input type="file" required />
                        </div>
                        <div className="fin-field">
                            <label>Upload Aadhaar Document (Password Protected PDF Allowed) <span className="req">*</span></label>
                            <input type="file" required />
                        </div>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="fin-card">
                    <div className="fin-card-title">3. Employment Profile & Yield Analysis</div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Employment Classification <span className="req">*</span></label>
                            <select name="employmentType" value={formData.employmentType} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="salaried">Salaried Enterprise</option>
                                <option value="self_employed">Self Employed Professional</option>
                                <option value="proprietorship">Proprietorship / Business</option>
                                <option value="unemployed">Unemployed / Other</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Employer / Entity Name <span className="req">*</span></label>
                            <input type="text" name="employerName" value={formData.employerName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Designation / Role Title <span className="req">*</span></label>
                            <input type="text" name="designation" value={formData.designation} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Total Tenure Experience (Years) <span className="req">*</span></label>
                            <input type="number" name="yearsExperience" value={formData.yearsExperience} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="fin-grid-3">
                        <div className="fin-field">
                            <label>Gross Monthly Inflow Liquid <span className="req">*</span></label>
                            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Gross Annual Declared Income <span className="req">*</span></label>
                            <input type="number" name="annualIncome" value={formData.annualIncome} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Official Corporate Headquarters Address <span className="req">*</span></label>
                            <input type="text" name="companyAddress" value={formData.companyAddress} onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="fin-card">
                    <div className="fin-card-title">4. Core Banking Credentials & Liability Ledger</div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Primary Banking Institution <span className="req">*</span></label>
                            <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Branch Clearing Station Code <span className="req">*</span></label>
                            <input type="text" name="branchName" value={formData.branchName} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Account Direct Number <span className="req">*</span></label>
                            <input type="password" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>IFSC Transmit Alpha Code <span className="req">*</span></label>
                            <input type="text" name="ifscCode" placeholder="ABCD0123456" value={formData.ifscCode} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="fin-grid-3">
                        <div className="fin-field">
                            <label>Account Operations Matrix <span className="req">*</span></label>
                            <select name="accountType" value={formData.accountType} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="savings">Savings Account</option>
                                <option value="current">Current Account</option>
                                <option value="overdraft">Overdraft Facility</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Aggregated Pre-existing Loans Outstanding <span className="req">*</span></label>
                            <input type="number" name="existingLoans" value={formData.existingLoans} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Bureau-Certified Credit Score (CIBIL/Equifax) <span className="req">*</span></label>
                            <input type="number" name="creditScore" min="300" max="900" value={formData.creditScore} onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>

                {/* SECTION 5 */}
                <div className="fin-card">
                    <div className="fin-card-title">5. Asset Distribution & Risk Vulnerability Vector</div>
                    <div className="fin-grid-3">
                        <div className="fin-field">
                            <label>Preferred Capital Generation Vehicle <span className="req">*</span></label>
                            <select name="investmentType" value={formData.investmentType} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="equities">High Volatility Equities</option>
                                <option value="debt">Fixed Yield Debt Instruments</option>
                                <option value="hybrid">Balanced Hybrid Portfolios</option>
                                <option value="commodities">Bullion & Commodity Futures</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Voluntary Risk Resilience Matrix <span className="req">*</span></label>
                            <select name="riskProfile" value={formData.riskProfile} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="conservative">Risk Averse / Capital Preservation</option>
                                <option value="moderate">Moderate Volatility Absorption</option>
                                <option value="aggressive">High Yield Speculative Aggression</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Expected Actuarial Rate of Return (%) <span className="req">*</span></label>
                            <input type="number" step="0.01" name="expectedReturn" value={formData.expectedReturn} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Total Existing Asset Under Management (AUM)</label>
                            <input type="number" name="existingInvestments" value={formData.existingInvestments} onChange={handleInputChange} />
                        </div>
                        <div className="fin-field">
                            <label>Mutual Fund Total Net Asset Value</label>
                            <input type="number" name="mutualFunds" value={formData.mutualFunds} onChange={handleInputChange} />
                        </div>
                        <div className="fin-field">
                            <label>Direct Equity Market Value</label>
                            <input type="number" name="stocks" value={formData.stocks} onChange={handleInputChange} />
                        </div>
                        <div className="fin-field">
                            <label>Fixed Deposit Term Reserves</label>
                            <input type="number" name="fixedDeposits" value={formData.fixedDeposits} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* SECTION 6 */}
                <div className="fin-card">
                    <div className="fin-card-title">6. Fiscal Obligations & Taxation Disclosures</div>
                    <div className="fin-grid-3">
                        <div className="fin-field">
                            <label>Applicable Fiscal Tax Regime <span className="req">*</span></label>
                            <div className="fin-radio-group">
                                <label><input type="radio" name="taxRegime" value="old" onChange={handleInputChange} /> Standard Historic Regime</label>
                                <label><input type="radio" name="taxRegime" value="new" onChange={handleInputChange} /> Simplified Modern Regime</label>
                            </div>
                        </div>
                        <div className="fin-field">
                            <label>Net Annual Tax Outflow Paid <span className="req">*</span></label>
                            <input type="number" name="annualTaxPaid" value={formData.annualTaxPaid} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Corporate Goods & Services Tax (GSTIN)</label>
                            <input type="text" name="gstNumber" placeholder="15-digit AlphaNumeric" value={formData.gstNumber} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="fin-grid-2">
                        <div className="fin-field">
                            <label>Total Tax Deducted at Source (TDS) Certificate Summary <span className="req">*</span></label>
                            <input type="number" name="tdsDeducted" value={formData.tdsDeducted} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Supplementary Non-Salaried Business Profit Revenue</label>
                            <input type="number" name="businessIncome" value={formData.businessIncome} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* SECTION 7 */}
                <div className="fin-card">
                    <div className="fin-card-title">7. Real Estate Collateral & Immovable Property Records</div>
                    <div className="fin-grid-5">
                        <div className="fin-field">
                            <label>Property Class <span className="req">*</span></label>
                            <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="residential">Freehold Residential</option>
                                <option value="commercial">Commercial Industrial</option>
                                <option value="agricultural">Agricultural / Non-NA</option>
                                <option value="none">Zero Immovable Assets</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Estimated Current Fair Market Value <span className="req">*</span></label>
                            <input type="number" name="marketValue" value={formData.marketValue} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Mortgage Encumbrance Status <span className="req">*</span></label>
                            <select name="mortgageStatus" value={formData.mortgageStatus} onChange={handleInputChange} required>
                                <option value="">--Select--</option>
                                <option value="unencumbered">Clear Title / No Lien</option>
                                <option value="encumbered">Hypothecated / Active Lien</option>
                            </select>
                        </div>
                        <div className="fin-field">
                            <label>Outstanding Mortgage Principal</label>
                            <input type="number" name="loanAmount" value={formData.loanAmount} onChange={handleInputChange} />
                        </div>
                        <div className="fin-field">
                            <label>Equated Monthly Installment Outflow</label>
                            <input type="number" name="emiAmount" value={formData.emiAmount} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>

                {/* SECTION 8 */}
                <div className="fin-card">
                    <div className="fin-card-title">8. Domicile Verification & Spatial Coordinates</div>
                    <div className="fin-grid-2">
                        <div className="fin-field">
                            <label>Permanent Residential Domicile (Complete Street Address) <span className="req">*</span></label>
                            <input type="text" name="permAddress" value={formData.permAddress} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Current Correspondence Location (If distinct from above) <span className="req">*</span></label>
                            <input type="text" name="currAddress" value={formData.currAddress} onChange={handleInputChange} required />
                        </div>
                    </div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Municipality / City <span className="req">*</span></label>
                            <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Province / State Jurisdiction <span className="req">*</span></label>
                            <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Postal Index Number (PIN) Code <span className="req">*</span></label>
                            <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
                        </div>
                        <div className="fin-field">
                            <label>Sovereign State Country <span className="req">*</span></label>
                            <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
                        </div>
                    </div>
                </div>

                {/* SECTION 9 */}
                <div className="fin-card">
                    <div className="fin-card-title">9. Mandatory Document Repository Auditing</div>
                    <div className="fin-grid-4">
                        <div className="fin-field">
                            <label>Consecutive 3-Month Certified Salary Slips <span className="req">*</span></label>
                            <input type="file" required />
                        </div>
                        <div className="fin-field">
                            <label>Comprehensive 6-Month Detailed Bank Ledger <span className="req">*</span></label>
                            <input type="file" required />
                        </div>
                        <div className="fin-field">
                            <label>Income Tax Returns Acknowledgement (ITR-V) <span className="req">*</span></label>
                            <input type="file" required />
                        </div>
                        <div className="fin-field">
                            <label>Registered Property Sale Deed / Non-Encumbrance Certificate</label>
                            <input type="file" />
                        </div>
                    </div>
                </div>

                {/* SECTION 10 */}
                <div className="fin-card">
                    <div className="fin-card-title">10. Statutory Indemnity Declaration & Legal Assent</div>
                    <div className="fin-declaration-box">
                        I hereby solemnly affirm, declare, and execute this legal instrument under the provisions of the Prevention of Money Laundering Act (PMLA), 2002, and the Banking Regulation frameworks, verifying that the asset distributions, income metrics, statutory identifier indices, and employment disclosures structuralized within this voluminous portal are absolutely precise, non-fraudulent, and comprehensive. I unequivocally authorize the processing banking conglomerates and their subsidiary credit reporting bureaus, auditing algorithms, and validation agencies to conduct unannounced background vectors, external ledger tracking, and database querying loops to verify the baseline veracity of this instrument. Any systemic discrepancy discovered herein will precipitate the automatic termination of this processing window, immediate forfeiture of handling escrows, and execution of statutory legal prosecution paths without prior administrative recourse.
                    </div>
                    <div className="fin-checkbox-stack">
                        <label className="fin-checkbox-label">
                            <input type="checkbox" name="decl1" checked={formData.decl1} onChange={handleInputChange} required />
                            <span>I confirm that I have meticulously parsed and assimilated the 148-page General Terms of Banking Execution and Credit Analysis Protocols. <span className="req">*</span></span>
                        </label>
                        <label className="fin-checkbox-label">
                            <input type="checkbox" name="decl2" checked={formData.decl2} onChange={handleInputChange} required />
                            <span>I assert that the liquid capital utilized for down-payments or investment structuring has not been originated from non-compliant cross-border channels or illegal syndications. <span className="req">*</span></span>
                        </label>
                        <label className="fin-checkbox-label">
                            <input type="checkbox" name="decl3" checked={formData.decl3} onChange={handleInputChange} required />
                            <span>I fully authorize the institution to transmit automated analytical updates, warning vectors, rate fluctuations, and regulatory requests via telecommunications and automated protocols. <span className="req">*</span></span>
                        </label>
                        <label className="fin-checkbox-label">
                            <input type="checkbox" name="decl4" checked={formData.decl4} onChange={handleInputChange} required />
                            <span>I accept all statutory audit structures, penalties, interest additions, and transactional fees that might arise due to data entry delays or structural errors within this electronic form. <span className="req">*</span></span>
                        </label>
                    </div>
                </div>

                <div className="fin-action-bar">
                    <button type="button" className="fin-btn fin-btn-secondary" onClick={() => window.location.reload()}>Abort Application</button>
                    <button type="submit" className="fin-btn fin-btn-primary">Execute Financial Protocol & Submit</button>
                </div>
            </form>
        </div>
    );
}