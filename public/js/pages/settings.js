// Settings Page Component
const SettingsPage = {
    template: `
        <div>
            <div>
                <h1 style="font-size: 1.875rem; font-weight: bold; color: #111827;">System Settings</h1>
                <p style="color: #6b7280; margin-top: 0.25rem;">Configure system preferences and security settings</p>
            </div>

            <!-- Settings Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
                <!-- General Settings -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: #dbeafe; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        </div>
                        <h2 style="font-size: 1.25rem; font-weight: bold; color: #111827;">General Settings</h2>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">System Name</label>
                            <input type="text" value="WHRIX Address Verification" 
                                   style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                   @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                   @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        </div>
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Admin Email</label>
                            <input type="email" value="admin@whrix.com" 
                                   style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                   @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                   @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                        </div>
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Timezone</label>
                            <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                    @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                    @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                                <option>UTC</option>
                                <option>America/New_York</option>
                                <option>America/Los_Angeles</option>
                                <option>Europe/London</option>
                                <option>Asia/Tokyo</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Notifications -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: #dcfce7; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #10b981;"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                        </div>
                        <h2 style="font-size: 1.25rem; font-weight: bold; color: #111827;">Notifications</h2>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">Email Notifications</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Receive system alerts via email</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;" checked>
                                <div style="width: 2.75rem; height: 1.5rem; background: #E8C547; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s; transform: translateX(1.25rem);"></div>
                                </div>
                            </label>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">System Alerts</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Critical system notifications</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;" checked>
                                <div style="width: 2.75rem; height: 1.5rem; background: #E8C547; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s; transform: translateX(1.25rem);"></div>
                                </div>
                            </label>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">Usage Reports</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Weekly usage summary reports</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;">
                                <div style="width: 2.75rem; height: 1.5rem; background: #d1d5db; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s;"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- Security -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: #fef2f2; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #dc2626;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h2 style="font-size: 1.25rem; font-weight: bold; color: #111827;">Security</h2>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">Two-Factor Authentication</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Add an extra layer of security</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;" checked>
                                <div style="width: 2.75rem; height: 1.5rem; background: #E8C547; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s; transform: translateX(1.25rem);"></div>
                                </div>
                            </label>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">API Key Rotation</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Automatically rotate API keys</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;" checked>
                                <div style="width: 2.75rem; height: 1.5rem; background: #E8C547; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s; transform: translateX(1.25rem);"></div>
                                </div>
                            </label>
                        </div>
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; background: #f9fafb; border-radius: 8px;">
                            <div>
                                <p style="font-size: 0.875rem; font-weight: 500; color: #111827;">IP Whitelisting</p>
                                <p style="font-size: 0.75rem; color: #6b7280;">Restrict access by IP address</p>
                            </div>
                            <label style="position: relative; display: inline-flex; align-items: center; cursor: pointer;">
                                <input type="checkbox" style="position: absolute; opacity: 0; cursor: pointer;">
                                <div style="width: 2.75rem; height: 1.5rem; background: #d1d5db; border-radius: 9999px; position: relative; transition: all 0.2s;">
                                    <div style="position: absolute; top: 0.125rem; left: 0.125rem; width: 1.25rem; height: 1.25rem; background: white; border-radius: 50%; transition: all 0.2s;"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <!-- API Configuration -->
                <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: #f3e8ff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #9333ea;"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>
                        </div>
                        <h2 style="font-size: 1.25rem; font-weight: bold; color: #111827;">API Configuration</h2>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Default Rate Limit</label>
                            <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                    @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                    @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                                <option>1,000 requests/hour</option>
                                <option>5,000 requests/hour</option>
                                <option>10,000 requests/hour</option>
                                <option>Custom</option>
                            </select>
                        </div>
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Webhook Timeout</label>
                            <input type="number" value="30" 
                                   style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                   @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                   @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                            <p style="font-size: 0.75rem; color: #9ca3af; margin-top: 0.25rem;">Timeout in seconds</p>
                        </div>
                        <div>
                            <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">API Version</label>
                            <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                    @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                    @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                                <option>v1 (current)</option>
                                <option>v2 (beta)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regional Settings -->
            <div style="background: white; border-radius: 12px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb; padding: 1.5rem; margin-top: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
                    <div style="width: 2.5rem; height: 2.5rem; background: #fed7aa; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #ea580c;"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    </div>
                    <h2 style="font-size: 1.25rem; font-weight: bold; color: #111827;">Regional Settings</h2>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    <div>
                        <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Primary Region</label>
                        <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                            <option>North America</option>
                            <option>Europe</option>
                            <option>Asia Pacific</option>
                            <option>Latin America</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Language</label>
                        <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                        </select>
                    </div>
                    <div>
                        <label style="font-size: 0.875rem; font-weight: 500; color: #374151;">Date Format</label>
                        <select style="margin-top: 0.5rem; width: 100%; padding: 1rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none;"
                                @focus="$event.target.style.borderColor = '#E8C547'; $event.target.style.boxShadow = '0 0 0 2px rgba(232, 197, 71, 0.2)'"
                                @blur="$event.target.style.borderColor = '#d1d5db'; $event.target.style.boxShadow = 'none'">
                            <option>MM/DD/YYYY</option>
                            <option>DD/MM/YYYY</option>
                            <option>YYYY-MM-DD</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
                <button style="padding: 0.75rem 1.5rem; border: 1px solid #d1d5db; color: #374151; border-radius: 8px; font-weight: 500; transition: all 0.2s; background: white; cursor: pointer;"
                        @mouseover="$event.target.style.backgroundColor = '#f9fafb'"
                        @mouseout="$event.target.style.backgroundColor = 'white'">
                    Cancel
                </button>
                <button style="padding: 0.75rem 1.5rem; background: #E8C547; color: #111827; border: none; border-radius: 8px; font-weight: 500; transition: all 0.2s; cursor: pointer;"
                        @mouseover="$event.target.style.backgroundColor = '#eab308'"
                        @mouseout="$event.target.style.backgroundColor = '#E8C547'">
                    Save Changes
                </button>
            </div>
        </div>
    `
};

// Export for use in main dashboard
window.SettingsPage = SettingsPage;
