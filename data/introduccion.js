window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción al Proyecto</span>
    </div>
    <p>
        La ciberseguridad en el sector sanitario y sanitario-privado ha dejado de ser un lujo
        tecnológico para convertirse en una <strong>obligación legal y de negocio</strong>. Las clínicas
        dentales tratan categorías especiales de datos (historiales, radiografías, consentimientos),
        y un ciberataque no solo paraliza la actividad, sino que expone a sanciones del RGPD.
        Este proyecto te sitúa ante un <strong>reto real de enderezamiento de la seguridad</strong>:
        reconstruir el perímetro, endurecer las identidades y demostrar que el sistema es capaz de
        resistir, detectar y recuperarse.
    </p>
</div>

<h3>1.1. Motivación del Proyecto</h3>
<p>
    <strong>Clínicas Dentales Sonrisa Valenciana S.L.</strong> opera tres centros (Torrent, Paterna
    y Gandía) con <strong>34 empleados</strong> y un parque informático de <strong>25 puestos de
    trabajo</strong>, dos servidores Windows Server y un NAS. En febrero de 2025, un auxiliar
    administrativo abrió un correo suplantando a la mutua y descargó un adjunto malicioso. En menos
    de 40 minutos, el ransomware cifró el servidor de archivos y la base de datos de la historia
    clínica. El resultado fue:
</p>
<ul class="space-y-2 my-4">
    <li><strong>Seis días de parón</strong> de la agenda de las tres clínicas.</li>
    <li><strong>Pérdidas directas de 18.400 €</strong> (citas anuladas, personal parado, pago del servicio de respuesta).</li>
    <li><strong>Notificación de brecha a la AEPD</strong> y a 1.200 pacientes como medida de transparencia.</li>
    <li><strong>Exposición mediática local</strong> y pérdida de confianza de parte de la cartera.</li>
</ul>

<h3>1.2. La Empresa: Clínicas Dentales Sonrisa Valenciana S.L.</h3>
<div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 mb-6">
    <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl">🏢</span>
        <h4 class="text-lg font-bold m-0 p-0 border-none">Ficha de la Empresa</h4>
    </div>
    <table class="w-full border-collapse my-2">
        <tbody>
            <tr>
                <td class="border border-slate-200 p-3 font-bold w-48">Razón social</td>
                <td class="border border-slate-200 p-3">Clínicas Dentales Sonrisa Valenciana S.L.</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-200 p-3 font-bold">Sector</td>
                <td class="border border-slate-200 p-3">Sanitario privado – Odontología y ortodoncia</td>
            </tr>
            <tr>
                <td class="border border-slate-200 p-3 font-bold">Sede central</td>
                <td class="border border-slate-200 p-3">Av. al Vedat 112, Torrent (Valencia)</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-200 p-3 font-bold">Centros</td>
                <td class="border border-slate-200 p-3">Torrent, Paterna y Gandía</td>
            </tr>
            <tr>
                <td class="border border-slate-200 p-3 font-bold">Plantilla</td>
                <td class="border border-slate-200 p-3">34 personas (7 odontólogos, 12 higienistas, 15 administrativos)</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-200 p-3 font-bold">Facturación</td>
                <td class="border border-slate-200 p-3">2,1 millones de euros anuales</td>
            </tr>
            <tr>
                <td class="border border-slate-200 p-3 font-bold">Pacientes activos</td>
                <td class="border border-slate-200 p-3">8.500 historiales clínicos electrónicos</td>
            </tr>
            <tr class="bg-slate-50">
                <td class="border border-slate-200 p-3 font-bold">Infraestructura TI</td>
                <td class="border border-slate-200 p-3">2× Windows Server 2016, 25× Windows 10/11, 1× NAS Synology, router ADSL sin reglas</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🔍</span>
        <span>Investiga un poco</span>
    </div>
    <p>
        Busca en Internet informes recientes de INCIBE-CERT o del ENISA sobre incidentes en clínicas
        privadas. ¿Qué vectores de ataque se repiten? ¿Qué sanciones ha impuesto la AEPD por
        incumplimiento del RGPD en centros de salud? Añade esos datos a tu memoria para dar
        credibilidad al escenario.
    </p>
</div>

<h3>1.3. Situación Actual</h3>
<p>
    La red actual es plana: todos los equipos (clínicas, administración, invitados e incluso las
    cámaras IP) comparten el mismo segmento 192.168.1.0/24. El router de la compañía no realiza
    filtrado por destino ni inspección de tráfico. Las copias de seguridad se hacen cada noche en un
    NAS colgado de la misma red, sin copia externa ni cifrado. Los usuarios inician sesión con
    cuentas de administrador local y contraseñas de 6 caracteres reutilizadas. No existe registro
    centralizado de eventos ni monitorización de seguridad.
</p>

<div class="callout callout-error my-8">
    <div class="callout-title">
        <span>🔥</span>
        <span>¡Tenemos un problema!</span>
    </div>
    <p class="font-bold mb-2">Lo que está fallando:</p>
    <p class="text-sm opacity-90">
        Sin segmentación, un malware en un puesto de la recepción puede moverse lateralmente hasta el
        servidor de historia clínica en minutos. Sin MFA, una credencial filtrada basta para acceder
        al correo y a la agenda desde cualquier lugar. Sin copia externa, un segundo ataque eliminaría
        la posibilidad de recuperación. La empresa está operando con un riesgo intolerable.
    </p>
    <hr class="my-3 border-red-200 opacity-30">
    <p class="text-xs italic">
        ¿Qué pasa si no actuamos? ¿Otra vez un ransomware? ¿Una inspección de la AEPD? ¿La pérdida
        total de la historia clínica?
    </p>
</div>

<h3>1.4. Objetivos del Proyecto (SMART)</h3>
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Apunta y dispara</span>
    </div>
    <p>
        Define objetivos <strong>específicos, medibles, alcanzables, relevantes y con plazo</strong>.
        Estos son los que se proponen; adapta o amplía los tuyos según tu despliegue:
    </p>
</div>
<ul class="space-y-3 mt-4">
    <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span class="text-green-500 font-bold">✓</span>
        <span class="text-slate-700"><strong>Segmentar la red en al menos 4 VLANs</strong> (clínica, administración, invitados, IoT) con firewall entre ellas, verificado con pruebas de aislamiento antes del día 30.</span>
    </li>
    <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span class="text-green-500 font-bold">✓</span>
        <span class="text-slate-700"><strong>Activar MFA en el 100% de las cuentas con acceso a historia clínica</strong> y reducir a cero el uso de cuentas de administrador para tareas cotidianas.</span>
    </li>
    <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span class="text-green-500 font-bold">✓</span>
        <span class="text-slate-700"><strong>Implantar copias 3-2-1</strong> con RPO ≤ 24 h y RTO ≤ 4 h, demostradas con un simulacro de restauración completo documentado.</span>
    </li>
    <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span class="text-green-500 font-bold">✓</span>
        <span class="text-slate-700"><strong>Desplegar monitorización de logs</strong> con alertas de seguridad en menos de 5 minutos tras un evento crítico simulado.</span>
    </li>
    <li class="flex items-start gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
        <span class="text-green-500 font-bold">✓</span>
        <span class="text-slate-700"><strong>Reducir la tasa de clics en simulacros de phishing</strong> del 35% inicial al &lt;10% tras la formación, medido con campañas de prueba.</span>
    </li>
</ul>

<h3>1.5. Preguntas Clave que Aclara el Proyecto</h3>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li>¿Cómo se protege el perímetro de una red sanitaria pequeña con presupuesto limitado?</li>
    <li>¿Qué controles del ENS/ISO 27001 son aplicables a una pyme sanitaria privada?</li>
    <li>¿Cómo se demuestra ante la AEPD que se han tomado medidas técnicas y organizativas adecuadas?</li>
</ul>

<div class="mt-12 p-6 bg-slate-900 rounded-2xl text-white shadow-xl relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 text-6xl rotate-12">🏆</div>
    <h4 class="text-white font-bold mb-4 flex items-center gap-2">
        <span>⭐</span> Lista de verificación final de la introducción
    </h4>
    <ul class="space-y-2 text-sm text-slate-300">
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿He presentado la empresa con datos concretos y creíbles?</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿He cuantificado el impacto del incidente (tiempo, dinero, riesgo legal)?</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Mis objetivos son medibles y tienen plazo?</li>
        <li class="flex items-center gap-2"><input type="checkbox" class="rounded"> ¿Se entiende por qué el proyecto es urgente?</li>
    </ul>
</div>
`;
