window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.resumen = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📄</span>
        <span>Resumen Ejecutivo</span>
    </div>
    <p>
        Este proyecto plantea el <strong>diseño, despliegue y validación de un plan integral de
        ciberseguridad</strong> para <strong>Clínicas Dentales Sonrisa Valenciana S.L.</strong>, un
        grupo de tres clínicas dentales con sede en Torrent (Valencia) que, tras sufrir un
        <strong>ciberataque de tipo ransomware</strong> con origen en un correo de phishing, necesita
        reforzar urgentemente su infraestructura tecnológica, proteger los datos de salud de sus
        pacientes y evitar que el incidente se repita.
    </p>
</div>

<h3>Contexto y Problemática</h3>
<p>
    El ataque paralizó durante <strong>seis días laborables</strong> la agenda de citas, el software de
    historia clínica y el servicio de correo electrónico, con pérdidas estimadas de más de
    <strong>18.000 €</strong> y la obligación de notificar el incidente a la Agencia Española de
    Protección de Datos. El análisis posterior reveló una infraestructura con firewalls sin reglas
    de filtrado, equipos con el sistema operativo sin actualizar, copias de seguridad incompatibles
    con la estrategia 3-2-1 y ausencia total de autenticación multifactor.
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Seguridad perimetral ausente:</strong> el router de la empresa actúaba como único filtro, sin segmentación de red entre clínicas, oficina y red de invitados.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Endpoints desprotegidos:</strong> 25 puestos de trabajo con Windows 10 sin actualizaciones automáticas, sin antivirus corporativo y con cuentas de administrador locales en uso diario.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Identidades débiles:</span> contraseñas compartidas entre el personal, sin MFA y con el servidor Active Directory sin endurecimiento ni auditoría de cuentas privilegiadas.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Copias de seguridad insuficientes:</strong> un único NAS local sin copia externa ni pruebas de restauración periódicas.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-red-500 mt-1">❌</span>
        <span><strong>Respuesta a incidentes improvisada:</strong> sin plan de contingencias, sin registro de logs ni monitorización centralizada.</span>
    </li>
</ul>

<h3>Solución Propuesta</h3>
<p>
    Se implementará el plan <strong>«Escudo Digital»</strong>, basado en estándares internacionales y
    en las guías del INCIBE, con los siguientes bloques de trabajo:
</p>
<ul class="space-y-2 my-4">
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Perímetro y segmentación:</strong> firewall de nueva generación (pfSense/OPNsense) con VLANs separadas (clínica, administración, invitados, IoT) y VPN para el acceso remoto.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Endurecimiento de endpoints:</strong> actualización masiva, EDR corporativo, GPO de seguridad Windows y políticas de software permitido.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Gestión de identidades:</strong> Active Directory endurecido, MFA (Authentik/RADIUS), rotación de contraseñas y principio de mínimo privilegio.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Copias de seguridad 3-2-1:</strong> Veeam/BorgBackup con copia cifrada offsite y simulacro trimestral de restauración.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Detección y respuesta:</strong> servidor de logs (Wazuh), alertas de seguridad y plan de respuesta a incidentes documentado.</span>
    </li>
    <li class="flex items-start gap-3">
        <span class="text-green-500 mt-1">✅</span>
        <span><strong>Cultura y RGPD:</strong> formación anti-phishing, política de contraseñas y documentación del registro de actividades de tratamiento.</span>
    </li>
</ul>

<h3>Enfoque Metodológico</h3>
<p>
    El proyecto se desarrolla siguiendo el <strong>Aprendizaje Basado en Proyectos (ABP)</strong>,
    con entregables parciales y validación en entorno de laboratorio antes del despliegue real.
    Se apoya en marcos profesionales de referencia:
</p>
<ul class="space-y-2 my-4">
    <li><strong>ENS (Esquema Nacional de Seguridad):</strong> niveles básico y medio de seguridad.</li>
    <li><strong>ISO/IEC 27001 y ISO/IEC 27002:</strong> sistema de gestión de seguridad y controles anejos.</li>
    <li><strong>NIST CSF 2.0:</strong> funciones Identificar, Proteger, Detectar, Responder y Recuperar.</li>
    <li><strong>RGPD y LOPDGDD:</strong> tratamiento de categorías especiales de datos (salud).</li>
    <li><strong>Metodología Kanban:</strong> seguimiento visual de tareas e hitos.</li>
</ul>

<h3>Resultados Esperados</h3>
<p>
    Tras la implantación, la infraestructura dispondrá de un <strong>perímetro filtrado y segmentado</strong>,
    <strong>copias de seguridad restaurables</strong> con una RPO de 24 horas y un RTO de 4 horas,
    <strong>MFA activado</strong> en todas las cuentas con acceso a datos sensibles y un
    <strong>plan de respuesta a incidentes</strong> probado, reduciendo la superficie de ataque de forma
    medible y dejando la clínica preparada para una futura certificación en seguridad.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>📝 Instrucciones para el Alumnado</span>
    </div>
    <p>
        <strong>Este proyecto es PEDAGÓGICO y debes completarlo tú.</strong> La Introducción, el Estado
        del Arte, la Viabilidad y el Diseño se presentan como <strong>ejemplo y guía</strong>. Tu tarea es:
    </p>
    <ul class="list-disc list-inside space-y-2 mt-3">
        <li><strong>Sección 6 (Implementación):</strong> desplegar realmente el firewall, las VLANs, las GPO, el MFA y las copias en tu entorno de prácticas.</li>
        <li><strong>Sección 7 (Administración):</strong> documentar los procedimientos de operación, monitorización y respuesta a incidentes de tu despliegue.</li>
        <li><strong>Sección 8 (Herramientas):</strong> adaptar los scripts y plantillas a tu laboratorio.</li>
        <li><strong>Sección 9 (Conclusiones):</strong> redactar tu valoración personal y el balance de riesgos residual.</li>
        <li><strong>Bibliografía y Anexos:</strong> aportar fuentes consultadas y capturas de tu implementación.</li>
    </ul>
</div>
`;
