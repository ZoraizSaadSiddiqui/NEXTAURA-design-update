'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Upload, 
  FileText, 
  User,
  Briefcase,
  GraduationCap,
  Send,
  AlertCircle
} from 'lucide-react';
import Button from '@/components/ui/button';
import { FadeIn, SlideInUp } from '@/components/ui/animations';

const ApplicationForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobId = searchParams.get('job');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    
    // Step 2: Professional Information
    experience: '',
    education: '',
    skills: '',
    coverLetter: '',
    resume: null,
    resumeName: '',
    
    // Step 3: Additional Information
    noticePeriod: '',
    salaryExpectation: '',
    source: '',
    diversity: '',
    
    // Terms
    acceptTerms: false,
    acceptPrivacy: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    // In a real app, you would fetch job details based on jobId
    if (jobId) {
      const jobs = {
        'senior-frontend-developer': 'Senior Frontend Developer',
        'ui-ux-designer': 'UI/UX Designer',
        'fullstack-developer': 'Full Stack Developer',
        'devops-engineer': 'DevOps Engineer',
        'product-manager': 'Product Manager',
        'digital-marketing-specialist': 'Digital Marketing Specialist'
      };
      setJobTitle(jobs[jobId] || 'the position');
    } else {
      setJobTitle('the position');
    }
  }, [jobId]);

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Professional', icon: Briefcase },
    { number: 3, title: 'Additional', icon: GraduationCap },
    { number: 4, title: 'Review', icon: FileText }
  ];

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0],
        resumeName: files[0]?.name || ''
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.location.trim()) newErrors.location = 'Location is required';
        break;
      
      case 2:
        if (!formData.experience) newErrors.experience = 'Experience level is required';
        if (!formData.education) newErrors.education = 'Education level is required';
        if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
        if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
        if (!formData.resume) newErrors.resume = 'Resume is required';
        break;
      
      case 3:
        if (!formData.noticePeriod) newErrors.noticePeriod = 'Notice period is required';
        if (!formData.salaryExpectation.trim()) newErrors.salaryExpectation = 'Salary expectation is required';
        if (!formData.source) newErrors.source = 'Please tell us how you heard about us';
        break;
      
      case 4:
        if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
        if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'You must accept the privacy policy';
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 3000);
  };

  const progress = (currentStep / 4) * 100;

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="max-w-md w-full mx-4">
          <FadeIn>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for applying to Savacy Technologies. We've received your application for <strong>{jobTitle}</strong> and will review it carefully.
              </p>
              <p className="text-gray-600 mb-8">
                You should receive a confirmation email shortly. Our team will contact you within 3-5 business days if your profile matches our requirements.
              </p>
              <div className="space-y-4">
                <Button
                  onClick={() => router.push('/careers')}
                  className="w-full bg-blue-600 hover:bg-blue-700 justify-center"
                >
                  Back to Job Search
                </Button>
                <Button
                  onClick={() => router.push('/')}
                  variant="outline"
                  className="w-full justify-center"
                >
                  Return to Home
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for {jobTitle}</h1>
            <p className="text-xl text-gray-600">
              Complete the form below to submit your application
            </p>
          </div>
        </FadeIn>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Step {currentStep} of 4</span>
            <span className="text-sm text-gray-500">All fields marked with * are required</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div 
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.number}
                </div>
                <span className={`text-xs mt-1 ${
                  currentStep >= step.number ? 'text-blue-600 font-semibold' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.firstName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.firstName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.lastName ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.lastName}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.location ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="City, Country"
                  />
                  {errors.location && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                      Portfolio/GitHub
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.experience ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1">0-1 years</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-7">5-7 years</option>
                      <option value="7+">7+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.experience}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                      Highest Education *
                    </label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                        errors.education ? 'border-red-300' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select education level</option>
                      <option value="high-school">High School</option>
                      <option value="associate">Associate Degree</option>
                      <option value="bachelor">Bachelor's Degree</option>
                      <option value="master">Master's Degree</option>
                      <option value="phd">PhD</option>
                    </select>
                    {errors.education && (
                      <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                        <AlertCircle size={16} />
                        <span>{errors.education}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                    Key Skills & Technologies *
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    required
                    rows={4}
                    value={formData.skills}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.skills ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="List your key skills, programming languages, frameworks, tools, etc."
                  />
                  {errors.skills && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.skills}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    required
                    rows={6}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.coverLetter ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Tell us why you're interested in this position, what makes you a great fit, and why you want to work at Savacy Technologies..."
                  />
                  {errors.coverLetter && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.coverLetter}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume/CV *
                  </label>
                  <div className="flex items-center space-x-4">
                    <label htmlFor="resume" className="flex-1 cursor-pointer">
                      <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                        errors.resume ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      }`}>
                        <Upload size={32} className={`mx-auto mb-2 ${
                          errors.resume ? 'text-red-400' : 'text-gray-400'
                        }`} />
                        <p className={`font-medium ${
                          errors.resume ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {formData.resumeName || 'Click to upload resume'}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          PDF, DOC, DOCX (Max: 5MB)
                        </p>
                      </div>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {errors.resume && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.resume}</span>
                    </p>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Additional Information */}
            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
                
                <div>
                  <label htmlFor="noticePeriod" className="block text-sm font-medium text-gray-700 mb-2">
                    Notice Period *
                  </label>
                  <select
                    id="noticePeriod"
                    name="noticePeriod"
                    required
                    value={formData.noticePeriod}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.noticePeriod ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select notice period</option>
                    <option value="immediate">Immediate</option>
                    <option value="1-week">1 week</option>
                    <option value="2-weeks">2 weeks</option>
                    <option value="1-month">1 month</option>
                    <option value="2-months">2 months</option>
                    <option value="3-months">3 months</option>
                  </select>
                  {errors.noticePeriod && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.noticePeriod}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="salaryExpectation" className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Expectation (Annual) *
                  </label>
                  <input
                    type="text"
                    id="salaryExpectation"
                    name="salaryExpectation"
                    required
                    value={formData.salaryExpectation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.salaryExpectation ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="e.g., $80,000 - $100,000"
                  />
                  {errors.salaryExpectation && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.salaryExpectation}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about us? *
                  </label>
                  <select
                    id="source"
                    name="source"
                    required
                    value={formData.source}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      errors.source ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select source</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="indeed">Indeed</option>
                    <option value="glassdoor">Glassdoor</option>
                    <option value="referral">Employee Referral</option>
                    <option value="company-website">Company Website</option>
                    <option value="job-board">Other Job Board</option>
                    <option value="social-media">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.source && (
                    <p className="mt-2 text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.source}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="diversity" className="block text-sm font-medium text-gray-700 mb-2">
                    Diversity Information (Optional)
                  </label>
                  <textarea
                    id="diversity"
                    name="diversity"
                    rows={3}
                    value={formData.diversity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="This information is voluntary and will not affect your application. It helps us track our diversity efforts and create a more inclusive workplace."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Submit</h2>
                
                {/* Application Summary */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-600">Name:</span>
                      <p className="text-gray-900">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Email:</span>
                      <p className="text-gray-900">{formData.email}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Phone:</span>
                      <p className="text-gray-900">{formData.phone}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Location:</span>
                      <p className="text-gray-900">{formData.location}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Experience:</span>
                      <p className="text-gray-900">{formData.experience}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Education:</span>
                      <p className="text-gray-900">{formData.education}</p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      required
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="acceptTerms" className="text-sm text-gray-700">
                      I have read and agree to the{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                        Terms and Conditions
                      </a>
                      . I understand that any false or misleading information may result in disqualification.
                    </label>
                  </div>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.acceptTerms}</span>
                    </p>
                  )}

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="acceptPrivacy"
                      name="acceptPrivacy"
                      required
                      checked={formData.acceptPrivacy}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                      I have read and agree to the{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                        Privacy Policy
                      </a>
                      . I consent to the collection and processing of my personal data for recruitment purposes.
                    </label>
                  </div>
                  {errors.acceptPrivacy && (
                    <p className="text-sm text-red-600 flex items-center space-x-1">
                      <AlertCircle size={16} />
                      <span>{errors.acceptPrivacy}</span>
                    </p>
                  )}
                </div>

                {/* Final Note */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> By submitting this application, you confirm that all information provided is accurate and complete. 
                    Our hiring team will review your application and contact you within 3-5 business days if you're selected for the next stage.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
            {currentStep > 1 ? (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex items-center space-x-2"
              >
                <ArrowLeft size={16} />
                <span>Previous</span>
              </Button>
            ) : (
              <div></div>
            )}
            
            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ArrowRight size={16} />
              </Button>
            ) : (
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Submit Application</span>
                    </>
                  )}
                </Button>
              </motion.div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;