"use client";

import { useState } from "react";
import { AnimatedTitle } from "@/components/animations/animated-title";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { SectionTransition } from "@/components/animations/section-transition";

// Google Form configuration - Pre-filled URL approach
const GOOGLE_FORM_BASE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdqxhAY0WHXseoWa0FS6CgATet985vXfZXDxeg_pUJcr2CmNg/viewform";
const GOOGLE_FORM_FIELDS = {
  nombre: "entry.2068214596",
  email: "entry.887141605",
  telefono: "entry.1278905404",
  area: "entry.161483175",
  experiencia: "entry.1274225643",
};

export function CareersForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    area: "",
    experiencia: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build pre-filled Google Form URL
    const params = new URLSearchParams({
      usp: "pp_url",
      [GOOGLE_FORM_FIELDS.nombre]: formData.nombre,
      [GOOGLE_FORM_FIELDS.email]: formData.email,
      [GOOGLE_FORM_FIELDS.telefono]: formData.telefono,
      [GOOGLE_FORM_FIELDS.area]: formData.area,
      [GOOGLE_FORM_FIELDS.experiencia]: formData.experiencia,
    });

    // Open Google Form in new tab with pre-filled data
    window.open(`${GOOGLE_FORM_BASE_URL}?${params.toString()}`, "_blank");
  };

  return (
    <>
      <SectionTransition variant="wave" toColor="#f5f0e8" height={80} />
      
      <section className="py-20 md:py-32 bg-[#f5f0e8]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <ScrollReveal animation="fadeUp">
                <span className="inline-block text-[#3f7528] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                  Postulate
                </span>
              </ScrollReveal>
              <AnimatedTitle
                as="h2"
                animation="words"
                className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
                stagger={0.08}
              >
                ENVIÁ TU CV
              </AnimatedTitle>
              <ScrollReveal animation="fadeUp" delay={0.2}>
                <p className="text-lg text-gray-600">
                  Completá el formulario y nos pondremos en contacto
                </p>
              </ScrollReveal>
            </div>

            {/* Form */}
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="nombre" 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3f7528] focus:border-transparent transition-all duration-200 placeholder:text-gray-400" 
                      placeholder="Tu nombre completo" 
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3f7528] focus:border-transparent transition-all duration-200 placeholder:text-gray-400" 
                      placeholder="tu@email.com" 
                    />
                  </div>
                </div>

                {/* Phone & Area Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="telefono" 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3f7528] focus:border-transparent transition-all duration-200 placeholder:text-gray-400" 
                      placeholder="+54 223 XXX-XXXX" 
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="area" 
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Área de Interés <span className="text-red-500">*</span>
                    </label>
                    <select 
                      id="area" 
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3f7528] focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem',
                      }}
                    >
                      <option value="">Seleccioná un área</option>
                      <option value="🌱 Campo">🌱 Campo</option>
                      <option value="📦 Empaquetadora">📦 Empaquetadora</option>
                      <option value="💼 Administrativo">💼 Administrativo</option>
                    </select>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <label 
                    htmlFor="experiencia" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Contanos sobre tu experiencia
                  </label>
                  <textarea 
                    id="experiencia" 
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#3f7528] focus:border-transparent transition-all duration-200 resize-none placeholder:text-gray-400" 
                    placeholder="Tu experiencia previa, habilidades, por qué te gustaría trabajar en iKiwi..." 
                  />
                </div>

                {/* Note about CV */}
                <div className="bg-[#3f7528]/5 rounded-xl p-4 border border-[#3f7528]/20">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-[#3f7528]">📎 ¿Tenés CV?</span>{" "}
                    Podrás adjuntarlo en el siguiente paso dentro del formulario de Google.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 bg-[#3f7528] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#4a8a30] hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                  >
                    <span>Continuar Postulación</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>

                {/* Privacy note */}
                <p className="text-xs text-gray-500 text-center pt-4">
                  Se abrirá Google Forms en una nueva pestaña con tus datos pre-cargados para completar la postulación.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
