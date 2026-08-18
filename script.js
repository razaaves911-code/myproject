/**
 * ===================================================================
 * CENTRAL CONFIGURATION
 * Edit clinic details here to update across all pages automatically.
 * ===================================================================
 */
const AAYURASTRA_CONFIG = {
    clinicName: "Aayurastra Ayurvedic Clinic",
    phone: "+91 8433688668",
    whatsapp: "8433688668",
    email: "care@aayurastra.com",
    address: "shop no d13 Aayurastra ayurvedic clinic and panchakarma center neelkamal chs,next to Domino's pizza ,near Western Park Road , Kashigoan , Miraroad [E] ,  Mumbai, MiraBhayander,maharashtra, India"
};

/**
 * ===================================================================
 * COMPREHENSIVE TREATMENT DATABASE (Used for dynamic detail pages)
 * ===================================================================
 */
const TREATMENT_DATABASE = {
    panchakarma: {
        title: "Panchakarma",
        badge: "Deep Cellular Detoxification",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80",
        overview: "Panchakarma is the ultimate classical cornerstone of Ayurvedic healing. It is a comprehensive suite of five purification procedures designed to eliminate deep-seated toxins (Ama) from bodily tissues, recalibrate metabolic fire (Agni), and restore foundational harmony across all doshas.",
        perspective: "According to Ayurveda, environmental toxins, poor dietary habits, and chronic stress create metabolic waste that clogs bodily channels (Srotas). Panchakarma gently dislodges and flushes out these impurities, rejuvenating physiological systems at the cellular level.",
        expectations: "Your Panchakarma pathway begins with preparatory therapy (Purvakarma) including oleation and sweating, followed by primary cleansing procedures prescribed specifically for your constitution under direct BAMS physician supervision.",
        considerations: "Panchakarma requires a dedicated time commitment and adherence to post-cleansing dietary guidelines (Sansarjana Krama) to maximize rejuvenation benefits.",
        faqs: [
            {
                q: "Is Panchakarma painful?",
                a: "No, Panchakarma procedures are deeply relaxing, soothing, and administered with utmost care by trained therapists."
            },
            {
                q: "How long does a Panchakarma program take?",
                a: "Programs typically range from 7 to 21 days depending on individual health goals and practitioner prescription."
            }
        ]
    },
    abhyanga: {
        title: "Abhyanga",
        badge: "Nourishing Herbal Oil Therapy",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
        overview: "Abhyanga is a synchronized, full-body warm herbal oil massage performed by skilled therapists using strokes that follow the body's muscular and circulatory alignment. It profoundly nourishes the skin, muscles, and nervous system.",
        perspective: "In classical Ayurveda, Abhyanga pacifies excess Vata dosha, which is responsible for dryness, anxiety, and fatigue. The warm medicated oils penetrate deep into tissue layers (Dhatus), lubricating joints and promoting longevity.",
        expectations: "You will receive a 60 to 90-minute warm oil massage tailored with oils specific to your dosha, followed by a warm herbal steam (Swedana) to enhance absorption.",
        considerations: "Allow the herbal oils to remain on your skin for at least an hour post-therapy to fully absorb before taking a warm bath.",
        faqs: [
            {
                q: "What oils are used during Abhyanga?",
                a: "We use classical medicated oils infused with potent Ayurvedic herbs matched to your specific doshic profile."
            },
            {
                q: "How often should I get Abhyanga?",
                a: "For general wellness and stress relief, once a week is highly beneficial."
            }
        ]
    },
    shirodhara: {
        title: "Shirodhara",
        badge: "Mind Relaxation & Nervous System Calming",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
        overview: "Shirodhara is a profoundly calming therapy where a continuous, gentle stream of warm medicated oil or herbal decoction is poured rhythmically across the forehead (specifically the 'Third Eye' region).",
        perspective: "This sacred therapy acts directly on the higher cerebral centers, soothing the central nervous system, relieving mental chatter, reducing cortisol levels, and inviting deep meditative tranquility.",
        expectations: "You will lie comfortably while warm oil flows smoothly over your forehead for 45 to 60 minutes, accompanied by soothing ambient sounds.",
        considerations: "Bring a comfortable cap or scarf to wear home, as your hair will be infused with warm herbal oil.",
        faqs: [
            {
                q: "Can Shirodhara help with insomnia?",
                a: "Yes, Shirodhara is renowned for regulating sleep patterns and relieving chronic sleep disturbances."
            },
            {
                q: "Will my hair get oily?",
                a: "Yes, warm herbal oils are poured over the scalp. We provide post-therapy hair wash facilities or towels."
            }
        ]
    },
    swedana: {
        title: "Swedana",
        badge: "Medicated Herbal Steam Therapy",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
        overview: "Swedana is a therapeutic herbal steam treatment designed to induce sweating, open blocked micro-channels (Srotas), and eliminate superficial toxins through the skin.",
        perspective: "By combining steam infused with medicinal leaf extracts, Swedana dilates bodily channels, relieves muscle stiffness, and primes the body for deep tissue release.",
        expectations: "You will relax comfortably in a specialized steam chamber while keeping your head cool, typically following an Abhyanga massage.",
        considerations: "Hydration is essential before and after Swedana to replenish fluids lost through perspiration.",
        faqs: [
            {
                q: "Is Swedana safe for everyone?",
                a: "Your practitioner will review your health profile beforehand to ensure the appropriate steam temperature and herbal infusion."
            }
        ]
    },
    "stress-management": {
        title: "Stress & Wellness",
        badge: "Holistic Burnout Recovery",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
        overview: "Modern lifestyles often precipitate chronic mental and physical fatigue. Our Stress & Wellness protocol combines Shirodhara, restorative herbal supplements, and mindfulness guidance to restore inner calm.",
        perspective: "Chronic stress aggravates Vata and Pitta doshas, depleting Ojas (vital life force). Our protocol nourishes the nervous system and restores emotional equilibrium naturally.",
        expectations: "A multi-session program combining therapeutic massages, herbal teas, and lifestyle coaching tailored to your daily schedule.",
        considerations: "Commitment to daily mindfulness and dietary adjustments greatly enhances results.",
        faqs: [
            {
                q: "Can I continue working during the stress wellness program?",
                a: "Yes, the program is designed to integrate smoothly into your work and personal schedule."
            }
        ]
    },
    "digestive-wellness": {
        title: "Digestive Wellness",
        badge: "Agni Restoration & Gut Health",
        image: "https://images.unsplash.com/photo-1512290900722-9a702082b2f5?auto=format&fit=crop&w=1000&q=80",
        overview: "Ayurveda teaches that all disease originates in impaired digestion (Mandagni). Our Digestive Wellness program recalibrates your digestive fire through targeted herbal formulations and dietary alignment.",
        perspective: "By restoring Agni, the body efficiently metabolizes nutrients and prevents the accumulation of toxic Ama, resolving bloating, sluggishness, and discomfort.",
        expectations: "An initial digestive evaluation followed by custom dietary prescriptions, herbal teas, and mild cleansing routines.",
        considerations: "Adherence to suggested meal timings and warm, fresh foods is essential.",
        faqs: [
            {
                q: "How soon will I notice improvement in digestion?",
                a: "Many patients report noticeable improvements in bloating and energy within the first week of dietary alignment."
            }
        ]
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Config Values into Placeholders
    updateConfigurationPlaceholders();

    // 2. Initialize Navigation & Header
    initNavigation();
    initStickyHeader();

    // 3. Initialize Scroll Animations (IntersectionObserver)
    initScrollAnimations();

    // 4. Initialize Back to Top Button
    initBackToTop();

    // 5. Initialize Forms (Appointment & Contact)
    initForms();

    // 6. Initialize Treatment Filtering
    initTreatmentFilter();

    // 7. Initialize Dynamic Treatment Detail Page (if on treatment-detail.html)
    initTreatmentDetail();

    // 8. Initialize FAQ Accordions
    initFaqs();

    // 9. Initialize WhatsApp CTAs
    initWhatsAppCTAs();
});

/**
 * Replace configuration placeholders in HTML
 */
function updateConfigurationPlaceholders() {
    document.querySelectorAll(".config-phone").forEach(el => el.textContent = AAYURASTRA_CONFIG.phone);
    document.querySelectorAll(".config-email").forEach(el => el.textContent = AAYURASTRA_CONFIG.email);
    document.querySelectorAll(".config-address").forEach(el => el.textContent = AAYURASTRA_CONFIG.address);
}

/**
 * Initialize WhatsApp Click Handlers & URLs
 */
function initWhatsAppCTAs() {
    const defaultMsg = "Hello Aayurastra, I would like to enquire about an appointment.";
    const encodedMsg = encodeURIComponent(defaultMsg);
    const whatsappUrl = `https://wa.me/${AAYURASTRA_CONFIG.whatsapp}?text=${encodedMsg}`;

    document.querySelectorAll(".whatsapp-cta-btn").forEach(btn => {
        btn.setAttribute("href", whatsappUrl);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("rel", "noopener noreferrer");
    });
}

/**
 * Navigation & Mobile Hamburger Menu
 */
function initNavigation() {
    const hamburger = document.getElementById("hamburger-btn");
    const mainNav = document.getElementById("main-nav");

    if (hamburger && mainNav) {
        hamburger.addEventListener("click", () => {
            const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", !isExpanded);
            hamburger.classList.toggle("open");
            mainNav.classList.toggle("open");
        });

        // Close menu on link click
        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.classList.remove("open");
                mainNav.classList.remove("open");
            });
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && mainNav.classList.contains("open")) {
                hamburger.setAttribute("aria-expanded", "false");
                hamburger.classList.remove("open");
                mainNav.classList.remove("open");
            }
        });
    }
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.getElementById("site-header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
}

/**
 * Scroll Animations using IntersectionObserver
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll("[data-animate]");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check for optional delay
                    const delay = entry.target.getAttribute("data-delay");
                    if (delay) {
                        setTimeout(() => {
                            entry.target.classList.add("animated");
                        }, parseInt(delay));
                    } else {
                        entry.target.classList.add("animated");
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        elements.forEach(el => el.classList.add("animated"));
    }
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (btn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                btn.classList.add("visible");
            } else {
                btn.classList.remove("visible");
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

/**
 * Form Validation and Submission
 */
function initForms() {
    // Appointment Form
    const appointmentForm = document.getElementById("appointment-form");
    if (appointmentForm) {
        // Set minimum date to today
        const dateInput = document.getElementById("preferredDate");
        if (dateInput) {
            const today = new Date().toISOString().split("T")[0];
            dateInput.setAttribute("min", today);
        }

        appointmentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateAppointmentForm()) {
                const submitBtn = document.getElementById("submit-btn");
                submitBtn.classList.add("loading");
                submitBtn.setAttribute("disabled", "true");

                setTimeout(() => {
                    submitBtn.classList.remove("loading");
                    submitBtn.removeAttribute("disabled");
                    appointmentForm.reset();
                    document.getElementById("form-success-box").classList.remove("hidden");
                    appointmentForm.scrollIntoView({ behavior: "smooth" });
                }, 1000);
            }
        });
    }

    // Contact Form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateContactForm()) {
                const submitBtn = document.getElementById("contact-submit-btn");
                submitBtn.classList.add("loading");
                submitBtn.setAttribute("disabled", "true");

                setTimeout(() => {
                    submitBtn.classList.remove("loading");
                    submitBtn.removeAttribute("disabled");
                    contactForm.reset();
                    document.getElementById("contact-success-box").classList.remove("hidden");
                }, 1000);
            }
        });
    }
}

function validateAppointmentForm() {
    let isValid = true;

    // Full Name
    const name = document.getElementById("fullName");
    const nameGroup = name.closest(".form-group");
    if (!name.value.trim()) {
        nameGroup.classList.add("has-error");
        isValid = false;
    } else {
        nameGroup.classList.remove("has-error");
    }

    // Phone
    const phone = document.getElementById("phone");
    const phoneGroup = phone.closest(".form-group");
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
        phoneGroup.classList.add("has-error");
        isValid = false;
    } else {
        phoneGroup.classList.remove("has-error");
    }

    // Email
    const email = document.getElementById("email");
    const emailGroup = email.closest(".form-group");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailGroup.classList.add("has-error");
        isValid = false;
    } else {
        emailGroup.classList.remove("has-error");
    }

    // Consultation Type
    const cType = document.getElementById("consultationType");
    const cTypeGroup = cType.closest(".form-group");
    if (!cType.value) {
        cTypeGroup.classList.add("has-error");
        isValid = false;
    } else {
        cTypeGroup.classList.remove("has-error");
    }

    // Date
    const date = document.getElementById("preferredDate");
    const dateGroup = date.closest(".form-group");
    if (!date.value) {
        dateGroup.classList.add("has-error");
        isValid = false;
    } else {
        dateGroup.classList.remove("has-error");
    }

    // Time
    const time = document.getElementById("preferredTime");
    const timeGroup = time.closest(".form-group");
    if (!time.value) {
        timeGroup.classList.add("has-error");
        isValid = false;
    } else {
        timeGroup.classList.remove("has-error");
    }

    return isValid;
}

function validateContactForm() {
    let isValid = true;

    const name = document.getElementById("contactName");
    const nameGroup = name.closest(".form-group");
    if (!name.value.trim()) {
        nameGroup.classList.add("has-error");
        isValid = false;
    } else {
        nameGroup.classList.remove("has-error");
    }

    const email = document.getElementById("contactEmail");
    const emailGroup = email.closest(".form-group");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        emailGroup.classList.add("has-error");
        isValid = false;
    } else {
        emailGroup.classList.remove("has-error");
    }

    const msg = document.getElementById("contactMessage");
    const msgGroup = msg.closest(".form-group");
    if (!msg.value.trim()) {
        msgGroup.classList.add("has-error");
        isValid = false;
    } else {
        msgGroup.classList.remove("has-error");
    }

    return isValid;
}

/**
 * Treatment Filtering on treatments.html
 */
function initTreatmentFilter() {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const cards = document.querySelectorAll("#treatment-grid .treatment-card");

    if (filterButtons.length > 0 && cards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filter = btn.getAttribute("data-filter");

                cards.forEach(card => {
                    const category = card.getAttribute("data-category");
                    if (filter === "all" || category === filter) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }
}

/**
 * Dynamic Treatment Detail Page Loader
 */
function initTreatmentDetail() {
    const container = document.getElementById("treatment-detail-container");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const treatmentKey = params.get("treatment");
    const treatment = TREATMENT_DATABASE[treatmentKey];

    if (!treatment) {
        container.innerHTML = `
            <section class="section-padding text-center">
                <div class="container">
                    <span class="badge">Notice</span>
                    <h1>Treatment Not Found</h1>
                    <p class="max-w-700 mx-auto mb-4">The treatment you are looking for does not exist or has been updated.</p>
                    <a href="treatments.html" class="btn btn-primary">View All Treatments</a>
                </div>
            </section>
        `;
        return;
    }

    // Build FAQ HTML if available
    let faqHtml = "";
    if (treatment.faqs && treatment.faqs.length > 0) {
        faqHtml = `
            <section class="section-padding bg-cream">
                <div class="container max-w-800">
                    <div class="section-header text-center">
                        <h2>Frequently Asked Questions</h2>
                        <p>Common questions about ${treatment.title}</p>
                    </div>
                    <div class="faq-accordion mt-4">
                        ${treatment.faqs.map(faq => `
                            <div class="faq-item">
                                <button class="faq-question" aria-expanded="false">
                                    <span>${faq.q}</span>
                                    <span class="faq-icon">+</span>
                                </button>
                                <div class="faq-answer">
                                    <p>${faq.a}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </section>
        `;
    }

    container.innerHTML = `
        <section class="page-hero bg-cream section-padding text-center">
            <div class="container" data-animate="fade-up">
                <span class="badge">${treatment.badge}</span>
                <h1>${treatment.title}</h1>
                <p class="max-w-700 mx-auto">Authentic Ayurvedic therapy designed to restore balance and vitality.</p>
            </div>
        </section>

        <section class="section-padding">
            <div class="container max-w-800">
                <div class="treatment-detail-img mb-5" data-animate="fade-in">
                    <img src="${treatment.image}" alt="${treatment.title}" class="rounded-lg shadow-md" style="width:100%; border-radius: 12px;" loading="lazy">
                </div>
                <div data-animate="fade-up">
                    <h2>Overview</h2>
                    <p>${treatment.overview}</p>
                    
                    <h2 class="mt-5">Traditional Ayurvedic Perspective</h2>
                    <p>${treatment.perspective}</p>
                    
                    <h2 class="mt-5">What to Expect</h2>
                    <p>${treatment.expectations}</p>
                    
                    <h2 class="mt-5">General Wellness Considerations</h2>
                    <p>${treatment.considerations}</p>
                </div>
            </div>
        </section>

        ${faqHtml}

        <section class="cta-banner section-padding text-center">
            <div class="container" data-animate="fade-up">
                <h2>Ready to Experience ${treatment.title}?</h2>
                <p class="max-w-700 mx-auto">Book a consultation with our BAMS practitioners to start your wellness journey.</p>
                <div class="mt-4">
                    <a href="appointment.html" class="btn btn-primary">Book Consultation</a>
                </div>
            </div>
        </section>
    `;

    // Re-initialize FAQs for dynamically injected elements
    initFaqs();
}

/**
 * FAQ Accordion Behavior (Only one open at a time)
 */
function initFaqs() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-question");
        if (btn) {
            // Remove existing listener if any to avoid duplication
            btn.onclick = () => {
                const isActive = item.classList.contains("active");

                // Close all other FAQs
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove("active");
                        const otherBtn = other.querySelector(".faq-question");
                        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
                    }
                });

                // Toggle current FAQ
                if (isActive) {
                    item.classList.remove("active");
                    btn.setAttribute("aria-expanded", "false");
                } else {
                    item.classList.add("active");
                    btn.setAttribute("aria-expanded", "true");
                }
            };
        }
    });
}