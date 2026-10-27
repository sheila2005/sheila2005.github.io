window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Estudio de Viabilidad del Proyecto</span>
    </div>
    <p>
        Un plan de ciberseguridad solo se justifica si es <strong>técnicamente desplegable, económicamente
        asumible y operativamente integrable</strong> en el día a día de la clínica. En esta sección
        analizamos las tres dimensiones y proponemos una priorización de controles según riesgo y coste.
    </p>
</div>

<h3>3.1. Viabilidad Técnica</h3>

<h4>3.1.1. Infraestructura Actual (Inventario de Activos)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Activo</th>
            <th class="border border-slate-200 p-3 text-left">Especificaciones</th>
            <th class="border border-slate-200 p-3 text-left">Estado</th>
            <th class="border border-slate-200 p-3 text-left">Riesgo asociado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Servidor de archivos (Torrent)</td>
            <td class="border border-slate-200 p-3">Windows Server 2016, Xeon, 16 GB RAM, 2×1 TB RAID1</td>
            <td class="border border-slate-200 p-3"><span class="text-amber-600 font-bold">⚠ SIN SOPORTE</span></td>
            <td class="border border-slate-200 p-3">Vulnerabilidades sin parchear</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Servidor AD / correo</td>
            <td class="border border-slate-200 p-3">Windows Server 2016, 8 GB RAM</td>
            <td class="border border-slate-200 p-3"><span class="text-amber-600 font-bold">⚠ SIN SOPORTE</span></td>
            <td class="border border-slate-200 p-3">AD comprometido = red comprometida</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">NAS copias</td>
            <td class="border border-slate-200 p-3">Synology DS220+, 2×4 TB RAID1</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">✓ Reutilizable</span></td>
            <td class="border border-slate-200 p-3">Sin copia externa ni cifrado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Puestos de trabajo</td>
            <td class="border border-slate-200 p-3">25 equipos Windows 10/11 (mixto)</td>
            <td class="border border-slate-200 p-3"><span class="text-amber-600 font-bold">⚠ MEZCLA DE VERSIONES</span></td>
            <td class="border border-slate-200 p-3">Sin EDR, sin GPO de seguridad</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Perímetro</td>
            <td class="border border-slate-200 p-3">Router ADSL operadora + switch no gestionado</td>
            <td class="border border-slate-200 p-3"><span class="text-red-600 font-bold">✗ INSUFICIENTE</span></td>
            <td class="border border-slate-200 p-3">Sin segmentación ni filtrado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Cámaras IP y TPV</td>
            <td class="border border-slate-200 p-3">8 cámaras + 3 TPV dentales</td>
            <td class="border border-slate-200 p-3"><span class="text-amber-600 font-bold">⚠ EN MISMA VLAN</span></td>
            <td class="border border-slate-200 p-3">Dispositivos IoT como puerta de entrada</td>
        </tr>
    </tbody>
</table>

<h4>3.1.2. Recursos Necesarios para el Despliegue</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Componente</th>
            <th class="border border-slate-200 p-3 text-left">Mínimo viable</th>
            <th class="border border-slate-200 p-3 text-left">Recomendado (3 sedes)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Firewall</td>
            <td class="border border-slate-200 p-3">PC de 2 núcleos + 4 GB, 2 NIC (pfSense)</td>
            <td class="border border-slate-200 p-3">Equipo comercial (pfSense/OPNsense) 4-6 puertos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Switch gestionado</td>
            <td class="border border-slate-200 p-3">8 puertos con VLAN (802.1Q)</td>
            <td class="border border-slate-200 p-3">24 puertos gestionado por sede</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Servidor logs / MFA</td>
            <td class="border border-slate-200 p-3">VM 2 vCPU / 4 GB / 80 GB</td>
            <td class="border border-slate-200 p-3">VM 4 vCPU / 8 GB / 200 GB</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Almacenamiento copias</td>
            <td class="border border-slate-200 p-3">NAS actual + disco externo</td>
            <td class="border border-slate-200 p-3">NAS actual + proveedor cloud cifrado (e.g. Backblaze)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Ancho de banda entre sedes</td>
            <td class="border border-slate-200 p-3">30 Mbps simétricos</td>
            <td class="border border-slate-200 p-3">Fibra 100-300 Mbps por sede</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Conclusión Viabilidad Técnica</span>
    </div>
    <p>
        El proyecto es <strong>técnicamente viable</strong> sin sustituir todo el parque informático.
        Los servidores y el NAS se reutilizan; la inversión se concentra en el perímetro (firewall y
        switches gestionados) y en una máquina virtual para servicios de seguridad. La condición clave
        es <strong>migrar o virtualizar los servidores Windows Server 2016</strong> (fuera de soporte)
        antes de endurecerlos.
    </p>
</div>

<h3>3.2. Viabilidad Económica</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Partida</th>
            <th class="border border-slate-200 p-3 text-left">Opción económica</th>
            <th class="border border-slate-200 p-3 text-left">Coste estimado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Firewall + switch gestionado</td>
            <td class="border border-slate-200 p-3">Hardware nuevo de gama media</td>
            <td class="border border-slate-200 p-3">900 – 1.500 €</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Licencia Windows Server</td>
            <td class="border border-slate-200 p-3">1 licencia Standard (virtualización)</td>
            <td class="border border-slate-200 p-3">800 – 1.200 €</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">EDR corporativo</td>
            <td class="border border-slate-200 p-3">Suscripción 25 endpoints (p.ej. ESET/Bitdefender)</td>
            <td class="border border-slate-200 p-3">750 – 1.200 €/año</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Cloud copias offsite</td>
            <td class="border border-slate-200 p-3">1 TB cifrado</td>
            <td class="border border-slate-200 p-3">100 – 200 €/año</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Herramientas open source</td>
            <td class="border border-slate-200 p-3">pfSense, Wazuh, Authentik, BorgBackup</td>
            <td class="border border-slate-200 p-3">0 € (licencia)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Formación del personal</td>
            <td class="border border-slate-200 p-3">2 sesiones + simulacros de phishing</td>
            <td class="border border-slate-200 p-3">500 – 1.000 €</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3"><strong>Inversión total estimada (año 1)</strong></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"><strong>≈ 3.050 – 5.100 €</strong></td>
        </tr>
    </tbody>
</table>

<h4>Análisis Coste-Beneficio</h4>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>💶</span>
        <span>Calcula el ROI tú mismo</span>
    </div>
    <p>
        El incidente de febrero costó <strong>18.400 €</strong> en pérdidas directas (sin contar la
        pérdida de confianza). Completa este razonamiento:
    </p>
    <ul>
        <li>Si la inversión anual es ~4.000 €, ¿en cuántas «catástrofes evitadas» se paga?</li>
        <li>Calcula la multa potencial de la AEPD por incumplimiento del art. 32 RGPD (busca un caso real).</li>
        <li>¿Qué ahorro supone eliminar las horas extra de «bomberos» que ahora dedica el informático a apagar fuegos?</li>
    </ul>
</div>
<p class="text-gray-400 italic bg-slate-50 p-4 rounded-lg border-2 border-dashed border-slate-200">
    [Escribe aquí tu cálculo de ROI con números concretos y tu conclusión]
</p>

<h3>3.3. Viabilidad Organizativa</h3>
<ul class="space-y-3 my-4">
    <li><strong>Impacto en la actividad:</strong> el despliegue debe hacerse por fases y fuera del horario de mayor afluencia de pacientes (sábados por la tarde o vacaciones).</li>
    <li><strong>Formación necesaria:</strong> el personal administrativo necesita 2-3 horas de formación en higiene digital; los odontólogos, 1 hora centrada en el manejo seguro de la historia clínica.</li>
    <li><strong>Resistencia al cambio:</strong> la prohibición de USB y el MFA generan fricción inicial; se recomienda comunicar el «por qué» con el caso del febrero como referencia.</li>
    <li><strong>Soporte externo:</strong> definir si se contrata un MSP para la monitorización 24×7 o si se mantiene el soporte interno con alertas automáticas.</li>
</ul>

<h3>3.4. Matriz de Priorización (Riesgo × Coste)</h3>
<p>
    Ordena los controles en el cuadrante que consideres. Ejemplo de partida (adáptalo tras tu análisis):
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Control</th>
            <th class="border border-slate-200 p-3 text-left">Reducción de riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Coste</th>
            <th class="border border-slate-200 p-3 text-left">Prioridad</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Firewall + segmentación VLAN</td><td class="border border-slate-200 p-3">Alta</td><td class="border border-slate-200 p-3">Medio</td><td class="border border-slate-200 p-3">P1</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Copias 3-2-1 con prueba de restauración</td><td class="border border-slate-200 p-3">Muy alta</td><td class="border border-slate-200 p-3">Bajo</td><td class="border border-slate-200 p-3">P1</td></tr>
        <tr><td class="border border-slate-200 p-3">MFA en accesos sensibles</td><td class="border border-slate-200 p-3">Alta</td><td class="border border-slate-200 p-3">Bajo</td><td class="border border-slate-200 p-3">P1</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Actualización / fin de vida Server 2016</td><td class="border border-slate-200 p-3">Muy alta</td><td class="border border-slate-200 p-3">Medio</td><td class="border border-slate-200 p-3">P2</td></tr>
        <tr><td class="border border-slate-200 p-3">EDR en endpoints</td><td class="border border-slate-200 p-3">Alta</td><td class="border border-slate-200 p-3">Medio</td><td class="border border-slate-200 p-3">P2</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">SIEM / Wazuh</td><td class="border border-slate-200 p-3">Media</td><td class="border border-slate-200 p-3">Bajo</td><td class="border border-slate-200 p-3">P3</td></tr>
        <tr><td class="border border-slate-200 p-3">Formación anti-phishing</td><td class="border border-slate-200 p-3">Alta</td><td class="border border-slate-200 p-3">Bajo</td><td class="border border-slate-200 p-3">P2</td></tr>
    </tbody>
</table>

<div class="mt-6 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
    <h4 class="text-white font-bold mb-4 flex items-center gap-2"><span>⭐</span> Checklist de viabilidad</h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He inventariado los activos con estado y riesgo.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He estimado el presupuesto y calculado un ROI argumentado.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He considerado el impacto organizativo y la formación.</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> He priorizado los controles con una matriz de riesgo.</li>
    </ul>
</div>
`;
