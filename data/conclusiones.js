window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.conclusiones = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span>
        <span>Conclusiones – Guía de Redacción</span>
    </div>
    <p>
        Las conclusiones no son un resumen: son <strong>tu valoración crítica</strong> como técnico/a.
        ¿Se cumplieron los objetivos? ¿Qué riesgos quedan? ¿Qué harías distinto? Esta sección la
        redactas tú con base en tu propia implementación y en los resultados de los simulacros.
    </p>
</div>

<h3>9.1. Evaluación del Cumplimiento de Objetivos</h3>
<p>Completa esta tabla con evidencias de tu proyecto:</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Objetivo SMART</th>
            <th class="border border-slate-200 p-3 text-left">¿Cumplido?</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Segmentar en ≥4 VLANs con aislamiento verificado</td>
            <td class="border border-slate-200 p-3">Sí / Parcial / No</td>
            <td class="border border-slate-200 p-3">[capturas de pruebas]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">MFA al 100% en cuentas con acceso clínico</td>
            <td class="border border-slate-200 p-3">Sí / Parcial / No</td>
            <td class="border border-slate-200 p-3">[informe de grupos AD]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Copias 3-2-1 con RPO≤24h y RTO≤4h</td>
            <td class="border border-slate-200 p-3">Sí / Parcial / No</td>
            <td class="border border-slate-200 p-3">[acta de restauración]</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Alertas de seguridad en &lt;5 min</td>
            <td class="border border-slate-200 p-3">Sí / Parcial / No</td>
            <td class="border border-slate-200 p-3">[capturas Wazuh + correo]</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Reducir clics en phishing a &lt;10%</td>
            <td class="border border-slate-200 p-3">Sí / Parcial / No</td>
            <td class="border border-slate-200 p-3">[informe de campaña]</td>
        </tr>
    </tbody>
</table>

<h3>9.2. Análisis de Riesgos Residuales</h3>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Ninguna seguridad es absoluta</span>
    </div>
    <p>
        Identifica al menos <strong>3 riesgos que siguen presentes</strong> tras tu despliegue
        (humanos, técnicos o de terceros) y propón un control adicional o una aceptación justificada
        para cada uno.
    </p>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Riesgo 1 – descripción, impacto residual, tratamiento propuesto]<br>
    [Riesgo 2 – ...]<br>
    [Riesgo 3 – ...]
</p>

<h3>9.3. Lecciones Aprendidas</h3>
<ul class="space-y-2 my-4">
    <li><strong>Lo que ha salido bien:</strong> [describe técnicas, herramientas o decisiones que funcionaron].</li>
    <li><strong>Lo que ha salido mal:</strong> [errores, sorpresas, tiempos subestimados].</li>
    <li><strong>Lo que aprenderías:</strong> [si repitieras el proyecto, ¿qué harías primero o distinto?].</li>
</ul>

<h3>9.4. Propuesta de Evolución</h3>
<p>Mira hacia adelante. Ejemplos de líneas de evolución para Sonrisa Valenciana:</p>
<ul class="list-disc pl-6 space-y-1 my-4">
    <li>Certificación en <strong>ISO 27001</strong> o adhesión al <strong>ENS nivel medio</strong> como diferencial comercial.</li>
    <li>Implantación de <strong>XDR gestionado</strong> con proveedor local para cobertura 24×7.</li>
    <li><strong>Zero Trust completo:</strong> acceso por identidad y dispositivo, microsegmentación por aplicación.</li>
    <li><strong>Automatización de respuesta</strong> (SOAR ligero) para contención de endpoints en minutos.</li>
    <li><strong>Integración con el historial clínico cloud</strong> bajo cifrado de extremo a extremo y HDS/cloud sanitario certificado.</li>
</ul>

<h3>9.5. Valoración Personal y Competencias</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>🪞</span>
        <span>Autoevaluación reflexiva</span>
    </div>
    <p>Responde con honestidad (tu tutor/a valorará la coherencia, no la perfección):</p>
    <ul>
        <li>¿Qué competencia de SMR has reforzado más (redes, sistemas, seguridad, documentación)?</li>
        <li>¿Cómo has trabajado en equipo (roles, reparto, comunicación)?</li>
        <li>¿Cómo ha influido este proyecto en tu interés por la ciberseguridad como salida profesional?</li>
        <li>¿Qué mensaje le darías a una pyme que todavía cree que «a nosotros no nos va a pasar»?</li>
    </ul>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Redacta aquí tu conclusión final – 1 página, en primera persona, con datos de tu proyecto]
</p>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de conclusiones</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He evaluado cada objetivo con evidencias.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He identificado riesgos residuales y su tratamiento.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He redactado lecciones aprendidas honestas.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He propuesto líneas de evolución realistas.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> Mi valoración personal es específica y creíble.</li>
    </ul>
</div>
`;
