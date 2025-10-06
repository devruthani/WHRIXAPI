/**
 * Profile Dashboard Component
 * 
 * This component provides a comprehensive profile management system within the main dashboard.
 * It includes all profile management features in a tabbed interface.
 */

window.ProfilePage = {
    template: `
        <div class="profile-dashboard">
            <div class="page-header">
                <h1>Admin Profile</h1>
                <p>Manage your profile information and account settings</p>
            </div>

            <div class="profile-content">
                <!-- Profile Header -->
                <div class="profile-card">
                    <div class="profile-header">
                        <div class="profile-avatar" @click="triggerAvatarUpload">
                            <i class="fas fa-user" v-if="!profile.profilePicture"></i>
                            <img v-else :src="profile.profilePicture" alt="Profile Picture">
                            <div class="avatar-overlay">
                                <i class="fas fa-camera"></i>
                            </div>
                        </div>
                        <div class="profile-info">
                            <h2>{{ profile.firstName && profile.lastName ? profile.firstName + ' ' + profile.lastName : user.username || 'Admin User' }}</h2>
                            <p>{{ user.email || 'admin@example.com' }}</p>
                            <span class="role-badge">{{ user.role || 'Admin' }}</span>
                        </div>
                    </div>
                    
                    <div class="profile-actions">
                        <button @click="refreshProfile" class="btn btn-secondary">
                            <i class="fas fa-sync"></i>
                            Refresh
                        </button>
                        <button @click="exportProfile" class="btn btn-secondary">
                            <i class="fas fa-download"></i>
                            Export Profile
                        </button>
                    </div>
                    <input type="file" ref="avatarInput" @change="handleAvatarUpload" accept="image/*" style="display: none;">
                </div>

                <!-- Profile Stats -->
                <div class="profile-stats">
                    <div class="stat-item">
                        <div class="stat-value">{{ profileCompletion }}%</div>
                        <div class="stat-label">Profile Complete</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">{{ accountAge }}</div>
                        <div class="stat-label">Days Active</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">{{ lastLogin }}</div>
                        <div class="stat-label">Last Login</div>
                    </div>
                </div>

                <!-- Tab Navigation -->
                <div class="profile-tabs">
                    <button 
                        v-for="tab in tabs" 
                        :key="tab.id"
                        @click="activeTab = tab.id"
                        :class="['tab-button', { active: activeTab === tab.id }]"
                    >
                        <i :class="tab.icon"></i>
                        {{ tab.name }}
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="tab-content">
                    <!-- Overview Tab -->
                    <div v-if="activeTab === 'overview'" class="tab-panel">
                        <h3>Profile Overview</h3>
                        <div class="overview-grid">
                            <div class="overview-item">
                                <label>Username:</label>
                                <span>{{ user.username }}</span>
                            </div>
                            <div class="overview-item">
                                <label>Email:</label>
                                <span>{{ user.email }}</span>
                            </div>
                            <div class="overview-item">
                                <label>Role:</label>
                                <span>{{ user.role }}</span>
                            </div>
                            <div class="overview-item">
                                <label>Account Status:</label>
                                <span :class="user.isActive ? 'status-active' : 'status-inactive'">
                                    {{ user.isActive ? 'Active' : 'Inactive' }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Personal Information Tab -->
                    <div v-if="activeTab === 'personal'" class="tab-panel">
                        <h3>Personal Information</h3>
                        <form @submit.prevent="updatePersonalInfo">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" id="firstName" v-model="profile.firstName" placeholder="Enter your first name">
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" id="lastName" v-model="profile.lastName" placeholder="Enter your last name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="phoneNumber">Phone Number</label>
                                <input type="tel" id="phoneNumber" v-model="profile.phoneNumber" placeholder="Enter your phone number">
                            </div>
                            <div class="form-group">
                                <label for="bio">Bio</label>
                                <textarea id="bio" v-model="profile.bio" placeholder="Tell us about yourself..." rows="4"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" :disabled="personalLoading">
                                <i class="fas fa-save"></i>
                                {{ personalLoading ? 'Saving...' : 'Save Personal Information' }}
                            </button>
                        </form>
                    </div>

                    <!-- Professional Information Tab -->
                    <div v-if="activeTab === 'professional'" class="tab-panel">
                        <h3>Professional Information</h3>
                        <form @submit.prevent="updateProfessionalInfo">
                            <div class="form-group">
                                <label for="jobTitle">Job Title</label>
                                <input type="text" id="jobTitle" v-model="profile.jobTitle" placeholder="Enter your job title">
                            </div>
                            <div class="form-group">
                                <label for="department">Department</label>
                                <input type="text" id="department" v-model="profile.department" placeholder="Enter your department">
                            </div>
                            <div class="form-group">
                                <label for="timezone">Timezone</label>
                                <select id="timezone" v-model="profile.timezone">
                                    <option value="">Select timezone</option>
                                    <option value="UTC-12">UTC-12 (Baker Island)</option>
                                    <option value="UTC-11">UTC-11 (American Samoa)</option>
                                    <option value="UTC-10">UTC-10 (Hawaii)</option>
                                    <option value="UTC-9">UTC-9 (Alaska)</option>
                                    <option value="UTC-8">UTC-8 (Pacific Time)</option>
                                    <option value="UTC-7">UTC-7 (Mountain Time)</option>
                                    <option value="UTC-6">UTC-6 (Central Time)</option>
                                    <option value="UTC-5">UTC-5 (Eastern Time)</option>
                                    <option value="UTC-4">UTC-4 (Atlantic Time)</option>
                                    <option value="UTC-3">UTC-3 (Brazil)</option>
                                    <option value="UTC-2">UTC-2 (Mid-Atlantic)</option>
                                    <option value="UTC-1">UTC-1 (Azores)</option>
                                    <option value="UTC+0">UTC+0 (GMT)</option>
                                    <option value="UTC+1">UTC+1 (Central European)</option>
                                    <option value="UTC+2">UTC+2 (Eastern European)</option>
                                    <option value="UTC+3">UTC+3 (Moscow)</option>
                                    <option value="UTC+4">UTC-4 (Gulf)</option>
                                    <option value="UTC+5">UTC+5 (Pakistan)</option>
                                    <option value="UTC+6">UTC+6 (Bangladesh)</option>
                                    <option value="UTC+7">UTC+7 (Thailand)</option>
                                    <option value="UTC+8">UTC+8 (China)</option>
                                    <option value="UTC+9">UTC+9 (Japan)</option>
                                    <option value="UTC+10">UTC+10 (Australia)</option>
                                    <option value="UTC+11">UTC+11 (Solomon Islands)</option>
                                    <option value="UTC+12">UTC+12 (New Zealand)</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" :disabled="professionalLoading">
                                <i class="fas fa-save"></i>
                                {{ professionalLoading ? 'Saving...' : 'Save Professional Information' }}
                            </button>
                        </form>
                    </div>

                    <!-- Security Tab -->
                    <div v-if="activeTab === 'security'" class="tab-panel">
                        <h3>Security Settings</h3>
                        
                        <div class="security-section">
                            <h4>Basic Information</h4>
                            <form @submit.prevent="updateBasicInfo">
                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" id="username" v-model="user.username" placeholder="Enter username">
                                </div>
                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" v-model="user.email" placeholder="Enter email address">
                                </div>
                                <button type="submit" class="btn btn-primary" :disabled="basicLoading">
                                    <i class="fas fa-save"></i>
                                    {{ basicLoading ? 'Saving...' : 'Update Basic Information' }}
                                </button>
                            </form>
                        </div>

                        <div class="security-section">
                            <h4>Change Password</h4>
                            <form @submit.prevent="changePassword">
                                <div class="form-group">
                                    <label for="currentPassword">Current Password</label>
                                    <input type="password" id="currentPassword" v-model="passwordForm.currentPassword" placeholder="Enter current password">
                                </div>
                                <div class="form-group">
                                    <label for="newPassword">New Password</label>
                                    <input type="password" id="newPassword" v-model="passwordForm.newPassword" placeholder="Enter new password">
                                </div>
                                <div class="form-group">
                                    <label for="confirmPassword">Confirm New Password</label>
                                    <input type="password" id="confirmPassword" v-model="passwordForm.confirmPassword" placeholder="Confirm new password">
                                </div>
                                <button type="submit" class="btn btn-danger" :disabled="passwordLoading">
                                    <i class="fas fa-key"></i>
                                    {{ passwordLoading ? 'Changing...' : 'Change Password' }}
                                </button>
                            </form>
                        </div>
                    </div>

                    <!-- Preferences Tab -->
                    <div v-if="activeTab === 'preferences'" class="tab-panel">
                        <h3>Preferences</h3>
                        <form @submit.prevent="updatePreferences">
                            <div class="form-group">
                                <label for="language">Language</label>
                                <select id="language" v-model="profile.language">
                                    <option value="en">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="it">Italian</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="ru">Russian</option>
                                    <option value="zh">Chinese</option>
                                    <option value="ja">Japanese</option>
                                    <option value="ko">Korean</option>
                                </select>
                            </div>
                            
                            <div class="preferences-section">
                                <h4>Notification Preferences</h4>
                                <div class="preference-item">
                                    <div class="preference-info">
                                        <label>Email Notifications</label>
                                        <p>Receive notifications via email</p>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" v-model="profile.emailNotifications">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                                
                                <div class="preference-item">
                                    <div class="preference-info">
                                        <label>SMS Notifications</label>
                                        <p>Receive notifications via SMS</p>
                                    </div>
                                    <label class="toggle-switch">
                                        <input type="checkbox" v-model="profile.smsNotifications">
                                        <span class="slider"></span>
                                    </label>
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" :disabled="preferencesLoading">
                                <i class="fas fa-save"></i>
                                {{ preferencesLoading ? 'Saving...' : 'Save Preferences' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            user: {},
            profile: {},
            profileCompletion: 0,
            accountAge: 0,
            lastLogin: '-',
            loading: false,
            activeTab: 'overview',
            tabs: [
                { id: 'overview', name: 'Overview', icon: 'fas fa-chart-pie' },
                { id: 'personal', name: 'Personal', icon: 'fas fa-user' },
                { id: 'professional', name: 'Professional', icon: 'fas fa-briefcase' },
                { id: 'security', name: 'Security', icon: 'fas fa-shield-alt' },
                { id: 'preferences', name: 'Preferences', icon: 'fas fa-cog' }
            ],
            personalLoading: false,
            professionalLoading: false,
            basicLoading: false,
            passwordLoading: false,
            preferencesLoading: false,
            passwordForm: {
                currentPassword: '',
                newPassword: '',
                confirmPassword: ''
            }
        }
    },
    async mounted() {
        await this.loadProfile();
    },
    methods: {
        async loadProfile() {
            try {
                this.loading = true;
                const token = localStorage.getItem('adminToken');
                
                const response = await fetch('/api/admin/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        localStorage.removeItem('adminToken');
                        localStorage.removeItem('adminUser');
                        window.location.href = 'index.html';
                        return;
                    }
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }

                const data = await response.json();
                
                if (data.success) {
                    this.user = data.user;
                    this.profile = data.user.profile || {};
                    this.calculateStats();
                } else {
                    throw new Error(data.message || 'Failed to load profile');
                }
            } catch (error) {
                console.error('Error loading profile:', error);
                this.$parent.alert = {
                    message: 'Error loading profile: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.loading = false;
            }
        },
        calculateStats() {
            // Calculate profile completion
            const profileFields = [
                'firstName', 'lastName', 'phoneNumber', 'bio', 
                'jobTitle', 'department', 'timezone'
            ];
            const completedFields = profileFields.filter(field => 
                this.profile[field] && this.profile[field].trim() !== ''
            ).length;
            this.profileCompletion = Math.round((completedFields / profileFields.length) * 100);

            // Calculate account age
            if (this.user.created_on) {
                const createdDate = new Date(this.user.created_on);
                const now = new Date();
                const diffTime = Math.abs(now - createdDate);
                this.accountAge = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            }

            // Last login
            if (this.profile.lastLoginAt) {
                const lastLogin = new Date(this.profile.lastLoginAt);
                this.lastLogin = lastLogin.toLocaleDateString();
            }
        },
        async refreshProfile() {
            await this.loadProfile();
            this.$parent.alert = {
                message: 'Profile refreshed successfully!',
                type: 'success'
            };
        },
        
        // Personal Information Methods
        async updatePersonalInfo() {
            try {
                this.personalLoading = true;
                const formData = {
                    firstName: this.profile.firstName,
                    lastName: this.profile.lastName,
                    phoneNumber: this.profile.phoneNumber,
                    bio: this.profile.bio
                };

                const data = await this.makeAuthenticatedRequest('/api/admin/profile', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Personal information updated successfully!',
                        type: 'success'
                    };
                    this.calculateStats();
                } else {
                    throw new Error(data?.message || 'Failed to update personal information');
                }
            } catch (error) {
                console.error('Error updating personal information:', error);
                this.$parent.alert = {
                    message: 'Error updating personal information: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.personalLoading = false;
            }
        },

        // Professional Information Methods
        async updateProfessionalInfo() {
            try {
                this.professionalLoading = true;
                const formData = {
                    jobTitle: this.profile.jobTitle,
                    department: this.profile.department,
                    timezone: this.profile.timezone
                };

                const data = await this.makeAuthenticatedRequest('/api/admin/profile', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Professional information updated successfully!',
                        type: 'success'
                    };
                    this.calculateStats();
                } else {
                    throw new Error(data?.message || 'Failed to update professional information');
                }
            } catch (error) {
                console.error('Error updating professional information:', error);
                this.$parent.alert = {
                    message: 'Error updating professional information: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.professionalLoading = false;
            }
        },

        // Basic Information Methods
        async updateBasicInfo() {
            try {
                this.basicLoading = true;
                const formData = {
                    username: this.user.username,
                    email: this.user.email
                };

                const data = await this.makeAuthenticatedRequest('/api/admin/profile/basic', {
                    method: 'PUT',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Basic information updated successfully!',
                        type: 'success'
                    };
                } else {
                    throw new Error(data?.message || 'Failed to update basic information');
                }
            } catch (error) {
                console.error('Error updating basic information:', error);
                this.$parent.alert = {
                    message: 'Error updating basic information: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.basicLoading = false;
            }
        },

        // Password Change Methods
        async changePassword() {
            try {
                if (this.passwordForm.newPassword !== this.passwordForm.confirmPassword) {
                    this.$parent.alert = {
                        message: 'New passwords do not match!',
                        type: 'error'
                    };
                    return;
                }

                if (this.passwordForm.newPassword.length < 6) {
                    this.$parent.alert = {
                        message: 'New password must be at least 6 characters long!',
                        type: 'error'
                    };
                    return;
                }

                this.passwordLoading = true;
                const formData = {
                    currentPassword: this.passwordForm.currentPassword,
                    newPassword: this.passwordForm.newPassword
                };

                const data = await this.makeAuthenticatedRequest('/api/admin/profile/password', {
                    method: 'PUT',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Password changed successfully!',
                        type: 'success'
                    };
                    // Clear password fields
                    this.passwordForm = {
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                    };
                } else {
                    throw new Error(data?.message || 'Failed to change password');
                }
            } catch (error) {
                console.error('Error changing password:', error);
                this.$parent.alert = {
                    message: 'Error changing password: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.passwordLoading = false;
            }
        },

        // Preferences Methods
        async updatePreferences() {
            try {
                this.preferencesLoading = true;
                const formData = {
                    language: this.profile.language,
                    emailNotifications: this.profile.emailNotifications,
                    smsNotifications: this.profile.smsNotifications,
                    twoFactorEnabled: this.profile.twoFactorEnabled
                };

                const data = await this.makeAuthenticatedRequest('/api/admin/profile', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Preferences updated successfully!',
                        type: 'success'
                    };
                } else {
                    throw new Error(data?.message || 'Failed to update preferences');
                }
            } catch (error) {
                console.error('Error updating preferences:', error);
                this.$parent.alert = {
                    message: 'Error updating preferences: ' + error.message,
                    type: 'error'
                };
            } finally {
                this.preferencesLoading = false;
            }
        },

        // Avatar Upload Methods
        triggerAvatarUpload() {
            this.$refs.avatarInput.click();
        },

        async handleAvatarUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            if (!file.type.startsWith('image/')) {
                this.$parent.alert = {
                    message: 'Please select an image file!',
                    type: 'error'
                };
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                this.$parent.alert = {
                    message: 'Image file size must be less than 5MB!',
                    type: 'error'
                };
                return;
            }

            try {
                const imageUrl = URL.createObjectURL(file);
                this.profile.profilePicture = imageUrl;
                
                const formData = { profilePicture: imageUrl };
                const data = await this.makeAuthenticatedRequest('/api/admin/profile', {
                    method: 'POST',
                    body: JSON.stringify(formData)
                });

                if (data && data.success) {
                    this.$parent.alert = {
                        message: 'Profile picture updated successfully!',
                        type: 'success'
                    };
                } else {
                    throw new Error(data?.message || 'Failed to update profile picture');
                }
            } catch (error) {
                console.error('Error uploading avatar:', error);
                this.$parent.alert = {
                    message: 'Error uploading avatar: ' + error.message,
                    type: 'error'
                };
            }
        },

        // Helper Methods
        async makeAuthenticatedRequest(url, options = {}) {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                window.location.href = 'index.html';
                return;
            }

            const defaultOptions = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            };

            const response = await fetch(url, { ...defaultOptions, ...options });

            if (!response.ok) {
                if (response.status === 401) {
                    localStorage.removeItem('adminToken');
                    localStorage.removeItem('adminUser');
                    window.location.href = 'index.html';
                    return;
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return response.json();
        },
        async viewAllProfiles() {
            try {
                const token = localStorage.getItem('adminToken');
                const response = await fetch('/api/admin/profiles', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const data = await response.json();
                
                if (data.success) {
                    // Show profiles in a modal or redirect to a profiles page
                    console.log('All profiles:', data.users);
                    this.$parent.alert = {
                        message: `Found ${data.users.length} admin profiles`,
                        type: 'success'
                    };
                } else {
                    throw new Error(data.message || 'Failed to load profiles');
                }
            } catch (error) {
                console.error('Error loading profiles:', error);
                this.$parent.alert = {
                    message: 'Error loading profiles: ' + error.message,
                    type: 'error'
                };
            }
        },
        exportProfile() {
            // Create a downloadable JSON file with profile data
            const profileData = {
                user: this.user,
                profile: this.profile,
                exportedAt: new Date().toISOString()
            };
            
            const blob = new Blob([JSON.stringify(profileData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `profile-${this.user.username || 'admin'}-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            this.$parent.alert = {
                message: 'Profile exported successfully!',
                type: 'success'
            };
        }
    }
};
