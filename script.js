/**
 * VOLALTE - Main JavaScript with Full Translation System
 */

// Get saved language from localStorage
let currentLang = localStorage.getItem('volalte_lang');

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHeaderScroll();
    initBackToTop();
    initCounterAnimation();
    initScrollAnimations();
    initSmoothScroll();
    initForms();
    initLanguageSelector();
    initShareButtons();
    applyTranslations(currentLang);
});

// COMPLETE TRANSLATIONS
const translations = {
    es: {
        // Nav
        nav_inicio: "Inicio", nav_servicios: "Servicios", nav_blog: "Blog", nav_contacto: "Contacto", nav_sobre: "Sobre Nosotros",
        btn_contactanos: "Contáctanos", btn_distribuidor: "Conviértete en distribuidor", logo_slogan: "Reciclaje de Neumáticos",
        mobile_lang: "Idioma:",
        // Hero
        hero_title: "Neumáticos Reciclados al Por Mayor", hero_highlight: "que Generan Impacto",
        hero_desc: "Compra neumáticos reciclados al por mayor y únete al cambio hacia un planeta más limpio y sostenible.", hero_cta: "Saber más",
        // About
        about_badge: "Somos tu proveedor de confianza en España de neumáticos reciclados",
        about_title: "Convertimos residuos en oportunidades",
        about_desc: "La recolección de neumáticos usados Barcelona es el servicio principal de <strong>Volalte Gir</strong>. Ofrecemos soluciones rápidas, legales y seguras para talleres, exportadores y entidades públicas.",
        // Services
        services_badge: "Suministramos, Acompañamos y Sostenemos", services_title: "Mucho Más que Neumáticos",
        service1_title: "Neumáticos reciclados para la venta", service1_desc: "Alta calidad, listos para su reutilización",
        service2_title: "Venta al por mayor de neumáticos usados", service2_desc: "Stock constante y selección por tipo",
        service3_title: "Productos derivados de neumáticos", service3_desc: "Soluciones reutilizables para diferentes industrias",
        service4_title: "Logística con conciencia ecológica", service4_desc: "Recolección y transporte con trazabilidad garantizada",
        // CTA
        cta_badge: "Habla con nuestros expertos hoy", cta_title: "¿Listo para dar el siguiente paso sostenible?",
        cta_desc: "Nuestro equipo está aquí para ayudarte a elegir una solución profesional y legal para la gestión de tus neumáticos usados.",
        cta_button: "Conocer más", call_title: "Habla hoy con un", call_highlight: "Especialista en Reciclaje de Neumáticos", call_button: "Llamar ahora",
        // Benefits
        benefits_badge: "¿Por qué elegirnos?", benefits_title: "Comprometidos con el planeta", benefits_desc: "Cada neumático reciclado es un paso hacia un futuro más sostenible",
        benefit1_title: "Evita que los neumáticos terminen en vertederos", benefit1_subtitle: "Los neumáticos reciclados tienen una segunda vida",
        benefit1_desc: "Más de 1.000 millones de neumáticos llegan al final de su vida útil cada año. Sin reciclaje, terminan contaminando y representando riesgos.",
        benefit1_cta: "Ver neumáticos reciclados", benefit2_title: "Reduce tu huella de carbono", benefit2_subtitle: "Reutilizar reduce el impacto ambiental",
        benefit2_desc: "Fabricar un neumático nuevo puede requerir hasta 83 litros de petróleo. Reutilizar reduce la demanda de materias primas y energía.",
        benefit2_cta: "Elige opciones sostenibles", benefit3_title: "Impulsa el cambio hacia la economía circular",
        benefit3_subtitle: "Cada neumático cuenta en un sistema más verde",
        benefit3_desc: "El reciclaje de neumáticos apoya los objetivos del Pacto Verde Europeo y promueve industrias sostenibles.",
        benefit3_cta: "Únete al cambio circular",
        // Stats
        stats_badge: "Cada neumático cuenta hacia un planeta más limpio", stats_title: "Impulsamos Resultados Reales con Impacto Ambiental",
        stats_desc: "Al suministrar neumáticos reciclados al por mayor a nivel mundial, hemos ayudado a desviar más de 2 millones de neumáticos de los vertederos.",
        stat1: "Toneladas mensuales", stat2: "Talleres atendidos", stat3: "Clientes mayoristas", stat4: "Países exportadores",
        // Process
        process_badge: "De la Recolección al Envío", process_title: "Así Trabajamos Día a Día",
        step1_title: "Contacto", step1_desc: "Nos contactas con tu necesidad específica",
        step2_title: "Evaluación", step2_desc: "Evaluamos tu stock o requerimientos",
        step3_title: "Recolección", step3_desc: "Organizamos la recogida de neumáticos",
        step4_title: "Envío", step4_desc: "Entregamos a tu destino con trazabilidad",
        // Blog
        blog_badge: "Explora Tendencias del Sector y Soluciones Verdes", blog_title: "Novedades sobre el Reciclaje de Neumáticos",
        blog_desc: "Descubre cómo los neumáticos reciclados ayudan a reducir residuos, ahorrar costos y apoyar la economía circular.", read_more: "Leer más",
        // Contact
        contact_badge: "Habla con nuestros expertos hoy", contact_title: "Te estamos esperando",
        contact_phone: "Ponerse en contacto", contact_email: "Correo electrónico", contact_location: "Ubicación",
        form_title: "Envíanos un mensaje En cualquier momento", form_name: "Nombre", form_email: "Correo electrónico",
        form_phone: "Número de teléfono", form_subject: "Asunto", form_message: "Mensaje", form_submit: "Enviar", map_title: "Nuestra Ubicación",
        // Footer
        footer_about: "Sobre Nosotros", footer_about_text: "En Volalte Gir, creemos que cuidar el planeta no debería ser un lujo, sino una responsabilidad compartida.",
        footer_more: "Saber más", footer_pages: "Páginas", footer_hours: "Contacto", footer_quote: "Pedir presupuesto",
        footer_newsletter: "Mantenerse en contacto", footer_newsletter_text: "Suscríbete a nuestra newsletter y recibe las últimas novedades.",
        footer_subscribe: "Suscribirse", footer_copyright: "© 2025 Volalte Gir. Todos los derechos reservados.",
        // Services Page
        serv_hero_title: "Clasificación y Exportación de Neumáticos Usados Barcelona",
        serv_hero_text1: "¿Buscas un proveedor fiable de neumáticos usados al por mayor?",
        serv_hero_text2: "¿Necesitas una solución profesional y legal para gestionar tus neumáticos fuera de uso?",
        serv_hero_text3: "Con Volalte Gir lo tienes todo: experiencia, logística y compromiso ambiental.",
        serv_hero_highlight: "Desde nuestras sedes en <strong>Barcelona y Gerona</strong>, recogemos y gestionamos más de <strong>1.000 toneladas mensuales</strong> de neumáticos usados, colaborando con más de <strong>5.000 talleres</strong>.",
        serv_section_title: "Nuestros Servicios",
        serv1_title: "Recolección de Neumáticos Usados", serv1_desc: "Recogemos neumáticos directamente en talleres, almacenes y centros de acopio en toda Cataluña. Servicio puntual o programado, con trazabilidad garantizada.",
        serv1_f1: "Cobertura en Barcelona, Gerona y alrededores", serv1_f2: "Atención a talleres, concesionarios, flotas, municipios",
        serv2_title: "Clasificación y Preparación", serv2_desc: "Todos los neumáticos que recolectamos pasan por un proceso de inspección visual y separación por tipo para Reutilización o Reciclaje.",
        serv2_f1: "Inspección visual detallada", serv2_f2: "Clasificación por tipo y condición", serv2_f3: "Preparación para reutilización o reciclaje",
        serv3_title: "Exportación de Neumáticos Reutilizables", serv3_desc: "Lotes listos para exportar hacia África, América Latina y Europa del Este.",
        serv3_f1: "Documentación completa para exportación", serv3_f2: "Contenedores preparados según destino", serv3_f3: "Asesoría en normativas internacionales",
        serv4_title: "Venta al Por Mayor de Neumáticos Usados", serv4_desc: "¿Eres revendedor, importador o comerciante? Accede a neumáticos clasificados listos para la venta.",
        serv4_f1: "Stock constante en todas las categorías", serv4_f2: "Precios competitivos", serv4_f3: "Asesoramiento personalizado",
        serv5_title: "Reciclaje Certificado | SIGNUS", serv5_desc: "Entregamos los neumáticos no reutilizables a SIGNUS, garantizando un reciclaje conforme a la normativa española y europea.",
        serv5_f1: "Seguimiento documental completo", serv5_f2: "Cumplimiento legal 100%", serv5_f3: "Compromiso con la economía circular",
        serv_cta_title: "¿Eres taller, municipio o revendedor internacional?", serv_cta_desc: "En Volalte Gir tenemos soluciones adaptadas a cada cliente. Nuestro equipo está listo para ayudarte con logística, precios y cumplimiento normativo.",
        serv_cta_btn: "Solicitar Presupuesto",
        why_title: "¿Por Qué Elegir a Volalte Gir?", why1_title: "Soluciones a Medida", why1_desc: "Adaptamos nuestros servicios según tus necesidades: volumen, frecuencia y destino.",
        why2_title: "Logística Propia", why2_desc: "Desde la recolección hasta la exportación, nos encargamos de todo el proceso.",
        why3_title: "Impacto Ambiental Real", why3_desc: "Reducimos residuos y fomentamos la reutilización responsable.",
        // Blog Page
        blog_hero_title: "Blog", blog_hero_desc: "Descubre las últimas noticias, guías y tendencias sobre el reciclaje de neumáticos, exportación y economía circular.",
        // Contact Page
        cont_hero_title: "Contacto Reciclaje Neumáticos Usados Barcelona",
        cont_hero_desc: "Estamos aquí para ayudarte. Contacta con nosotros para cualquier consulta sobre nuestros servicios de reciclaje y exportación de neumáticos.",
        cont_form_title: "Para cualquier consulta, Escríbenos", cont_form_empresa: "Nombre de la Empresa",
        cont_form_select: "Selecciona un asunto", cont_form_opt1: "Solicitar recogida de neumáticos", cont_form_opt2: "Comprar neumáticos al por mayor",
        cont_form_opt3: "Convertirme en distribuidor", cont_form_opt4: "Información sobre exportación", cont_form_opt5: "Otro",
        cont_form_mensaje: "Cuéntanos en qué podemos ayudarte...", cont_form_submit: "Enviar mensaje",
        cont_hours_title: "Horario de atención", cont_hours_text: "Lunes - Viernes: 9:00 - 18:00<br>Sábado: 9:00 - 14:00",
        cont_social_title: "Síguenos en redes sociales", cont_call_title: "¿Prefieres llamarnos directamente?", cont_call_desc: "Nuestro equipo está disponible para atenderte de lunes a viernes.",
        // About Page
        about_hero_title: "Sobre Nosotros", about_hero_desc: "Conoce la historia, misión y valores de Volalte Gir. Somos tu partner de confianza en la gestión sostenible de neumáticos usados en España.",
        about_history_badge: "Nuestra Historia", about_history_title: "Convertimos residuos en oportunidades",
        about_history_p1: "En <strong>Volalte Gir</strong>, creemos que cuidar el planeta no debería ser un lujo, sino una responsabilidad compartida — accesible, práctica y rentable para todos los negocios.",
        about_history_p2: "Nuestra historia nace de una necesidad urgente: cada año, millones de neumáticos llegan al final de su vida útil en España. Sin una gestión adecuada, estos neumáticos acaban en vertederos ilegales, contaminando el medio ambiente.",
        about_history_p3: "Fundamos Volalte Gir con una misión clara: <strong>transformar el problema de los neumáticos fuera de uso en una oportunidad de negocio sostenible</strong>.",
        about_mission_title: "Nuestra Misión", about_mission_desc: "Ofrecer soluciones profesionales, legales y sostenibles para la gestión de neumáticos usados, maximizando su reutilización y contribuyendo a la economía circular.",
        about_vision_title: "Nuestra Visión", about_vision_desc: "Ser el referente en España y Europa en la gestión responsable de neumáticos fuera de uso, liderando la transición hacia un modelo de economía circular.",
        about_values_title: "Nuestros Valores", about_values_desc: "Sostenibilidad, transparencia, profesionalismo y compromiso. Cada decisión está guiada por nuestro respeto al medio ambiente.",
        about_why_title: "¿Por qué elegir Volalte Gir?", about_why_desc: "Nos diferenciamos por nuestra experiencia, compromiso y resultados tangibles.",
        about_f1_title: "Experiencia Probada", about_f1_desc: "Más de 5.000 talleres confían en nosotros. Gestionamos más de 1.000 toneladas mensuales.",
        about_f2_title: "Cumplimiento Legal", about_f2_desc: "Trabajamos con SIGNUS y cumplimos todas las normativas españolas y europeas.",
        about_f3_title: "Servicio Integral", about_f3_desc: "Desde la recogida hasta la exportación, nos encargamos de todo el proceso.",
        about_f4_title: "Impacto Real", about_f4_desc: "Hemos desviado más de 2 millones de neumáticos de los vertederos.",
        about_f5_title: "Alcance Global", about_f5_desc: "Exportamos a más de 25 países en África, América Latina y Europa del Este.",
        about_f6_title: "Atención Personalizada", about_f6_desc: "Cada cliente es único. Adaptamos nuestros servicios a tus necesidades específicas.",
        about_stats_badge: "Nuestros Resultados", about_stats_title: "Impacto Ambiental Real",
        about_stats_desc: "Los números hablan por sí solos. Cada día trabajamos para reducir la huella ambiental.",
        about_stat1: "Neumáticos desviados de vertederos", about_stat2: "Talleres que confían en nosotros", about_stat3: "Clientes satisfechos", about_stat4: "Países de exportación",
        about_team_title: "Nuestro Equipo", about_team_desc: "Un equipo comprometido con la sostenibilidad y el servicio al cliente.",
        about_team1: "Dirección General", about_team1_desc: "Estrategia y desarrollo de negocio",
        about_team2: "Operaciones y Logística", about_team2_desc: "Gestión de recogidas y envíos",
        about_team3: "Atención al Cliente", about_team3_desc: "Soporte y asesoramiento",
        about_team4: "Comercio Internacional", about_team4_desc: "Exportación y nuevos mercados",
        about_cta_title: "¿Listo para trabajar con nosotros?", about_cta_desc: "Únete a los más de 5.000 talleres que ya confían en Volalte Gir.",
        about_cta_btn: "Contactar ahora",
        // Distributor Page
        dist_badge: "Programa de Distribuidores", dist_hero_title: "Conviértete en Distribuidor de Neumáticos Reciclados",
        dist_hero_desc: "Únete a nuestra red de distribuidores y accede a neumáticos de calidad al por mayor. Ofrecemos precios competitivos, soporte integral y logística eficiente.",
        dist_why_title: "¿Por Qué Ser Distribuidor de Volalte Gir?", dist_why_desc: "Accede a ventajas exclusivas que te ayudarán a hacer crecer tu negocio de forma sostenible.",
        dist_b1_title: "Precios Competitivos", dist_b1_desc: "Accede a precios especiales para distribuidores con descuentos por volumen.",
        dist_b2_title: "Stock Garantizado", dist_b2_desc: "Más de 1.000 toneladas mensuales disponibles. Nunca te quedarás sin inventario.",
        dist_b3_title: "Logística Incluida", dist_b3_desc: "Nos encargamos del transporte hasta tu almacén o directamente a tus clientes.",
        dist_b4_title: "Calidad Certificada", dist_b4_desc: "Todos los neumáticos pasan por inspección y clasificación. Documentación completa.",
        dist_b5_title: "Soporte Dedicado", dist_b5_desc: "Un gestor de cuenta personal para atender tus pedidos y resolver consultas.",
        dist_b6_title: "Alcance Internacional", dist_b6_desc: "Exportamos a más de 25 países. Te ayudamos con la logística internacional.",
        dist_how_title: "¿Cómo Funciona?", dist_how_desc: "Convertirte en distribuidor es fácil. Sigue estos pasos y empieza a vender.",
        dist_step1_title: "Solicita Información", dist_step1_desc: "Completa el formulario con tus datos. Te contactaremos en 24h.",
        dist_step2_title: "Evaluación", dist_step2_desc: "Analizamos tu perfil y capacidad para establecer las condiciones.",
        dist_step3_title: "Acuerdo Comercial", dist_step3_desc: "Firmamos un acuerdo con precios, condiciones y territorio.",
        dist_step4_title: "¡Empieza a Vender!", dist_step4_desc: "Realizas tu primer pedido y comienzas a ofrecer neumáticos.",
        dist_req_badge: "Perfil del Distribuidor", dist_req_title: "¿Qué Buscamos en un Distribuidor?",
        dist_req_desc: "Buscamos partners comprometidos con la calidad y la sostenibilidad.",
        dist_req1: "<strong>Negocio establecido:</strong> Taller, tienda de neumáticos, importador/exportador o similar.",
        dist_req2: "<strong>Capacidad de almacenamiento:</strong> Espacio para recibir lotes de neumáticos.",
        dist_req3: "<strong>Red de clientes:</strong> Acceso a compradores finales o mercados específicos.",
        dist_req4: "<strong>Compromiso de volumen mínimo:</strong> A acordar según mercado y capacidad.",
        dist_req5: "<strong>Documentación legal:</strong> Alta en actividad económica y cumplimiento fiscal.",
        dist_form_badge: "Únete a Nosotros", dist_form_title: "Solicita ser Distribuidor",
        dist_form_desc: "Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.",
        dist_form_empresa: "Nombre de la Empresa", dist_form_contacto: "Persona de Contacto",
        dist_form_pais: "País", dist_form_tipo: "Tipo de Negocio", dist_form_volumen: "Volumen Estimado Mensual",
        dist_form_mensaje: "Cuéntanos sobre tu negocio", dist_form_acepto: "Acepto la política de privacidad y el tratamiento de mis datos.",
        dist_form_submit: "Enviar Solicitud", dist_line: "Línea de Distribuidores", dist_email: "Email de Distribución",
        dist_cta_title: "¿Tienes preguntas sobre el programa?", dist_cta_desc: "Llámanos directamente y resolvemos todas tus dudas.",
        // Notifications
        notif_lang: "Idioma cambiado a", notif_form_error: "Por favor, completa todos los campos requeridos.",
        notif_email_error: "Por favor, introduce un email válido.", notif_form_success: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        notif_newsletter_success: "¡Te has suscrito correctamente!", notif_sending: "Enviando...", notif_dist_success: "¡Solicitud enviada! Te contactaremos en menos de 24 horas."
    },
    ca: {
        nav_inicio: "Inici", nav_servicios: "Serveis", nav_blog: "Blog", nav_contacto: "Contacte", nav_sobre: "Sobre Nosaltres",
        btn_contactanos: "Contacta'ns", btn_distribuidor: "Converteix-te en distribuïdor", logo_slogan: "Reciclatge de Pneumàtics", mobile_lang: "Idioma:",
        hero_title: "Pneumàtics Reciclats a l'Engròs", hero_highlight: "que Generen Impacte",
        hero_desc: "Compra pneumàtics reciclats a l'engròs i uneix-te al canvi cap a un planeta més net i sostenible.", hero_cta: "Saber-ne més",
        about_badge: "Som el teu proveïdor de confiança a Espanya de pneumàtics reciclats", about_title: "Convertim residus en oportunitats",
        about_desc: "La recollida de pneumàtics usats Barcelona és el servei principal de <strong>Volalte Gir</strong>. Oferim solucions ràpides, legals i segures per a tallers, exportadors i entitats públiques.",
        services_badge: "Subministrem, Acompanyem i Sostenim", services_title: "Molt Més que Pneumàtics",
        service1_title: "Pneumàtics reciclats per a la venda", service1_desc: "Alta qualitat, llestos per a la seva reutilització",
        service2_title: "Venda a l'engròs de pneumàtics usats", service2_desc: "Estoc constant i selecció per tipus",
        service3_title: "Productes derivats de pneumàtics", service3_desc: "Solucions reutilitzables per a diferents indústries",
        service4_title: "Logística amb consciència ecològica", service4_desc: "Recollida i transport amb traçabilitat garantida",
        cta_badge: "Parla amb els nostres experts avui", cta_title: "Preparat per fer el següent pas sostenible?",
        cta_desc: "El nostre equip és aquí per ajudar-te a triar una solució professional i legal per a la gestió dels teus pneumàtics usats.",
        cta_button: "Saber-ne més", call_title: "Parla avui amb un", call_highlight: "Especialista en Reciclatge de Pneumàtics", call_button: "Trucar ara",
        benefits_badge: "Per què escollir-nos?", benefits_title: "Compromesos amb el planeta", benefits_desc: "Cada pneumàtic reciclat és un pas cap a un futur més sostenible",
        benefit1_title: "Evita que els pneumàtics acabin als abocadors", benefit1_subtitle: "Els pneumàtics reciclats tenen una segona vida",
        benefit1_desc: "Més de 1.000 milions de pneumàtics arriben al final de la seva vida útil cada any.", benefit1_cta: "Veure pneumàtics reciclats",
        benefit2_title: "Redueix la teva petjada de carboni", benefit2_subtitle: "Reutilitzar redueix l'impacte ambiental",
        benefit2_desc: "Fabricar un pneumàtic nou pot requerir fins a 83 litres de petroli.", benefit2_cta: "Tria opcions sostenibles",
        benefit3_title: "Impulsa el canvi cap a l'economia circular", benefit3_subtitle: "Cada pneumàtic compta en un sistema més verd",
        benefit3_desc: "El reciclatge de pneumàtics dona suport als objectius del Pacte Verd Europeu.", benefit3_cta: "Uneix-te al canvi circular",
        stats_badge: "Cada pneumàtic compta cap a un planeta més net", stats_title: "Impulsem Resultats Reals amb Impacte Ambiental",
        stats_desc: "En subministrar pneumàtics reciclats a l'engròs a nivell mundial, hem ajudat a desviar més de 2 milions de pneumàtics dels abocadors.",
        stat1: "Tones mensuals", stat2: "Tallers atesos", stat3: "Clients majoristes", stat4: "Països exportadors",
        process_badge: "De la Recollida a l'Enviament", process_title: "Així Treballem Dia a Dia",
        step1_title: "Contacte", step1_desc: "Ens contactes amb la teva necessitat específica",
        step2_title: "Avaluació", step2_desc: "Avaluem el teu estoc o requeriments",
        step3_title: "Recollida", step3_desc: "Organitzem la recollida de pneumàtics",
        step4_title: "Enviament", step4_desc: "Lliurem a la teva destinació amb traçabilitat",
        blog_badge: "Explora Tendències del Sector i Solucions Verdes", blog_title: "Novetats sobre el Reciclatge de Pneumàtics",
        blog_desc: "Descobreix com els pneumàtics reciclats ajuden a reduir residus.", read_more: "Llegir més",
        contact_badge: "Parla amb els nostres experts avui", contact_title: "T'estem esperant",
        contact_phone: "Posar-se en contacte", contact_email: "Correu electrònic", contact_location: "Ubicació",
        form_title: "Envia'ns un missatge en qualsevol moment", form_name: "Nom", form_email: "Correu electrònic",
        form_phone: "Número de telèfon", form_subject: "Assumpte", form_message: "Missatge", form_submit: "Enviar", map_title: "La Nostra Ubicació",
        footer_about: "Sobre Nosaltres", footer_about_text: "A Volalte Gir, creiem que cuidar el planeta no hauria de ser un luxe, sinó una responsabilitat compartida.",
        footer_more: "Saber-ne més", footer_pages: "Pàgines", footer_hours: "Contacte", footer_quote: "Demanar pressupost",
        footer_newsletter: "Mantenir-se en contacte", footer_newsletter_text: "Subscriu-te al nostre butlletí.", footer_subscribe: "Subscriure",
        footer_copyright: "© 2025 Volalte Gir. Tots els drets reservats.",
        serv_hero_title: "Classificació i Exportació de Pneumàtics Usats Barcelona",
        serv_hero_text1: "Busques un proveïdor fiable de pneumàtics usats a l'engròs?",
        serv_hero_text2: "Necessites una solució professional i legal per gestionar els teus pneumàtics fora d'ús?",
        serv_hero_text3: "Amb Volalte Gir ho tens tot: experiència, logística i compromís ambiental.",
        serv_hero_highlight: "Des de les nostres seus a <strong>Barcelona i Girona</strong>, recollim i gestionem més de <strong>1.000 tones mensuals</strong> de pneumàtics usats, col·laborant amb més de <strong>5.000 tallers</strong>.",
        serv_section_title: "Els Nostres Serveis",
        serv1_title: "Recollida de Pneumàtics Usats", serv1_desc: "Recollim pneumàtics directament en tallers, magatzems i centres d'aplec a tota Catalunya.",
        serv1_f1: "Cobertura a Barcelona, Girona i rodalies", serv1_f2: "Atenció a tallers, concessionaris, flotes, municipis",
        serv2_title: "Classificació i Preparació", serv2_desc: "Tots els pneumàtics que recollim passen per un procés d'inspecció visual i separació per tipus.",
        serv2_f1: "Inspecció visual detallada", serv2_f2: "Classificació per tipus i condició", serv2_f3: "Preparació per a reutilització o reciclatge",
        serv3_title: "Exportació de Pneumàtics Reutilitzables", serv3_desc: "Lots llestos per exportar cap a Àfrica, Amèrica Llatina i Europa de l'Est.",
        serv3_f1: "Documentació completa per a exportació", serv3_f2: "Contenidors preparats segons destinació", serv3_f3: "Assessoria en normatives internacionals",
        serv4_title: "Venda a l'Engròs de Pneumàtics Usats", serv4_desc: "Ets revenedor, importador o comerciant? Accedeix a pneumàtics classificats llestos per a la venda.",
        serv4_f1: "Estoc constant en totes les categories", serv4_f2: "Preus competitius", serv4_f3: "Assessorament personalitzat",
        serv5_title: "Reciclatge Certificat | SIGNUS", serv5_desc: "Lliurem els pneumàtics no reutilitzables a SIGNUS, garantint un reciclatge conforme a la normativa.",
        serv5_f1: "Seguiment documental complet", serv5_f2: "Compliment legal 100%", serv5_f3: "Compromís amb l'economia circular",
        serv_cta_title: "Ets taller, municipi o revenedor internacional?", serv_cta_desc: "A Volalte Gir tenim solucions adaptades a cada client.",
        serv_cta_btn: "Sol·licitar Pressupost",
        why_title: "Per Què Triar Volalte Gir?", why1_title: "Solucions a Mida", why1_desc: "Adaptem els nostres serveis segons les teves necessitats.",
        why2_title: "Logística Pròpia", why2_desc: "Des de la recollida fins a l'exportació, ens encarreguem de tot.",
        why3_title: "Impacte Ambiental Real", why3_desc: "Reduïm residus i fomentem la reutilització responsable.",
        blog_hero_title: "Blog", blog_hero_desc: "Descobreix les últimes notícies, guies i tendències sobre el reciclatge de pneumàtics.",
        cont_hero_title: "Contacte Reciclatge Pneumàtics Usats Barcelona",
        cont_hero_desc: "Som aquí per ajudar-te. Contacta amb nosaltres per a qualsevol consulta.",
        cont_form_title: "Per a qualsevol consulta, Escriu-nos", cont_form_empresa: "Nom de l'Empresa",
        cont_form_select: "Selecciona un assumpte", cont_form_opt1: "Sol·licitar recollida de pneumàtics", cont_form_opt2: "Comprar pneumàtics a l'engròs",
        cont_form_opt3: "Convertir-me en distribuïdor", cont_form_opt4: "Informació sobre exportació", cont_form_opt5: "Altre",
        cont_form_mensaje: "Explica'ns en què podem ajudar-te...", cont_form_submit: "Enviar missatge",
        cont_hours_title: "Horari d'atenció", cont_hours_text: "Dilluns - Divendres: 9:00 - 18:00<br>Dissabte: 9:00 - 14:00",
        cont_social_title: "Segueix-nos a les xarxes socials", cont_call_title: "Prefereixes trucar-nos directament?", cont_call_desc: "El nostre equip està disponible per atendre't.",
        about_hero_title: "Sobre Nosaltres", about_hero_desc: "Coneix la història, missió i valors de Volalte Gir.",
        about_history_badge: "La Nostra Història", about_history_title: "Convertim residus en oportunitats",
        about_history_p1: "A <strong>Volalte Gir</strong>, creiem que cuidar el planeta no hauria de ser un luxe, sinó una responsabilitat compartida.",
        about_history_p2: "La nostra història neix d'una necessitat urgent: cada any, milions de pneumàtics arriben al final de la seva vida útil a Espanya.",
        about_history_p3: "Vam fundar Volalte Gir amb una missió clara: <strong>transformar el problema dels pneumàtics fora d'ús en una oportunitat de negoci sostenible</strong>.",
        about_mission_title: "La Nostra Missió", about_mission_desc: "Oferir solucions professionals, legals i sostenibles per a la gestió de pneumàtics usats.",
        about_vision_title: "La Nostra Visió", about_vision_desc: "Ser el referent a Espanya i Europa en la gestió responsable de pneumàtics fora d'ús.",
        about_values_title: "Els Nostres Valors", about_values_desc: "Sostenibilitat, transparència, professionalisme i compromís.",
        about_why_title: "Per què triar Volalte Gir?", about_why_desc: "Ens diferenciem per la nostra experiència, compromís i resultats tangibles.",
        about_f1_title: "Experiència Provada", about_f1_desc: "Més de 5.000 tallers confien en nosaltres.",
        about_f2_title: "Compliment Legal", about_f2_desc: "Treballem amb SIGNUS i complim totes les normatives.",
        about_f3_title: "Servei Integral", about_f3_desc: "Des de la recollida fins a l'exportació.",
        about_f4_title: "Impacte Real", about_f4_desc: "Hem desviat més de 2 milions de pneumàtics dels abocadors.",
        about_f5_title: "Abast Global", about_f5_desc: "Exportem a més de 25 països.",
        about_f6_title: "Atenció Personalitzada", about_f6_desc: "Cada client és únic. Adaptem els nostres serveis.",
        about_stats_badge: "Els Nostres Resultats", about_stats_title: "Impacte Ambiental Real",
        about_stats_desc: "Els números parlen per si sols.",
        about_stat1: "Pneumàtics desviats d'abocadors", about_stat2: "Tallers que confien en nosaltres", about_stat3: "Clients satisfets", about_stat4: "Països d'exportació",
        about_team_title: "El Nostre Equip", about_team_desc: "Un equip compromès amb la sostenibilitat.",
        about_team1: "Direcció General", about_team1_desc: "Estratègia i desenvolupament de negoci",
        about_team2: "Operacions i Logística", about_team2_desc: "Gestió de recollides i enviaments",
        about_team3: "Atenció al Client", about_team3_desc: "Suport i assessorament",
        about_team4: "Comerç Internacional", about_team4_desc: "Exportació i nous mercats",
        about_cta_title: "Preparat per treballar amb nosaltres?", about_cta_desc: "Uneix-te als més de 5.000 tallers que ja confien en Volalte Gir.",
        about_cta_btn: "Contactar ara",
        dist_badge: "Programa de Distribuïdors", dist_hero_title: "Converteix-te en Distribuïdor de Pneumàtics Reciclats",
        dist_hero_desc: "Uneix-te a la nostra xarxa de distribuïdors i accedeix a pneumàtics de qualitat a l'engròs.",
        dist_why_title: "Per Què Ser Distribuïdor de Volalte Gir?", dist_why_desc: "Accedeix a avantatges exclusius per fer créixer el teu negoci.",
        dist_b1_title: "Preus Competitius", dist_b1_desc: "Accedeix a preus especials amb descomptes per volum.",
        dist_b2_title: "Estoc Garantit", dist_b2_desc: "Més de 1.000 tones mensuals disponibles.",
        dist_b3_title: "Logística Inclosa", dist_b3_desc: "Ens encarreguem del transport fins al teu magatzem.",
        dist_b4_title: "Qualitat Certificada", dist_b4_desc: "Tots els pneumàtics passen per inspecció.",
        dist_b5_title: "Suport Dedicat", dist_b5_desc: "Un gestor de compte personal.",
        dist_b6_title: "Abast Internacional", dist_b6_desc: "Exportem a més de 25 països.",
        dist_how_title: "Com Funciona?", dist_how_desc: "Convertir-te en distribuïdor és fàcil.",
        dist_step1_title: "Sol·licita Informació", dist_step1_desc: "Completa el formulari. Et contactarem en 24h.",
        dist_step2_title: "Avaluació", dist_step2_desc: "Analitzem el teu perfil i capacitat.",
        dist_step3_title: "Acord Comercial", dist_step3_desc: "Signem un acord amb preus i condicions.",
        dist_step4_title: "Comença a Vendre!", dist_step4_desc: "Fas el teu primer comanda.",
        dist_req_badge: "Perfil del Distribuïdor", dist_req_title: "Què Busquem en un Distribuïdor?",
        dist_req_desc: "Busquem partners compromesos amb la qualitat i la sostenibilitat.",
        dist_req1: "<strong>Negoci establert:</strong> Taller, botiga de pneumàtics, importador/exportador o similar.",
        dist_req2: "<strong>Capacitat d'emmagatzematge:</strong> Espai per rebre lots de pneumàtics.",
        dist_req3: "<strong>Xarxa de clients:</strong> Accés a compradors finals o mercats específics.",
        dist_req4: "<strong>Compromís de volum mínim:</strong> A acordar segons mercat i capacitat.",
        dist_req5: "<strong>Documentació legal:</strong> Alta en activitat econòmica i compliment fiscal.",
        dist_form_badge: "Uneix-te a Nosaltres", dist_form_title: "Sol·licita ser Distribuïdor",
        dist_form_desc: "Completa el formulari i et contactarem en menys de 24 hores.",
        dist_form_empresa: "Nom de l'Empresa", dist_form_contacto: "Persona de Contacte",
        dist_form_pais: "País", dist_form_tipo: "Tipus de Negoci", dist_form_volumen: "Volum Estimat Mensual",
        dist_form_mensaje: "Explica'ns sobre el teu negoci", dist_form_acepto: "Accepto la política de privacitat.",
        dist_form_submit: "Enviar Sol·licitud", dist_line: "Línia de Distribuïdors", dist_email: "Email de Distribució",
        dist_cta_title: "Tens preguntes sobre el programa?", dist_cta_desc: "Truca'ns directament.",
        notif_lang: "Idioma canviat a", notif_form_error: "Si us plau, omple tots els camps requerits.",
        notif_email_error: "Si us plau, introdueix un email vàlid.", notif_form_success: "Missatge enviat amb èxit!",
        notif_newsletter_success: "T'has subscrit correctament!", notif_sending: "Enviant...", notif_dist_success: "Sol·licitud enviada!"
    },
    fr: {
        nav_inicio: "Accueil", nav_servicios: "Services", nav_blog: "Blog", nav_contacto: "Contact", nav_sobre: "À Propos",
        btn_contactanos: "Contactez-nous", btn_distribuidor: "Devenez distributeur", logo_slogan: "Recyclage de Pneus", mobile_lang: "Langue:",
        hero_title: "Pneus Recyclés en Gros", hero_highlight: "qui Génèrent un Impact",
        hero_desc: "Achetez des pneus recyclés en gros et rejoignez le changement vers une planète plus propre et durable.", hero_cta: "En savoir plus",
        about_badge: "Nous sommes votre fournisseur de confiance en Espagne pour les pneus recyclés", about_title: "Nous transformons les déchets en opportunités",
        about_desc: "La collecte de pneus usagés à Barcelone est le service principal de <strong>Volalte Gir</strong>. Nous offrons des solutions rapides, légales et sûres.",
        services_badge: "Nous Fournissons, Accompagnons et Soutenons", services_title: "Bien Plus que des Pneus",
        service1_title: "Pneus recyclés à vendre", service1_desc: "Haute qualité, prêts à être réutilisés",
        service2_title: "Vente en gros de pneus usagés", service2_desc: "Stock constant et sélection par type",
        service3_title: "Produits dérivés de pneus", service3_desc: "Solutions réutilisables pour différentes industries",
        service4_title: "Logistique éco-responsable", service4_desc: "Collecte et transport avec traçabilité garantie",
        cta_badge: "Parlez à nos experts aujourd'hui", cta_title: "Prêt à faire le prochain pas durable?",
        cta_desc: "Notre équipe est là pour vous aider à choisir une solution professionnelle et légale.",
        cta_button: "En savoir plus", call_title: "Parlez aujourd'hui à un", call_highlight: "Spécialiste du Recyclage de Pneus", call_button: "Appeler maintenant",
        benefits_badge: "Pourquoi nous choisir?", benefits_title: "Engagés pour la planète", benefits_desc: "Chaque pneu recyclé est un pas vers un avenir plus durable",
        benefit1_title: "Évitez que les pneus finissent dans les décharges", benefit1_subtitle: "Les pneus recyclés ont une seconde vie",
        benefit1_desc: "Plus d'un milliard de pneus arrivent en fin de vie chaque année.", benefit1_cta: "Voir les pneus recyclés",
        benefit2_title: "Réduisez votre empreinte carbone", benefit2_subtitle: "Réutiliser réduit l'impact environnemental",
        benefit2_desc: "Fabriquer un pneu neuf peut nécessiter jusqu'à 83 litres de pétrole.", benefit2_cta: "Choisissez des options durables",
        benefit3_title: "Poussez le changement vers l'économie circulaire", benefit3_subtitle: "Chaque pneu compte dans un système plus vert",
        benefit3_desc: "Le recyclage des pneus soutient les objectifs du Pacte Vert Européen.", benefit3_cta: "Rejoignez le changement circulaire",
        stats_badge: "Chaque pneu compte vers une planète plus propre", stats_title: "Nous Générons des Résultats Réels avec Impact Environnemental",
        stats_desc: "En fournissant des pneus recyclés en gros dans le monde entier, nous avons aidé à détourner plus de 2 millions de pneus des décharges.",
        stat1: "Tonnes mensuelles", stat2: "Ateliers servis", stat3: "Clients grossistes", stat4: "Pays exportateurs",
        process_badge: "De la Collecte à l'Expédition", process_title: "Voici Comment Nous Travaillons au Quotidien",
        step1_title: "Contact", step1_desc: "Vous nous contactez avec votre besoin spécifique",
        step2_title: "Évaluation", step2_desc: "Nous évaluons votre stock ou vos besoins",
        step3_title: "Collecte", step3_desc: "Nous organisons la collecte des pneus",
        step4_title: "Expédition", step4_desc: "Nous livrons à votre destination avec traçabilité",
        blog_badge: "Explorez les Tendances du Secteur et les Solutions Vertes", blog_title: "Actualités sur le Recyclage des Pneus",
        blog_desc: "Découvrez comment les pneus recyclés aident à réduire les déchets.", read_more: "Lire la suite",
        contact_badge: "Parlez à nos experts aujourd'hui", contact_title: "Nous vous attendons",
        contact_phone: "Nous contacter", contact_email: "Email", contact_location: "Emplacement",
        form_title: "Envoyez-nous un message à tout moment", form_name: "Nom", form_email: "Email",
        form_phone: "Numéro de téléphone", form_subject: "Sujet", form_message: "Message", form_submit: "Envoyer", map_title: "Notre Emplacement",
        footer_about: "À Propos de Nous", footer_about_text: "Chez Volalte Gir, nous croyons que prendre soin de la planète ne devrait pas être un luxe.",
        footer_more: "En savoir plus", footer_pages: "Pages", footer_hours: "Contact", footer_quote: "Demander un devis",
        footer_newsletter: "Restez en contact", footer_newsletter_text: "Abonnez-vous à notre newsletter.", footer_subscribe: "S'abonner",
        footer_copyright: "© 2025 Volalte Gir. Tous droits réservés.",
        serv_hero_title: "Classification et Exportation de Pneus Usagés Barcelone",
        serv_hero_text1: "Vous cherchez un fournisseur fiable de pneus usagés en gros?",
        serv_hero_text2: "Vous avez besoin d'une solution professionnelle et légale pour gérer vos pneus usagés?",
        serv_hero_text3: "Avec Volalte Gir vous avez tout: expérience, logistique et engagement environnemental.",
        serv_hero_highlight: "Depuis nos sièges à <strong>Barcelone et Gérone</strong>, nous collectons et gérons plus de <strong>1.000 tonnes mensuelles</strong> de pneus usagés, en collaborant avec plus de <strong>5.000 ateliers</strong>.",
        serv_section_title: "Nos Services",
        serv1_title: "Collecte de Pneus Usagés", serv1_desc: "Nous collectons les pneus directement dans les ateliers, entrepôts et centres de collecte.",
        serv1_f1: "Couverture à Barcelone, Gérone et environs", serv1_f2: "Service aux ateliers, concessionnaires, flottes, municipalités",
        serv2_title: "Classification et Préparation", serv2_desc: "Tous les pneus que nous collectons passent par un processus d'inspection visuelle et de séparation.",
        serv2_f1: "Inspection visuelle détaillée", serv2_f2: "Classification par type et condition", serv2_f3: "Préparation pour réutilisation ou recyclage",
        serv3_title: "Exportation de Pneus Réutilisables", serv3_desc: "Lots prêts à exporter vers l'Afrique, l'Amérique latine et l'Europe de l'Est.",
        serv3_f1: "Documentation complète pour l'exportation", serv3_f2: "Conteneurs préparés selon destination", serv3_f3: "Conseil en réglementations internationales",
        serv4_title: "Vente en Gros de Pneus Usagés", serv4_desc: "Vous êtes revendeur, importateur ou commerçant? Accédez à des pneus classifiés prêts à la vente.",
        serv4_f1: "Stock constant dans toutes les catégories", serv4_f2: "Prix compétitifs", serv4_f3: "Conseil personnalisé",
        serv5_title: "Recyclage Certifié | SIGNUS", serv5_desc: "Nous livrons les pneus non réutilisables à SIGNUS, garantissant un recyclage conforme.",
        serv5_f1: "Suivi documentaire complet", serv5_f2: "Conformité légale 100%", serv5_f3: "Engagement envers l'économie circulaire",
        serv_cta_title: "Vous êtes atelier, municipalité ou revendeur international?", serv_cta_desc: "Chez Volalte Gir nous avons des solutions adaptées à chaque client.",
        serv_cta_btn: "Demander un Devis",
        why_title: "Pourquoi Choisir Volalte Gir?", why1_title: "Solutions Sur Mesure", why1_desc: "Nous adaptons nos services selon vos besoins.",
        why2_title: "Logistique Propre", why2_desc: "De la collecte à l'exportation, nous nous occupons de tout.",
        why3_title: "Impact Environnemental Réel", why3_desc: "Nous réduisons les déchets et favorisons la réutilisation.",
        blog_hero_title: "Blog", blog_hero_desc: "Découvrez les dernières actualités, guides et tendances sur le recyclage des pneus.",
        cont_hero_title: "Contact Recyclage Pneus Usagés Barcelone", cont_hero_desc: "Nous sommes là pour vous aider. Contactez-nous pour toute question.",
        cont_form_title: "Pour toute question, Écrivez-nous", cont_form_empresa: "Nom de l'Entreprise",
        cont_form_select: "Sélectionnez un sujet", cont_form_opt1: "Demander une collecte de pneus", cont_form_opt2: "Acheter des pneus en gros",
        cont_form_opt3: "Devenir distributeur", cont_form_opt4: "Informations sur l'exportation", cont_form_opt5: "Autre",
        cont_form_mensaje: "Dites-nous comment nous pouvons vous aider...", cont_form_submit: "Envoyer le message",
        cont_hours_title: "Heures d'ouverture", cont_hours_text: "Lundi - Vendredi: 9:00 - 18:00<br>Samedi: 9:00 - 14:00",
        cont_social_title: "Suivez-nous sur les réseaux sociaux", cont_call_title: "Préférez-vous nous appeler directement?", cont_call_desc: "Notre équipe est disponible pour vous servir.",
        about_hero_title: "À Propos de Nous", about_hero_desc: "Découvrez l'histoire, la mission et les valeurs de Volalte Gir.",
        about_history_badge: "Notre Histoire", about_history_title: "Nous transformons les déchets en opportunités",
        about_history_p1: "Chez <strong>Volalte Gir</strong>, nous croyons que prendre soin de la planète ne devrait pas être un luxe, mais une responsabilité partagée.",
        about_history_p2: "Notre histoire naît d'un besoin urgent: chaque année, des millions de pneus arrivent en fin de vie en Espagne.",
        about_history_p3: "Nous avons fondé Volalte Gir avec une mission claire: <strong>transformer le problème des pneus usagés en une opportunité commerciale durable</strong>.",
        about_mission_title: "Notre Mission", about_mission_desc: "Offrir des solutions professionnelles, légales et durables pour la gestion des pneus usagés.",
        about_vision_title: "Notre Vision", about_vision_desc: "Être la référence en Espagne et en Europe dans la gestion responsable des pneus usagés.",
        about_values_title: "Nos Valeurs", about_values_desc: "Durabilité, transparence, professionnalisme et engagement.",
        about_why_title: "Pourquoi choisir Volalte Gir?", about_why_desc: "Nous nous distinguons par notre expérience, notre engagement et nos résultats tangibles.",
        about_f1_title: "Expérience Prouvée", about_f1_desc: "Plus de 5.000 ateliers nous font confiance.",
        about_f2_title: "Conformité Légale", about_f2_desc: "Nous travaillons avec SIGNUS et respectons toutes les réglementations.",
        about_f3_title: "Service Complet", about_f3_desc: "De la collecte à l'exportation.",
        about_f4_title: "Impact Réel", about_f4_desc: "Nous avons détourné plus de 2 millions de pneus des décharges.",
        about_f5_title: "Portée Mondiale", about_f5_desc: "Nous exportons vers plus de 25 pays.",
        about_f6_title: "Attention Personnalisée", about_f6_desc: "Chaque client est unique. Nous adaptons nos services.",
        about_stats_badge: "Nos Résultats", about_stats_title: "Impact Environnemental Réel", about_stats_desc: "Les chiffres parlent d'eux-mêmes.",
        about_stat1: "Pneus détournés des décharges", about_stat2: "Ateliers qui nous font confiance", about_stat3: "Clients satisfaits", about_stat4: "Pays d'exportation",
        about_team_title: "Notre Équipe", about_team_desc: "Une équipe engagée pour la durabilité.",
        about_team1: "Direction Générale", about_team1_desc: "Stratégie et développement commercial",
        about_team2: "Opérations et Logistique", about_team2_desc: "Gestion des collectes et expéditions",
        about_team3: "Service Client", about_team3_desc: "Support et conseil",
        about_team4: "Commerce International", about_team4_desc: "Exportation et nouveaux marchés",
        about_cta_title: "Prêt à travailler avec nous?", about_cta_desc: "Rejoignez les plus de 5.000 ateliers qui font confiance à Volalte Gir.",
        about_cta_btn: "Contacter maintenant",
        dist_badge: "Programme de Distributeurs", dist_hero_title: "Devenez Distributeur de Pneus Recyclés",
        dist_hero_desc: "Rejoignez notre réseau de distributeurs et accédez à des pneus de qualité en gros.",
        dist_why_title: "Pourquoi Devenir Distributeur Volalte Gir?", dist_why_desc: "Accédez à des avantages exclusifs pour développer votre entreprise.",
        dist_b1_title: "Prix Compétitifs", dist_b1_desc: "Accédez à des prix spéciaux avec des remises sur volume.",
        dist_b2_title: "Stock Garanti", dist_b2_desc: "Plus de 1.000 tonnes mensuelles disponibles.",
        dist_b3_title: "Logistique Incluse", dist_b3_desc: "Nous nous occupons du transport jusqu'à votre entrepôt.",
        dist_b4_title: "Qualité Certifiée", dist_b4_desc: "Tous les pneus passent par une inspection.",
        dist_b5_title: "Support Dédié", dist_b5_desc: "Un gestionnaire de compte personnel.",
        dist_b6_title: "Portée Internationale", dist_b6_desc: "Nous exportons vers plus de 25 pays.",
        dist_how_title: "Comment Ça Marche?", dist_how_desc: "Devenir distributeur est facile.",
        dist_step1_title: "Demandez des Informations", dist_step1_desc: "Remplissez le formulaire. Nous vous contacterons en 24h.",
        dist_step2_title: "Évaluation", dist_step2_desc: "Nous analysons votre profil et capacité.",
        dist_step3_title: "Accord Commercial", dist_step3_desc: "Nous signons un accord avec prix et conditions.",
        dist_step4_title: "Commencez à Vendre!", dist_step4_desc: "Vous passez votre première commande.",
        dist_req_badge: "Profil du Distributeur", dist_req_title: "Que Recherchons-nous chez un Distributeur?",
        dist_req_desc: "Nous recherchons des partenaires engagés pour la qualité et la durabilité.",
        dist_req1: "<strong>Entreprise établie:</strong> Atelier, magasin de pneus, importateur/exportateur ou similaire.",
        dist_req2: "<strong>Capacité de stockage:</strong> Espace pour recevoir des lots de pneus.",
        dist_req3: "<strong>Réseau de clients:</strong> Accès aux acheteurs finaux ou marchés spécifiques.",
        dist_req4: "<strong>Engagement de volume minimum:</strong> À convenir selon le marché et la capacité.",
        dist_req5: "<strong>Documentation légale:</strong> Inscription à l'activité économique et conformité fiscale.",
        dist_form_badge: "Rejoignez-nous", dist_form_title: "Demandez à Devenir Distributeur",
        dist_form_desc: "Remplissez le formulaire et nous vous contacterons en moins de 24 heures.",
        dist_form_empresa: "Nom de l'Entreprise", dist_form_contacto: "Personne de Contact",
        dist_form_pais: "Pays", dist_form_tipo: "Type d'Entreprise", dist_form_volumen: "Volume Estimé Mensuel",
        dist_form_mensaje: "Parlez-nous de votre entreprise", dist_form_acepto: "J'accepte la politique de confidentialité.",
        dist_form_submit: "Envoyer la Demande", dist_line: "Ligne Distributeurs", dist_email: "Email Distribution",
        dist_cta_title: "Vous avez des questions sur le programme?", dist_cta_desc: "Appelez-nous directement.",
        notif_lang: "Langue changée en", notif_form_error: "Veuillez remplir tous les champs requis.",
        notif_email_error: "Veuillez entrer un email valide.", notif_form_success: "Message envoyé avec succès!",
        notif_newsletter_success: "Vous êtes abonné!", notif_sending: "Envoi en cours...", notif_dist_success: "Demande envoyée!"
    },
    en: {
        nav_inicio: "Home", nav_servicios: "Services", nav_blog: "Blog", nav_contacto: "Contact", nav_sobre: "About Us",
        btn_contactanos: "Contact Us", btn_distribuidor: "Become a Distributor", logo_slogan: "Tire Recycling", mobile_lang: "Language:",
        hero_title: "Wholesale Recycled Tires", hero_highlight: "that Generate Impact",
        hero_desc: "Buy wholesale recycled tires and join the change towards a cleaner and more sustainable planet.", hero_cta: "Learn more",
        about_badge: "We are your trusted supplier in Spain for recycled tires", about_title: "We turn waste into opportunities",
        about_desc: "Used tire collection in Barcelona is the main service of <strong>Volalte Gir</strong>. We offer fast, legal and safe solutions for workshops, exporters and public entities.",
        services_badge: "We Supply, Support and Sustain", services_title: "Much More Than Tires",
        service1_title: "Recycled tires for sale", service1_desc: "High quality, ready for reuse",
        service2_title: "Wholesale used tires", service2_desc: "Constant stock and selection by type",
        service3_title: "Tire-derived products", service3_desc: "Reusable solutions for different industries",
        service4_title: "Eco-conscious logistics", service4_desc: "Collection and transport with guaranteed traceability",
        cta_badge: "Speak to Our Experts Today", cta_title: "Ready to take the next sustainable step?",
        cta_desc: "Our team is here to help you choose a professional and legal solution for managing your used tires.",
        cta_button: "Learn more", call_title: "Talk today with a", call_highlight: "Tire Recycling Specialist", call_button: "Call now",
        benefits_badge: "Why choose us?", benefits_title: "Committed to the planet", benefits_desc: "Every recycled tire is a step towards a more sustainable future",
        benefit1_title: "Prevent tires from ending up in landfills", benefit1_subtitle: "Recycled tires have a second life",
        benefit1_desc: "Over 1 billion tires reach end of life each year.", benefit1_cta: "View recycled tires",
        benefit2_title: "Reduce your carbon footprint", benefit2_subtitle: "Reusing reduces environmental impact",
        benefit2_desc: "Manufacturing a new tire can require up to 83 liters of oil.", benefit2_cta: "Choose sustainable options",
        benefit3_title: "Drive the change towards circular economy", benefit3_subtitle: "Every tire counts in a greener system",
        benefit3_desc: "Tire recycling supports the European Green Deal objectives.", benefit3_cta: "Join the circular change",
        stats_badge: "Every tire counts towards a cleaner planet", stats_title: "We Drive Real Results with Environmental Impact",
        stats_desc: "By supplying wholesale recycled tires globally, we've helped divert over 2 million tires from landfills.",
        stat1: "Monthly tons", stat2: "Workshops served", stat3: "Wholesale clients", stat4: "Export countries",
        process_badge: "From Collection to Shipping", process_title: "How We Work Every Day",
        step1_title: "Contact", step1_desc: "You contact us with your specific need",
        step2_title: "Evaluation", step2_desc: "We evaluate your stock or requirements",
        step3_title: "Collection", step3_desc: "We organize tire pickup",
        step4_title: "Shipping", step4_desc: "We deliver to your destination with traceability",
        blog_badge: "Explore Industry Trends and Green Solutions", blog_title: "Tire Recycling News",
        blog_desc: "Discover how recycled tires help reduce waste and support the circular economy.", read_more: "Read More",
        contact_badge: "Talk to our experts today", contact_title: "We are waiting for you",
        contact_phone: "Get in touch", contact_email: "Email", contact_location: "Location",
        form_title: "Send us a message anytime", form_name: "Name", form_email: "Email",
        form_phone: "Phone number", form_subject: "Subject", form_message: "Message", form_submit: "Send", map_title: "Our Location",
        footer_about: "About Us", footer_about_text: "At Volalte Gir, we believe that caring for the planet should not be a luxury, but a shared responsibility.",
        footer_more: "Learn more", footer_pages: "Pages", footer_hours: "Contact", footer_quote: "Request quote",
        footer_newsletter: "Stay in touch", footer_newsletter_text: "Subscribe to our newsletter.", footer_subscribe: "Subscribe",
        footer_copyright: "© 2025 Volalte Gir. All rights reserved.",
        serv_hero_title: "Classification and Export of Used Tires Barcelona",
        serv_hero_text1: "Looking for a reliable supplier of wholesale used tires?",
        serv_hero_text2: "Need a professional and legal solution to manage your end-of-life tires?",
        serv_hero_text3: "With Volalte Gir you have it all: experience, logistics and environmental commitment.",
        serv_hero_highlight: "From our headquarters in <strong>Barcelona and Girona</strong>, we collect and manage over <strong>1,000 monthly tons</strong> of used tires, collaborating with over <strong>5,000 workshops</strong>.",
        serv_section_title: "Our Services",
        serv1_title: "Used Tire Collection", serv1_desc: "We collect tires directly from workshops, warehouses and collection centers throughout Catalonia.",
        serv1_f1: "Coverage in Barcelona, Girona and surroundings", serv1_f2: "Service to workshops, dealerships, fleets, municipalities",
        serv2_title: "Classification and Preparation", serv2_desc: "All tires we collect go through a visual inspection and separation process by type.",
        serv2_f1: "Detailed visual inspection", serv2_f2: "Classification by type and condition", serv2_f3: "Preparation for reuse or recycling",
        serv3_title: "Export of Reusable Tires", serv3_desc: "Lots ready for export to Africa, Latin America and Eastern Europe.",
        serv3_f1: "Complete export documentation", serv3_f2: "Containers prepared by destination", serv3_f3: "International regulations advisory",
        serv4_title: "Wholesale Used Tire Sales", serv4_desc: "Are you a reseller, importer or trader? Access classified tires ready for sale.",
        serv4_f1: "Constant stock in all categories", serv4_f2: "Competitive prices", serv4_f3: "Personalized advice",
        serv5_title: "Certified Recycling | SIGNUS", serv5_desc: "We deliver non-reusable tires to SIGNUS, ensuring recycling compliant with regulations.",
        serv5_f1: "Complete document tracking", serv5_f2: "100% legal compliance", serv5_f3: "Commitment to circular economy",
        serv_cta_title: "Are you a workshop, municipality or international reseller?", serv_cta_desc: "At Volalte Gir we have solutions adapted to each client.",
        serv_cta_btn: "Request Quote",
        why_title: "Why Choose Volalte Gir?", why1_title: "Custom Solutions", why1_desc: "We adapt our services to your needs.",
        why2_title: "Own Logistics", why2_desc: "From collection to export, we handle everything.",
        why3_title: "Real Environmental Impact", why3_desc: "We reduce waste and promote responsible reuse.",
        blog_hero_title: "Blog", blog_hero_desc: "Discover the latest news, guides and trends on tire recycling.",
        cont_hero_title: "Contact Used Tire Recycling Barcelona", cont_hero_desc: "We are here to help. Contact us for any questions.",
        cont_form_title: "For any inquiry, Write to us", cont_form_empresa: "Company Name",
        cont_form_select: "Select a subject", cont_form_opt1: "Request tire collection", cont_form_opt2: "Buy wholesale tires",
        cont_form_opt3: "Become a distributor", cont_form_opt4: "Export information", cont_form_opt5: "Other",
        cont_form_mensaje: "Tell us how we can help you...", cont_form_submit: "Send message",
        cont_hours_title: "Business hours", cont_hours_text: "Monday - Friday: 9:00 - 18:00<br>Saturday: 9:00 - 14:00",
        cont_social_title: "Follow us on social media", cont_call_title: "Prefer to call us directly?", cont_call_desc: "Our team is available to assist you.",
        about_hero_title: "About Us", about_hero_desc: "Learn about the history, mission and values of Volalte Gir.",
        about_history_badge: "Our History", about_history_title: "We turn waste into opportunities",
        about_history_p1: "At <strong>Volalte Gir</strong>, we believe that caring for the planet should not be a luxury, but a shared responsibility.",
        about_history_p2: "Our story was born from an urgent need: every year, millions of tires reach end of life in Spain.",
        about_history_p3: "We founded Volalte Gir with a clear mission: <strong>transform the problem of end-of-life tires into a sustainable business opportunity</strong>.",
        about_mission_title: "Our Mission", about_mission_desc: "Offer professional, legal and sustainable solutions for used tire management.",
        about_vision_title: "Our Vision", about_vision_desc: "Be the reference in Spain and Europe in responsible end-of-life tire management.",
        about_values_title: "Our Values", about_values_desc: "Sustainability, transparency, professionalism and commitment.",
        about_why_title: "Why choose Volalte Gir?", about_why_desc: "We stand out for our experience, commitment and tangible results.",
        about_f1_title: "Proven Experience", about_f1_desc: "Over 5,000 workshops trust us.",
        about_f2_title: "Legal Compliance", about_f2_desc: "We work with SIGNUS and comply with all regulations.",
        about_f3_title: "Full Service", about_f3_desc: "From collection to export.",
        about_f4_title: "Real Impact", about_f4_desc: "We've diverted over 2 million tires from landfills.",
        about_f5_title: "Global Reach", about_f5_desc: "We export to over 25 countries.",
        about_f6_title: "Personalized Attention", about_f6_desc: "Every client is unique. We adapt our services.",
        about_stats_badge: "Our Results", about_stats_title: "Real Environmental Impact", about_stats_desc: "The numbers speak for themselves.",
        about_stat1: "Tires diverted from landfills", about_stat2: "Workshops that trust us", about_stat3: "Satisfied clients", about_stat4: "Export countries",
        about_team_title: "Our Team", about_team_desc: "A team committed to sustainability.",
        about_team1: "General Management", about_team1_desc: "Strategy and business development",
        about_team2: "Operations and Logistics", about_team2_desc: "Collection and shipping management",
        about_team3: "Customer Service", about_team3_desc: "Support and advice",
        about_team4: "International Trade", about_team4_desc: "Export and new markets",
        about_cta_title: "Ready to work with us?", about_cta_desc: "Join the over 5,000 workshops that already trust Volalte Gir.",
        about_cta_btn: "Contact now",
        dist_badge: "Distributor Program", dist_hero_title: "Become a Recycled Tire Distributor",
        dist_hero_desc: "Join our distributor network and access quality wholesale tires.",
        dist_why_title: "Why Become a Volalte Gir Distributor?", dist_why_desc: "Access exclusive benefits to grow your business sustainably.",
        dist_b1_title: "Competitive Prices", dist_b1_desc: "Access special prices with volume discounts.",
        dist_b2_title: "Guaranteed Stock", dist_b2_desc: "Over 1,000 monthly tons available.",
        dist_b3_title: "Logistics Included", dist_b3_desc: "We handle transport to your warehouse.",
        dist_b4_title: "Certified Quality", dist_b4_desc: "All tires undergo inspection.",
        dist_b5_title: "Dedicated Support", dist_b5_desc: "A personal account manager.",
        dist_b6_title: "International Reach", dist_b6_desc: "We export to over 25 countries.",
        dist_how_title: "How Does It Work?", dist_how_desc: "Becoming a distributor is easy.",
        dist_step1_title: "Request Information", dist_step1_desc: "Fill out the form. We'll contact you in 24h.",
        dist_step2_title: "Evaluation", dist_step2_desc: "We analyze your profile and capacity.",
        dist_step3_title: "Commercial Agreement", dist_step3_desc: "We sign an agreement with prices and conditions.",
        dist_step4_title: "Start Selling!", dist_step4_desc: "You place your first order.",
        dist_req_badge: "Distributor Profile", dist_req_title: "What Do We Look For in a Distributor?",
        dist_req_desc: "We look for partners committed to quality and sustainability.",
        dist_req1: "<strong>Established business:</strong> Workshop, tire shop, importer/exporter or similar.",
        dist_req2: "<strong>Storage capacity:</strong> Space to receive tire lots.",
        dist_req3: "<strong>Customer network:</strong> Access to end buyers or specific markets.",
        dist_req4: "<strong>Minimum volume commitment:</strong> To be agreed based on market and capacity.",
        dist_req5: "<strong>Legal documentation:</strong> Business registration and tax compliance.",
        dist_form_badge: "Join Us", dist_form_title: "Apply to Become a Distributor",
        dist_form_desc: "Fill out the form and we'll contact you in less than 24 hours.",
        dist_form_empresa: "Company Name", dist_form_contacto: "Contact Person",
        dist_form_pais: "Country", dist_form_tipo: "Business Type", dist_form_volumen: "Estimated Monthly Volume",
        dist_form_mensaje: "Tell us about your business", dist_form_acepto: "I accept the privacy policy.",
        dist_form_submit: "Submit Application", dist_line: "Distributor Line", dist_email: "Distribution Email",
        dist_cta_title: "Have questions about the program?", dist_cta_desc: "Call us directly.",
        notif_lang: "Language changed to", notif_form_error: "Please complete all required fields.",
        notif_email_error: "Please enter a valid email.", notif_form_success: "Message sent successfully!",
        notif_newsletter_success: "You have subscribed!", notif_sending: "Sending...", notif_dist_success: "Application sent!"
    }
};

const langNames = { es: "Español", ca: "Català", fr: "Français", en: "English" };
const langCodes = { es: "ES", ca: "CAT", fr: "FR", en: "EN" };

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
            else el.innerHTML = t[key];
        }
    });
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) langBtn.innerHTML = `<span class="lang-code">${langCodes[lang]}</span><span>${langNames[lang]}</span><i class="fas fa-chevron-down"></i>`;
    document.querySelectorAll('.lang-dropdown a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.mobile-lang-options a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('data-lang') === lang);
    });
    document.documentElement.lang = lang;
    localStorage.setItem('volalte_lang', lang);
    currentLang = lang;
}

function t(key) { return translations[currentLang]?.[key] || translations.es[key] || key; }

function initMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navMobile = document.getElementById('navMobile');
    if (!menuToggle || !navMobile) return;
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMobile.classList.toggle('active');
        document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-menu-mobile a:not([data-lang])').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.pageYOffset > 50));
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.pageYOffset > 500));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    if (!counters.length) return;
    let animated = false;
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(c => {
                    const target = +c.dataset.target, start = performance.now();
                    (function update(now) {
                        const p = Math.min((now - start) / 2000, 1);
                        c.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
                        if (p < 1) requestAnimationFrame(update);
                    })(start);
                });
            }
        });
    }, { threshold: 0.5 });
    const stats = document.querySelector('.stats-section');
    if (stats) observer.observe(stats);
}

function initScrollAnimations() {
    const els = document.querySelectorAll('.service-card,.benefit-card,.process-step,.stat-item,.blog-card,.service-detail-card,.distributor-benefit-card,.why-choose-card,.mission-card,.about-feature,.team-member');
    if (!els.length) return;
    els.forEach(el => el.classList.add('animate-on-scroll'));
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animated'); observer.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => observer.observe(el));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const offset = document.getElementById('header')?.offsetHeight || 0;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
        });
    });
}

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = 'UqQnlJdYkpYIgQOrk';
const EMAILJS_SERVICE_ID = 'service_2o4fvhh';
const EMAILJS_TEMPLATE_ID = 'template_lp7es7j';

// Initialize EmailJS
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('EmailJS inicializado correctamente');
    }
})();

function initForms() {
    console.log('Inicializando formularios...');
    
    // FORMULARIO DE CONTACTO (index.html y contacto.html)
    const contactForms = document.querySelectorAll('form.contact-form');
    console.log('Formularios de contacto encontrados:', contactForms.length);
    
    contactForms.forEach(function(form, index) {
        console.log('Configurando formulario de contacto #' + index);
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario de contacto enviado');
            
            // Obtener valores usando getElementById primero, luego querySelector
            let nombre = document.getElementById('nombre')?.value || '';
            let email = document.getElementById('email')?.value || '';
            let telefono = document.getElementById('telefono')?.value || '';
            let sujeto = document.getElementById('sujeto')?.value || '';
            let mensaje = document.getElementById('mensaje')?.value || '';
            
            // Si no funciona con getElementById, usar querySelector dentro del form
            if (!nombre) nombre = form.querySelector('input[name="nombre"]')?.value || '';
            if (!email) email = form.querySelector('input[name="email"]')?.value || '';
            if (!telefono) telefono = form.querySelector('input[name="telefono"]')?.value || '';
            if (!sujeto) sujeto = form.querySelector('select[name="sujeto"]')?.value || form.querySelector('input[name="sujeto"]')?.value || '';
            if (!mensaje) mensaje = form.querySelector('textarea[name="mensaje"]')?.value || '';
            
            nombre = nombre.trim();
            email = email.trim();
            telefono = telefono.trim() || '-';
            sujeto = sujeto.trim() || 'Mensaje desde web';
            mensaje = mensaje.trim() || '-';
            
            console.log('Datos del formulario:', { nombre, email, telefono, sujeto, mensaje });
            
            // Validación
            if (!nombre || nombre === '') {
                console.log('Error: nombre vacío');
                return showNotification('Por favor, introduce tu nombre.', 'error');
            }
            if (!email || email === '') {
                console.log('Error: email vacío');
                return showNotification('Por favor, introduce tu email.', 'error');
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                console.log('Error: email inválido');
                return showNotification('Por favor, introduce un email válido.', 'error');
            }
            
            const data = { nombre, email, telefono, sujeto, mensaje };
            submitFormEmailJS(form, data, t('notif_form_success'));
        });
    });
    
    // FORMULARIO DE DISTRIBUIDOR (distribuidor.html)
    const distForm = document.getElementById('distributorForm');
    if (distForm) {
        console.log('Formulario de distribuidor encontrado');
        
        distForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario de distribuidor enviado');
            
            const empresa = document.getElementById('empresa')?.value?.trim() || '-';
            const contacto = document.getElementById('contacto')?.value?.trim() || '-';
            const email = document.getElementById('dist-email')?.value?.trim() || document.getElementById('email')?.value?.trim() || '-';
            const telefono = document.getElementById('dist-telefono')?.value?.trim() || document.getElementById('telefono')?.value?.trim() || '-';
            const pais = document.getElementById('pais')?.value?.trim() || '-';
            const tipo = document.getElementById('tipo')?.value?.trim() || '-';
            const volumen = document.getElementById('volumen')?.value?.trim() || '-';
            const mensaje = document.getElementById('dist-mensaje')?.value?.trim() || document.getElementById('mensaje')?.value?.trim() || '-';
            
            console.log('Datos distribuidor:', { empresa, contacto, email });
            
            const data = {
                nombre: contacto || 'Distribuidor',
                email: email,
                telefono: telefono,
                sujeto: 'Solicitud de Distribuidor - ' + empresa,
                mensaje: `Empresa: ${empresa}\nContacto: ${contacto}\nEmail: ${email}\nTeléfono: ${telefono}\nPaís: ${pais}\nTipo de negocio: ${tipo}\nVolumen estimado: ${volumen}\n\nMensaje: ${mensaje}`
            };
            submitFormEmailJS(this, data, t('notif_dist_success'));
        });
    }
    
    // NEWSLETTER
    const newsForm = document.getElementById('newsletterForm');
    if (newsForm) {
        newsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput?.value?.trim();
            
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                return showNotification('Por favor, introduce un email válido.', 'error');
            }
            
            const data = { 
                nombre: 'Suscriptor Newsletter', 
                email: email, 
                telefono: '-', 
                sujeto: 'Nueva suscripción newsletter', 
                mensaje: 'Nuevo suscriptor: ' + email 
            };
            submitFormEmailJS(this, data, t('notif_newsletter_success'));
        });
    }
}

function submitFormEmailJS(form, data, msg) {
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.disabled = true; 
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    console.log('Enviando a EmailJS:', data);
    
    // Enviar con EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        nombre: data.nombre || '-',
        email: data.email || '-',
        telefono: data.telefono || '-',
        sujeto: data.sujeto || 'Mensaje desde web',
        mensaje: data.mensaje || '-'
    })
    .then(function(response) {
        console.log('EmailJS Success:', response);
        showNotification(msg, 'success');
        form.reset();
    })
    .catch(function(error) {
        console.error('EmailJS Error:', error);
        showNotification('Error al enviar. Inténtalo de nuevo.', 'error');
    })
    .finally(function() {
        btn.disabled = false;
        btn.innerHTML = orig;
    });
}

function showNotification(msg, type = 'info') {
    document.querySelector('.notification')?.remove();
    const n = document.createElement('div');
    n.className = `notification notification-${type}`;
    n.innerHTML = `<span>${msg}</span><button class="notification-close">&times;</button>`;
    n.style.cssText = `position:fixed;top:100px;right:20px;max-width:350px;padding:1rem 1.5rem;background:${type==='success'?'#2E7D32':type==='error'?'#D32F2F':'#1976D2'};color:white;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.2);display:flex;align-items:center;justify-content:space-between;gap:1rem;z-index:10000;animation:slideIn .3s ease`;
    if (!document.getElementById('notif-css')) {
        const s = document.createElement('style'); s.id = 'notif-css';
        s.textContent = '@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes slideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}';
        document.head.appendChild(s);
    }
    document.body.appendChild(n);
    const close = n.querySelector('.notification-close');
    close.style.cssText = 'background:none;border:none;color:white;font-size:1.5rem;cursor:pointer;padding:0;line-height:1';
    close.onclick = () => { n.style.animation = 'slideOut .3s ease forwards'; setTimeout(() => n.remove(), 300); };
    setTimeout(() => { if (n.parentNode) { n.style.animation = 'slideOut .3s ease forwards'; setTimeout(() => n.remove(), 300); } }, 5000);
}

function initLanguageSelector() {
    document.querySelectorAll('.lang-dropdown a[data-lang],.mobile-lang-options a[data-lang]').forEach(opt => {
        opt.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.dataset.lang;
            applyTranslations(lang);
            showNotification(`${t('notif_lang')} ${langNames[lang]}`, 'info');
        });
    });
}

(function() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        const bg = hero.querySelector('.hero-background');
        if (bg && window.pageYOffset < hero.offsetHeight) bg.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
    });
})();

// Share buttons functionality
function initShareButtons() {
    document.querySelectorAll('.share-btn, .article-share a').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Use the actual website URL when published, for now use a placeholder
            let pageUrl = window.location.href;
            if (pageUrl.startsWith('file://')) {
                pageUrl = 'https://volalte.net' + window.location.pathname.split('/').pop();
            }
            
            const url = encodeURIComponent(pageUrl);
            const title = encodeURIComponent(document.title);
            let shareUrl = '';
            
            if (this.classList.contains('facebook') || this.querySelector('.fa-facebook-f')) {
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            } else if (this.classList.contains('twitter') || this.querySelector('.fa-twitter') || this.querySelector('.fa-x-twitter')) {
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            } else if (this.classList.contains('linkedin') || this.querySelector('.fa-linkedin-in')) {
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            } else if (this.classList.contains('whatsapp') || this.querySelector('.fa-whatsapp')) {
                shareUrl = `https://wa.me/?text=${title}%20${url}`;
            }
            
            if (shareUrl) {
                window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes');
            }
        });
    });
}

console.log('%c Volalte Gir ', 'background:#2E7D32;color:white;padding:10px 20px;font-size:16px;font-weight:bold');
