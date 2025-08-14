# Configuración de Google Sheets para el Formulario de Registro

## Paso 1: Crear la Hoja de Cálculo

1. Ve a [Google Sheets](https://sheets.google.com)
2. Crea una nueva hoja de cálculo
3. Nómbrala: "Registro Jornada Cuántica 2025"
4. En la primera fila, agrega estos encabezados:
   - A1: `Nombre Completo`
   - B1: `Correo Electrónico`
   - C1: `Institución`
   - D1: `Teléfono`
   - E1: `Comentarios`
   - F1: `Fecha de Registro`

## Paso 2: Compartir con el Email del Evento

1. Haz clic en "Compartir" (botón azul en la esquina superior derecha)
2. Agrega el email: `jornadacienciatecnocuantica@gmail.com`
3. Asigna permisos de "Editor"
4. Haz clic en "Enviar"

## Paso 3: Crear el Google Apps Script

1. En la hoja de cálculo, ve a `Extensiones` > `Apps Script`
2. Borra el código existente y pega el siguiente código:

```javascript
function doPost(e) {
  try {
    // Obtener la hoja de cálculo
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parsear los datos recibidos
    const data = JSON.parse(e.postData.contents);
    
    // Agregar una nueva fila con los datos
    sheet.appendRow([
      data.nombre,
      data.correo,
      data.institucion,
      data.telefono,
      data.comentarios,
      data.fecha_registro
    ]);
    
    // Respuesta exitosa
    return ContentService
      .createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Respuesta de error
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'ready'}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto con el nombre: "Registro Jornada Cuántica"

## Paso 4: Desplegar el Script

1. Haz clic en "Desplegar" > "Nueva implementación"
2. En "Tipo", selecciona "Aplicación web"
3. En "Descripción", escribe: "API para registro de asistentes"
4. En "Ejecutar como", selecciona "Yo"
5. En "Quién puede acceder", selecciona "Cualquier persona"
6. Haz clic en "Desplegar"
7. **IMPORTANTE**: Copia la URL que aparece (algo como: `https://script.google.com/macros/s/AKfycbx.../exec`)

## Paso 5: Actualizar el Código del Sitio Web

Reemplaza la URL en el archivo `js/main.js` línea 280:

```javascript
// Cambiar esta línea:
fetch('https://script.google.com/macros/s/AKfycbxYourScriptIdHere/exec', {

// Por tu URL real:
fetch('https://script.google.com/macros/s/TU_URL_AQUI/exec', {
```

## Paso 6: Configurar Notificaciones (Opcional)

Para recibir notificaciones por email cuando alguien se registre:

1. En Google Sheets, ve a `Extensiones` > `Apps Script`
2. Agrega esta función al código existente:

```javascript
function enviarNotificacion(data) {
  const destinatario = 'jornadacienciatecnocuantica@gmail.com';
  const asunto = 'Nuevo registro - Jornada Cuántica 2025';
  const mensaje = `
    Nuevo registro recibido:
    
    Nombre: ${data.nombre}
    Email: ${data.correo}
    Institución: ${data.institucion}
    Teléfono: ${data.telefono}
    Comentarios: ${data.comentarios}
    Fecha: ${data.fecha_registro}
  `;
  
  GmailApp.sendEmail(destinatario, asunto, mensaje);
}
```

3. Modifica la función `doPost` para incluir la notificación:

```javascript
// Después de sheet.appendRow([...]), agregar:
enviarNotificacion(data);
```

## Verificación

1. Una vez configurado todo, puedes probar el formulario en el sitio web
2. Los datos deberían aparecer automáticamente en la hoja de cálculo
3. Si configuraste las notificaciones, recibirás un email por cada registro

## Acceso a los Datos

La cuenta `jornadacienciatecnocuantica@gmail.com` tendrá acceso completo para:
- Ver todos los registros
- Exportar datos a Excel/PDF
- Crear gráficos y análisis
- Filtrar y ordenar información

## Seguridad

- Los datos se almacenan de forma segura en Google Sheets
- Solo las personas con acceso explícito pueden ver la información
- El script está configurado para aceptar solo los campos esperados
- Se registra la fecha y hora de cada inscripción automáticamente