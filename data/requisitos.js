window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.requisitos = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos – Guía</span>
    </div>
    <p>
        Un buen plan de ciberseguridad empieza por <strong>definir qué se espera del sistema</strong>.
        En esta sección elaborarás el catálogo de requisitos funcionales y no funcionales del proyecto
        «Escudo Digital», usando verbos de acción y criterios de aceptación medibles.
    </p>
</div>

<h3>4.1. Requisitos Funcionales</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>✏️</span>
        <span>Cómo redactar un requisito funcional</span>
    </div>
    <p>
        Usa la estructura: <strong>El sistema DEBERÁ + [verbo de acción] + [objeto] + [condición]</strong>.
        Ejemplo: «El sistema deberá bloquear el acceso a Internet a la VLAN de invitados hacia las
        VLANs internas de datos clínicos».
    </p>
</div>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Criterio de aceptación</th>
            <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">RF-01</td>
            <td class="border border-slate-200 p-3">El sistema deberá segmentar la red en VLANs: CLINICA, ADMIN, INVITADOS e IOT.</td>
            <td class="border border-slate-200 p-3">Prueba de aislamiento: un equipo en INVITADOS no debe hacer ping a un equipo en CLINICA.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-02</td>
            <td class="border border-slate-200 p-3">El firewall deberá filtrar el tráfico entre VLANs según matriz de flujos autorizados.</td>
            <td class="border border-slate-200 p-3">Solo los puertos necesarios (p.ej. 443 a la agenda) están abiertos; el resto denegados con log.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-03</td>
            <td class="border border-slate-200 p-3">El sistema deberá exigir MFA a los usuarios con acceso a historia clínica y correo.</td>
            <td class="border border-slate-200 p-3">El 100% de las cuentas del grupo «Clinical-Access» requieren segundo factor.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-04</td>
            <td class="border border-slate-200 p-3">El sistema deberá generar copias de seguridad diarias cifradas con copia offsite.</td>
            <td class="border border-slate-200 p-3">RPO ≤ 24 h; al menos una copia externa verificable por hash.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-05</td>
            <td class="border border-slate-200 p-3">El sistema deberá registrar eventos de seguridad (login fallido, cambio de política, alerta EDR).</td>
            <td class="border border-slate-200 p-3">Los eventos aparecen en el visor de logs en &lt;5 minutos.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-06</td>
            <td class="border border-slate-200 p-3">El sistema deberá bloquear el uso de dispositivos USB de almacenamiento en puestos administrativos.</td>
            <td class="border border-slate-200 p-3">GPO aplicada; prueba con USB en 5 puestos diferentes.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">RF-07</td>
            <td class="border border-slate-200 p-3">El sistema deberá permitir el acceso VPN cifrado a personal autorizado fuera de la clínica.</td>
            <td class="border border-slate-200 p-3">Conexión desde 4G con autenticación fuerte; tráfico limitado a recursos autorizados.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">RF-08</td>
            <td class="border border-slate-200 p-3">El plan de respuesta a incidentes deberá definir roles, escalado y comunicación.</td>
            <td class="border border-slate-200 p-3">Documento aprobado y simulacro ejecutado con acta.</td>
            <td class="border border-slate-200 p-3">M</td>
        </tr>
    </tbody>
</table>

<h3>4.2. Requisitos No Funcionales</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Categoría</th>
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Métrica</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Disponibilidad</td>
            <td class="border border-slate-200 p-3">Los servicios clínicos deben estar disponibles en horario de apertura.</td>
            <td class="border border-slate-200 p-3">≥ 99,5% en horario 8:00-20:00</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Rendimiento</td>
            <td class="border border-slate-200 p-3">El filtrado del firewall no debe perceptiblemente degradar la agenda online.</td>
            <td class="border border-slate-200 p-3">Latencia añadida &lt; 5 ms intra-VLAN</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Recuperación</td>
            <td class="border border-slate-200 p-3">Restauración completa del servidor de archivos tras un cifrado total.</td>
            <td class="border border-slate-200 p-3">RTO ≤ 4 h, RPO ≤ 24 h</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Seguridad</td>
            <td class="border border-slate-200 p-3">Cifrado de datos en reposo y en tránsito para información clínica.</td>
            <td class="border border-slate-200 p-3">TLS 1.2+ / SMB3; BitLocker o equivalent</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Usabilidad</td>
            <td class="border border-slate-200 p-3">El MFA no debe añadir más de 15 segundos al inicio de sesión habitual.</td>
            <td class="border border-slate-200 p-3">Encuesta post-despliegue ≥ 7/10</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Trazabilidad</td>
            <td class="border border-slate-200 p-3">Retención de logs de seguridad.</td>
            <td class="border border-slate-200 p-3">≥ 90 días online, 1 año en archivo</td>
        </tr>
    </tbody>
</table>

<h3>4.3. Restricciones y Supuestos</h3>
<ul class="space-y-2 my-4">
    <li><strong>Restricción presupuestaria:</strong> inversión inicial &lt; 5.500 € (sin contar horas de trabajo del alumnado).</li>
    <li><strong>Restricción de ventana de mantenimiento:</strong> los cambios críticos solo fuera de horario clínico.</li>
    <li><strong>Restricción legal:</strong> ninguna medida puede impedir la atención de urgencias (historial accesible en &lt; 30 s).</li>
    <li><strong>Supuesto:</strong> se dispone de una máquina de laboratorio con virtualización para pruebas previas.</li>
    <li><strong>Supuesto:</strong> la operadora permite configurar IP pública estática para VPN y filtrado.</li>
</ul>

<h3>4.4. Matriz de Trazabilidad (Ejemplo)</h3>
<p>
    Relaciona cada requisito con el módulo de SMR que lo cubre y con la sección del proyecto donde se
    implementará. Completa las celdas vacías:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Módulo(s) SMR</th>
            <th class="border border-slate-200 p-3 text-left">Sección proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">RF-01</td><td class="border border-slate-200 p-3">Redes Locales y Seguridad</td><td class="border border-slate-200 p-3">5.1 / 6.1</td><td class="border border-slate-200 p-3">Prueba de aislamiento</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-03</td><td class="border border-slate-200 p-3">Administración de Sistemas</td><td class="border border-slate-200 p-3">5.3 / 6.3</td><td class="border border-slate-200 p-3">Auditoría de cuentas</td></tr>
        <tr><td class="border border-slate-200 p-3">RF-04</td><td class="border border-slate-200 p-3">Servicios de Red / SGBD</td><td class="border border-slate-200 p-3">5.4 / 6.4</td><td class="border border-slate-200 p-3">Simulacro de restauración</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-05</td><td class="border border-slate-200 p-3">Instalación y Administración de Sistemas</td><td class="border border-slate-200 p-3">5.5 / 6.5</td><td class="border border-slate-200 p-3">Captura de alertas</td></tr>
    </tbody>
</table>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de requisitos</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He redactado al menos 8 requisitos funcionales con criterios medibles.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He cubierto disponibilidad, recuperación, seguridad y usabilidad.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He definido restricciones y supuestos explícitos.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He completado la matriz de trazabilidad.</li>
    </ul>
</div>
`;
