import React, { Fragment } from 'react';

export default function RepairPage() {
  return (
    <Fragment>
      <div>
        <div className='container box-pd-all'>
          <div className='row text-center d-flex justify-content-center'>
            <h1 className='mb-3'>
              Find The Nearest iPhoneOfficial Authorized Service Centre
            </h1>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-xs-12'>
              <div className='form-group'>
                <div className='input-group margin-right'>
                  <select
                    className='form-control valid'
                    id='CountryId'
                    name='CountryId'
                  >
                    <option value=''>Select Country</option>

                    <option value='11' data-value='AR'>
                      Argentina
                    </option>
                    <option value='14' data-value='AU'>
                      Australia
                    </option>
                    <option value='28' data-value='BO'>
                      Bolivia
                    </option>
                    <option value='32' data-value='BR'>
                      Brazil
                    </option>
                    <option value='44' data-value='CA'>
                      Canada
                    </option>
                    <option value='49' data-value='CL'>
                      Chile
                    </option>
                    <option value='53' data-value='CO'>
                      Colombia
                    </option>
                    <option value='58' data-value='CR'>
                      Costa Rica
                    </option>
                    <option value='67' data-value='DO'>
                      Dominican Republic
                    </option>
                    <option value='69' data-value='EC'>
                      Ecuador
                    </option>
                    <option value='70' data-value='EG'>
                      Egypt
                    </option>
                    <option value='71' data-value='SV'>
                      El Salvador
                    </option>
                    <option value='79' data-value='FR'>
                      France
                    </option>
                    <option value='87' data-value='DE'>
                      Germany
                    </option>
                    <option value='95' data-value='GT'>
                      Guatemala
                    </option>
                    <option value='101' data-value='HN'>
                      Honduras
                    </option>
                    <option value='105' data-value='IN'>
                      India
                    </option>
                    <option value='109' data-value='IE'>
                      Ireland
                    </option>
                    <option value='112' data-value='IT'>
                      Italy
                    </option>
                    <option value='114' data-value='JP'>
                      Japan
                    </option>
                    <option value='145' data-value='MX'>
                      Mexico
                    </option>
                    <option value='162' data-value='NI'>
                      Nicaragua
                    </option>
                    <option value='173' data-value='PA'>
                      Panama
                    </option>
                    <option value='176' data-value='PE'>
                      Peru
                    </option>
                    <option value='177' data-value='PH'>
                      Philippines
                    </option>
                    <option value='180' data-value='PT'>
                      Portugal
                    </option>
                    <option value='205' data-value='ES'>
                      Spain
                    </option>
                    <option value='217' data-value='CH'>
                      Switzerland
                    </option>
                    <option value='235' data-value='GB'>
                      United Kingdom
                    </option>
                    <option value='236' data-value='US' selected=''>
                      United States
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-xs-12'>
              <div className='form-group'>
                <div className='input-group margin-left'>
                  <select
                    className='form-control'
                    data-val='true'
                    data-val-number='The field NetworkId must be a number.'
                    data-val-required='Please select a carrier'
                    id='NetworkId'
                    name='NetworkId'
                  >
                    <option value=''>Select City</option>
                    <option value='59'>New york</option>
                    <option value='58'>London</option>
                    <option value='57'>Paris</option>
                    <option value='56'>Sydney</option>
                    <option value='16'>Melbourne</option>
                    <option value='15'>Mumbai</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5 d-flex justify-content-center'>
            <h5>
              After selecting service centre's name and address will be shown
              here...
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
