import React from 'react'
import OfficeUseOnly from './OfficeUseOnly'

const AdmissionModule = () => {
    return (
        <div className='container-fluid'>
            <h1 className='text-center p-3 mt-2'>Online Admission Module for Degree Colleges(OAMDC 2024-2025)</h1>
            <h3 className='p-2'>Application should be filled in <b>CAPITAL LETTERS</b> & according to <b>10<sup>th</sup> Marks list</b></h3>
            <form>
                <div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="studentName" placeholder="" />
                        <label for="studentName">Student's Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="motherName" placeholder="" />
                        <label for="motherName">Mother's Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="FatherName" placeholder="" />
                        <label for="FatherName">Father's Name</label>
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='date' placeholder='Date of Birth' />
                        <input className='form-control' type='text' placeholder='Gender' />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Student Aadhar Number' />
                        <input className='form-control' type='text' placeholder='Blood Group' />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Intermediate/Equivalent Hall Ticket No : ' />
                        <input className='form-control' type='text' placeholder='Inter Group' />
                        <input className='form-control' type='text' placeholder='10th Hall Ticket No : ' />
                    </div>
                </div>

                {/* Address Details */}

                <div>
                    <h5 className='p-2'>Address Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='House No : ' />
                        <input className='form-control' type='text' placeholder='Street' />
                        <input className='form-control' type='text' placeholder='Village' />
                        <input className='form-control' type='text' placeholder='Mandal' />
                        <input className='form-control' type='text' placeholder='District' />
                        <input className='form-control' type='number' placeholder='Pincode' />
                        <input className='form-control' type='text' placeholder='Secretariat/Sachivalayam' />

                    </div>
                </div>

                {/* Contact Details */}
                <div>
                    <h5 className='p-2'>Contact Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Mobile No : ' />
                        <input className='form-control' type='number' placeholder='Parents Contact  No : ' />
                        <input className='form-control' type='number' placeholder='Gaurdian Contact  No : ' />
                        <input className='form-control' type='email' placeholder='Email : ' />
                    </div>
                </div>

                {/* Other Details */}
                <div>
                    <h5 className='p-2'>Other Details :</h5>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='text' placeholder='Religion' />
                        <input className='form-control' type='text' placeholder='Caste' />
                        <select className="form-select" aria-label="Sub Caste" placeholder="Category">
                            <option selected>Category : </option>
                            <option value="OC">OC</option>
                            <option value="BC-A">BC-A</option>
                            <option value="BC-B">BC-B</option>
                            <option value="BC-C">BC-C</option>
                            <option value="BC-D">BC-D</option>
                            <option value="BC-E">BC-E</option>
                            <option value="BC-F">Bc-F</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                        <select className="form-select" aria-label="Physically Handicapped" placeholder='Physically Handicapped'>
                            <option value='Physically Handicapped'>Physically Handicapped</option>
                            <option value='Non-Physically Handicapped' selected>Non Physically Handicapped</option>
                        </select>
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Caste Certificate Mee Seva No :  ' />
                        <input className='form-control' type='number' placeholder='Income Certificate Mee Seva No : ' />
                        <input className='form-control' type='number' placeholder='Incase of OC Caste EWS Certificate Mee Seva No : ' />
                    </div>
                    <div className='d-flex justify-content-evenly my-2'>
                        <input className='form-control' type='number' placeholder='Ration Card No :  ' />
                        <input className='form-control' type='number' placeholder='Mother Aadhar No : ' />
                        <input className='form-control' type='number' placeholder='Bank Name: ' />
                        <input className='form-control' type='number' placeholder='Account No : ' />
                        <input className='form-control' type='number' placeholder='Bank IFSC code : ' />
                    </div>
                </div>

                {/* Xerox Copies to submit: */}
                <div>
                    <h5 className='p-2'>Xerox Copies to submit:</h5>
                    <div className="container ">
                        <div className="row fw-bold">
                            <div className="col">
                                1.10<sup>th</sup> Marks list
                            </div>
                            <div className="col">
                                2.Intermediate Marks list & T.C
                            </div>
                            <div className="col">
                                3.Student Aadhar Card
                            </div>
                        </div>
                        <div className="row fw-bold">
                            <div className="col">
                                4.Mother Aadhar Card
                            </div>
                            <div className="col">
                                5.Caste Certificate
                            </div>
                            <div className="col">
                                6.Ration Card
                            </div>
                        </div>
                        <div className="row fw-bold">
                            <div className="col">
                                7.Income Certificate
                            </div>
                            <div className="col">
                                8.Mother Bank Passbook
                            </div>
                            <div className="col">
                                9.Passport Size Photos - 2
                            </div>

                        </div>
                    </div>
                </div>

                {/* Study Details */}

                <div>
                    <h5 className='p-2'>Last 7 years Study Details :</h5>
                    <table className="table" border={2} cellPadding={3} cellSpacing={5}>
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name Of the College/School</th>
                                <th scope="col">Academic Year</th>
                                <th scope="col">Class</th>
                                <th scope="col">Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>2<sup>nd</sup> inter</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>1<sup>st</sup> inter</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>10<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>9<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>8<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>7<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><input className='form-control' type='text' placeholder='Name Of the College/School' /></td>
                                <td><input className='form-control' type='text' placeholder='Academic Year' /></td>
                                <td>6<sup>th</sup>Class</td>
                                <td><input className='form-control' type='text' placeholder='Place' /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row mb-3">
                        <div className="col-6">
                            <label for="secondLanguage"><h6 className='p-2'>Second Language Preferred</h6></label>
                            <select className="form-select" aria-label="Second Language Preferred" placeholder="Second Language Preferred" id="secondLanguage">
                                <option value="sanskrit" selected>Sanskrit</option>
                                <option value="telugu">Telugu</option>
                                <option value="hindi">Hindi</option>
                                <option value="urdu">Urdu</option>
                            </select>
                        </div>
                        <div className='col-6'>
                            <label for="degreeGroupChosen"><h6 className='p-2'>Degree Group Chosen</h6></label>
                            <select className="form-select" aria-label="Degree Group Chosen" placeholder="Degree Group Chosen" id="degreeGroupChosen">
                                <option value="bsc" selected>B.SC</option>
                                <option value="bCom">B.Com(Computers)</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row fs-bold">
                            <div className="col ">1.Computer Science</div>
                            <div className="col">2.Data Analytics</div>
                            <div className="col">3.Electronics</div>
                            <div className="col">4.Internet Of Things</div>
                            <div className="col">5.Statistics</div>
                            <div className="col">6.Physics</div>
                        </div>
                    </div>

                    {/* photo gallery */}
                    <div className='p-5 d-flex justify-content-evenly fs-2'>
                        <div>
                            <label for="studentPhoto">Affix Passport size photo</label>
                            <input type="file" className="form-control" id="studentPhoto" placeholder="" />
                        </div>
                        <div >
                            <label for="studentSignature">Signature of the student</label>
                            <input type="file" className="form-control" id="studentSignature" placeholder="" />
                        </div>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="contactNo" placeholder="" />
                        <label for="contactNo">Reference Lecture Name & Contact No : </label>
                    </div>



                    {/* Submit Button */}
                    <div className="d-flex justify-content-center   m-3">
                        <button type="submit" className="btn btn-primary btn-expand-lg px-4">Submit</button>
                    </div>
                </div>
            </form>
            <OfficeUseOnly />
        </div>
    )
}

export default AdmissionModule