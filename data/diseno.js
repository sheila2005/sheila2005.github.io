window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.diseno = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño de la Solución – Guía</span>
    </div>
    <p>
        Aquí defines <strong>cómo será la infraestructura de seguridad antes de instalar nada</strong>:
        topología de red, segmentación, políticas de acceso, arquitectura de copias y plan de monitorización.
        Todo diseño debe poder representarse en diagramas que luego defiendas ante el tribunal.
    </p>
</div>

<h3>5.1. Arquitectura de Red y Segmentación</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>🗺️</span>
        <span>Tu misión en esta parte</span>
    </div>
    <p>
        Elabora un <strong>diagrama de topología</strong> (herramienta: Draw.io, diagrams.net o
        GNS3) que muestre: firewall, switches gestionados, VLANs, servidores, NAS, puntos de
        acceso WiFi y conexiones entre las tres sedes. Adjunta el archivo y una captura en los anexos.
    </p>
</div>
<h4>Propuesta de plan de direccionamiento</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">VLAN</th>
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Subred</th>
            <th class="border border-slate-200 p-3 text-left">Uso</th>
            <th class="border border-slate-200 p-3 text-left">Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">MGMT</td>
            <td class="border border-slate-200 p-3">10</td>
            <td class="border border-slate-200 p-3">10.10.10.0/24</td>
            <td class="border border-slate-200 p-3">Firewall, switches, IPMI</td>
            <td class="border border-slate-200 p-3">Solo administradores TI</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">SERVERS</td>
            <td class="border border-slate-200 p-3">20</td>
            <td class="border border-slate-200 p-3">10.10.20.0/24</td>
            <td class="border border-slate-200 p-3">AD, archivos, logs, MFA</td>
            <td class="border border-slate-200 p-3">Acceso restringido por IP y puerto</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">CLINICA</td>
            <td class="border border-slate-200 p-3">30</td>
            <td class="border border-slate-200 p-3">10.10.30.0/24</td>
            <td class="border border-slate-200 p-3">Puestos odontólogos/higienistas</td>
            <td class="border border-slate-200 p-3">Acceso a historia clínica + MFA</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">ADMIN</td>
            <td class="border border-slate-200 p-3">40</td>
            <td class="border border-slate-200 p-3">10.10.40.0/24</td>
            <td class="border border-slate-200 p-3">Recepción, contabilidad, TPV</td>
            <td class="border border-slate-200 p-3">USB bloqueado, web filtrada</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">IOT</td>
            <td class="border border-slate-200 p-3">50</td>
            <td class="border border-slate-200 p-3">10.10.50.0/24</td>
            <td class="border border-slate-200 p-3">Cámaras, impresoras, dispositivos médicos</td>
            <td class="border border-slate-200 p-3">Solo salida a Internet; sin acceso a datos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">GUEST</td>
            <td class="border border-slate-200 p-3">99</td>
            <td class="border border-slate-200 p-3">10.10.99.0/24</td>
            <td class="border border-slate-200 p-3">WiFi pacientes</td>
            <td class="border border-slate-200 p-3">Aislada; portal cautivo</td>
        </tr>
    </tbody>
</table>

<h4>Matriz de flujos autorizados (ejemplo parcial – complétala)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Origen</th>
            <th class="border border-slate-200 p-3 text-left">Destino</th>
            <th class="border border-slate-200 p-3 text-left">Puerto/Servicio</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
            <th class="border border-slate-200 p-3 text-left">Justificación</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">CLINICA</td><td class="border border-slate-200 p-3">SERVERS</td><td class="border border-slate-200 p-3">443 (agenda)</td><td class="border border-slate-200 p-3">ALLOW</td><td class="border border-slate-200 p-3">Acceso a historia</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">CLINICA</td><td class="border border-slate-200 p-3">SERVERS</td><td class="border border-slate-200 p-3">445 (SMB)</td><td class="border border-slate-200 p-3">ALLOW + firma SMB</td><td class="border border-slate-200 p-3">Compartidas clínicas</td></tr>
        <tr><td class="border border-slate-200 p-3">GUEST</td><td class="border border-slate-200 p-3">SERVERS</td><td class="border border-slate-200 p-3">cualquiera</td><td class="border border-slate-200 p-3">BLOCK</td><td class="border border-slate-200 p-3">Aislamiento de invitados</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">IOT</td><td class="border border-slate-200 p-3">SERVERS</td><td class="border border-slate-200 p-3">cualquiera</td><td class="border border-slate-200 p-3">BLOCK</td><td class="border border-slate-200 p-3">Cámaras no necesitan datos clínicos</td></tr>
        <tr><td class="border border-slate-200 p-3">ADMIN</td><td class="border border-slate-200 p-3">Internet</td><td class="border border-slate-200 p-3">80/443 + proxy</td><td class="border border-slate-200 p-3">ALLOW filtrado</td><td class="border border-slate-200 p-3">Gestión y banca</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">[añadir]</td><td class="border border-slate-200 p-3">[añadir]</td><td class="border border-slate-200 p-3">[añadir]</td><td class="border border-slate-200 p-3">[añadir]</td><td class="border border-slate-200 p-3">[añadir]</td></tr>
    </tbody>
</table>

<h3>5.2. Diseño de la Identidad y el Acceso</h3>
<ul class="space-y-2 my-4">
    <li><strong>Active Directory:</strong> OU por departamento (Clinical, Admin, TI), grupos de seguridad por rol, cuentas de servicio con contraseñas en gMSA si es posible.</li>
    <li><strong>MFA:</strong> Authentik o FreeRADIUS+OTP para VPN y portales; app TOTP o llaves FIDO2 para personal TI.</li>
    <li><strong>Política de contraseñas:</strong> longitud ≥ 12, sin diccionario, expiración por riesgo (no trimestral ciega), bloqueo tras 5 fallos.</li>
    <li><strong>Cuentas privilegiadas:</strong> accounts separadas de administración (no usar la cuenta de usuario diaria), LAPS para admin local.</li>
</ul>

<h3>5.3. Diseño de Copias de Seguridad (3-2-1)</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Capa</th>
            <th class="border border-slate-200 p-3 text-left">Medio</th>
            <th class="border border-slate-200 p-3 text-left">Frecuencia</th>
            <th class="border border-slate-200 p-3 text-left">Cifrado</th>
            <th class="border border-slate-200 p-3 text-left">Retención</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Copia 1</td>
            <td class="border border-slate-200 p-3">NAS local (Snapshots + BorgBackup)</td>
            <td class="border border-slate-200 p-3">Diaria incremental / semanal completa</td>
            <td class="border border-slate-200 p-3">Sí (repo cifrado)</td>
            <td class="border border-slate-200 p-3">30 días</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Copia 2</td>
            <td class="border border-slate-200 p-3">Disco externo rotatorio (safe)</td>
            <td class="border border-slate-200 p-3">Semanal</td>
            <td class="border border-slate-200 p-3">Sí</td>
            <td class="border border-slate-200 p-3">12 semanas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Copia 3</td>
            <td class="border border-slate-200 p-3">Almacenamiento cloud offsite</td>
            <td class="border border-slate-200 p-3">Diaria</td>
            <td class="border border-slate-200 p-3">Sí (clave fuera de la red)</td>
            <td class="border border-slate-200 p-3">90 días</td>
        </tr>
    </tbody>
</table>
<div class="callout callout-error">
    <div class="callout-title">
        <span>🔥</span>
        <span>Regla de oro del diseño de copias</span>
    </div>
    <p>
        Una copia <strong>no existe hasta que no se prueba la restauración</strong>. Diseña un
        <strong>simulacro trimestral</strong> con acta: restaurar servidor de archivos completo en una
        VM aislada, verificar integridad de la historia clínica y cronometrar el tiempo hasta
        servicio (objetivo RTO ≤ 4 h).
    </p>
</div>

<h3>5.4. Diseño de Detección y Respuesta</h3>
<ul class="space-y-2 my-4">
    <li><strong>Fuente de logs:</strong> firewall (DNS/HTTP blocks), Windows (Event ID 4625 logon fallido, 4720 creación de cuenta), EDR, antivirus.</li>
    <li><strong>SIEM ligero:</strong> Wazuh manager + agentes en endpoints y servidor; reglas de alerta para: intentos de fuerza bruta, cambios en GPO, desactivación de EDR, tráfico anómalo nocturno.</li>
    <li><strong>Canales de alerta:</strong> correo + Telegram/Signal al equipo TI y a la dirección.</li>
    <li><strong>Plan de respuesta (PIR):</strong> fases – Preparación, Detección y análisis, Contención, Erradicación, Recuperación, Lecciones aprendidas. Completa el organigrama de roles (quién decide parar una máquina, quién comunica a pacientes, quién habla con la AEPD).</li>
</ul>

<h3>5.5. Estándares y Patrones de Diseño a Aplicar</h3>
<ul class="list-disc pl-6 space-y-1 my-4">
    <li><strong>Defense in depth:</strong> capas (perímetro → red → host → aplicación → dato).</li>
    <li><strong>Zero Trust básico:</strong> verificar siempre, mínimo privilegio, microsegmentación.</li>
    <li><strong>CIS Benchmarks:</strong> endurecimiento de Windows Server y Windows 10/11 según guías CIS.</li>
    <li><strong>Principio de separación de funciones:</strong> quien configura el firewall no es el único que audita sus reglas.</li>
</ul>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de diseño</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Diagrama de topología con VLANs redactado y exportado.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Plan de direccionamiento y matriz de flujos completa.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Diseño 3-2-1 con política de retención y simulacro.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Arquitectura de detección (fuentes, SIEM, alertas) definida.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Roles del plan de respuesta a incidentes asignados.</li>
    </ul>
</div>
`;
