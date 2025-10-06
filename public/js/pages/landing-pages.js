// Landing Page Components
const LandingHomePage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Landing - Home Page</h1>
                <p>Manage your landing page content and settings</p>
            </div>
            
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                <h2 style="color: #111827; margin-bottom: 1rem;">Home Page Content</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">This is a sample landing page for the home section. You can add your hero content, features overview, and call-to-action elements here.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Hero Section</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Main headline and call-to-action</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Features Overview</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Key features and benefits</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Social Proof</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Testimonials and reviews</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

const LandingFeaturesPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Landing - Features</h1>
                <p>Manage your features page content and showcase your product capabilities</p>
            </div>
            
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                <h2 style="color: #111827; margin-bottom: 1rem;">Features Page Content</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">This is a sample landing page for the features section. You can showcase your product features, benefits, and technical specifications here.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <div style="width: 3rem; height: 3rem; background: #E8C547; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #333;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>
                        </div>
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Feature 1</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Description of your first key feature</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <div style="width: 3rem; height: 3rem; background: #3b82f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        </div>
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Feature 2</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Description of your second key feature</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <div style="width: 3rem; height: 3rem; background: #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        </div>
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Feature 3</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Description of your third key feature</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

const LandingPricingPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Landing - Pricing</h1>
                <p>Manage your pricing page content and subscription plans</p>
            </div>
            
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                <h2 style="color: #111827; margin-bottom: 1rem;">Pricing Page Content</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">This is a sample landing page for the pricing section. You can display your subscription plans, pricing tiers, and payment options here.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div style="padding: 2rem; background: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; text-align: center;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Starter Plan</h3>
                        <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 1rem;">$29<span style="font-size: 1rem; color: #6b7280;">/month</span></div>
                        <ul style="text-align: left; color: #6b7280; margin-bottom: 1.5rem;">
                            <li>Up to 1,000 verifications</li>
                            <li>Basic support</li>
                            <li>API access</li>
                        </ul>
                        <button style="width: 100%; padding: 0.75rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">Choose Plan</button>
                    </div>
                    <div style="padding: 2rem; background: #f9fafb; border-radius: 12px; border: 2px solid #E8C547; text-align: center; position: relative;">
                        <div style="position: absolute; top: -0.75rem; left: 50%; transform: translateX(-50%); background: #E8C547; color: #111827; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500;">Popular</div>
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Professional Plan</h3>
                        <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 1rem;">$99<span style="font-size: 1rem; color: #6b7280;">/month</span></div>
                        <ul style="text-align: left; color: #6b7280; margin-bottom: 1.5rem;">
                            <li>Up to 10,000 verifications</li>
                            <li>Priority support</li>
                            <li>Advanced API features</li>
                            <li>Analytics dashboard</li>
                        </ul>
                        <button style="width: 100%; padding: 0.75rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">Choose Plan</button>
                    </div>
                    <div style="padding: 2rem; background: #f9fafb; border-radius: 12px; border: 1px solid #e5e7eb; text-align: center;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Enterprise Plan</h3>
                        <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 1rem;">Custom</div>
                        <ul style="text-align: left; color: #6b7280; margin-bottom: 1.5rem;">
                            <li>Unlimited verifications</li>
                            <li>24/7 dedicated support</li>
                            <li>Custom integrations</li>
                            <li>White-label options</li>
                        </ul>
                        <button style="width: 100%; padding: 0.75rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    `
};

const LandingContactPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Landing - Contact</h1>
                <p>Manage your contact page content and contact information</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                    <h2 style="color: #111827; margin-bottom: 1rem;">Contact Information</h2>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 2.5rem; height: 2.5rem; background: #E8C547; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #333;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            </div>
                            <div>
                                <p style="font-weight: 500; color: #111827;">Email</p>
                                <p style="color: #6b7280;">contact@whrix.com</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 2.5rem; height: 2.5rem; background: #3b82f6; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <p style="font-weight: 500; color: #111827;">Phone</p>
                                <p style="color: #6b7280;">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 2.5rem; height: 2.5rem; background: #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: white;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div>
                                <p style="font-weight: 500; color: #111827;">Address</p>
                                <p style="color: #6b7280;">123 Business St, City, State 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                    <h2 style="color: #111827; margin-bottom: 1rem;">Contact Form</h2>
                    <form style="display: flex; flex-direction: column; gap: 1rem;">
                        <div>
                            <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">Name</label>
                            <input type="text" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;" placeholder="Your name">
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">Email</label>
                            <input type="email" style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;" placeholder="your@email.com">
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem;">Message</label>
                            <textarea style="width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; resize: vertical; min-height: 120px;" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    `
};

const LandingAboutPage = {
    template: `
        <div>
            <div class="page-header">
                <h1>Landing - About Us</h1>
                <p>Manage your about page content and company information</p>
            </div>
            
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 2rem;">
                <h2 style="color: #111827; margin-bottom: 1rem;">About WHRIX</h2>
                <p style="color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6;">We are a leading provider of address verification services, helping businesses worldwide ensure accurate and reliable address data. Our mission is to simplify address validation and improve data quality for organizations of all sizes.</p>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Our Mission</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">To provide accurate, fast, and reliable address verification services that help businesses maintain high-quality data and improve customer experiences.</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Our Vision</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">To become the global standard for address verification, empowering businesses to make data-driven decisions with confidence.</p>
                    </div>
                    <div style="padding: 1.5rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                        <h3 style="color: #111827; margin-bottom: 0.5rem;">Our Values</h3>
                        <p style="color: #6b7280; font-size: 0.875rem;">Accuracy, reliability, innovation, and customer success are at the core of everything we do.</p>
                    </div>
                </div>
                
                <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #e5e7eb;">
                    <h3 style="color: #111827; margin-bottom: 1rem;">Company Stats</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;">
                        <div style="text-align: center; padding: 1rem;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 0.5rem;">1M+</div>
                            <p style="color: #6b7280; font-size: 0.875rem;">Addresses Verified</p>
                        </div>
                        <div style="text-align: center; padding: 1rem;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 0.5rem;">99.9%</div>
                            <p style="color: #6b7280; font-size: 0.875rem;">Accuracy Rate</p>
                        </div>
                        <div style="text-align: center; padding: 1rem;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 0.5rem;">500+</div>
                            <p style="color: #6b7280; font-size: 0.875rem;">Happy Customers</p>
                        </div>
                        <div style="text-align: center; padding: 1rem;">
                            <div style="font-size: 2rem; font-weight: bold; color: #E8C547; margin-bottom: 0.5rem;">24/7</div>
                            <p style="color: #6b7280; font-size: 0.875rem;">Support Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Export for use in main dashboard
window.LandingHomePage = LandingHomePage;
window.LandingFeaturesPage = LandingFeaturesPage;
window.LandingPricingPage = LandingPricingPage;
window.LandingContactPage = LandingContactPage;
window.LandingAboutPage = LandingAboutPage;

