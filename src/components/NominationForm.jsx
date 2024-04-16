import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/NominationForm.css";

const NominationForm = () => {
  return (
    <>
      <Header />
      <div className="nomination-form">
        <h2>Nomination Form</h2>
        <form>
          <div className="form-section">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Father Name" />
            <input type="text" placeholder="Mother Name" />
            <select>
              <option value="">Category</option>
              <option value="General">General</option>
              <option value="EWS">EWS</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
            </select>
            <select>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="date" placeholder="Date of Birth" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="email" placeholder="Email" />
            <div className="diffable">
              <p>Differently Abled </p>
              <label>
                <input type="radio" name="differentlyAbled" value="yes" /> Yes
                <input type="radio" name="differentlyAbled" value="no" /> No
              </label>
            </div>
          </div>
          <h2>Educational / Professional Qualification</h2>
          <table>
            <thead>
              <tr>
                <th>Exam Passed</th>
                <th>Stream</th>
                <th>Degree</th>
                <th>School</th>
                <th>University</th>
                <th>Passing Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10th</td>
                <td></td>
                <td></td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>12th</td>
                <td>
                  <select>
                    <option value="">Select</option>
                    <option value="Science">Science</option>
                    <option value="12th">Arts/Humanities</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Graduation</td>
                <td>
                  <select>
                    <option value="">Select</option>
                    <option value="Science">Science</option>
                    <option value="12th">Arts/Humanities</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <td>Post Graduation</td>
                <td>
                  <select>
                    <option value="">Select</option>
                    <option value="Science">Science</option>
                    <option value="12th">Arts/Humanities</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <h2>ORGANISATION DETAILS</h2>
          <div className="form-section">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <select>
              <option value="">Select Organisation Type</option>
              <option value="Ministry">Ministry</option>
              <option value="Department">Department</option>
              <option value="PSU">PSU</option>
              <option value="Defence">Defence</option>
              <option value="State">State</option>
            </select>
            <select>
              <option value="">State</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Address" />
          </div>
          <h2>OTHER DETAILS </h2>
          <div className="form-section">
            <input type="text" placeholder=" Emergency Contact Details" />
            <input type="text" placeholder=" How the training is likely to benefit the nominee as well as the organisation" />
            
          </div>
          <div className="certification">
            <label>
              <input type="checkbox" name="certify" required />I certify that
              the above information is correct
            </label>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default NominationForm;
