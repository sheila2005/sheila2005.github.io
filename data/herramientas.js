window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.herramientas = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🛠️</span>
        <span>Herramientas de Apoyo – Caja de Herramientas del Proyecto</span>
    </div>
    <p>
        Esta sección es tu <strong>inventario de herramientas</strong>: qué usas, para qué, y cómo
        empezar. No hace falta que domines todas: elige las que se adapten a tu laboratorio y
        justifica la elección. Muchas son <strong>gratuitas o open source</strong>, ideales para una
        pyme sanitaria con presupuesto ajustado.
    </p>
</div>

<h3>8.1. Tabla Maestra de Herramientas</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Herramienta</th>
            <th class="border border-slate-200 p-3 text-left">Categoría</th>
            <th class="border border-slate-200 p-3 text-left">Uso en el proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Licencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">pfSense / OPNsense</td>
            <td class="border border-slate-200 p-3">Perímetro</td>
            <td class="border border-slate-200 p-3">Firewall, VPN, VLANs, DNS filtrante, portal cautivo</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">VirtualBox / VMware</td>
            <td class="border border-slate-200 p-3">Laboratorio</td>
            <td class="border border-slate-200 p-3">Entorno de pruebas aislado</td>
            <td class="border border-slate-200 p-3">Gratuito / comercial</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Windows Server (eval)</td>
            <td class="border border-slate-200 p-3">Identidad</td>
            <td class="border border-slate-200 p-3">AD DS, DNS, GPO, LAPS, CAs</td>
            <td class="border border-slate-200 p-3">Evaluación 180 días</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Authentik</td>
            <td class="border border-slate-200 p-3">MFA / SSO</td>
            <td class="border border-slate-200 p-3">Segundo factor TOTP/WebAuthn para VPN y portales</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Wazuh</td>
            <td class="border border-slate-200 p-3">Detección</td>
            <td class="border border-slate-200 p-3">SIEM ligero: integridad, logs, alertas</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">BorgBackup + rclone</td>
            <td class="border border-slate-200 p-3">Copias</td>
            <td class="border border-slate-200 p-3">Deduplicación, cifrado y sync offsite</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">GParted / Clonezilla</td>
            <td class="border border-slate-200 p-3">Recuperación</td>
            <td class="border border-slate-200 p-3">Imágenes y restauración de puestos</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Wireshark / tcpdump</td>
            <td class="border border-slate-200 p-3">Análisis</td>
            <td class="border border-slate-200 p-3">Validación de filtrado y tráfico sospechoso</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Nmap</td>
            <td class="border border-slate-200 p-3">Auditoría</td>
            <td class="border border-slate-200 p-3">Descubrimiento de hosts y puertos expuestos</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Draw.io (diagrams.net)</td>
            <td class="border border-slate-200 p-3">Documentación</td>
            <td class="border border-slate-200 p-3">Diagramas de topología y flujos</td>
            <td class="border border-slate-200 p-3">Gratuito</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Eset / Bitdefender (trial)</td>
            <td class="border border-slate-200 p-3">Endpoints</td>
            <td class="border border-slate-200 p-3">EDR/antivirus corporativo en puestos</td>
            <td class="border border-slate-200 p-3">Comercial (prueba)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">GoPhish / King Phisher</td>
            <td class="border border-slate-200 p-3">Formación</td>
            <td class="border border-slate-200 p-3">Simulacros de phishing controlados</td>
            <td class="border border-slate-200 p-3">Open source</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Guías Rápidas de Inicio</h3>
<div class="callout callout-info">
    <pre class="text-xs overflow-x-auto">
# BorgBackup – creación de repositorio cifrado (ejemplo)
borg init --encryption=repokey /mnt/nas/clinica-backup
borg create --stats --progress /mnt/nas/clinica-backup::'{hostname}-{now}' /srv/archivos
borg prune --keep-daily=7 --keep-weekly=4 --keep-monthly=6 /mnt/nas/clinica-backup

# rclone – sync cifrado a nube (primeros pasos)
rclone config          # crear remote "nubeclinica" con crypt
rclone sync /mnt/nas/clinica-backup nubeclinica:backup --progress

# Nmap – verificación de puertos tras segmentación
nmap -sn 10.10.99.0/24              # descubrir hosts en VLAN invitados
nmap -p 445 --open 10.10.20.0/24    # comprobar exposición SMB
    </pre>
</div>

<h3>8.3. Plantillas y Checklists</h3>
<ul class="space-y-2 my-4">
    <li><strong>Checklist de alta de empleado:</strong> crear cuenta → grupos → MFA → buzón → VPN → firma de política de uso.</li>
    <li><strong>Checklist de mantenimiento mensual:</strong> revisar KPIs → parches → copias → cuentas inactivas → alertas sin cerrar.</li>
    <li><strong>Plantilla de acta de simulacro:</strong> fecha, escenario, participantes, tiempos, hallazgos, acciones correctivas.</li>
    <li><strong>Plantilla de informe a dirección:</strong> una página, lenguaje no técnico, riesgos en € y acciones.</li>
</ul>

<h3>8.4. Recursos de Aprendizaje Recomendados</h3>
<ul class="list-disc pl-6 space-y-1 my-4">
    <li><strong>INCIBE – Kit de seguridad para pymes:</strong> guías descargables y plantillas.</li>
    <li><strong>CIS Benchmarks:</strong> perfiles de endurecimiento de Windows y servidores.</li>
    <li><strong>YouTube – canales de ciberseguridad en español</strong> (investiga y anota 3 canales de calidad).</li>
    <li><strong>Prácticas CTF sencillas</strong> (p.ej. TryHackMe paths de fundamentos) para afianzar conceptos.</li>
</ul>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de herramientas</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He justificado cada herramienta usada en mi despliegue.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He preparado guías rápidas para el equipo de la clínica.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He incluido plantillas de checklists operativos.</li>
    </ul>
</div>
`;
