import React from 'react';
import sec_banner_bg_img from '../../assets/images/bg-shadow.png';
import footer_logo  from '../../assets/images/logo-footer.png'


const Footer = () => {
    return (
        <div className='mt-[6%]'>
            <div className=" backdrop-blur-sm	 border-2 border-white-100 p-5 bg-black backdrop-blur-sm bg-white/30  rounded-2xl h-96	md:mx-[10%]  flex flex-col justify-center items-center text-center">
                <div style={{ backgroundImage: `url(${sec_banner_bg_img})` }} className="  bg-cover bg-white  rounded-2xl  flex flex-col justify-center items-center text-center w-full h-full">
                    <div className=' mt-10 mb-10'>
                        <h1 className='text-3xl font-bold'>Subscribe to our Newsletter</h1>
                        <p className='text-[#131313B3] font-medium mt-4'>Get the latest updates and news right in your inbox!</p>
                    </div>
                    <div className='flex gap-4  items-center'>
                        <label class="input input-bordered flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                        </label>
                        <button className='btn'>Button</button>
                    </div>
                </div>
                
            </div>


            {/* footer  */}

            <div className='bg-black flex items-end -mt-[15%] pt-60'>
                
                    
                <div className='w-full justify-content-center'>
                    <div className='items-center flex flex-col'>
                        <img src={footer_logo} alt="" className='h-36' />
                    </div>
                    
                    <div className='mt-20'>
                        <footer class="footer bg-black text-base-content p-10 mt-70 ">
                            <nav>
                                <h5 class="footer-title text-white">About Us</h5>
                                <p className='lg:w-[50%] text-[#9B9DA3]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                                
                            </nav>
                            <nav>
                                <h6 class="footer-title text-white">Quick Links</h6>
                                
                                <a class="link link-hover text-[#9B9DA3]">Home</a>
                                <a class="link link-hover text-[#9B9DA3]">Services</a>
                                <a class="link link-hover text-[#9B9DA3]">Contact</a>
                            </nav>
                            <nav className=''>
                                <h6 class="footer-title text-white t">Subscribe</h6>
                                <div class=" gap-4">
                               <div>
                               <p className='link link-hover text-[#9B9DA3] w-[70%]'> Subscribe to our newsletter for the latest updates.</p>
                               </div>
                                
                                <div className='flex pt-5'>
                                    <label class="input input-bordered flex items-center gap-2 border-none rounded-none	rounded-l-lg">
                                    Email
                                    <input type="text" class="grow" placeholder="daisy@site.com" />
                                    </label>
                                    <button className='btn bg-[#E8B885] font-bold border-none rounded-none	rounded-r-lg' >Subscribe</button>
                                </div>
                                </div>
                            </nav>
                        </footer>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;