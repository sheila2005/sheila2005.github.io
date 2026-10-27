window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.anexos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos Técnicos</span>
    </div>
    <p>
        Los anexos recogen el <strong>material de apoyo y las evidencias</strong> de tu
        implementación: plantillas reutilizables, comandos de referencia y el índice de capturas
        de pantalla que documentan el despliegue. Todo anexo debe estar referenciado desde el
        cuerpo del proyecto.
    </p>
</div>

<h3>Anexo A. Plantilla de Diario de Configuración</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fecha/Hora</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Acción</th>
            <th class="border border-slate-200 p-3 text-left">Comandos / Config</th>
            <th class="border border-slate-200 p-3 text-left">Resultado</th>
            <th class="border border-slate-200 p-3 text-left">Captura</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">[dd/mm/aaaa hh:mm]</td>
            <td class="border border-slate-200 p-3">[nombre]</td>
            <td class="border border-slate-200 p-3">[qué se hizo]</td>
            <td class="border border-slate-200 p-3">[comandos exactos]</td>
            <td class="border border-slate-200 p-3">[OK / KO / parcial]</td>
            <td class="border border-slate-200 p-3">[img/01.png]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>Anexo B. Comandos de Referencia</h3>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto">
# ── Diagnóstico de red ──
ipconfig /all
ip a
ping -t 10.10.20.10
tracert 10.10.20.10
nmap -sV -p- 10.10.20.0/24

# ── Firewall pfSense (pistas) ──
# GUI: Interfaces → Assignments | Firewall → Rules
# SSH shell: pfctl -sr (reglas), pfctl -ss (sesiones)

# ── Active Directory ──
dcdiag /v
Get-ADUser -Filter * -Properties LastLogonDate |
  Where-Object {$_.Enabled -eq $true} |
  Sort-Object LastLogonDate | Select-Object Name, LastLogonDate

# ── Copias Borg ──
borg list /mnt/nas/clinica-backup
borg extract /mnt/nas/clinica-backup::fs01-2025-06-01
borg check --repair /mnt/nas/clinica-backup

# ── Wazuh ──
/var/ossec/bin/agent_control -lc          # agentes conectados
tail -f /var/ossec/logs/alerts/alerts.log # alertas en tiempo real
    </pre>
</div>

<h3>Anexo C. Índice de Capturas de Evidencia</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Captura</th>
            <th class="border border-slate-200 p-3 text-left">Descripción</th>
            <th class="border border-slate-200 p-3 text-left">Sección del proyecto</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">img/01-topologia.png</td><td class="border border-slate-200 p-3">Diagrama final de la red</td><td class="border border-slate-200 p-3">5.1</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">img/02-vlan-aislamiento.png</td><td class="border border-slate-200 p-3">Prueba de aislamiento GUEST→SERVERS</td><td class="border border-slate-200 p-3">6.2</td></tr>
        <tr><td class="border border-slate-200 p-3">img/03-mfa-login.png</td><td class="border border-slate-200 p-3">Flujo MFA en login</td><td class="border border-slate-200 p-3">6.3</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">img/04-restauracion.png</td><td class="border border-slate-200 p-3">Simulacro de restauración cronometrado</td><td class="border border-slate-200 p-3">6.4</td></tr>
        <tr><td class="border border-slate-200 p-3">img/05-alerta-wazuh.png</td><td class="border border-slate-200 p-3">Alerta generada en simulacro</td><td class="border border-slate-200 p-3">6.5</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">[añadir]</td><td class="border border-slate-200 p-3">[descripción]</td><td class="border border-slate-200 p-3">[sección]</td></tr>
    </tbody>
</table>

<h3>Anexo D. Checklist de Entrega Final</h3>
<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> proyecto.html completo y funcional (offline).</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Todas las secciones del cuerpo rellenas (sin placeholders [rellenar]).</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Diario de configuración con evidencias.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Diagramas exportados (PDF/PNG) y referenciados.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Actas de simulacros (restauración + phishing + tabletop).</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Paquete de documentación para la empresa listo.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Bibliografía ampliada con fuentes reales consultadas.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Revisión de inclusividad del lenguaje (profesorado/alumnado) y ortografía.</li>
    </ul>
</div>

<div class="callout callout-success mt-8">
    <div class="callout-title">
        <span>🎓</span>
        <span>Consejo final para la defensa</span>
    </div>
    <p>
        Prepara una <strong>demostración en vivo de 5 minutos</strong>: segmentación, MFA y
        alerta de Wazuh. Los tribunales valoran más una demo breve y controlada que una
        presentación larga. Practica hasta que cada paso sea fiable, y ten un plan B
        (grabaciones) por si el laboratorio falla.
    </p>
</div>
`;
