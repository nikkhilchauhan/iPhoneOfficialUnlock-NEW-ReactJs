import React, { Fragment } from 'react';
import blogThumb1 from '../img/blogthumb1.jpg';
import blogThumb2 from '../img/blogthumb2.jpg';
import blogThumb3 from '../img/blogthumb3.jpg';
import blogThumb4 from '../img/blogthumb4.jpg';

export default function BlogPage() {
  return (
    <Fragment>
      <div>
        <div className='container-fluid bg-black'>
          <div className='container box-pd-all'>
            <div className='row justify-content-center text-center'>
              <h2 className='text-white mb-3'>Our latest updates</h2>
            </div>

            <div className='row text-center'>
              <div className='col-lg-5 card py-2'>
                <img src={blogThumb1} alt='' width='100%' />
                <h5>
                  Unlock your iPhone fully guaranteed with our Commitment to
                  good practice
                </h5>
                <p>
                  If you are planning on travelling out of the country and want
                  to unlock your iPhone so that you don’t have to pay huge
                  roaming bills, then this method may not be considered
                  unethical{' '}
                  <a href='./pages/post1.html' className='text-apple'>
                    Read more..
                  </a>
                </p>
              </div>

              <div className='col-lg-7 py-2 card'>
                <div className='row border-bottom py-1 '>
                  <div className='col-8'>
                    <h5>Difference between a blocked and a locked iPhone?</h5>
                    <p>
                      Network carriers block the IMEI number of iPhones that
                      have been reported lost or stolen by the owner or because
                      bills have not been paid on time{' '}
                      <a href='./pages/post2.html' className='text-apple'>
                        Read more..
                      </a>
                    </p>
                  </div>
                  <div class='col-4'>
                    <img src={blogThumb2} alt='' width='90%' />
                  </div>
                </div>

                <div className='row border-bottom py-1'>
                  <div className='col-8'>
                    <h5>
                      Unlock your iPhone fully guaranteed with Ethical Practice
                    </h5>
                    <p>
                      The difference between the Legit third-party unlocking
                      service providers and the huge number of fraud websites
                      simply looking to steal your money{' '}
                      <a href='./pages/post3.html' className='text-apple'>
                        Read more..
                      </a>
                    </p>
                  </div>
                  <div className='col-4'>
                    <img src={blogThumb3} alt='' width='90%' />
                  </div>
                </div>

                <div className='row py-1'>
                  <div className='col-8'>
                    <h5>Is it legal to unlock iCloud?</h5>
                    <p>
                      Recently there were many news regarding the legality of
                      the iCloud unlock. It is stated that how the official
                      process can be misused by cyber-crime experts for criminal
                      purposes{' '}
                      <a href='./pages/post4.html' className='text-apple'>
                        Read more..
                      </a>
                    </p>
                  </div>
                  <div className='col-4'>
                    <img src={blogThumb4} alt='' width='90%' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
