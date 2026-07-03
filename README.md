# Café Arábica - Landing Page

Una elegante landing page para Café Arábica, con menú interactivo de cafés de especialidad, galería fotográfica en carrusel y localización con Google Maps.

## Requisitos Previos

Para ejecutar este proyecto en tu entorno local, necesitas tener instalado:
- **Node.js** (versión 18 o superior recomendada).
- **npm** (gestor de paquetes de Node.js).

---

## Despliegue y Ejecución Local

Tienes dos opciones para ejecutar y compilar este proyecto localmente:

### Opción 1: Utilizando los scripts incluidos (Recomendado)

El proyecto cuenta con scripts de terminal preconfigurados que utilizan una versión local de Node.js encapsulada en la carpeta `.node/`.

1. **Iniciar servidor de desarrollo (Localhost):**
   Ejecuta el script de desarrollo para iniciar el servidor local:
   ```bash
   ./run-dev.sh
   ```
   *Esto iniciará la aplicación de desarrollo, típicamente en [http://localhost:3001/](http://localhost:3001/).*

2. **Compilar la aplicación para producción:**
   Si deseas construir el bundle estático optimizado en la carpeta `dist/`, ejecuta:
   ```bash
   ./run-build.sh
   ```

---

### Opción 2: Comandos npm Estándar (Global)

Si prefieres utilizar tu propia instalación global de Node.js y npm, puedes ejecutar los comandos habituales directamente en la terminal:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Abre la dirección indicada en la terminal (usualmente [http://localhost:3000](http://localhost:3000)) en tu navegador.*

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

4. **Previsualizar la compilación de producción:**
   ```bash
   npm run preview
   ```

---

## Tecnologías Utilizadas

- **Framework principal:** React + TypeScript
- **Herramienta de construcción:** Vite
- **Animaciones:** Framer Motion / Motion
- **Iconografía:** Lucide React
- **Estilos:** CSS Vanilla
