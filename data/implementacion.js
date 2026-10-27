window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.implementacion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>💻</span>
        <span>Implementación – Guía de Despliegue</span>
    </div>
    <p>
        Esta es la sección donde <strong>tú demuestras lo que sabes hacer</strong>. Sigue las fases
        propuestas, documenta cada paso con comandos, capturas y justificaciones, y valida cada
        entregable con una prueba. Recuerda: el proyecto se ejecuta primero en el
        <strong>laboratorio</strong> y después (con permiso) en la red de la clínica.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🗓️</span>
        <span>Calendario de fases sugerido (96 h)</span>
    </div>
    <table class="w-full border-collapse mt-2">
        <thead>
            <tr>
                <th class="border border-amber-200 p-2 text-left">Fase</th>
                <th class="border border-amber-200 p-2 text-left">Contenido</th>
                <th class="border border-amber-200 p-2 text-left">Horas</th>
            </tr>
        </thead>
        <tbody>
            <tr><td class="border border-amber-200 p-2">F1</td><td class="border border-amber-200 p-2">Análisis, inventario y laboratorio base</td><td class="border border-amber-200 p-2">12 h</td></tr>
            <tr><td class="border border-amber-200 p-2">F2</td><td class="border border-amber-200 p-2">Firewall, VLANs y filtrado</td><td class="border border-amber-200 p-2">20 h</td></tr>
            <tr><td class="border border-amber-200 p-2">F3</td><td class="border border-amber-200 p-2">AD endurecido, MFA y GPO</td><td class="border border-amber-200 p-2">18 h</td></tr>
            <tr><td class="border border-amber-200 p-2">F4</td><td class="border border-amber-200 p-2">Copias 3-2-1 y restauración</td><td class="border border-amber-200 p-2">14 h</td></tr>
            <tr><td class="border border-amber-200 p-2">F5</td><td class="border border-amber-200 p-2">Detección (Wazuh) y EDR</td><td class="border border-amber-200 p-2">14 h</td></tr>
            <tr><td class="border border-amber-200 p-2">F6</td><td class="border border-amber-200 p-2">Simulacros, validación y memoria final</td><td class="border border-amber-200 p-2">18 h</td></tr>
        </tbody>
    </table>
</div>

<h3>6.1. Fase 1: Laboratorio y Lineamientos</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>🧪</span>
        <span>Monta tu entorno de pruebas</span>
    </div>
    <p>
        Levanta en VirtualBox/VMware un laboratorio mínimo: firewall (pfSense/OPNsense), un controlador
        de dominio, un servidor de archivos, dos puestos cliente (Windows 10/11) y una máquina Linux
        para logs. Documenta la topología y las IPs usadas.
    </p>
</div>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto">
# Ejemplo de estructura de VMs del laboratorio (adapta a tu hipervisor)
vm-firewall    : 3 NICs (WAN, LAN mgmt, LAN users) - pfSense/OPNsense
vm-dc01        : Windows Server - AD DS + DNS + CA ligera
vm-fs01        : Windows Server - archivos + copias
vm-wazuh       : Ubuntu Server 22.04 - Wazuh manager
vm-win10-a     : Windows 10 - puesto "Clínica"
vm-win11-b     : Windows 11 - puesto "Administración"
    </pre>
</div>

<h3>6.2. Fase 2: Perímetro y Segmentación</h3>
<h4>6.2.1. Instalación y configuración del firewall</h4>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li><strong>Paso 1:</strong> Instala pfSense/OPNsense en la VM con las interfaces definidas en el diseño → resultado: acceso web a la GUI desde la VLAN MGMT.</li>
    <li><strong>Paso 2:</strong> Configura VLANs 802.1Q en el switch (o interfaces LAG del laboratorio) → resultado: cada VLAN con su subred DHCP.</li>
    <li><strong>Paso 3:</strong> Define las reglas de firewall según la matriz de flujos (bloqueo por defecto, allow explícitos) → resultado: tráfico denegado con log en GUEST→SERVERS.</li>
    <li><strong>Paso 4:</strong> Configura el portal cautivo del WiFi de invitados y DNS filtrante (pfBlockerNG/Unbound con listas de blocklist) → resultado: invitados solo navegan a Internet.</li>
</ol>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>¡Atención!</span>
    </div>
    <p>
        Si configuras el firewall por SSH/WebGUI desde la VLAN de usuarios y cierras mal la regla de
        gestión, te quedas fuera. <strong>Siempre deja una regla anti-lockout</strong> desde MGMT y
        practica el acceso consola.
    </p>
</div>

<h4>6.2.2. Pruebas de segmentación</h4>
<p>Documenta con capturas los resultados de estas pruebas:</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Prueba</th>
            <th class="border border-slate-200 p-3 text-left">Comando / método</th>
            <th class="border border-slate-200 p-3 text-left">Resultado esperado</th>
            <th class="border border-slate-200 p-3 text-left">Resultado real</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Aislamiento GUEST→SERVERS</td><td class="border border-slate-200 p-3">ping y nmap desde GUEST</td><td class="border border-slate-200 p-3">Timeout / filtered</td><td class="border border-slate-200 p-3">[captura]</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">IOT no ve SMB</td><td class="border border-slate-200 p-3">Test-NetConnection -Port 445</td><td class="border border-slate-200 p-3">False</td><td class="border border-slate-200 p-3">[captura]</td></tr>
        <tr><td class="border border-slate-200 p-3">CLINICA→agenda:443</td><td class="border border-slate-200 p-3">Navegador / curl</td><td class="border border-slate-200 p-3">Conexión OK</td><td class="border border-slate-200 p-3">[captura]</td></tr>
    </tbody>
</table>

<h3>6.3. Fase 3: Identidades, MFA y Endurecimiento</h3>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li><strong>AD:</strong> crea OU y grupos por rol; migra usuarios; elimina cuentas compartidas.</li>
    <li><strong>GPO de seguridad:</strong> política de contraseñas, bloqueo de cuentas, auditoría de eventos, restricción de software, bloqueo USB (clase USBSTOR).</li>
    <li><strong>LAPS o equivalente:</strong> implementa contraseñas locales rotatorias para cuentas de administrador local.</li>
    <li><strong>MFA:</strong> despliega Authentik (o FreeRADIUS + Google Authenticator) y vincula el grupo Clinical-Access; prueba login con y sin segundo factor.</li>
    <li><strong>BitLocker:</strong> activa cifrado en puestos portátiles con clave de recuperación guardada en AD.</li>
</ol>
<div class="callout callout-info my-6">
    <pre class="text-xs overflow-x-auto">
# Pistas de comandos útiles (investiga la sintaxis exacta y documéntala)
# Auditoría de cuentas con PowerShell
Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00

# Comprobar estado BitLocker
manage-bde -status C:

# Exportar GPO de seguridad
Get-GPO -Name "Seguridad Base Clinica" | Backup-GPO -Path D:\GPOBackup
    </pre>
</div>

<h3>6.4. Fase 4: Copias 3-2-1</h3>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li>Instala BorgBackup (o Veeam Agent Free) en el servidor de archivos; crea repositorio cifrado en el NAS.</li>
    <li>Programa job diario incremental + semanal completo con retención (ej. <code class="text-sm">borg prune --keep-daily=7 --keep-weekly=4 --keep-monthly=6</code>).</li>
    <li>Configura sincronización cifrada al cloud (rclone con cifrado) y al disco externo rotatorio.</li>
    <li><strong>Ejecuta un simulacro completo:</strong> restaura una VM desde la copia en un entorno aislado, cronometra el proceso y guarda el acta.</li>
</ol>

<h3>6.5. Fase 5: Detección y Respuesta</h3>
<ol class="list-decimal pl-6 space-y-2 my-4">
    <li>Instala Wazuh manager; despliega agentes en DC, FS y puestos de prueba.</li>
    <li>Activa reglas de integridad de ficheros, monitoreo de logs de Windows y rootcheck.</li>
    <li>Simula un evento (creación de cuenta sospechosa, intentos de fuerza bruta) y verifica la alerta en &lt;5 minutos.</li>
    <li>Integra correo/Telegram como canal de notificación.</li>
    <li>Instala/despliega EDR en al menos 3 endpoints y demuestra una detección (EICAR o simulación controlada).</li>
</ol>

<h3>6.6. Fase 6: Simulacros y Validación Final</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Simulacro</th>
            <th class="border border-slate-200 p-3 text-left">Descripción</th>
            <th class="border border-slate-200 p-3 text-left">KPI a medir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Phishing controlado</td>
            <td class="border border-slate-200 p-3">Campaña con 20 correos simulados a la plantilla</td>
            <td class="border border-slate-200 p-3">% de clics y de reportes al buzón de abuso</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Restauración bajo presión</td>
            <td class="border border-slate-200 p-3">Cifrado simulado del servidor de archivos</td>
            <td class="border border-slate-200 p-3">RTO real vs objetivo (≤4 h)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Exfiltración lateral</td>
            <td class="border border-slate-200 p-3">Desde un puesto comprometido intentar alcanzar datos clínicos</td>
            <td class="border border-slate-200 p-3">¿Lo impide la segmentación? ¿Se alertó?</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Tabletop (simulacro de mesa)</td>
            <td class="border border-slate-200 p-3">Reunión de roles según el PIR ante un caso práctico</td>
            <td class="border border-slate-200 p-3">Tiempos de decisión y comunicación</td>
        </tr>
    </tbody>
</table>

<h3>6.7. Registro de Configuración (Diario Técnico)</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>📒</span>
        <span>Documenta como un profesional</span>
    </div>
    <p>
        Mantén un diario con, al menos: fecha/hora, responsable, acción, comandos ejecutados,
        resultado y captura. Este diario alimentará la memoria final y la defensa ante el tribunal.
    </p>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Inserta aquí tu plantilla de diario o una tabla resumen de las entradas más relevantes]
</p>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de implementación</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Laboratorio montado y documentado.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Firewall con VLANs y reglas validadas por pruebas.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> MFA operativo y GPO de seguridad aplicadas.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Copia 3-2-1 con restauración exitosa cronometrada.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Alertas de Wazuh/EDR demostradas en simulacro.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Diario técnico completo con capturas.</li>
    </ul>
</div>
`;
