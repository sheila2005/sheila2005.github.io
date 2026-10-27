window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Estado del Arte – Guía de Investigación</span>
    </div>
    <p>
        En esta sección no damos la lección acabada: te proponemos un <strong>recorrido por los
        conceptos y marcos que todo técnico de SMR debe dominar</strong> antes de tocar un firewall.
        Tu misión es investigar cada bloque y redactar una síntesis propia, con ejemplos aplicados a
        Sonrisa Valenciana. Usa las preguntas guía y las tablas vacías como cuaderno de trabajo.
    </p>
</div>

<h3>2.1. Panorama de la Amenaza en el Sector Sanitario</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tu misión en esta parte</span>
    </div>
    <ul>
        <li>Busca informes de <strong>INCIBE-CERT, ENISA, Verizon DBIR o CrowdStrike</strong> del último año.</li>
        <li>Identifica los 5 vectores de ataque más frecuentes en sanitario (phishing, ransomware, credenciales, proveedores, dispositivos médicos).</li>
        <li>Explica con tus palabras por qué una clínica dental es un objetivo atractivo.</li>
    </ul>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Redacta aquí tu síntesis del panorama de amenaza – máximo 1 página, con al menos 3 fuentes citadas]
</p>

<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Amenaza</th>
            <th class="border border-slate-200 p-3 text-left">Vectores típicos</th>
            <th class="border border-slate-200 p-3 text-left">Impacto en la clínica</th>
            <th class="border border-slate-200 p-3 text-left">Severidad (1-5)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Ransomware</td>
            <td class="border border-slate-200 p-3">Adjunto de correo, RDP expuesto, software vulnerable</td>
            <td class="border border-slate-200 p-3">Parón total, cifrado de historia clínica</td>
            <td class="border border-slate-200 p-3">[rellenar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Phishing / BEC</td>
            <td class="border border-slate-200 p-3">Suplantación de mutua, aseguradora, administración</td>
            <td class="border border-slate-200 p-3">Robo de credenciales, fraude de pagos</td>
            <td class="border border-slate-200 p-3">[rellenar]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Acceso no autorizado</td>
            <td class="border border-slate-200 p-3">Contraseñas débiles, cuentas compartidas, sin MFA</td>
            <td class="border border-slate-200 p-3">Fuga de datos de salud (categoría especial)</td>
            <td class="border border-slate-200 p-3">[rellenar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Dispositivos IoT / cámaras</td>
            <td class="border border-slate-200 p-3">Firmware obsoleto, credenciales por defecto</td>
            <td class="border border-slate-200 p-3">Punto de entrada a la red interna</td>
            <td class="border border-slate-200 p-3">[rellenar]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Fuga por proveedores</td>
            <td class="border border-slate-200 p-3">Accesos remotos de mantenimiento sin control</td>
            <td class="border border-slate-200 p-3">Responsabilidad compartida, sanciones</td>
            <td class="border border-slate-200 p-3">[rellenar]</td>
        </tr>
    </tbody>
</table>

<h3>2.2. Marcos de Referencia: ENS, ISO 27001 y NIST CSF</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span>
        <span>¿Qué debes investigar?</span>
    </div>
    <p>
        Compara tres marcos y concluye cuál es el más adecuado como <strong>hoja de ruta</strong> para
        una pyme sanitaria privada. Investiga: ¿el ENS es de aplicación obligatoria en clínicas
        privadas? ¿Qué aporta ISO 27001 que no da NIST CSF?
    </p>
</div>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Marco</th>
            <th class="border border-slate-200 p-3 text-left">Origen / Alcance</th>
            <th class="border border-slate-200 p-3 text-left">Enfoque</th>
            <th class="border border-slate-200 p-3 text-left">Aplicabilidad a Sonrisa</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">ENS (RD 3/2010)</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[argumentar]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">ISO/IEC 27001:2022</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[argumentar]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">NIST CSF 2.0</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[investigar]</td>
            <td class="border border-slate-200 p-3">[argumentar]</td>
        </tr>
    </tbody>
</table>

<h4>Las 5 funciones del NIST CSF 2.0</h4>
<p>
    Dibuja (o describe con una tabla) cómo se traduce cada función a tareas concretas de SMR en este
    proyecto:
</p>
<ul class="list-disc pl-6 space-y-1">
    <li><strong>Identificar (ID):</strong> inventario de activos, análisis de riesgos, RGPD…</li>
    <li><strong>Proteger (PR):</strong> segmentación, MFA, GPO, copias, formación…</li>
    <li><strong>Detectar (DE):</strong> logs, alertas Wazuh, antivirus/EDR…</li>
    <li><strong>Responder (RS):</strong> plan de incidentes, comunicación, contención…</li>
    <li><strong>Recuperar (RC):</strong> restauración, lecciones aprendidas, continuidad…</li>
</ul>

<h3>2.3. Protección de Datos: RGPD y Categorías Especiales</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Investigación legal aplicada</span>
    </div>
    <p>
        Los datos de salud son <strong>categoría especial</strong> (art. 9 RGPD). Investiga y resume:
    </p>
    <ul>
        <li>¿Qué es el registro de actividades de tratamiento (RAT) y quién debe llevarlo?</li>
        <li>¿Qué es una evaluación de impacto (EIPD) y cuándo es obligatoria?</li>
        <li>¿Qué plazo tiene la empresa para notificar una brecha a la AEPD? ¿Y a los pacientes?</li>
        <li>¿Qué medidas técnicas (art. 32 RGPD) se consideran «adecuadas» para datos de salud?</li>
    </ul>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Escribe aquí tu síntesis RGPD aplicada a la clínica, citando artículos o guías de la AEPD]
</p>

<h3>2.4. Tecnologías de Defensa de Referencia</h3>
<p>
    Completa la siguiente tabla con una investigación breve de cada tecnología. Indica para cada una:
    <strong>qué resuelve</strong>, <strong>una herramienta open source o de bajo coste</strong> y
    <strong>dónde encaja en la red de Sonrisa Valenciana</strong>.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Tecnología</th>
            <th class="border border-slate-200 p-3 text-left">Qué resuelve</th>
            <th class="border border-slate-200 p-3 text-left">Herramienta propuesta</th>
            <th class="border border-slate-200 p-3 text-left">Ubicación en la red</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Firewall de nueva generación</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Segmentación VLAN</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr><td class="border border-slate-200 p-3">MFA / Autenticación fuerte</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">EDR / Antivirus corporativo</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr><td class="border border-slate-200 p-3">SIEM / Gestión de logs</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Copias 3-2-1 cifradas</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr><td class="border border-slate-200 p-3">VPN de sitio a sitio / acceso remoto</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Formación anti-phishing</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td><td class="border border-slate-200 p-3">[rellenar]</td></tr>
    </tbody>
</table>

<h3>2.5. Endurecimiento de Windows y Active Directory</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>🖥️</span>
        <span>Conceptos que debes dominar</span>
    </div>
    <p>
        Investiga brevemente cada concepto y anota un ejemplo práctico para este proyecto:
    </p>
    <ul>
        <li><strong>Principio de mínimo privilegio</strong> vs. cuenta de administrador.</li>
        <li><strong>Políticas de grupo (GPO)</strong> de seguridad: bloqueo de USB, política de contraseñas, auditoría.</li>
        <li><strong>LAPS (Local Administrator Password Solution)</strong>: por qué y cómo.</li>
        <li><strong>Windows Defender Firewall con reglas avanzadas</strong> y aplicación por GPO.</li>
        <li><strong>BitLocker</strong> para cifrado de equipos portátiles y de administración.</li>
    </ul>
</div>

<h3>2.6. Checklist de Verificación del Estado del Arte</h3>
<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Antes de pasar a la viabilidad</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He resumido el panorama de amenaza con fuentes actuales.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He comparado ENS, ISO 27001 y NIST CSF con argumentos propios.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He explicado las obligaciones RGPD para datos de salud.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He completado la tabla de tecnologías de defensa.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He investigado los conceptos de endurecimiento de Windows/AD.</li>
    </ul>
</div>
`;
