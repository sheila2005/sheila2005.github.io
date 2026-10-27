window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.administracion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>⚙️</span>
        <span>Administración y Operación – Guía</span>
    </div>
    <p>
        La seguridad no es un proyecto con fecha de fin: es un <strong>proceso continuo</strong>.
        Esta sección define cómo se mantiene, se monitoriza y se responde cuando algo falla. Tu
        entrega será un conjunto de <strong>procedimientos operativos estándar (SOP)</strong> listos
        para que la clínica los use sin depender de una sola persona.
    </p>
</div>

<h3>7.1. Gestión de Cambios y Parcheo</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Activo</th>
            <th class="border border-slate-200 p-3 text-left">Ciclo de parcheo</th>
            <th class="border border-slate-200 p-3 text-left">Ventana</th>
            <th class="border border-slate-200 p-3 text-left">Responsable</th>
            <th class="border border-slate-200 p-3 text-left">Rollback</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Windows 10/11 (endpoints)</td><td class="border border-slate-200 p-3">Mensual (Patch Tuesday) + emergencias</td><td class="border border-slate-200 p-3">Noche del martes siguiente</td><td class="border border-slate-200 p-3">Técnico TI</td><td class="border border-slate-200 p-3">Punto de restauración / imagen</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Windows Server</td><td class="border border-slate-200 p-3">Mensual, probado en laboratorio</td><td class="border border-slate-200 p-3">Sábado madrugada</td><td class="border border-slate-200 p-3">Responsable TI</td><td class="border border-slate-200 p-3">Snapshot VM + copia pre-cambio</td></tr>
        <tr><td class="border border-slate-200 p-3">Firewall / switches</td><td class="border border-slate-200 p-3">Trimestral o CVE crítico</td><td class="border border-slate-200 p-3">Con mantenimiento planificado</td><td class="border border-slate-200 p-3">Responsable TI</td><td class="border border-slate-200 p-3">Export de configuración previa</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Firmware IoT (cámaras)</td><td class="border border-slate-200 p-3">Semestral</td><td class="border border-slate-200 p-3">Fin de semana</td><td class="border border-slate-200 p-3">Técnico TI</td><td class="border border-slate-200 p-3">Config exportada</td></tr>
    </tbody>
</table>

<h3>7.2. Gestión de Identidades y Access Reviews</h3>
<ul class="space-y-2 my-4">
    <li><strong>Alta/baja de personal:</strong> checklist de 8 pasos (cuenta, grupos, MFA, buzón, VPN, retirada de accesos en &lt;24 h del último día).</li>
    <li><strong>Revisión trimestral de accesos:</strong> director clínico + responsable TI revisan membresías de grupos sensibles; se documenta evidencia.</li>
    <li><strong>Revisión de cuentas inactivas:</strong> búsqueda de cuentas sin uso en 90 días → deshabilitar (no borrar, para auditoría).</li>
</ul>

<h3>7.3. Monitorización y Gestión de Alertas</h3>
<h4>7.3.1. Tablero de indicadores (KPI) mensual</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">KPI</th>
            <th class="border border-slate-200 p-3 text-left">Fórmula / fuente</th>
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">% equipos parcheados</td><td class="border border-slate-200 p-3">WSUS / EDR console</td><td class="border border-slate-200 p-3">≥ 95% en 14 días</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Cobertura MFA</td><td class="border border-slate-200 p-3">Authentik / AD group report</td><td class="border border-slate-200 p-3">100% en cuentas sensibles</td></tr>
        <tr><td class="border border-slate-200 p-3">Éxito de copias</td><td class="border border-slate-200 p-3">Logs Borg/Veeam</td><td class="border border-slate-200 p-3">100% job diario OK</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Tiempo medio de respuesta a alerta</td><td class="border border-slate-200 p-3">Wazuh + actas</td><td class="border border-slate-200 p-3">&lt; 30 min en horario laboral</td></tr>
        <tr><td class="border border-slate-200 p-3">% clics en simulacros phishing</td><td class="border border-slate-200 p-3">Campaña trimestral</td><td class="border border-slate-200 p-3">&lt; 10%</td></tr>
    </tbody>
</table>

<h4>7.3.2. Clasificación de alertas</h4>
<ul class="list-disc pl-6 space-y-1 my-4">
    <li><strong>Crítica (P1):</strong> EDR desactivado, ransomware detectado, DC comprometida → responder en minutos, escalar a dirección.</li>
    <li><strong>Alta (P2):</strong> fuerza bruta, creación de cuenta no autorizada → responder en &lt;1 h.</li>
    <li><strong>Media (P3):</strong> logon anómalo, cambio de GPO → revisar en el día.</li>
    <li><strong>Baja (P4):</strong> eventos informativos → revisión semanal.</li>
</ul>

<h3>7.4. Plan de Respuesta a Incidentes (PIR)</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>🚨</span>
        <span>Entregable obligatorio</span>
    </div>
    <p>
        Redacta el PIR de la clínica con las 6 fases NIST y completa este esqueleto con tu
        organización real:
    </p>
</div>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Acciones clave</th>
            <th class="border border-slate-200 p-3 text-left">Rol principal</th>
            <th class="border border-slate-200 p-3 text-left">Tiempo objetivo</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Preparación</td><td class="border border-slate-200 p-3">Contactos, kits de respuesta, copias probadas, formación</td><td class="border border-slate-200 p-3">Responsable TI</td><td class="border border-slate-200 p-3">Continuo</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Detección y análisis</td><td class="border border-slate-200 p-3">Validar alerta, scope, clasificar severidad</td><td class="border border-slate-200 p-3">Técnico on-call</td><td class="border border-slate-200 p-3">&lt; 15 min</td></tr>
        <tr><td class="border border-slate-200 p-3">Contención</td><td class="border border-slate-200 p-3">Aislar máquina/VLAN, bloquear cuentas, preservar evidencias</td><td class="border border-slate-200 p-3">Responsable TI</td><td class="border border-slate-200 p-3">&lt; 30 min</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Erradicación</td><td class="border border-slate-200 p-3">Eliminar malware, rotar credenciales, parchear</td><td class="border border-slate-200 p-3">Responsable TI + apoyo externo</td><td class="border border-slate-200 p-3">Según alcance</td></tr>
        <tr><td class="border border-slate-200 p-3">Recuperación</td><td class="border border-slate-200 p-3">Restaurar de copias, validar integridad, volver a servicio</td><td class="border border-slate-200 p-3">Responsable TI</td><td class="border border-slate-200 p-3">RTO ≤ 4 h</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Lecciones aprendidas</td><td class="border border-slate-200 p-3">Post-mortem sin culpa, mejoras, actualizar PIR</td><td class="border border-slate-200 p-3">Dirección + TI</td><td class="border border-slate-200 p-3">&lt; 7 días</td></tr>
    </tbody>
</table>

<h3>7.5. Continuidad de Negocio (simplificada)</h3>
<ul class="space-y-2 my-4">
    <li><strong>Procesos críticos:</strong> agenda de citas, historia clínica, cobro/TPV, correo.</li>
    <li><strong>Alternativas manuales:</strong> plantilla en papel para citas, historiales en PDF cifrado de último mes en cofre digital, teléfono corporativo alternativo.</li>
    <li><strong>Plan de comunicación:</strong> árbol de llamadas (director clínico → pacientes → mutuas → AEPD si procede).</li>
</ul>

<h3>7.6. Documentación a Entregar a la Empresa</h3>
<ol class="list-decimal pl-6 space-y-1 my-4">
    <li>Inventario de activos TI (actualizado).</li>
    <li>Topología de red y plan de direccionamiento.</li>
    <li>Matriz de reglas de firewall.</li>
    <li>Política de contraseñas y de uso aceptable.</li>
    <li>Procedimiento de copias y resultado del simulacro.</li>
    <li>PIR y lista de contactos.</li>
    <li>Registro de actividades de tratamiento (RAT) y evaluación de impacto (EIPD) resumida.</li>
    <li>Informe de KPI mensuales (plantilla).</li>
</ol>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de administración</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Procedimiento de parcheo documentado con ventanas y rollback.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> KPIs definidos con fuentes de datos y objetivos.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> PIR completo con roles y tiempos objetivo.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Simulacro de PIR (tabletop) ejecutado con acta.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Paquete de documentación para la empresa preparado.</li>
    </ul>
</div>
`;
